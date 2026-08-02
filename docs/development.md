# Desarrollo

## Objetivo

Este documento registra las decisiones técnicas adoptadas durante el desarrollo de **QA Automation Lab Web**.

Su propósito es explicar el razonamiento detrás de la arquitectura, las herramientas utilizadas y la evolución del proyecto a lo largo de los distintos sprints.

La estructura del proyecto se documenta en `architecture.md`. Este documento se centra exclusivamente en las decisiones de desarrollo.

---

## Filosofía del Proyecto

QA Automation Lab Web no tiene como objetivo principal construir una aplicación visualmente compleja.

Su propósito es proporcionar un laboratorio práctico para aprender:

- Desarrollo Frontend moderno.
- Consumo de APIs REST.
- Automatización de pruebas web.
- Buenas prácticas de arquitectura.
- Integración Continua.

Cada funcionalidad incorporada al proyecto deberá aportar valor al aprendizaje de React, TypeScript o QA Automation.

La prioridad del proyecto será siempre la calidad del código, la mantenibilidad y la automatización de pruebas.

---

## Principios de Desarrollo

Durante el desarrollo del proyecto se seguirán las siguientes reglas.

### Calidad antes que velocidad

La incorporación de nuevas funcionalidades nunca tendrá prioridad sobre la calidad del código.

Antes de implementar nuevas características deberán mantenerse:

- compilación correcta;
- linting sin errores;
- formato consistente;
- Integración Continua en estado verde.

---

### Arquitectura antes que implementación

La arquitectura deberá diseñarse antes de implementar nuevas funcionalidades.

Toda modificación arquitectónica deberá responder a una necesidad técnica claramente identificada.

---

### Feature-first

Toda funcionalidad nueva deberá desarrollarse inicialmente dentro de su correspondiente Feature.

La lógica del negocio nunca deberá implementarse dentro de carpetas compartidas.

---

### Reutilización progresiva

Todo componente, hook, tipo o utilidad deberá crearse inicialmente dentro de la Feature correspondiente.

Únicamente cuando dicho elemento sea utilizado por dos o más funcionalidades y no contenga lógica de negocio específica, podrá ser promovido al módulo `shared`.

Esta regla evita la creación prematura de componentes genéricos y mantiene una clara separación entre la lógica de negocio y los elementos reutilizables.

---

### Automatización desde el diseño

La aplicación deberá construirse pensando desde el inicio en la automatización de pruebas.

Cada pantalla deberá facilitar su automatización mediante herramientas como:

- Playwright.
- Selenium.

La estructura del proyecto deberá favorecer la creación de pruebas mantenibles.

---

### Calidad verificable

Toda funcionalidad incorporada al proyecto deberá incluir, cuando corresponda:

- requisitos funcionales
- casos de prueba
- pruebas automatizadas

El desarrollo de nuevas funcionalidades deberá priorizar la verificabilidad y la mantenibilidad antes que la incorporación de nuevas características.

---

## Herramientas del Proyecto

Actualmente el proyecto utiliza las siguientes herramientas.

### Frontend

- React
- TypeScript
- Vite
- React Router
- React Hook Form
- Zod
- Axios

---

### Testing

- Vitest
- React Testing Library

---

### Integración Continua

- GitHub Actions

---

### Próximas herramientas

Durante los siguientes sprints se incorporarán:

- Playwright
- Selenium
- Allure Reports

---

## Registro de Decisiones Arquitectónicas

Este apartado registra las decisiones más importantes adoptadas durante el desarrollo del proyecto.

---

### ADR-001

#### Título

Adoptar una arquitectura Feature-first.

#### Estado

Aceptada.

#### Contexto

El proyecto evolucionará progresivamente incorporando múltiples funcionalidades independientes.

Entre ellas:

- Autenticación.
- Gestión de Usuarios.
- Recuperación de Contraseña.
- Dashboard.

Además, la aplicación servirá como base para pruebas automatizadas mediante Playwright y Selenium.

Una arquitectura organizada exclusivamente por capas dificultaría el crecimiento del proyecto.

#### Decisión

Se adopta una arquitectura Feature-first.

Cada funcionalidad será responsable de su propia interfaz, lógica de negocio, comunicación con la API, tipos y pruebas.

Los elementos reutilizables permanecerán dentro del módulo `shared`.

#### Consecuencias

Ventajas:

- Mayor cohesión.
- Menor acoplamiento.
- Escalabilidad.
- Facilita la automatización de pruebas.
- Organización similar a proyectos profesionales.

Inconvenientes:

- Mayor cantidad de carpetas.
- Curva de aprendizaje ligeramente superior.

Se considera que los beneficios compensan ampliamente esta complejidad adicional.

---

### ADR-002

#### Título

Separar la infraestructura de la lógica del negocio.

#### Estado

Aceptada.

#### Contexto

La aplicación requiere elementos globales que no pertenecen a ninguna funcionalidad específica.

Ejemplos:

- Router.
- Providers.
- Layouts.

#### Decisión

Crear el módulo `app` como responsable exclusivo de la infraestructura de la aplicación.

#### Consecuencias

La lógica del negocio permanece completamente aislada dentro de las Features.

---

### ADR-003

#### Título

Crear un módulo Shared.

#### Estado

Aceptada.

#### Contexto

Existen componentes y utilidades reutilizables por múltiples funcionalidades.

Sin embargo, crear elementos compartidos prematuramente incrementa el acoplamiento.

#### Decisión

Todo elemento nuevo se desarrollará inicialmente dentro de una Feature.

Únicamente cuando sea reutilizado por múltiples funcionalidades será promovido a `shared`.

#### Consecuencias

Se evita la creación de componentes genéricos innecesarios y el crecimiento descontrolado del módulo compartido.

---

### ADR-004

#### Título

Separar los casos de uso de la infraestructura.

#### Estado

Aceptada.

#### Contexto

Las funcionalidades de la aplicación requieren comunicarse con el backend y gestionar diferentes recursos de infraestructura (HTTP, almacenamiento local, variables de entorno).

Permitir que las páginas accedan directamente a estos recursos incrementaría el acoplamiento y dificultaría las pruebas.

#### Decisión

Cada caso de uso deberá implementarse mediante hooks especializados.

Las páginas nunca accederán directamente a:

* Axios.
* Local Storage.
* Variables de entorno.

La comunicación seguirá siempre la siguiente arquitectura:

```text
Página
↓
Hook
↓
API
↓
Infraestructura
↓
Backend
```

#### Consecuencias

Ventajas:

* Bajo acoplamiento.
* Mejor mantenibilidad.
* Mayor facilidad para pruebas unitarias.
* Posibilidad de sustituir la infraestructura sin modificar la interfaz de usuario.

---

### ADR-005

#### Título

Centralizar la gestión de autenticación dentro de la Feature Auth.

#### Estado

Aceptada.

#### Contexto

La autenticación implica responsabilidades diferentes:

* Validación de formularios.
* Comunicación HTTP.
* Persistencia del JWT.
* Control de acceso.
* Gestión de sesión.

Concentrar toda esta lógica en un único componente produciría una alta complejidad.

#### Decisión

La autenticación se divide en módulos especializados.

* useLoginForm
* useLogin
* authApi
* tokenStorage
* useAuth
* useLogout
* ProtectedRoute
* GuestRoute

Cada módulo posee una única responsabilidad.

#### Consecuencias

La autenticación queda desacoplada de React Router, Axios y Local Storage, facilitando futuras modificaciones como Refresh Tokens o revocación de sesiones.

---

### ADR-006

#### Título

Diseñar la lógica de negocio para facilitar las pruebas unitarias.

#### Estado

Aceptada.

#### Contexto

El proyecto tiene como uno de sus objetivos principales el aprendizaje de QA Automation.

Para facilitar las pruebas unitarias, la lógica de negocio debe permanecer desacoplada de la interfaz de usuario y la infraestructura.

#### Decisión

La lógica de negocio se implementará mediante hooks especializados.

Cada hook tendrá una única responsabilidad y dependerá exclusivamente de servicios de infraestructura abstraídos.

Las páginas y componentes serán responsables únicamente de la presentación.

#### Consecuencias

Ventajas:

- Mayor facilidad para pruebas unitarias.
- Bajo acoplamiento.
- Hooks reutilizables.
- Mejor mantenibilidad.
- Mayor cobertura mediante Vitest y React Testing Library.

---

## Sprint 0

### Objetivo

Construir la infraestructura base del proyecto.

El Sprint 0 tiene como finalidad dejar preparada una base sólida antes de implementar cualquier funcionalidad.

---

### Trabajo realizado

Durante este Sprint se realizaron las siguientes tareas.

#### Repositorio

- Creación del repositorio.
- Configuración inicial de Git.

---

#### Documentación

- README.
- architecture.md.
- development.md.

---

#### Frontend

- React.
- TypeScript.
- Vite.

---

#### Calidad del Código

- ESLint.
- Prettier.

---

#### Integración Continua

- GitHub Actions.
- Build automático.
- Verificación de lint.
- Verificación de formato.

---

#### Arquitectura

- Definición de una arquitectura Feature-first.
- Separación entre `app`, `features` y `shared`.
- Definición de reglas de dependencia.

---

### Lecciones aprendidas

Durante el Sprint 0 se identificó la importancia de definir la arquitectura antes de comenzar el desarrollo de funcionalidades.

La configuración inicial requirió varios ajustes debido a la reorganización del proyecto, validando la utilidad de contar con un pipeline de Integración Continua desde el primer día.

---

## Sprint 1

### Objetivo

Implementar la infraestructura de autenticación de la aplicación.

---

### Trabajo realizado

#### Navagación

* React Router.
* Layouts públicos y privados.
* Alias de rutas.

---

#### Formularios

* React Hook Form.
* Zod.
* Validaciones tipadas.

---

#### Infraestructura HTTP

* Axios.
* Cliente HTTP centralizado.
* Variables de entorno.
* Configuración compartida.

---

#### Autenticación

* Login.
* Persistencia del JWT.
* Gestión del token.
* Logout.
* Estado de autenticación.
* Rutas protegidas.
* Rutas para invitados.

---

#### Backend

* Integración con FastAPI.
* Autenticación OAuth2.
* Consumo del endpoint /login.

---

### Lecciones aprendidas

* La separación entre formulario y caso de uso simplifica considerablemente la mantenibilidad.
* Centralizar la infraestructura HTTP evita duplicación.
* La encapsulación de localStorage facilita la evolución futura del mecanismo de autenticación.
* La protección de rutas debe implementarse mediante componentes especializados y no dentro de las páginas.

---

## Sprint 2

### Objetivo

Implementar el módulo de Gestión de Usuarios.

---

### Trabajo realizado

#### Gestión de usuarios

- Listado de usuarios.
- Consulta de usuario.
- Creación.
- Actualización.
- Actualización parcial.
- Eliminación lógica.
- Cambio de estado.

---

#### Arquitectura

- Casos de uso mediante hooks.
- Separación API/Hooks.
- Fixtures reutilizables para pruebas.

---

#### Backend

- Integración completa con la API REST.

---

### Lecciones aprendidas

- React Query simplifica la gestión del estado remoto.
- La separación entre hooks y API facilita el testing.
- Las mutaciones requieren estrategias distintas para la gestión de caché.

---

## Sprint 3

### Objetivo

Incorporar pruebas unitarias desde las primeras etapas de desarrollo.

### Trabajo realizado

#### Testing

- Vitest.
- React Testing Library.
- Mocking.
- Spy.
- Fixtures reutilizables.
- Query Wrapper.
- Cobertura de hooks de Auth.
- Cobertura de hooks de Users.

---

#### Documentación QA

- Requirements.
- Test plan.
- Test cases.
- Test execution.

---

#### Integración continua

- Ejecución automática de pruebas unitarias.

---

### Lecciona aprendidas

- Diseñar para ser probado produce una arquitectura más desacoplada.
- React Query requiere estrategias específicas para probar mutaciones y caché.
- Los fixtures reducen considerablemente la duplicación de código.

---

## Estado Actual

Sprint actual:

**Sprint 4**

Infraestructura completada:

- ✅ React
- ✅ TypeScript
- ✅ Vite
- ✅ React Router
- ✅ Axios
- ✅ React Hook Form
- ✅ Zod
- ✅ GitHub Actions
- ✅ Arquitectura Feature-first
- ✅ Sistema de autenticación
- ✅ Protección de rutas
- ✅ Vitest
- ✅ React Testing Library
- ✅ Pruebas unitarias

Próximo objetivo:

Implementar el módulo de Recuperación de Contraseña y comenzar la automatización End-to-End.

---

## Convenciones de Desarrollo

- Las páginas no deberán acceder directamente a la infraestructura.
- Los hooks representan casos de uso.
- La comunicación HTTP se realizará exclusivamente mediante shared/api.
- La gestión del JWT permanecerá encapsulada en features/auth/storage.
- Se evitará la creación prematura de componentes reutilizables.
- Toda nueva funcionalidad deberá mantener el principio de responsabilidad única.
- Cada caso de uso deberá contar con pruebas unitarias.
- Los datos de prueba reutilizables deberán centralizarse mediante fixtures.

---

## Evolución del Documento

Este documento deberá actualizarse al finalizar cada Sprint.

Toda decisión técnica relevante deberá quedar registrada junto con su justificación.

El objetivo es mantener un historial técnico del proyecto que permita comprender la evolución de la arquitectura y del proceso de desarrollo.