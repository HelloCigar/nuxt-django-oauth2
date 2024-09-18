<script setup lang="ts">
definePageMeta({
  layout: 'new'
})
import type { ReaderContent } from '#build/components';
import type { VirtualListInst } from 'naive-ui'
import { useThemeVars } from 'naive-ui'

const themeVars = useThemeVars()
const ayahListRefs = ref<VirtualListInst>()

const childRef = ref<InstanceType<typeof ReaderContent> | null>(null)

const callChildScrollToIndex = (index: number) => {
  childRef.value?.handleScrollToIndex(index)
}
const callChildScrollToTop = () => {
  childRef.value?.handleScrollToTop()
}

const selectedSurah = ref<number>(1)
const selectSurah = (surah_id: number) => {
  selectedSurah.value = surah_id
  ayahListRefs.value?.scrollTo({ position: 'top' })
  callChildScrollToTop()
  console.log(ayahs.value?.length)
}

const selectedAyah = ref<number>(1)
const selectAyah = (ayah_id: number) => {
  selectedAyah.value = ayah_id
  callChildScrollToIndex(ayah_id)
}

const { data: surahs } = useFetch<Surahs[]>('/api/surahs');
const { data: ayahs } = useFetch<Ayahs[]>(() => `/api/ayahs/${selectedSurah.value}`);
const { data: surah_info } = useFetch<Surahs>(() => `/api/surahs/${selectedSurah.value}`);


</script>

<template>
    <n-layout-sider
        content-style="padding: 24px;"
        :native-scrollbar="false"
        bordered
        collapse-mode="width"
        :collapsed-width="16"
        :width="360"
        :show-collapsed-content="false"
        show-trigger="arrow-circle"
    >
        <n-grid cols="3" x-gap="12">
          <n-gi :span="2">
            <n-flex vertical>
              <n-input type="text" size="large" placeholder="Search Surah"></n-input>
              <n-virtual-list 
                class="h-[800px] pl-1 pr-3" 
                :item-size="42" 
                :items="surahs" 
                >
                <template #default="{ item }">
                  <div 
                  :style="{
                      '--border-hover': themeVars.primaryColorHover,
                      '--outline-hover': themeVars.primaryColorHover,
                      '--text-hover': themeVars.primaryColorHover
                    }"
                    class="rounded grid grid-cols-4 gap-4 items-center bg-white border border-gray-300 hover:border-[var(--border-hover)] hover:outline-[var(--outline-hover)] hover:text-[var(--text-hover)] transition-all duration-300 cursor-pointer px-4 py-2 my-2"
                    @click="selectSurah(item.id)"
                  >
                    <!-- Chapter number (1 span) -->
                    <div class="col-span-1 text-center text-gray-700 font-semibold">
                      {{ item.id }}
                    </div>
                    <!-- Chapter text (3 span) -->
                    <div class="col-span-3 text-gray-900 font-medium">
                      {{ item.transliteration }}
                    </div>
                  </div>
                </template>
              </n-virtual-list>
            </n-flex>
          </n-gi>
          <n-gi :span="1">
            <n-flex vertical>
              <n-input type="text" size="large" placeholder="Ayah" />
              <n-virtual-list 
                class="h-[800px] pl-1 pr-3" 
                :item-size="42"  
                :items="ayahs" 
                ref="ayahListRefs"
                item-resizable>
                <template #default="{ item }">
                  
                  <div 
                    class="rounded grid grid-cols-4 gap-4 items-center bg-white border border-gray-300 hover:border-green-500 hover:outline-green-500 hover:text-green-500 transition-all duration-300 cursor-pointer px-4 py-2 my-2"
                    @click="selectAyah(item.verse_id)"
                  >
                    <!-- Chapter number (1 span) -->
                    <div class="col-span-4 text-center text-gray-700 font-semibold">
                      {{ item.verse_id }}
                    </div>
                  </div>
                </template>
              </n-virtual-list>
            </n-flex>
          </n-gi>
        </n-grid>
    </n-layout-sider>
    <ReaderContent :ayahs="ayahs" :surah_info="surah_info" ref="childRef"/>
</template>
