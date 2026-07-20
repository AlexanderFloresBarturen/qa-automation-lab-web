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

### Componente

```text
tokenStorage
```

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
