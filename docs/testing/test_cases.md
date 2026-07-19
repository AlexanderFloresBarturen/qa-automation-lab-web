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

### Componente

```text
tokenStorage
```

#### AUTH-001 - Guardar token de acceso

| | |
|---|---|
| **Requisito** | AUTH-REQ-001 |
| **Prioridad** | 🔴 P0 |
| **Componente** | tokenStorage |
| **Método** | save() |
| **Automatización** | Pendiente |
| **Estado** | 🟡 Diseñado |

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

#### AUTH-002 - Recuperar token almacenado

| | |
|---|---|
| **Requisito** | AUTH-REQ-002 |
| **Prioridad** | 🔴 P0 |
| **Componente** | tokenStorage |
| **Método** | get() |
| **Automatización** | Pendiente |
| **Estado** | 🟡 Diseñado |

**Descripción**

Verificar que el token almacenado puede recuperarse correctamente desde `localStorage`.

**Precondiciones**

- Existe un token almacenado con el valor `abc123`.

**Pasos**

1. Ejecutar `tokenStorage.get()`.

**Resultado esperado**

- El método devuelve `abc123`.

---

#### AUTH-003 - Eliminar token de acceso

| | |
|---|---|
| **Requisito** | AUTH-REQ-003 |
| **Prioridad** | 🔴 P0 |
| **Componente** | tokenStorage |
| **Método** | remove() |
| **Automatización** | Pendiente |
| **Estado** | 🟡 Diseñado |

**Descripción**

Verificar que el token almacenado puede eliminarse correctamente de `localStorage`.

**Precondiciones**

- Existe un token almacenado con el valor `abc123`.

**Pasos**

1. Ejecutar `tokenStorage.remove()`.

**Resultado esperado**

- La clave `access_token` deja de existir en `localStorage`.

---

#### AUTH-004 - Verificar existencia del token

| | |
|---|---|
| **Requisito** | AUTH-REQ-004 |
| **Prioridad** | 🔴 P0 |
| **Componente** | tokenStorage |
| **Método** | exists() |
| **Automatización** | Pendiente |
| **Estado** | 🟡 Diseñado |

**Descripción**

Verificar que el método `exists()` indica correctamente cuando existe un token almacenado.

**Precondiciones**

- Existe un token almacenado.

**Pasos**

1. Ejecutar `tokenStorage.exists()`.

**Resultado esperado**

- El método devuelve `true`.

---

#### AUTH-005 - Verificar ausencia del token

| | |
|---|---|
| **Requisito** | AUTH-REQ-005 |
| **Prioridad** | 🔴 P0 |
| **Componente** | tokenStorage |
| **Método** | exists() |
| **Automatización** | Pendiente |
| **Estado** | 🟡 Diseñado |

**Descripción**

Verificar que el método `exists()` indica correctamente cuando no existe un token almacenado.

**Precondiciones**

- El `localStorage` está vacío.

**Pasos**

1. Ejecutar `tokenStorage.exists()`.

**Resultado esperado**

- El método devuelve `false`.