export const PATHS = {
  LOGIN: '/login',
  FORGOT_PASSWORD: '/forgot-password',
  RESET_PASSWORD: '/reset-password',
  DASHBOARD: '/dashboard',
  USERS: '/users',
  CREATE_USER: '/users/new',
  USER_DETAIL: '/users/:id',
  USER_EDIT: '/users/:id/edit',
  USER_PATCH: '/users/:id/patch',

  userDetail: (id: number) => `/users/${id}`,
  userEdit: (id: number) => `/users/${id}/edit`,
  userPatch: (id: number) => `/users/${id}/patch`
} as const
