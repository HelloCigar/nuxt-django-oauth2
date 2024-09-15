
export default defineEventHandler(async (event) => {
  try {
    const response = await $fetch<UserData>(`/api/auth/user/`, {
      method: 'GET',
    });

    const auth_key = await response;    
    return auth_key;
      
    } catch (err) {
      console.error(err);
      throw new Response('Bad request', { status: 400 });
    }
})