# QA Automation Lab - Test Plan

## Objetivo

Este documento define la estrategia de pruebas para el frontend del proyecto **QA Automation Lab**.

La ejecución seguirá la pirámide de pruebas:

1. Unit Testing
2. Component Testing
3. Integration Testing
4. End-to-End Testing

---

## Estado

- [ ] Pendiente
- [~] En progreso
- [x] Completado

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

## 1. Configuración del entorno

### 🔴 P0 - Vitest

- [x] Instalar Vitest
- [x] Configurar Vitest
- [x] Configurar jsdom
- [x] Configurar setup.ts
- [x] Configurar coverage
- [x] Ejecutar primer test

### 🔴 P0 - React Testing Library

#### Instalación

- [x] Instalar React Testing Library

#### Infraestructura

- [ ] Configurar render personalizado
- [ ] Configurar user-event

### 🟡 P1 - Infraestructura

#### Base

- [x] setup.ts
- [x] vitest.config.ts
- [x] coverage
- [x] smoke test

#### Compartida

- [ ] render.tsx
- [ ] fixtures
- [ ] mocks

---

## 2. Unit Testing

### 🔴 P0 - Auth

#### tokenStorage

- [ ] save()
- [ ] get()
- [ ] remove()
- [ ] exists()

#### useAuth

- [ ] Usuario autenticado
- [ ] Usuario no autenticado

#### useLogout

- [ ] Elimina el token

#### useLogin

- [ ] Login exitoso
- [ ] Error de autenticación
- [ ] Guarda el token

---

### 🔴 P0 - Users

#### useUsers

- [ ] Obtiene listado
- [ ] Error del servidor

#### useUser

- [ ] Obtiene usuario
- [ ] Usuario inexistente

#### useCreateUser

- [ ] Creación correcta
- [ ] Error de validación

#### useUpdateUser

- [ ] Actualización correcta
- [ ] Error del servidor

#### usePatchUser

- [ ] Actualización parcial
- [ ] Payload vacío

#### useDeleteUser

- [ ] Eliminación lógica

#### useUpdateUserStatus

- [ ] Activación correcta

---

## 3. Component Testing

### 🔴 P0 - Layout

#### Header

- [ ] Renderiza correctamente
- [ ] Botón Logout
- [ ] Ejecuta logout

#### AppLayout

- [ ] Renderiza Outlet

---

### 🔴 P0 - LoginForm

- [ ] Render inicial
- [ ] Email requerido
- [ ] Password requerido
- [ ] Submit exitoso
- [ ] Error de autenticación

---

### 🔴 P0 - UserForm

- [ ] Render inicial
- [ ] Validaciones
- [ ] Submit correcto

---

### 🟡 P1 - EditUserForm

- [ ] Precarga datos
- [ ] Validaciones
- [ ] Submit correcto

---

### 🟡 P1 - PatchUserForm

- [ ] Precarga datos
- [ ] Detecta cambios
- [ ] Payload parcial
- [ ] Error cuando no hay cambios

---

## 4. Integration Testing

### 🔴 P0 - Navegación

- [ ] Login → Dashboard
- [ ] Dashboard → Users
- [ ] Users → Detail
- [ ] Detail → Edit
- [ ] Detail → Patch

---

### 🔴 P0 - CRUD

- [ ] Crear usuario
- [ ] Editar usuario
- [ ] PATCH usuario
- [ ] Eliminar usuario
- [ ] Reactivar usuario

---

### 🟡 P1 - React Query

- [ ] Invalidación de caché
- [ ] Refetch automático

---

### 🟡 P1 - Manejo de errores

- [ ] Error 400
- [ ] Error 401
- [ ] Error 404
- [ ] Error 409
- [ ] Error 500

---

## 5. API Mocking (MSW)

### 🟡 P1

- [ ] Configurar MSW

#### Auth

- [ ] Login correcto
- [ ] Login incorrecto

#### Users

- [ ] GET /users
- [ ] GET /users/{id}
- [ ] POST /users
- [ ] PUT /users/{id}
- [ ] PATCH /users/{id}
- [ ] PATCH /users/{id}/status
- [ ] DELETE /users/{id}

---

## 6. End-to-End (Playwright)

### 🔴 P0 - Login

- [ ] Login exitoso
- [ ] Credenciales inválidas

---

### 🔴 P0 - CRUD

- [ ] Crear usuario
- [ ] Ver detalle
- [ ] Editar usuario
- [ ] PATCH usuario
- [ ] Eliminar usuario
- [ ] Reactivar usuario

---

### 🔴 P0 - Navegación

- [ ] Protected Routes
- [ ] Guest Routes
- [ ] Logout

---

### 🟡 P1 - Casos negativos

- [ ] Error 404
- [ ] Error 500
- [ ] Formulario inválido

---

## 7. End-to-End (Selenium)

### 🟢 P2 - Smoke Tests

- [ ] Login
- [ ] Crear usuario
- [ ] Logout

---

## 8. Cobertura

### 🟡 P1

- [ ] >90% Statements
- [ ] >90% Branches
- [ ] >90% Functions
- [ ] >90% Lines

---

## 9. CI/CD

### 🟢 P2

- [ ] Ejecutar Unit Tests
- [ ] Ejecutar Component Tests
- [ ] Ejecutar Integration Tests
- [ ] Ejecutar Playwright
- [ ] Publicar Coverage

---

## 10. Documentación

### 🟢 P2

- [ ] README de pruebas
- [ ] Cómo ejecutar Unit Tests
- [ ] Cómo ejecutar Component Tests
- [ ] Cómo ejecutar Integration Tests
- [ ] Cómo ejecutar Playwright
- [ ] Cómo ejecutar Selenium
- [ ] Explicar estructura del proyecto

---

## 11. Especificaciones BDD (Gherkin)

### 🔴 P0

#### Login

- [ ] Login exitoso
- [ ] Login inválido

#### Users

- [ ] Crear usuario
- [ ] Editar usuario
- [ ] PATCH usuario
- [ ] Eliminar usuario
- [ ] Reactivar usuario

#### Navegación

- [ ] Protected Routes
- [ ] Guest Routes
- [ ] Logout

---

## Progreso

| Área | Estado |
|------|--------|
| Configuración | ✅ |
| Unit Testing | ⬜ |
| Component Testing | ⬜ |
| Integration Testing | ⬜ |
| MSW | ⬜ |
| Playwright | ⬜ |
| Selenium | ⬜ |
| Coverage | ⬜ |
| CI/CD | ⬜ |
| Documentación | ⬜ |