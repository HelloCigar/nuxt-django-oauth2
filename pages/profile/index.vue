<script setup lang="ts">
const headers = useRequestHeaders(['cookie']) as HeadersInit

const { data: user_data, status: status } = await useIFetch<UserData>("/api/auth/user/")
const { data: extra } = await useIFetch<GoogleExtraData>("/api/auth/google/extra/")

</script>

<template>
    <n-flex justify="center" class="w-9/12 p-24" >
        <n-flex v-if="user_data" vertical align="center">
            <n-avatar
                round
                :size="96"
                :src="extra?.extra_data.picture"
            />
            <n-h1>{{ user_data?.first_name }} {{ user_data?.last_name }}</n-h1>
            <n-h4>{{ user_data?.email }}</n-h4>
            <Modal />
        </n-flex>
    </n-flex>
</template>