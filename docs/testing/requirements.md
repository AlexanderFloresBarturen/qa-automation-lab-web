# QA Automation Lab - Requirements

## Objetivo

Este documento define los requisitos funcionales del proyecto QA Automation Lab.

Cada requisito posee un identificador único que permite establecer trazabilidad con:

- Casos de prueba [`test_cases.md`](./test_cases.md)
- Pruebas automatizadas (Vitest, Playwright y Selenium)
- Ejecución de pruebas [`test_execution.md`](./test_execution.md)
- Reportes de defectos

---

## Authentication

| ID | Requisito | Componente |
|----|-----------|------------|
| AUTH-REQ-001 | El sistema debe almacenar el token de acceso después de una autenticación exitosa. | tokenStorage |
| AUTH-REQ-002 | El sistema debe permitir recuperar el token de acceso almacenado. | tokenStorage |
| AUTH-REQ-003 | El sistema debe eliminar el token de acceso al cerrar la sesión. | tokenStorage |
| AUTH-REQ-004 | El sistema debe permitir verificar si existe un token de acceso almacenado. | tokenStorage |
| AUTH-REQ-005 | El sistema debe indicar cuando no existe un token de acceso almacenado. | tokenStorage |
| AUTH-REQ-010 | El sistema debe indicar que el usuario está autenticado cuando existe un token de acceso .| useAuth |
| AUTH-REQ-011 | El sistema debe indicar que el usuario no está autenticado cuando no existe un token de acceso. | useAuth |
| AUTH-REQ-020 | El sistema debe eliminar el token de acceso almacenado cuando el usuario ejecute el cierre de sesión. | useLogout |
| AUTH-REQ-030 | El sistema debe retornar la información de autenticación cuando las credenciales del usuario sean válidas. | useLogin |
| AUTH-REQ-031 | El sistema debe propagar el error cuando el servicio de autenticación falle. | useLogin |
| AUTH-REQ-032 | El sistema debe almacenar el token de acceso recibido después de una autenticación exitosa | useLogin |
| AUTH-REQ-040 | El sistema debe aceptar un correo electrónico con formato válido y una contraseña no vacía | loginSchema |
| AUTH-REQ-041 | El sistema debe rechazar un correo electrónico con formato inválido | loginSchema |
| AUTH-REQ-042 | El sistema debe requerir una contraseña | loginSchema |

---

## Users

| ID | Requisito | Componente |
|----|-----------|------------|
| USER-REQ-001 | El sistema debe obtener la lista de usuario registrados | useUsers |
| USER-REQ-002 | El sistema debe propagar el error cuando el servicio de usuarios no pueda obtener el listado | useUsers |
| USER-REQ-010 | El sistema debe obtener el usuario correspondiente al identificador solicitado | useUser |
| USER-REQ-011 | El sistema debe propagar el error cuando el servicio de usuarios no pueda obtener información del usuario solicitado | useUser |
| USER-REQ-012 | El sistema no debe ejecutar la consulta cuando `enabled` sea `false` | useUser |
| USER-REQ-020 | El sistema debe crear un usuario | useCreateUser |
| USER-REQ-021 | El sistema debe propagar el error cuando el servicio no pueda crear el usuario | useCreateUser |
| USER-REQ-022 | El sistema debe invalidar la consulta de usuarios cuando la creación del usuario sea exitosa | useCreateUser |
| USER-REQ-030 | El sistema debe actualizar la información del usuario | useUpdateUser |
| USER-REQ-031 | El sistema debe propagar el error cuando el servicio no pueda actualizar el usuario | useUpdateUser |
| USER-REQ-032 | El sistema debe invalidar la consulta de usuario cuando la actualización sea exitosa | useUpdateUser |
| USER-REQ-033 | El sistema debe actualizar la caché del usuario modificado | useUpdateUser |
| USER-REQ-040 | El sistema debe actualizar parcialmente la información del usuario | usePatchUser |
| USER-REQ-041 | El sistema debe propagar el error cuando el servicio no pueda actualizar parcialmente el usuario | usePatchUser |
| USER-REQ-042 | El sistema debe invalidar la consulta de usuarios cuando la actualización parcial sea exitosa | usePatchUser |
| USER-REQ-043 | El sistema debe invalidar la consulta del usuario actualizado parcialmente | usePatchUser |
| USER-REQ-050 | El sistema debe eliminar lógicamente un usuario | useDeleteUser |
| USER-REQ-051 | El sistema debe propagar el error cuando el servicio no pueda eliminar el usuario | useDeleteUser |
| USER-REQ-052 | El sistema debe invalidar la consulta de usuarios cuando la eliminación sea exitosa | useDeleteUser |
| USER-REQ-060 | El sistema debe actualizar el estado del usuario | useUpdateUserStatus |
| USER-REQ-061 | El sistema debe propagar el error cuando el servicio no pueda actualizar el estado del usuario | useUpdateUserStatus |
| USER-REQ-062 | El sistema debe invalidar la consulta de usuarios cuando la actualización del estado del usuario sea exitosa | useUpdateUserStatus |
| USER-REQ-063 | El sistema debe invalidar la consulta del usuario cuando la actualización del estado del usuario sea exitosa | useUpdateUserStatus |

---
