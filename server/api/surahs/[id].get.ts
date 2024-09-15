export default defineEventHandler(async (event) => {
  
  const surah_id = getRouterParam(event, 'id')

  const surah_info = await $fetch(`${useRuntimeConfig().djangoServerUrl}/api/public/surahs/${surah_id}`)

  return surah_info
})
