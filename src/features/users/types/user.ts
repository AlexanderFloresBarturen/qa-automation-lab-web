export interface UserDetailResponse {
  id: number
  name: string
  email: string
  age: number
  is_active: boolean
}

export interface CreateUserRequest {
  name: string
  email: string
  age: number
  password: string
}

export interface UpdateUserRequest {
  name: string
  email: string
  age: number
}

export interface PatchUserRequest {
  name?: string
  email?: string
  age?: number
}

export interface UserStatusRequest {
  is_active: boolean
}
