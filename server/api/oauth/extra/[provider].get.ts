export default defineEventHandler(async (event) => {
  const provider = getRouterParam(event, 'provider')
  const token = getCookie(event, 'my-app-auth')

  try {
    const response = await $fetch<GithubExtraData | GoogleExtraData>(`${useRuntimeConfig().djangoServerUrl}/api/auth/${provider}/extra/`, { 
      method: 'GET',
      headers: {
          Authorization: `Bearer ${token}`
      },
    }
  );
  
  const user_data = await response;    
  return user_data;
    
  } catch (err) {
    console.error(err);
    throw new Response('Bad request', { status: 400 });
  }
})