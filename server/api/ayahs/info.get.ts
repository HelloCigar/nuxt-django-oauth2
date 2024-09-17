export default defineEventHandler(async (event) => {
    const query = getQuery(event)

    const all_ayahs = await $fetch(`${useRuntimeConfig().djangoServerUrl}/api/public/ayahs/${query.surah}/ayah-info/${query.ayah}`)
  
    return all_ayahs
})
  