export default defineEventHandler(async (event) => {
    const query = getQuery(event)
      if (query) {
        try {
          const response = await $fetch<UserJWTData>(`${useRuntimeConfig().djangoServerUrl}/api/auth/google/`, {
            method: 'POST',
            body: {
              'code': query.code
            },
          });
      
          const auth_key = await response;    
          return auth_key;
            
          } catch (err) {
            console.error(err);
            throw new Response('Bad request', { status: 400 });
          }
        }
      
        throw new Response('Not Found', { status: 404 });
  })