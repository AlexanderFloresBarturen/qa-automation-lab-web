export interface ForgotPasswordRequest {
  email: string
}

export interface ForgotPasswordResponse {
  message: string
  token?: string
}

export interface ResetPasswordRequest {
    token: string
    new_password: string
}

export interface ResetPasswordResponse {
    message: string
}