<script setup lang="ts">
import type { VirtualListInst } from 'naive-ui'
import { computed, ref } from 'vue'
interface Props {
    surah_info: Surahs | null
    ayahs: Ayahs[] | null,
}

const props = defineProps<Props>()
const items = ref(props.ayahs)

watch(
() => props.ayahs,
() => { items.value = props.ayahs }
);


const virtualListInst = ref<VirtualListInst>()

const handleScrollToIndex = (index: number) => {
    if(index == 1) {
        handleScrollToTop()
        return
    }
    else if(props.ayahs?.length == index ){
        virtualListInst.value?.scrollTo({ position: 'bottom'})
    }

    virtualListInst.value?.scrollTo({ index: index-1 })
}

const handleScrollToTop = () => {
    virtualListInst.value?.scrollTo({ position: 'top' })
}

defineExpose({
    handleScrollToIndex,
    handleScrollToTop
})

</script>

<template>
     <n-virtual-list
        class="h-90dvh px-36"
        ref="virtualListInst"
        :item-size="250"
        :items="items"
        item-resizable
      >
      <template #default="{ item }">
        <div :key="item.key">
            <ReaderCell :text="item.text" :translation="item.translation" :id="item.verse_id" />
        </div>
      </template>
    </n-virtual-list>
</template>