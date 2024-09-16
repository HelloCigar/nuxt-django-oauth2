<template>   
    <div class="body min-h-screen">
        <n-message-provider>
        <NuxtLoadingIndicator />
        <NuxtLayout>
          <NuxtPage />
        </NuxtLayout>
        </n-message-provider>
    </div>
</template>

<style scoped>
.body {
    background-color: #fff;
    display: block;
    margin: 0;
}
</style>
