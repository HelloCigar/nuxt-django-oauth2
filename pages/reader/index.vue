<script setup lang="ts">
definePageMeta({
  layout: 'main'
})

const count = ref(6)
const handleLoad = () => {
    count.value += 1
}
</script>

<template>
    <n-space vertical size="large" class="h-screen">
        <n-layout has-sider class="h-screen sticky top-0">
            <n-layout-sider
                collapse-mode="width"
                :collapsed-width="64"
                :width="300"
                :show-collapsed-content="false"
                show-trigger="arrow-circle"
                content-style="padding: 24px;"
                bordered
            >
                <n-flex vertical>

                </n-flex>
            </n-layout-sider>
            <n-layout-content class="py-6 px-48">
                <n-infinite-scroll style="height: 240px" :distance="10" @load="handleLoad">
                    <div v-for="i in count" :key="i" class="item">
                    {{ i }}
                    </div>
                </n-infinite-scroll>
            </n-layout-content>
        </n-layout>
    </n-space>
</template>

<style scoped>
.item {
  display: flex;
  align-items: center;
  height: 46px;
  justify-content: center;
  margin-bottom: 10px;
  background-color: rgba(0, 128, 0, 0.16);
}

.item:last-child {
  margin-bottom: 0;
}
</style>