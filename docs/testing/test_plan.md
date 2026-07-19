# QA Automation Lab - Test Plan

## Objetivo

Este documento define la estrategia de pruebas para el frontend del proyecto **QA Automation Lab**.

La ejecución seguirá la pirámide de pruebas:

1. Unit Testing
2. Component Testing
3. Integration Testing
4. End-to-End Testing

---

## Alcance

Este plan cubre las pruebas del frontend del proyecto QA Automation Lab.

### Incluye

- Autenticación
- Gestión de usuarios
- Navegación
- Componentes React
- Integración con la API mediante mocks (MSW)
- Flujos End-to-End

### No incluye

- Pruebas de rendimiento
- Pruebas de seguridad
- Pruebas de accesibilidad

---

## Objetivos de calidad

- Garantizar el correcto funcionamiento de las funcionalidades críticas.
- Detectar regresiones durante el desarrollo.
- Mantener una alta cobertura de pruebas automatizadas.
- Facilitar la evolución del proyecto mediante una suite de pruebas mantenible.

---

## Estado

- ⬜ Pendiente
- 🟡 En progreso
- ✅ Completado

---

## Prioridades

| Prioridad | Descripción |
|-----------|-------------|
| 🔴 P0 | Funcionalidades críticas. El proyecto no puede darse por terminado sin ellas. |
| 🟡 P1 | Funcionalidades importantes que aumentan la calidad y cobertura. |
| 🟢 P2 | Mejoras adicionales, documentación y herramientas complementarias. |

---

## Herramientas

| Tipo de prueba | Herramienta |
|----------------|-------------|
| Unit Testing | Vitest |
| Component Testing | React Testing Library |
| Integration Testing | React Testing Library + MSW |
| End-to-End | Playwright |
| End-to-End (alternativo) | Selenium |
| Coverage | Vitest Coverage |

---

# 1. Infraestructura de Testing

## 🔴 P0 - Vitest

- ✅ Instalar Vitest
- ✅ Configurar Vitest
- ✅ Configurar jsdom
- ✅ Configurar setup.ts
- ✅ Configurar coverage
- ✅ Ejecutar primer test

## 🔴 P0 - React Testing Library

### Instalación

- ✅ Instalar React Testing Library

### Infraestructura

- [ ] Configurar render personalizado
- [ ] Configurar user-event

## 🟡 P1 - Infraestructura compartida

- ✅ setup.ts
- ✅ vitest.config.ts
- ✅ coverage
- ✅ smoke test
- [ ] render.tsx
- [ ] fixtures
- [ ] mocks

## 🟡 P1 - MSW

- [ ] Configurar MSW

---

# 2. Unit Testing

## 🔴 P0 - Authentication

### tokenStorage

- ✅ AUTH-001 Guardar token
- ✅ AUTH-002 Recuperar token
- ✅ AUTH-003 Eliminar token
- ✅ AUTH-004 Verificar existencia del token
- ✅ AUTH-005 Verificar ausencia del token

### useAuth

- [ ] AUTH-010 Usuario autenticado
- [ ] AUTH-011 Usuario no autenticado

### useLogout

- [ ] AUTH-020 Elimina el token

### useLogin

- [ ] AUTH-030 Login exitoso
- [ ] AUTH-031 Error de autenticación
- [ ] AUTH-032 Guarda el token

---

## 🔴 P0 - Users

### useUsers

- [ ] USER-001 Obtiene listado
- [ ] USER-002 Error del servidor

### useUser

- [ ] USER-010 Obtiene usuario
- [ ] USER-011 Usuario inexistente

### useCreateUser

- [ ] USER-020 Creación correcta
- [ ] USER-021 Error de validación

### useUpdateUser

- [ ] USER-030 Actualización correcta
- [ ] USER-031 Error del servidor

### usePatchUser

- [ ] USER-040 Actualización parcial
- [ ] USER-041 Payload vacío

### useDeleteUser

- [ ] USER-050 Eliminación lógica

### useUpdateUserStatus

- [ ] USER-060 Activación correcta

---

# 3. Component Testing

## 🔴 P0 - Layout

### Header

- [ ] Renderiza correctamente
- [ ] Botón Logout
- [ ] Ejecuta logout

### AppLayout

- [ ] Renderiza Outlet

---

## 🔴 P0 - LoginForm

- [ ] Render inicial
- [ ] Email requerido
- [ ] Password requerido
- [ ] Submit exitoso
- [ ] Error de autenticación

---

## 🔴 P0 - UserForm

- [ ] Render inicial
- [ ] Validaciones
- [ ] Submit correcto

---

## 🟡 P1 - EditUserForm

- [ ] Precarga datos
- [ ] Validaciones
- [ ] Submit correcto

---

## 🟡 P1 - PatchUserForm

- [ ] Precarga datos
- [ ] Detecta cambios
- [ ] Payload parcial
- [ ] Error cuando no hay cambios

---

# 4. Integration Testing

## 🔴 P0 - Navegación

- [ ] Login → Dashboard
- [ ] Dashboard → Users
- [ ] Users → Detail
- [ ] Detail → Edit
- [ ] Detail → Patch

---

## 🔴 P0 - CRUD

- [ ] Crear usuario
- [ ] Editar usuario
- [ ] PATCH usuario
- [ ] Eliminar usuario
- [ ] Reactivar usuario

---

## 🟡 P1 - React Query

- [ ] Invalidación de caché
- [ ] Refetch automático

---

## 🟡 P1 - Manejo de errores

- [ ] Error 400
- [ ] Error 401
- [ ] Error 404
- [ ] Error 409
- [ ] Error 500

---

# 5. API Mocking

## 🟡 P1 - Auth

- [ ] Login correcto
- [ ] Login incorrecto

## 🟡 P1 - Users

- [ ] GET /users
- [ ] GET /users/{id}
- [ ] POST /users
- [ ] PUT /users/{id}
- [ ] PATCH /users/{id}
- [ ] PATCH /users/{id}/status
- [ ] DELETE /users/{id}

---

# 6. End-to-End (Playwright)

## 🔴 P0 - Login

- [ ] Login exitoso
- [ ] Credenciales inválidas

---

## 🔴 P0 - CRUD

- [ ] Crear usuario
- [ ] Ver detalle
- [ ] Editar usuario
- [ ] PATCH usuario
- [ ] Eliminar usuario
- [ ] Reactivar usuario

---

## 🔴 P0 - Navegación

- [ ] Protected Routes
- [ ] Guest Routes
- [ ] Logout

---

## 🟡 P1 - Casos negativos

- [ ] Error 404
- [ ] Error 500
- [ ] Formulario inválido

---

# 7. End-to-End (Selenium)

## 🟢 P2 - Smoke Tests

- [ ] Login
- [ ] Crear usuario
- [ ] Logout

---

# 8. Cobertura objetivo

| Métrica | Objetivo |
|----------|----------|
| Statements | ≥ 90% |
| Branches | ≥ 90% |
| Functions | ≥ 90% |
| Lines | ≥ 90% |

---

# 9. CI/CD

## 🟢 P2

- [ ] Ejecutar Unit Tests
- [ ] Ejecutar Component Tests
- [ ] Ejecutar Integration Tests
- [ ] Ejecutar Playwright
- [ ] Publicar Coverage

---

# 10. Documentación

## 🟢 P2

- [ ] README de pruebas
- [ ] Cómo ejecutar Unit Tests
- [ ] Cómo ejecutar Component Tests
- [ ] Cómo ejecutar Integration Tests
- [ ] Cómo ejecutar Playwright
- [ ] Cómo ejecutar Selenium
- [ ] Explicar estructura del proyecto

---

# 11. Especificaciones BDD (Gherkin)

## 🔴 P0 - Login

- [ ] Login exitoso
- [ ] Login inválido

## 🔴 P0 - Users

- [ ] Crear usuario
- [ ] Editar usuario
- [ ] PATCH usuario
- [ ] Eliminar usuario
- [ ] Reactivar usuario

## 🔴 P0 - Navegación

- [ ] Protected Routes
- [ ] Guest Routes
- [ ] Logout

---

## Criterios de salida

El proyecto se considerará completamente probado cuando:

- Todas las pruebas P0 estén implementadas y aprobadas.
- No existan pruebas automatizadas fallidas.
- La cobertura mínima sea igual o superior al 90%.
- Los flujos End-to-End principales se ejecuten correctamente.

---

## Progreso

| Área | Estado |
|------|--------|
| Infraestructura | ✅ |
| Unit Testing | ⬜ |
| Component Testing | ⬜ |
| Integration Testing | ⬜ |
| API Mocking | ⬜ |
| Playwright | ⬜ |
| Selenium | ⬜ |
| Coverage | ⬜ |
| CI/CD | ⬜ |
| Documentación | ⬜ |