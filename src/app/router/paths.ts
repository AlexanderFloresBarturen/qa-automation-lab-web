export const PATHS = {
  LOGIN: '/login',
  FORGOT_PASSWORD: '/forgot-password',
  RESET_PASSWORD: '/reset-password',
  DASHBOARD: '/dashboard',
  USERS: '/users',
  CREATE_USER: '/users/new',
  USER_DETAIL: '/users/:id',
  USER_EDIT: '/users/:id/edit',

  userDetail: (id: number) => `/users/${id}`,
  userEdit: (id: number) => `/users/${id}/edit`,
} as const
