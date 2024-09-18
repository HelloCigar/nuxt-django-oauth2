<script setup lang="ts">
definePageMeta({
    layout: 'new'
})

</script>

<template>
    <n-flex justify="center" class="grow">
        <n-flex vertical>
            <n-message-provider placement="bottom">
                <LoginTitle />
                <LoginContainer />
            </n-message-provider>
        </n-flex>
    </n-flex>
</template>
