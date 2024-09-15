import type { UseFetchOptions } from "#app";
import { defu } from "defu";

export async function useIFetch<T>(
  url: string,
  options: UseFetchOptions<T> = {}
) {
  const accessToken = useCookie("my-app-auth");

  const defaults: UseFetchOptions<T> = {
    baseURL: useRuntimeConfig().public.djangoServerUrl,
    key: url,
    headers: accessToken.value
      ? { Authorization: `Bearer ${accessToken.value}`
    }
      : {},
    onResponse: async ({ response, options }) => {
      if (response.status === 401) {
        try {
          const newToken = await refreshToken();
          accessToken.value = newToken;

          options.headers = { Authorization: `Bearer ${newToken}`
        };
          useFetch(url, options as UseFetchOptions<T>);
        } catch (error) {
          console.error("Token refresh failed:", error);
        }
      }
    },
  };

  const params = defu(options, defaults);

  return useFetch(url, params);
}

async function refreshToken() {
  const refreshToken = useCookie("my-app-refresh");

  const { data, status } = await useFetch<{ access: string }>(
    `${useRuntimeConfig().public.djangoServerUrl}/api/auth/token/refresh/`,
    {
      method: "POST",
      body: { refresh: refreshToken.value },
    }
  );

  if (status.value === "success") {
    return data.value?.access;
  } else {
    throw new Error("Token refresh failed");
  }
}