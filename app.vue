<template>   
    <div class="body">
      <n-message-provider>
        <NuxtLoadingIndicator />
        <NuxtLayout>
          <NuxtPage />
        </NuxtLayout>
      </n-message-provider>
    </div>
</template>

<style>
.body {
    background-color: #fff;
    display: block;
    margin: 0;
}
</style>
