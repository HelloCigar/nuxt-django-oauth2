<script setup lang="ts">
import { Menu as MenuIcon, PersonOutline as PersonOutlineIcon, SettingsSharp as SettingsSharpIcon } from '@vicons/ionicons5'

const containerRef = ref<HTMLElement | undefined>(undefined)
const active = ref(false)

const toggleHeader = () => {
    active.value = !active.value
}
</script>

<template>
    <n-space vertical class="h-screen">
        <n-layout>
            <n-scrollbar
            class="h-screen"
            :ref="containerRef"
            >
            <n-drawer v-model:show="active" :width="502" placement="left" :block-scroll="false">
            <n-drawer-content title="Stoner">
            Stoner is a 1965 novel by the American writer John Williams.
            </n-drawer-content>
            </n-drawer>
            <n-layout-header class="block sticky top-0 z-10 py-4">
                <n-flex justify="space-between">
                    <n-flex justify="center" class="pl-8">
                        <n-button text style="font-size: 24px" @click="toggleHeader">
                            <n-icon>
                                <MenuIcon/>
                            </n-icon>
                        </n-button>
                    </n-flex>
                    <n-flex justify="center" size="large" class="pr-8">
                        <n-button text style="font-size: 24px" @click="toggleHeader">
                            <n-icon>
                                <PersonOutlineIcon/>
                            </n-icon>
                        </n-button>
                        <n-button text style="font-size: 24px" @click="toggleHeader">
                            <n-icon>
                                <SettingsSharpIcon/>
                            </n-icon>
                        </n-button>
                    </n-flex>
                </n-flex>
            </n-layout-header>
            <slot />
            <n-layout-footer>Chengfu Road</n-layout-footer>
        </n-scrollbar>
        </n-layout>
    </n-space>
</template>

<style scoped>
.n-layout-footer {
  background: rgba(128, 128, 128, 0.2);
  padding: 24px;
}

.n-layout-sider {
  background: rgba(128, 128, 128, 0.3);
}

.n-layout-content {
  background: rgba(128, 128, 128, 0.4);
}

</style>