import type { CreateUserRequest, PatchUserRequest, UpdateUserRequest, UserDetailResponse, UserStatusRequest } from "@/features";

export function createUserRequest(
    overrides: Partial<CreateUserRequest> = {},
): CreateUserRequest {
    return {
        name: 'Alex',
        email: 'alex@test.com',
        age: 30,
        password: 'Password123!',
        ...overrides
    }
}

export function updateUserRequest(
    overrides: Partial<UpdateUserRequest> = {},
): UpdateUserRequest {
    return {
        name: 'Bob',
        email: 'bob@test.com',
        age: 20,
        ...overrides
    }
}

export function patchUserRequest(
    overrides: Partial<PatchUserRequest> = {},
): PatchUserRequest {
    return {
        ...overrides
    }
}

export function userStatusRequest(
    overrides: Partial<UserStatusRequest> = {},
): UserStatusRequest {
    return {
        is_active: true,
        ...overrides
    }
}

export function userDetailResponse(
    overrides: Partial<UserDetailResponse> = {},
): UserDetailResponse {
    return {
        id: 1,
        name: 'Alex',
        email: 'alex@test.com',
        age: 30,
        is_active: true,
        ...overrides
    }
}