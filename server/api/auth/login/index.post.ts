export default defineEventHandler(async (event) => {
    const credentials = await readBody(event)
    let auth_data: UserJWTData | LoginError | null = null

    if (credentials) {
        const response = await $fetch<UserJWTData | LoginError>(`/api/auth/login/`, {
          method: 'POST',
          body: credentials,
          ignoreResponseError: true
        });
        
        // Check if the response is LoginError based on specific email error
        if ('email' in response && response.email?.includes("Enter a valid email address.")) {
          auth_data = { email: response.email };
        } else if ('non_field_errors' in response && response.non_field_errors) {
          auth_data = { non_field_errors: response.non_field_errors };
        } else {
          // If it's neither an error nor email validation error, assume it's UserJWTData
          auth_data = response as UserJWTData;
        }
        return auth_data;
    }

  throw new Response('Not Found', { status: 404 });
})