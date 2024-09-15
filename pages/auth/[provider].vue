<script setup lang="ts">
const route = useRoute()

const { getUrlParams } = useUrlParams('http:localhost:3000' + route.fullPath);
const params = getUrlParams();

const provider = useRoute().params.provider

const{ data: auth_data, status: status } = await useLazyFetch<UserJWTData>(`/api/oauth/${provider}?code=${params.code}`)
console.log(params) 

const auth_token = useCookie('my-app-auth')
const auth_refresh = useCookie('my-app-refresh')
console.log(auth_data)
if (auth_data) {
    auth_token.value = auth_data.value?.access
    auth_refresh.value = auth_data.value?.refresh
    await nextTick()
    navigateTo('/profile')
} else {
    console.error('auth_data.value is null or undefined');
}
</script>

<template>
    <div v-if="status == 'pending'">
        <n-space justify="center">
            <n-spin size="large" />
        </n-space>
]    </div>
</template>