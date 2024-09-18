<script setup lang="ts">
import { BookmarkOutline as NotBookmarkedIcon } from '@vicons/ionicons5'
import { Bookmark as BookmarkedIcon } from '@vicons/ionicons5'

interface Props {
    text: string
    translation: string
    id: number
}
const props = defineProps<Props>()


</script>


<template>
    <div class="flex flex-row flex-nowrap justify-between">
        <n-flex vertical class="mt-12 mr-16">
            <n-button text style="font-size: 20px">
                    <n-h3>
                        {{ props.id }}
                    </n-h3>
            </n-button>
            <n-button text style="font-size: 20px">
                <n-icon>
                    <bookmarked-icon />
                </n-icon>
            </n-button>
        </n-flex>
        <n-flex vertical class="grow">
            <div class="mt-12 pt-2" style="direction: rtl;">
                <n-h1>
                {{ props.text }}
                </n-h1>
            </div>
            <n-flex class="mb-12 pb-1">
                <n-h3 prefix="bar">
                    {{ props.translation }}
                </n-h3>
            </n-flex>
        </n-flex>
    </div>
    <n-divider />
</template>