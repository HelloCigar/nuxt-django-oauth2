export const useUrlParams = (url: string) => {
    const getUrlParams = (): Record<string, string> => {
      const urlObj = new URL(url);
      const params = new URLSearchParams(urlObj.search);
      const paramObj: Record<string, string> = {};
  
      params.forEach((value, key) => {
        paramObj[key] = value;
      });
  
      return paramObj;
    };
  
    return {
      getUrlParams
    };
  };
  