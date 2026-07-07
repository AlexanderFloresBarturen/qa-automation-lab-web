# Arquitectura

## Objetivo

El proyecto sigue una arquitectura modular orientada a la mantenibilidad, reutilización de componentes y automatización de pruebas.

La estructura fue diseñada pensando en el crecimiento progresivo del laboratorio y en facilitar la implementación de pruebas unitarias, de componentes y End-to-End.

---

## Estructura del proyecto

```text
src/
│
├── app/
├── assets/
├── components/
├── features/
├── hooks/
├── layouts/
├── routes/
├── services/
├── styles/
├── types/
├── utils/
│
├── App.tsx
└── main.tsx
```

---

## Responsabilidades

### app/

Configuración global de la aplicación.

Ejemplos:

- Providers
- Context
- Configuración general

---

### assets/

Recursos estáticos.

Ejemplos:

- imágenes
- iconos
- logos

---

### components/

Componentes reutilizables.

Ejemplos:

- Button
- Input
- Modal
- Spinner
- Card
- Table

No deben contener lógica de negocio.

---

### features/

Contiene las funcionalidades principales de la aplicación.

Cada funcionalidad será autocontenida.

Ejemplo:

```text
features/

auth/

users/

password-recovery/
```

Cada feature podrá contener sus propios componentes, hooks, tipos y servicios.

Esta carpeta constituye el núcleo funcional de la aplicación.

---

### hooks/

Hooks reutilizables.

Ejemplos:

- useAuth
- useApi
- useDebounce

---

### layouts/

Layouts compartidos entre distintas páginas.

Ejemplos:

- MainLayout
- AuthLayout

---

### routes/

Configuración del enrutamiento.

Aquí residirá la integración con React Router.

---

### services/

Servicios compartidos por toda la aplicación.

Principalmente:

- cliente HTTP
- configuración de la API
- interceptores

Los servicios específicos de una funcionalidad vivirán dentro de su correspondiente feature.

---

### styles/

Estilos globales.

Ejemplos:

- variables CSS
- estilos globales
- tipografía

---

### types/

Tipos compartidos entre distintas funcionalidades.

Los tipos específicos permanecerán dentro de cada feature.

---

### utils/

Funciones auxiliares reutilizables.

Ejemplos:

- validadores
- utilidades para fechas
- utilidades para JWT

---

## Principios de diseño

La arquitectura sigue los siguientes principios:

- Alta cohesión.
- Bajo acoplamiento.
- Separación de responsabilidades.
- Componentes reutilizables.
- Features autocontenidas.
- Preparada para pruebas automatizadas.

---

## Filosofía

La aplicación no pretende demostrar habilidades de diseño visual.

Su propósito es servir como laboratorio para aprender automatización de pruebas web utilizando herramientas profesionales como Playwright y Selenium.

Cada funcionalidad incorporada deberá aportar valor al aprendizaje de QA Automation.

---

## Evolución

La arquitectura podrá evolucionar durante el desarrollo del proyecto.

Sin embargo, cualquier modificación deberá mantener los principios de simplicidad, mantenibilidad y facilidad de automatización establecidos desde el Sprint 0.