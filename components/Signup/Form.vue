<template>
  <n-form ref="formRef" :model="model" :rules="rules">
    <n-form-item path="username" label="Username">
      <n-input v-model:value="model.username" @keydown.enter.prevent />
    </n-form-item>
    <n-form-item path="email" label="Email">
      <n-input v-model:value="model.email" @keydown.enter.prevent />
    </n-form-item>
    <n-form-item path="password" label="Password">
      <n-input
        v-model:value="model.password"
        type="password"
        @input="handlePasswordInput"
        @keydown.enter.prevent
      />
    </n-form-item>
    <n-form-item
      ref="rPasswordFormItemRef"
      first
      path="reenteredPassword"
      label="Re-enter Password"
    >
      <n-input
        v-model:value="model.reenteredPassword"
        :disabled="!model.password"
        type="password"
        @keydown.enter.prevent
      />
    </n-form-item>
    <n-flex justify="center">
      <n-button
        :disabled="model.username === null"
        type="primary"
        size="large"
        @click="handleValidateButtonClick"
      >
        Continue
      </n-button>
    </n-flex>
  </n-form>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import type {
  FormInst,
  FormItemInst,
  FormItemRule,
  FormRules,
  FormValidationError,
  MessageProviderProps
} from 'naive-ui'
import { useMessage } from 'naive-ui'

interface ModelType {
  email: string | null
  username: string | null
  password: string | null
  reenteredPassword: string | null
}

export default defineComponent({
  setup() {
    const formRef = ref<FormInst | null>(null)
    const rPasswordFormItemRef = ref<FormItemInst | null>(null)
    const message = useMessage()
    const modelRef = ref<ModelType>({
      email: null,
      username: null,
      password: null,
      reenteredPassword: null
    })
    function validatePasswordStartWith(
      rule: FormItemRule,
      value: string
    ): boolean {
      return (
        !!modelRef.value.password
        && modelRef.value.password.startsWith(value)
        && modelRef.value.password.length >= value.length
      )
    }
    function validatePasswordSame(rule: FormItemRule, value: string): boolean {
      return value === modelRef.value.password
    }
    const rules: FormRules = {
      username: [
        {
          required: true,
          validator(rule: FormItemRule, value: string) {
            if (!value) {
              return new Error('Username is required')
            }
            return true
          },
          trigger: ['input', 'blur']
        }
      ],
      email: [
        {
          required: true,
          validator(rule: FormItemRule, value: string) {
            if (!value) {
              return new Error('Email is required')
            }
            return true
          },
          trigger: ['input', 'blur']
        }
      ],
      password: [
        {
          required: true,
          message: 'Password is required'
        }
      ],
      reenteredPassword: [
        {
          required: true,
          message: 'Re-entered password is required',
          trigger: ['input', 'blur']
        },
        {
          validator: validatePasswordStartWith,
          message: 'Password is not same as re-entered password!',
          trigger: 'input'
        },
        {
          validator: validatePasswordSame,
          message: 'Password is not same as re-entered password!',
          trigger: ['blur', 'password-input']
        }
      ]
    }
    return {
      formRef,
      rPasswordFormItemRef,
      model: modelRef,
      rules,
      handlePasswordInput() {
        if (modelRef.value.reenteredPassword) {
          rPasswordFormItemRef.value?.validate({ trigger: 'password-input' })
        }
      },
      handleValidateButtonClick(e: MouseEvent) {
        e.preventDefault()
        formRef.value?.validate(
          async (errors: Array<FormValidationError> | undefined) => {
            if (!errors) {
              const auth_data = await $fetch("/api/auth/login/", {
                method: 'POST',
                body: {
                  username: modelRef.value.username,
                  email: modelRef.value.email,
                  password: modelRef.value.password,
                },
                ignoreResponseError: true
              })

              if(auth_data && 'access' in auth_data){
                const access = useCookie('my-app-auth')
                access.value = auth_data.access
                const refresh = useCookie('my-app-refresh')
                refresh.value = auth_data.refresh
                await nextTick();
                navigateTo("/profile");
              }else{
                const error: string = auth_data?.non_field_errors ? "Invalid credentials" : "Enter a valid email address"
                message.error(error)
              }

            }
            else {
              console.log(errors)
            }
          }
        )
      }
    }
  }
})
</script>