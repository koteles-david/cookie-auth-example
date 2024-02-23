import { useCookies } from '@vueuse/integrations/useCookies'

export const useAuthorization = () => {
  const { get } = useCookies()

  const getUsernameCookie = () => {
    return get('username') || '';
  }

  return {
    getUsernameCookie,
  }
}