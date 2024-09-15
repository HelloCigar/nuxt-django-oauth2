export default defineEventHandler(async (event) => {

    const all_surahs = await $fetch(`${useRuntimeConfig().djangoServerUrl}/api/public/surahs`)
  
    return all_surahs
})
  