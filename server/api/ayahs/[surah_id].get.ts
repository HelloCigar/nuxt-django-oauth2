export default defineEventHandler(async (event) => {
    const surah_id = getRouterParam(event, 'surah_id')

    const all_ayahs = await $fetch(`${useRuntimeConfig().djangoServerUrl}/api/public/ayahs/${surah_id}/ayah-list`)
  
    return all_ayahs
})
  