export default defineEventHandler(async (event) => {
    const credentials = await readBody(event)
      if (credentials) {
        try {
          const response = await $fetch<UserJWTData>(`/api/auth/login/`, {
            method: 'POST',
            body: credentials,
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