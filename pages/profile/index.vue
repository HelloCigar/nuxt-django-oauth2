<script setup lang="ts">
const headers = useRequestHeaders(['cookie']) as HeadersInit


const { data: user_data, status: status } = await useIFetch<UserData>("/api/auth/user/")
const { data: extra } = await useIFetch<GoogleExtraData | GithubExtraData>("/api/auth/github/extra/")
let picture: string = ""

if (extra.value === null) {
    console.error("No response received from the server.");
} else {
    // Use the type guard to check which type of response it is
    if (useSocialTypeGuard(extra.value)) {
        console.log("This is Google data:", extra.value.extra_data.email);
        picture = extra.value.extra_data.picture
    } else {
        console.log("This is Github data:", extra.value.extra_data.login);
        picture = extra.value.extra_data.avatar_url
    }
}

</script>

<template>
    <n-flex justify="center" class="w-9/12 p-24" >
        <n-flex v-if="user_data" vertical align="center">
            <n-avatar
                round
                :size="96"
                :src="picture"
            />
            <n-h1>{{ user_data?.username}}</n-h1>
            <n-h4>{{ user_data?.email }}</n-h4>
            <Modal />
        </n-flex>
    </n-flex>
</template>