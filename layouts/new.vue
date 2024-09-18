<script setup lang="ts">
import { 
    Menu as MenuIcon, 
    PersonOutline as PersonOutlineIcon, 
    SettingsSharp as SettingsSharpIcon,
    SunnyOutline as LightThemeIcon,
    Moon as DarkThemeIcon, 
} from '@vicons/ionicons5'
import { darkTheme } from 'naive-ui'
import type { GlobalTheme } from 'naive-ui'


const active = ref(false)


const theme = ref<GlobalTheme | null>(null)

const toggleHeader = () => {
    active.value = !active.value
}

const goToLogin = () => {
    navigateTo('/login')
}

const handleChangeTheme = (value: string) => {
    if(value == 'dark'){
        theme.value = darkTheme
    }
    
    else if(value == 'light'){
        theme.value = null
    }
}




</script>

<template>
    <n-layout class="max-h-dvh h-dvh">
        <n-config-provider :theme="theme">
        <n-drawer v-model:show="active" :width="502" placement="left" :block-scroll="false">
            <n-drawer-content title="Stoner">
            Stoner is a 1965 novel by the American writer John Williams.
            </n-drawer-content>
        </n-drawer>
        <n-layout-header style="height: 64px; padding: 20px" bordered>
          <n-flex justify="space-between">
                    <n-flex justify="center" class="pl-6">
                        <n-button text style="font-size: 24px" @click="toggleHeader">
                            <n-icon>
                                <MenuIcon/>
                            </n-icon>
                        </n-button>
                    </n-flex>
                    <n-flex justify="center" size="large" class="pr-6">
                        <n-button text style="font-size: 24px" @click="goToLogin">
                            <n-tooltip trigger="hover">
                                <template #trigger>
                                    <n-icon>
                                        <PersonOutlineIcon/>
                                    </n-icon>
                                </template>
                                Login
                            </n-tooltip>
                        </n-button>
                        <n-button text style="font-size: 24px" @click="toggleHeader">
                            <n-tooltip trigger="hover">
                                <template #trigger>
                                    <n-icon>
                                        <SettingsSharpIcon/>
                                    </n-icon>
                                </template>
                                Settings
                            </n-tooltip>
                        </n-button>
                        <n-tooltip trigger="hover">
                            <template #trigger>
                                <n-switch size="large"
                                    checked-value="dark"
                                    unchecked-value="light"
                                    @update:value="handleChangeTheme"
                                >
                                    <template #checked-icon>
                                        <n-icon :component="DarkThemeIcon" />
                                    </template>
                                    <template #unchecked-icon>
                                        <n-icon :component="LightThemeIcon" />
                                    </template>
                                </n-switch>
                            </template>
                            Switch Theme to {{ theme ? 'Light' : 'Dark' }}
                        </n-tooltip>
                    </n-flex>
                </n-flex>
            </n-layout-header>
        <n-layout position="absolute" style="top: 64px; bottom: 64px" has-sider class="h-full">
        <slot></slot>
      </n-layout>
        </n-config-provider>
    </n-layout>
  </template>