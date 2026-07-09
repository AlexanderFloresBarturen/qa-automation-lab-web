const ACCESS_TOKEN_KEY = 'access_token'

export const tokenStorage = {
  save(token: string) {
    localStorage.setItem(ACCESS_TOKEN_KEY, token)
  },
  get() {
    return localStorage.getItem(ACCESS_TOKEN_KEY)
  },
  remove() {
    localStorage.removeItem(ACCESS_TOKEN_KEY)
  },
  exists() {
    return localStorage.getItem(ACCESS_TOKEN_KEY) !== null
  },
}
