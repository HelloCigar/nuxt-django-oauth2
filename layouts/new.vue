<script setup lang="ts">
import { Menu as MenuIcon, PersonOutline as PersonOutlineIcon, SettingsSharp as SettingsSharpIcon } from '@vicons/ionicons5'
const active = ref(false)

const toggleHeader = () => {
    active.value = !active.value
}
</script>

<template>
    <n-layout class="max-h-dvh h-dvh">
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
      <n-layout position="absolute" style="top: 64px; bottom: 64px" has-sider class="h-full">
        <slot></slot>
      </n-layout>
    </n-layout>
  </template>