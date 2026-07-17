import { httpClient } from '@/shared/api'
import type {
  CreateUserRequest,
  PatchUserRequest,
  UpdateUserRequest,
  UserDetailResponse,
} from '../types'

export const usersApi = {
  async getAll(): Promise<UserDetailResponse[]> {
    const response = await httpClient.get<UserDetailResponse[]>('users')

    return response.data
  },

  async getById(id: number): Promise<UserDetailResponse> {
    const response = await httpClient.get<UserDetailResponse>(`users/${id}`)

    return response.data
  },

  async create(data: CreateUserRequest): Promise<UserDetailResponse> {
    const response = await httpClient.post<UserDetailResponse>('users', data)

    return response.data
  },

  async update(
    id: number,
    data: UpdateUserRequest,
  ): Promise<UserDetailResponse> {
    const response = await httpClient.put<UserDetailResponse>(
      `users/${id}`,
      data,
    )

    return response.data
  },

  async patch(id: number, data: PatchUserRequest): Promise<UserDetailResponse> {
    const response = await httpClient.patch<UserDetailResponse>(
      `users/${id}`,
      data,
    )

    return response.data
  },

  async delete(id: number): Promise<void> {
    await httpClient.delete(`users/${id}`)
  },
}
