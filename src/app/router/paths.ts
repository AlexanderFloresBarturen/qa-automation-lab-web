export const PATHS = {
  LOGIN: '/login',
  FORGOT_PASSWORD: '/forgot-password',
  RESET_PASSWORD: '/reset-password',
  DASHBOARD: '/dashboard',
  USERS: '/users',
  CREATE_USER: '/users/new',
  USER_DETAIL: '/users/:id',

  userDetail: (id: number) => `/users/${id}`,
} as const
