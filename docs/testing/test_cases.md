# QA Automation Lab - Test Cases

## Objetivo

Este documento contiene los casos de prueba diseñados para el proyecto QA Automation Lab.

Cada caso de prueba posee un identificador único que permite relacionarlo con:

- La implementación automatizada.
- La ejecución de pruebas.
- Futuros reportes de defectos.

## Convención de identificadores

| Prefijo | Módulo |
|----------|--------|
| AUTH | Autenticación |
| USER | Gestión de usuarios |
| NAV | Navegación |
| HDR | Header |
| LYT | Layout |
| API | Integración API |
| E2E | End-to-End |

---

## Autenticación

### AUTH-001 - Guardar token de acceso

| | |
|---|---|
| **Requisito** | AUTH-REQ-001 |
| **Prioridad** | 🔴 P0 |
| **Componente** | tokenStorage |
| **Método** | save() |
| **Automatización** | Hecho |
| **Estado** | 🟢 PASS |

**Descripción**

Verificar que el token de acceso se almacena correctamente en `localStorage`.

**Precondiciones**

- El `localStorage` está vacío.

**Pasos**

1. Ejecutar `tokenStorage.save("abc123")`.

**Resultado esperado**

- Existe la clave `access_token`.
- El valor almacenado es `abc123`.

---

### AUTH-002 - Recuperar token almacenado

| | |
|---|---|
| **Requisito** | AUTH-REQ-002 |
| **Prioridad** | 🔴 P0 |
| **Componente** | tokenStorage |
| **Método** | get() |
| **Automatización** | Hecho |
| **Estado** | 🟢 PASS |

**Descripción**

Verificar que el token almacenado puede recuperarse correctamente desde `localStorage`.

**Precondiciones**

- Existe un token almacenado con el valor `abc123`.

**Pasos**

1. Ejecutar `tokenStorage.get()`.

**Resultado esperado**

- El método devuelve `abc123`.

---

### AUTH-003 - Eliminar token de acceso

| | |
|---|---|
| **Requisito** | AUTH-REQ-003 |
| **Prioridad** | 🔴 P0 |
| **Componente** | tokenStorage |
| **Método** | remove() |
| **Automatización** | Hecho |
| **Estado** | 🟢 PASS |

**Descripción**

Verificar que el token almacenado puede eliminarse correctamente de `localStorage`.

**Precondiciones**

- Existe un token almacenado con el valor `abc123`.

**Pasos**

1. Ejecutar `tokenStorage.remove()`.

**Resultado esperado**

- La clave `access_token` deja de existir en `localStorage`.

---

### AUTH-004 - Verificar existencia del token

| | |
|---|---|
| **Requisito** | AUTH-REQ-004 |
| **Prioridad** | 🔴 P0 |
| **Componente** | tokenStorage |
| **Método** | exists() |
| **Automatización** | Hecho |
| **Estado** | 🟢 PASS |

**Descripción**

Verificar que el método `exists()` indica correctamente cuando existe un token almacenado.

**Precondiciones**

- Existe un token almacenado.

**Pasos**

1. Ejecutar `tokenStorage.exists()`.

**Resultado esperado**

- El método devuelve `true`.

---

### AUTH-005 - Verificar ausencia del token

| | |
|---|---|
| **Requisito** | AUTH-REQ-005 |
| **Prioridad** | 🔴 P0 |
| **Componente** | tokenStorage |
| **Método** | exists() |
| **Automatización** | Hecho |
| **Estado** | 🟢 PASS |

**Descripción**

Verificar que el método `exists()` indica correctamente cuando no existe un token almacenado.

**Precondiciones**

- El `localStorage` está vacío.

**Pasos**

1. Ejecutar `tokenStorage.exists()`.

**Resultado esperado**

- El método devuelve `false`.

---

### AUTH-010 - Usuario autenticado

| | |
|---|---|
| **Requisito** | AUTH-REQ-010 |
| **Prioridad** | 🔴 P0 |
| **Componente** | useAuth |
| **Método** | useAuth() |
| **Automatización** | Pendiente |
| **Estado** | 🟢 PASS |

**Descripción**

Verificar que el hook `useAuth()` indica correctamente que el usuario está autenticado cuando existe un token de acceso.

**Precondiciones**

- Existe un token de acceso almacenado.
- `tokenStorage.get()` devuelve un token válido.
- `tokenStorage.exists()` devuelve `true`.

**Pasos**

1. Ejecutar `useAuth()`.

**Resultado esperado**

- `access_token` contiene el token almacenado.
- `isAuthenticated` devuelve `true`.

---

### AUTH-011 - Usuario no autenticado

| | |
|---|---|
| **Requisito** | AUTH-REQ-011 |
| **Prioridad** | 🔴 P0 |
| **Componente** | useAuth |
| **Método** | useAuth() |
| **Automatización** | Pendiente |
| **Estado** | 🟢 PASS |

**Descripción**

Verificar que el hook `useAuth()` indica correctamente que el usuario no está autenticado cuando no existe un token de acceso.

**Precondiciones**

- No existe un token de acceso almacenado.
- `tokenStorage.get()` devuelve `null`.
- `tokenStorage.exists()` devuelve `false`.

**Pasos**

1. Ejecutar `useAuth()`.

**Resultado esperado**

- `access_token` devuelve `null`.
- `isAuthenticated` devuelve `false`.

---

### AUTH-020 - Elimina el token

| | |
|---|---|
| **Requisito** | AUTH-REQ-020 |
| **Prioridad** | 🔴 P0 |
| **Componente** | useLogout |
| **Método** | logout() |
| **Automatización** | Pendiente |
| **Estado** | 🟢 PASS |

**Descripción**

Verificar que el método `logout()` elimina el token de acceso almacenado al cerrar la sesión del usuario.

**Precondiciones**

- Existe un token de acceso almacenado en `localStorage`.

**Pasos**

1. Ejecutar `useLogout()`.
2. Invocar el método `logout()` retornado por el hook.

**Resultado esperado**

- El token de acceso es eliminado de `localStorage`.

---

### AUTH-030 - Login exitoso

| | |
|---|---|
| **Requisito** | AUTH-REQ-030 |
| **Prioridad** | 🔴 P0 |
| **Componente** | useLogin |
| **Método** | login() |
| **Automatización** | Pendiente |
| **Estado** | 🟢 PASS |

**Descripción**

Verificar que el método `login()` retorna correctamente la respuesta del servicio de autenticación cuando las credenciales son válidas.

**Precondiciones**

- El servicio de autenticación responde exitosamente.
- Las credenciales proporcionadas son válidas.

**Pasos**

1. Ejecutar `useLogin()`.
2. Invocar el método `login()` con credenciales válidas.

**Resultado esperado**

- El método retorna la respuesta del servicio de autenticación.

---

### AUTH-031 - Error de autenticación

| | |
|---|---|
| **Requisito** | AUTH-REQ-031 |
| **Prioridad** | 🔴 P0 |
| **Componente** | useLogin |
| **Método** | login() |
| **Automatización** | Pendiente |
| **Estado** | 🟢 PASS |

**Descripción**

Verificar que el método `login()` propaga el error cuando el servicio de autenticación responde con un fallo.

**Precondiciones**

- El servicio de autenticación responde con un error.

**Pasos**

1. Ejecutar `useLogin()`.
2. Invocar el método `login()` con credenciales inválidas.

**Resultado esperado**

- El método propaga el error producido por el servicio de autenticación.
- No se retorna una respuesta de autenticación.

---

### AUTH-032 - Guarda el token

| | |
|---|---|
| **Requisito** | AUTH-REQ-032 |
| **Prioridad** | 🔴 P0 |
| **Componente** | useLogin |
| **Método** | login() |
| **Automatización** | Pendiente |
| **Estado** | 🟢 PASS |

**Descripción**

Verificar que el método `login()` almacena el token de acceso recibido después de una autenticación exitosa.

**Precondiciones**

- El servicio de autenticación responde exitosamente.
- La respuesta contiene un token de acceso válido.

**Pasos**

1. Ejecutar `useLogin()`.
2. Invocar el método `login()` con credenciales válidas.

**Resultado esperado**

- El token de acceso recibido es almacenado mediante `tokenStorage`.

---

### AUTH-040 - Credenciales válidas

| | |
|---|---|
| **Requisito** | AUTH-REQ-040 |
| **Prioridad** | 🔴 P0 |
| **Componente** | loginSchema |
| **Método** | safeParse() |
| **Automatización** | Pendiente |
| **Estado** | 🟢 PASS |

**Descripción**

Verificar que el esquema valida correctamente unas credenciales con un correo electrónico válido y una contraseña no vacía.

**Precondiciones**

- Ninguna.

**Pasos**

1. Ejecutar `loginSchema.safeParse()` con un correo electrónico válido y una contraseña no vacía.

**Resultado esperado**

- La validación es exitosa.
- Los datos son aceptados por el esquema.

---

### AUTH-041 - Correo electrónico inválido

| | |
|---|---|
| **Requisito** | AUTH-REQ-041 |
| **Prioridad** | 🔴 P0 |
| **Componente** | loginSchema |
| **Método** | safeParse() |
| **Automatización** | Pendiente |
| **Estado** | 🟢 PASS |

**Descripción**

Verificar que el esquema rechaza un correo electrónico con un formato inválido.

**Precondiciones**

- Ninguna.

**Pasos**

1. Ejecutar `loginSchema.safeParse()` con un correo electrónico inválido y una contraseña válida.

**Resultado esperado**

- La validación falla.
- Se informa el mensaje **"El correo electrónico no es válido"**.

---

### AUTH-042 - Contraseña obligatoria

| | |
|---|---|
| **Requisito** | AUTH-REQ-042 |
| **Prioridad** | 🔴 P0 |
| **Componente** | loginSchema |
| **Método** | safeParse() |
| **Automatización** | Pendiente |
| **Estado** | 🟢 PASS |

**Descripción**

Verificar que el esquema requiere una contraseña para validar las credenciales.

**Precondiciones**

- Ninguna.

**Pasos**

1. Ejecutar `loginSchema.safeParse()` con un correo electrónico válido y una contraseña vacía.

**Resultado esperado**

- La validación falla.
- Se informa el mensaje **"La contraseña es obligatoria"**.

---

### AUTH-050 - Solicitar recuperación de contraseña

| | |
|---|---|
| **Requisito**	| AUTH-REQ-050 |
| **Prioridad**	| 🔴 P0 |
| **Componente** | useForgotPassword |
| **Método** | useForgotPassword() |
| **Automatización** | Pendiente |
| **Estado** | 🟢 PASS |

**Descripción**

Verificar que el método useForgotPassword() solicita correctamente la recuperación de contraseña utilizando el correo electrónico proporcionado.

**Precondiciones**

- El servicio de recuperación de contraseña está disponible.
- El correo electrónico proporcionado corresponde a un usuario registrado.

**Pasos**

1. Ejecutar useForgotPassword().
2. Ejecutar la mutación con un correo electrónico válido.
3. Esperar la finalización de la mutación.

**Resultado esperado**

- El método envía el correo electrónico proporcionado al servicio de recuperación de contraseña.
- El método retorna la respuesta proporcionada por el servicio.

---

### AUTH-051 - Error en recuperación de contraseña

| | |
|---|---|
| **Requisito**	| AUTH-REQ-051 |
| **Prioridad**	| 🔴 P0 |
| **Componente** | useForgotPassword |
| **Método** | useForgotPassword() |
| **Automatización** | Pendiente |
| **Estado** | 🟢 PASS |

**Descripción**

Verificar que el método useForgotPassword() expone el error cuando el servicio de recuperación de contraseña responde con un fallo.

**Precondiciones**

- El servicio de recuperación de contraseña responde con un error.

**Pasos**

1. Ejecutar useForgotPassword().
2. Ejecutar la mutación con un correo electrónico válido.
3. Esperar la finalización de la mutación.

**Resultado esperado**

- El método expone el error retornado por el servicio de recuperación de contraseña.

---

### AUTH-052 - Recuperación con correo no registrado

| | |
|---|---|
| Requisito	| AUTH-REQ-052 |
| Prioridad	| 🔴 P0 |
| Componente | useForgotPassword |
| Método | useForgotPassword() |
| Automatización | Pendiente |
| Estado | 🟢 PASS |

**Descripción**

Verificar que el método useForgotPassword() maneja correctamente una solicitud realizada con un correo electrónico no registrado.

**Precondiciones**

- El correo electrónico proporcionado no corresponde a un usuario registrado.
- El servicio de recuperación de contraseña responde correctamente con un mensaje genérico.

**Pasos**

1. Ejecutar useForgotPassword().
2. Ejecutar la mutación con un correo electrónico no registrado.
3. Esperar la finalización de la mutación.

**Resultado esperado**

El método retorna la respuesta genérica proporcionada por el servicio.
La respuesta no revela si el correo electrónico está asociado a un usuario registrado.

---

### AUTH-060 - Restablecer contraseña

| | |
|---|---|
| **Requisito** | AUTH-REQ-060 |
| **Prioridad** | 🔴 P0 |
| **Componente** | useResetPassword |
| **Método** | useResetPassword() |
| **Automatización** | Pendiente |
| **Estado** | 🟢 PASS |

**Descripción**

Verificar que el método `useResetPassword()` restablece correctamente la contraseña utilizando un token válido.

**Precondiciones**

- El servicio de restablecimiento de contraseña está disponible.
- Se dispone de un token válido.
- La nueva contraseña cumple con los requisitos de seguridad establecidos.

**Pasos**

1. Ejecutar `useResetPassword()`.
2. Ejecutar la mutación con un token válido y una nueva contraseña válida.
3. Esperar la finalización de la mutación.

**Resultado esperado**

- El método envía el token y la nueva contraseña al servicio de restablecimiento.
- El método retorna la respuesta proporcionada por el servicio.

---

### AUTH-061 - Error al restablecer contraseña

| | |
|---|---|
| **Requisito** | AUTH-REQ-061 |
| **Prioridad** | 🔴 P0 |
| **Componente** | useResetPassword |
| **Método** | useResetPassword() |
| **Automatización** | Pendiente |
| **Estado** | 🟢 PASS |

**Descripción**

Verificar que el método `useResetPassword()` expone el error cuando el servicio de restablecimiento de contraseña rechaza la solicitud.

**Precondiciones**

- El servicio de restablecimiento de contraseña responde con un error.
- Se dispone de un token y una nueva contraseña válidos.

**Pasos**

1. Ejecutar `useResetPassword()`.
2. Ejecutar la mutación con un token y una nueva contraseña válidos.
3. Esperar la finalización de la mutación.

**Resultado esperado**

- El método expone el error retornado por el servicio de restablecimiento de contraseña.

---

### AUTH-070 - Contraseña con longitud mínima

| | |
|---|---|
| **Requisito** | AUTH-REQ-070 |
| **Prioridad** | 🔴 P0 |
| **Componente** | resetPasswordSchema |
| **Método** | resetPasswordSchema.safeParse() |
| **Automatización** | Pendiente |
| **Estado** | 🟢 PASS |

**Descripción**

Verificar que `resetPasswordSchema` rechaza una contraseña que tenga menos de 8 caracteres.

**Precondiciones**

- Se dispone de una contraseña con menos de 8 caracteres.

**Pasos**

1. Ejecutar `resetPasswordSchema.safeParse()` con una contraseña de menos de 8 caracteres.
2. Evaluar el resultado de la validación.

**Resultado esperado**

- La validación falla.
- El resultado indica que la contraseña no cumple con la longitud mínima requerida.

---

### AUTH-071 - Contraseña sin mayúscula

| | |
|---|---|
| **Requisito** | AUTH-REQ-071 |
| **Prioridad** | 🔴 P0 |
| **Componente** | resetPasswordSchema |
| **Método** | resetPasswordSchema.safeParse() |
| **Automatización** | Pendiente |
| **Estado** | 🟢 PASS |

**Descripción**

Verificar que `resetPasswordSchema` rechaza una contraseña que no contenga al menos una letra mayúscula.

**Precondiciones**

- Se dispone de una contraseña que cumple las demás reglas de seguridad pero no contiene una letra mayúscula.

**Pasos**

1. Ejecutar `resetPasswordSchema.safeParse()` con una contraseña sin mayúsculas.
2. Evaluar el resultado de la validación.

**Resultado esperado**

- La validación falla.
- El resultado indica que la contraseña debe contener al menos una letra mayúscula.

---

### AUTH-072 - Contraseña sin minúscula

| | |
|---|---|
| **Requisito** | AUTH-REQ-072 |
| **Prioridad** | 🔴 P0 |
| **Componente** | resetPasswordSchema |
| **Método** | resetPasswordSchema.safeParse() |
| **Automatización** | Pendiente |
| **Estado** | 🟢 PASS |

**Descripción**

Verificar que `resetPasswordSchema` rechaza una contraseña que no contenga al menos una letra minúscula.

**Precondiciones**

- Se dispone de una contraseña que cumple las demás reglas de seguridad pero no contiene una letra minúscula.

**Pasos**

1. Ejecutar `resetPasswordSchema.safeParse()` con una contraseña sin minúsculas.
2. Evaluar el resultado de la validación.

**Resultado esperado**

- La validación falla.
- El resultado indica que la contraseña debe contener al menos una letra minúscula.

---

### AUTH-073 - Contraseña sin número

| | |
|---|---|
| **Requisito** | AUTH-REQ-073 |
| **Prioridad** | 🔴 P0 |
| **Componente** | resetPasswordSchema |
| **Método** | resetPasswordSchema.safeParse() |
| **Automatización** | Pendiente |
| **Estado** | 🟢 PASS |

**Descripción**

Verificar que `resetPasswordSchema` rechaza una contraseña que no contenga al menos un número.

**Precondiciones**

- Se dispone de una contraseña que cumple las demás reglas de seguridad pero no contiene ningún número.

**Pasos**

1. Ejecutar `resetPasswordSchema.safeParse()` con una contraseña sin números.
2. Evaluar el resultado de la validación.

**Resultado esperado**

- La validación falla.
- El resultado indica que la contraseña debe contener al menos un número.

---

### AUTH-074 - Contraseña sin carácter especial permitido

| | |
|---|---|
| **Requisito** | AUTH-REQ-074 |
| **Prioridad** | 🔴 P0 |
| **Componente** | resetPasswordSchema |
| **Método** | resetPasswordSchema.safeParse() |
| **Automatización** | Pendiente |
| **Estado** | 🟢 PASS |

**Descripción**

Verificar que `resetPasswordSchema` rechaza una contraseña que no contenga al menos un carácter especial permitido.

**Precondiciones**

- Se dispone de una contraseña que cumple las demás reglas de seguridad pero no contiene ninguno de los caracteres especiales permitidos.

**Pasos**

1. Ejecutar `resetPasswordSchema.safeParse()` con una contraseña sin caracteres especiales permitidos.
2. Evaluar el resultado de la validación.

**Resultado esperado**

- La validación falla.
- El resultado indica que la contraseña debe contener al menos un carácter especial permitido.

---

### AUTH-080 — Email válido

| | |
|---|---|
| **Requisito**	| AUTH-REQ-080 |
| **Prioridad**	| 🔴 P0 |
| **Componente** | forgotPasswordSchema |
| **Método** | forgotPasswordSchema.safeParse() |
| **Automatización** | Pendiente |
| **Estado** | 🟢 PASS |

**Descripción**

Verificar que forgotPasswordSchema acepta un correo electrónico válido.

**Precondiciones**

- Se dispone de un correo electrónico con formato válido.

**Pasos**

1. Ejecutar forgotPasswordSchema.safeParse() con un correo electrónico válido.
2. Evaluar el resultado de la validación.

**Resultado esperado**

- La validación es exitosa.
- El correo electrónico es aceptado por el schema.

---

### AUTH-081 — Email inválido

| | |
|---|---|
| Requisito | AUTH-REQ-081 |
| Prioridad	| 🔴 P0 |
| Componente | forgotPasswordSchema |
| Método | forgotPasswordSchema.safeParse() |
| Automatización | Pendiente |
| Estado | 🟢 PASS |


**Descripción**

Verificar que forgotPasswordSchema rechaza un correo electrónico con formato inválido.

**Precondiciones**

- Se dispone de un correo electrónico con formato inválido.

**Pasos**

1. Ejecutar forgotPasswordSchema.safeParse() con un correo electrónico inválido.
2. Evaluar el resultado de la validación.

**Resultado esperado**

- La validación falla.
- El resultado indica que el correo electrónico no es válido.

---

## Users

### USER-001 - Listado de usuarios

| | |
|---|---|
| **Requisito** | USER-REQ-001 |
| **Prioridad** | 🔴 P0 |
| **Componente** | useUsers |
| **Método** | useUsers() |
| **Automatización** | Pendiente |
| **Estado** | 🟢 PASS |

**Descripción**

Verificar que se obtiene una lista con los usuarios registrados.

**Precondiciones**

- El servicio de listado de usuarios responde correctamente con una lista de usuarios.

**Pasos**

1. Ejecutar `useUsers()`.
2. Esperar la resolución de la consulta.

**Resultado esperado**

- El método retorna la lista de usuarios obtenida del servicio.

---

### USER-002 - Error en listado de usuarios

| | |
|---|---|
| **Requisito** | USER-REQ-002 |
| **Prioridad** | 🔴 P0 |
| **Componente** | useUsers |
| **Método** | useUsers() |
| **Automatización** | Pendiente |
| **Estado** | 🟢 PASS |

**Descripción**

Verificar que el método `useUsers()` expone el error cuando el servicio de listado de usuarios responde con un fallo.

**Precondiciones**

- El servicio de listado de usuarios responde con un error.

**Pasos**

1. Ejecutar `useUsers()`.
2. Esperar la resolución de la consulta.

**Resultado esperado**

- El método expone el error retornado por el servicio de usuarios.

---

### USER-010 - Obtiene usuarios

| | |
|---|---|
| **Requisito** | USER-REQ-010 |
| **Prioridad** | 🔴 P0 |
| **Componente** | useUser |
| **Método** | useUser(id, enabled) |
| **Automatización** | Pendiente |
| **Estado** | 🟢 PASS |

**Descripción**

Verificar que el método `useUser()` obtiene el usuario asociado al identificador especificado.

**Precondiciones**

- El servicio de usuarios responde correctamente con la información del usuario solicitado.

**Pasos**

1. Ejecutar `useUser()`.
2. Esperar la resolución de la consulta.

**Resultado esperado**

- El método retorna la información del usuario obtenida del servicio.

---

### USER-011 - Error en obtener usuario

| | |
|---|---|
| **Requisito** | USER-REQ-011 |
| **Prioridad** | 🔴 P0 |
| **Componente** | useUser |
| **Método** | useUser(id, enabled) |
| **Automatización** | Pendiente |
| **Estado** | 🟢 PASS |

**Descripción**

Verificar que el método `useUser()` expone el error cuando el servicio de usuarios responde con un fallo.

**Precondiciones**

- El servicio de usuarios responde con un error.

**Pasos**

1. Ejecutar `useUser()`.
2. Esperar la resolución de la consulta.

**Resultado esperado**

- El método expone el error retornado por el servicio de usuarios.

---

### USER-012 - Consulta deshabilitada

| | |
|---|---|
| **Requisito** | USER-REQ-012 |
| **Prioridad** | 🔴 P0 |
| **Componente** | useUser |
| **Método** | useUser(id, enabled) |
| **Automatización** | Pendiente |
| **Estado** | 🟢 PASS |

**Descripción**

Verificar que el método `useUser()` no ejecuta la consulta al servicio de usuarios cuando `enabled` es `false`.

**Precondiciones**

- La consulta se ejecuta con el parámetro `enabled` establecido en `false`.

**Pasos**

1. Ejecutar `useUser()`.

**Resultado esperado**

- El método no ejecuta la consulta al servicio de usuarios.

---

### USER-020 - Crear usuario

| | |
|---|---|
| **Requisito** | USER-REQ-020 |
| **Prioridad** | 🔴 P0 |
| **Componente** | useCreateUser |
| **Método** | useCreateUser() |
| **Automatización** | Pendiente |
| **Estado** | 🟢 PASS |

**Descripción**

Verificar que el método `useCreateUser()` crea un usuario correctamente.

**Precondiciones**

- El servicio de usuarios responde correctamente con la información del usuario creado.

**Pasos**

1. Ejecutar `useCreateUser()`.
2. Ejecutar la mutación con un usuario válido
3. Esperar la finalización de la mutación.

**Resultado esperado**

- El método retorna la información del usuario creada por el servicio.

---

### USER-021 - Error al crear usuario

| | |
|---|---|
| **Requisito** | USER-REQ-021 |
| **Prioridad** | 🔴 P0 |
| **Componente** | useCreateUser |
| **Método** | useCreateUser() |
| **Automatización** | Pendiente |
| **Estado** | 🟢 PASS |

**Descripción**

Verificar que el método `useCreateUser()` expone el error cuando el servicio de usuarios responde con un fallo durante la creación.

**Precondiciones**

- El servicio de usuarios responde con un error al crear el usuario.

**Pasos**

1. Ejecutar `useCreateUser()`.
2. Ejecutar la mutación con un usuario válido
3. Esperar la finalización de la mutación.

**Resultado esperado**

- El método expone el error retornado por el servicio de usuarios.

---

### USER-022 - Invalidar consulta de usuarios

| | |
|---|---|
| **Requisito** | USER-REQ-022 |
| **Prioridad** | 🔴 P0 |
| **Componente** | useCreateUser |
| **Método** | useCreateUser() |
| **Automatización** | Pendiente |
| **Estado** | 🟢 PASS |

**Descripción**

Verificar que el método `useCreateUser()` invalida la consulta de usuarios cuando la creación del usuario finaliza correctamente.

**Precondiciones**

- El servicio de usuarios crea correctamente el usuario.

**Pasos**

1. Ejecutar `useCreateUser()`.
2. Ejecutar la mutación con un usuario válido
3. Esperar la finalización de la mutación.

**Resultado esperado**

- El método invalida la consulta identificada por la clave `['users']`.

---

### USER-030 - Actualizar usuario

| | |
|---|---|
| **Requisito** | USER-REQ-030 |
| **Prioridad** | 🔴 P0 |
| **Componente** | useUpdateUser |
| **Método** | useUpdateUser() |
| **Automatización** | Pendiente |
| **Estado** | 🟢 PASS |

**Descripción**

Verificar que el método `useUpdateUser()` actualiza el usuario correctamente.

**Precondiciones**

- El servicio de usuarios actualiza correctamente el usuario.

**Pasos**

1. Ejecutar `useUpdateUser()`.
2. Ejecutar la mutación con un usuario válido
3. Esperar la finalización de la mutación.

**Resultado esperado**

- El método retorna la información actualizada del usuario.

---

### USER-031 - Error al actualizar usuario

| | |
|---|---|
| **Requisito** | USER-REQ-031 |
| **Prioridad** | 🔴 P0 |
| **Componente** | useUpdateUser |
| **Método** | useUpdateUser() |
| **Automatización** | Pendiente |
| **Estado** | 🟢 PASS |

**Descripción**

Verificar que el método `useUpdateUser()` expone el error cuando el servicio de usuarios responde con un fallo durante la actualización.

**Precondiciones**

- El servicio de usuarios responde con un error al actualizar el usuario.

**Pasos**

1. Ejecutar `useUpdateUser()`.
2. Ejecutar la mutación con un usuario válido
3. Esperar la finalización de la mutación.

**Resultado esperado**

- El método expone el error retornado por el servicio de usuarios.

---

### USER-032 - Invalidar consulta de usuarios

| | |
|---|---|
| **Requisito** | USER-REQ-032 |
| **Prioridad** | 🔴 P0 |
| **Componente** | useUpdateUser |
| **Método** | useUpdateUser() |
| **Automatización** | Pendiente |
| **Estado** | 🟢 PASS |

**Descripción**

Verificar que el método `useUpdateUser()` invalida la consulta de usuarios cuando la actualización del usuario finaliza correctamente.

**Precondiciones**

- El servicio de usuarios actualiza correctamente el usuario.

**Pasos**

1. Ejecutar `useUpdateUser()`.
2. Ejecutar la mutación con un usuario válido
3. Esperar la finalización de la mutación.

**Resultado esperado**

- El método invalida la consulta identificada por la clave `['users']`.

---

### USER-033 - Actualizar caché del usuario

| | |
|---|---|
| **Requisito** | USER-REQ-033 |
| **Prioridad** | 🔴 P0 |
| **Componente** | useUpdateUser |
| **Método** | useUpdateUser() |
| **Automatización** | Pendiente |
| **Estado** | 🟢 PASS |

**Descripción**

Verificar que el método `useUpdateUser()` actualiza la caché cuando la actualización del usuario finaliza correctamente.

**Precondiciones**

- El servicio de usuarios actualiza correctamente el usuario.

**Pasos**

1. Ejecutar `useUpdateUser()`.
2. Ejecutar la mutación con un usuario válido
3. Esperar la finalización de la mutación.

**Resultado esperado**

- El método actualiza la caché del usuario con la información retornada por el servicio.

---

### USER-040 - Actualizar parcialmente usuario

| | |
|---|---|
| **Requisito** | USER-REQ-040 |
| **Prioridad** | 🔴 P0 |
| **Componente** | usePatchUser |
| **Método** | usePatchUser() |
| **Automatización** | Pendiente |
| **Estado** | 🟢 PASS |

**Descripción**

Verificar que el método `usePatchUser()` actualiza parcialmente el usuario de manera correcta.

**Precondiciones**

- El servicio de usuarios realiza la actualización parcial del usuario correctamente.

**Pasos**

1. Ejecutar `usePatchUser()`.
2. Ejecutar la mutación con un usuario válido
3. Esperar la finalización de la mutación.

**Resultado esperado**

- El método retorna la información actualizada del usuario.

---

### USER-041 - Error al actualizar parcialmente usuario

| | |
|---|---|
| **Requisito** | USER-REQ-041 |
| **Prioridad** | 🔴 P0 |
| **Componente** | usePatchUser |
| **Método** | usePatchUser() |
| **Automatización** | Pendiente |
| **Estado** | 🟢 PASS |

**Descripción**

Verificar que el método `usePatchUser()` expone el error cuando el servicio de usuarios responde con un fallo durante la actualización parcial.

**Precondiciones**

- El servicio de usuarios responde con un error al actualizar parcialmente el usuario.

**Pasos**

1. Ejecutar `usePatchUser()`.
2. Ejecutar la mutación con un usuario válido
3. Esperar la finalización de la mutación.

**Resultado esperado**

- El método expone el error retornado por el servicio de usuarios.

---

### USER-042 - Invalidar consulta de usuarios

| | |
|---|---|
| **Requisito** | USER-REQ-042 |
| **Prioridad** | 🔴 P0 |
| **Componente** | usePatchUser |
| **Método** | usePatchUser() |
| **Automatización** | Pendiente |
| **Estado** | 🟢 PASS |

**Descripción**

Verificar que el método `usePatchUser()` invalida la consulta de usuarios cuando la actualización parcial del usuario finaliza correctamente.

**Precondiciones**

- El servicio de usuarios realiza la actualización parcial del usuario correctamente.

**Pasos**

1. Ejecutar `usePatchUser()`.
2. Ejecutar la mutación con un usuario válido
3. Esperar la finalización de la mutación.

**Resultado esperado**

- El método invalida la consulta identificada por la clave `['users']`.

---

### USER-043 - Invalidar consulta del usuario

| | |
|---|---|
| **Requisito** | USER-REQ-043 |
| **Prioridad** | 🔴 P0 |
| **Componente** | usePatchUser |
| **Método** | usePatchUser() |
| **Automatización** | Pendiente |
| **Estado** | 🟢 PASS |

**Descripción**

Verificar que el método `usePatchUser()` invalida la consulta del usuario cuando la actualización parcial del usuario finaliza correctamente.

**Precondiciones**

- El servicio de usuarios realiza la actualización parcial del usuario correctamente.

**Pasos**

1. Ejecutar `usePatchUser()`.
2. Ejecutar la mutación con un usuario válido
3. Esperar la finalización de la mutación.

**Resultado esperado**

- El método invalida la consulta identificada por la clave `['user', user.id]`.

---

### USER-050 - Eliminar usuario

| | |
|---|---|
| **Requisito** | USER-REQ-050 |
| **Prioridad** | 🔴 P0 |
| **Componente** | useDeleteUser |
| **Método** | useDeleteUser() |
| **Automatización** | Pendiente |
| **Estado** | 🟢 PASS |

**Descripción**

Verificar que el método `useDeleteUser()` elimina el usuario de manera correcta.

**Precondiciones**

- El servicio de usuarios realiza la eliminación del usuario correctamente.

**Pasos**

1. Ejecutar `useDeleteUser()`.
2. Ejecutar la mutación con un usuario válido
3. Esperar la finalización de la mutación.

**Resultado esperado**

- El método retorna le respuesta del servicio de eliminación del usuario.

---

### USER-051 - Error al eliminar usuario

| | |
|---|---|
| **Requisito** | USER-REQ-051 |
| **Prioridad** | 🔴 P0 |
| **Componente** | useDeleteUser |
| **Método** | useDeleteUser() |
| **Automatización** | Pendiente |
| **Estado** | 🟢 PASS|

**Descripción**

Verificar que el método `useDeleteUser()` expone el error cuando el servicio de usuarios responde con un fallo durante la eliminación.

**Precondiciones**

- El servicio de usuarios responde con un error al eliminar el usuario.

**Pasos**

1. Ejecutar `useDeleteUser()`.
2. Ejecutar la mutación con un usuario válido
3. Esperar la finalización de la mutación.

**Resultado esperado**

- El método expone el error retornado por el servicio de usuarios.

---

### USER-052 - Invalidar consulta de usuarios

| | |
|---|---|
| **Requisito** | USER-REQ-052 |
| **Prioridad** | 🔴 P0 |
| **Componente** | useDeleteUser |
| **Método** | useDeleteUser() |
| **Automatización** | Pendiente |
| **Estado** | 🟢 PASS|

**Descripción**

Verificar que el método `useDeleteUser()` invalida la consulta de usuarios cuando la eliminación del usuario finaliza correctamente.

**Precondiciones**

- El servicio de usuarios realiza la eliminación del usuario correctamente.

**Pasos**

1. Ejecutar `useDeleteUser()`.
2. Ejecutar la mutación con un usuario válido
3. Esperar la finalización de la mutación.

**Resultado esperado**

- El método invalida la consulta identificada por la clave `['users']`.

---

### USER-060 - Actualizar estado del usuario

| | |
|---|---|
| **Requisito** | USER-REQ-060 |
| **Prioridad** | 🔴 P0 |
| **Componente** | useUpdateUserStatus |
| **Método** | useUpdateUserStatus() |
| **Automatización** | Pendiente |
| **Estado** | 🟢 PASS |

**Descripción**

Verificar que el método `useUpdateUserStatus()` actualizar el estado del usuario de manera correcta.

**Precondiciones**

- El servicio de usuarios realiza la actualización del estado del usuario correctamente.

**Pasos**

1. Ejecutar `useUpdateUserStatus()`.
2. Ejecutar la mutación con un usuario válido
3. Esperar la finalización de la mutación.

**Resultado esperado**

- El método retorna la información actualizada del usuario.

---

### USER-061 - Error al actualizar estado del usuario

| | |
|---|---|
| **Requisito** | USER-REQ-061 |
| **Prioridad** | 🔴 P0 |
| **Componente** | useUpdateUserStatus |
| **Método** | useUpdateUserStatus() |
| **Automatización** | Pendiente |
| **Estado** | 🟢 PASS |

**Descripción**

Verificar que el método `useUpdateUserStatus()` expone el error cuando el servicio de usuarios responde con un fallo durante la actualización del estado del usuario.

**Precondiciones**

- El servicio de usuarios responde con un error al actualizar el estado del usuario.

**Pasos**

1. Ejecutar `useUpdateUserStatus()`.
2. Ejecutar la mutación con un usuario válido
3. Esperar la finalización de la mutación.

**Resultado esperado**

- El método expone el error retornado por el servicio de usuarios.

---

### USER-062 - Invalidar consulta de usuarios

| | |
|---|---|
| **Requisito** | USER-REQ-062 |
| **Prioridad** | 🔴 P0 |
| **Componente** | useUpdateUserStatus |
| **Método** | useUpdateUserStatus() |
| **Automatización** | Pendiente |
| **Estado** | 🟢 PASS |

**Descripción**

Verificar que el método `useUpdateUserStatus()` invalida la consulta de usuarios cuando la actualización del estado del usuario finaliza correctamente.

**Precondiciones**

- El servicio de usuarios realiza la actualización del estado del usuario correctamente.

**Pasos**

1. Ejecutar `useUpdateUserStatus()`.
2. Ejecutar la mutación con un usuario válido
3. Esperar la finalización de la mutación.

**Resultado esperado**

- El método invalida la consulta identificada por la clave `['users']`.

---

### USER-063 - Invalidar consulta del usuario

| | |
|---|---|
| **Requisito** | USER-REQ-063 |
| **Prioridad** | 🔴 P0 |
| **Componente** | useUpdateUserStatus |
| **Método** | useUpdateUserStatus() |
| **Automatización** | Pendiente |
| **Estado** | 🟢 PASS |

**Descripción**

Verificar que el método `useUpdateUserStatus()` invalida la consulta del usuario cuando la actualización del estado del usuario finaliza correctamente.

**Precondiciones**

- El servicio de usuarios realiza la actualización del estado del usuario correctamente.

**Pasos**

1. Ejecutar `useUpdateUserStatus()`.
2. Ejecutar la mutación con un usuario válido
3. Esperar la finalización de la mutación.

**Resultado esperado**

- El método invalida la consulta identificada por la clave `['user', updatedUser.id]`.

---