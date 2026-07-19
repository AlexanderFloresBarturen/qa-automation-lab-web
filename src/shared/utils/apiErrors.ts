import axios from 'axios'

export function getApiErrorMessage(error: unknown): string {
  if (!axios.isAxiosError(error)) {
    return 'Se ha producido un error inesperado.'
  }

  const detail = error.response?.data?.detail

  if (typeof detail === 'string' && detail.trim().length > 0) {
    return detail
  }

  switch (error.response?.status) {
    case 400:
      return 'La solicitud es inválida.'
    case 401:
      return 'Tu sesion ha expirado.'
    case 403:
      return 'No tienes permiso para ejecutar esta acción.'
    case 404:
      return 'No se encontró el recurso solicitado.'
    case 409:
      return 'Ya existe un usuario con este correo.'
    case 422:
      return 'Los datos enviados son inválidos.'
    case 500:
      return 'Se ha producido un error interno del servidor.'
    default:
      return 'Algo falló. Intente de nuevo.'
  }
}
