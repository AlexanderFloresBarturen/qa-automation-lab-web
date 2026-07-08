# Arquitectura

## Objetivo

QA Automation Lab Web sigue una **arquitectura orientada a funcionalidades (Feature-first)**.

La aplicación se organiza alrededor de las capacidades del negocio y no por tipos de archivos.

Cada funcionalidad es responsable de su propia interfaz, lógica de negocio, comunicación con la API, tipos y pruebas, permitiendo que evolucione de forma independiente y minimizando el acoplamiento con el resto del sistema.

El objetivo principal de esta arquitectura es construir una aplicación escalable, mantenible y preparada para automatización de pruebas desde el inicio del proyecto.

---

## Principios Arquitectónicos

La arquitectura del proyecto sigue los siguientes principios:

- Organización por funcionalidades (Feature-first).
- Alta cohesión.
- Bajo acoplamiento.
- Separación de responsabilidades.
- Componentes reutilizables.
- Código preparado para pruebas automatizadas.
- Escalabilidad progresiva.

Ninguna carpeta existe sin una responsabilidad claramente definida.

---

## Estructura del Proyecto

```text
src/
│
├── app/
│   ├── layouts/
│   ├── providers/
│   ├── router/
│   └── App.tsx
│
├── features/
│   ├── auth/
│   ├── dashboard/
│   ├── password-recovery/
│   └── users/
│
├── shared/
│   ├── api/
│   ├── assets/
│   ├── components/
│   ├── hooks/
│   ├── styles/
│   ├── types/
│   └── utils/
│
└── main.tsx
```

---

## Responsabilidad de las Carpetas

### app/

Contiene la infraestructura general de la aplicación.

Aquí se ubican todos los elementos necesarios para inicializar y configurar React.

Ejemplos:

- Configuración del enrutamiento.
- Layouts globales.
- Providers.
- Configuración general de la aplicación.

En esta carpeta **no debe existir lógica de negocio**.

---

#### layouts/

Contiene los layouts compartidos entre distintas funcionalidades.

Ejemplos:

- MainLayout
- AuthLayout

---

#### providers/

Contiene los proveedores globales de React.

Ejemplos:

- Authentication Provider
- Theme Provider
- Query Provider

---

#### router/

Contiene toda la configuración del sistema de navegación.

Será responsable de definir:

- rutas públicas
- rutas protegidas
- navegación entre páginas

---

## features/

Contiene todas las funcionalidades del sistema.

Cada funcionalidad debe ser autocontenida y responsable de su propia lógica.

Una feature podrá contener:

- páginas
- componentes
- hooks
- comunicación con la API
- tipos
- constantes
- pruebas

Siempre que sea posible, una feature no debe depender directamente de otra.

---

### Ejemplo de una Feature

```text
features/
│
└── users/
    ├── api/
    ├── components/
    ├── hooks/
    ├── pages/
    ├── types/
    ├── constants/
    └── index.ts
```

Toda la lógica relacionada con Usuarios deberá permanecer dentro de esta carpeta.

---

## Funcionalidades Iniciales

Actualmente el proyecto contempla las siguientes funcionalidades:

### Auth

Responsable de:

- Login.
- Logout.
- Gestión de sesión.
- Manejo del JWT.

---

### Users

Responsable de:

- Listar usuarios.
- Crear usuario.
- Editar usuario.
- Eliminar usuario.

---

### Password Recovery

Responsable de:

- Recuperación de contraseña.
- Restablecimiento de contraseña.

---

### Dashboard

Responsable de:

- Pantalla principal.
- Acceso a los distintos módulos de la aplicación.

---

## shared/

Contiene todos los elementos reutilizables entre distintas funcionalidades.

Nada dentro de esta carpeta debe contener lógica de negocio.

---

### api/

Infraestructura de comunicación con el Backend.

Ejemplos:

- Cliente HTTP.
- Configuración de Axios.
- Interceptores.
- Configuración de la API.

---

### assets/

Recursos estáticos compartidos.

Ejemplos:

- Imágenes.
- Iconos.
- Logos.

---

### components/

Componentes reutilizables por toda la aplicación.

Ejemplos:

- Button.
- Input.
- Modal.
- Spinner.
- Table.

Estos componentes deben permanecer completamente genéricos.

---

### hooks/

Hooks reutilizables.

Ejemplos:

- useDebounce
- useLocalStorage
- useTheme

Los hooks específicos de una funcionalidad deben permanecer dentro de su correspondiente Feature.

---

### styles/

Contiene los estilos globales de la aplicación.

Ejemplos:

- Variables CSS.
- Tipografía.
- Temas.
- Estilos globales.

---

### types/

Tipos compartidos por distintas funcionalidades.

Los tipos específicos de cada funcionalidad deberán permanecer dentro de la Feature correspondiente.

---

### utils/

Funciones auxiliares reutilizables.

Ejemplos:

- Validadores.
- Utilidades para fechas.
- Utilidades para JWT.

No debe contener lógica de negocio.

---

## Reglas de Dependencia

La arquitectura sigue reglas estrictas de dependencia.

```text
app
│
├────► features
│
└────► shared

features
│
└────► shared

shared
│
└────► (No depende de features)
```

Estas reglas significan:

- app puede importar elementos desde features y shared.
- features puede importar elementos desde shared.
- shared nunca debe importar elementos desde features.
- Una feature debe evitar depender directamente de otra feature.

Estas restricciones permiten mantener un bajo acoplamiento y facilitan el mantenimiento del proyecto.

---

## Filosofía de Testing

La arquitectura fue diseñada pensando en la automatización de pruebas desde el inicio.

Cada funcionalidad deberá poder incorporar sus propias pruebas.

Ejemplos:

- Pruebas unitarias.
- Pruebas de componentes.

Las pruebas End-to-End se organizarán en una estructura independiente, pero siguiendo la misma organización por funcionalidades.

Ejemplo:

```text
tests/
│
└── playwright/
    │
    └── auth/
        ├── users/
        └── password-recovery/
```

La estructura de las pruebas deberá reflejar la estructura de la aplicación siempre que sea posible.

---

## Filosofía del Proyecto

Este proyecto no busca demostrar habilidades avanzadas de diseño visual.

Su objetivo principal es proporcionar una aplicación suficientemente realista para practicar:

- React.
- TypeScript.
- Consumo de APIs REST.
- Playwright.
- Selenium.
- QA Automation.

Toda funcionalidad incorporada deberá aportar valor al aprendizaje de desarrollo Frontend o automatización de pruebas.

---

## Evolución de la Arquitectura

La arquitectura podrá evolucionar conforme el proyecto crezca.

Sin embargo, cualquier modificación deberá cumplir al menos uno de los siguientes objetivos:

- Reducir el acoplamiento.
- Mejorar la mantenibilidad.
- Mejorar la escalabilidad.
- Facilitar la automatización de pruebas.

No se realizarán cambios arquitectónicos únicamente para seguir tendencias tecnológicas.

Toda decisión deberá estar respaldada por una justificación técnica.

---

## Regla de Reutilización

Todo componente, hook, tipo o utilidad deberá crearse inicialmente dentro de la Feature correspondiente.

Solo cuando dicho elemento sea utilizado por dos o más funcionalidades y no contenga lógica de negocio específica, podrá ser promovido al módulo `shared`.

Esta regla evita la creación prematura de componentes genéricos y mantiene una clara separación entre la lógica de negocio y los elementos reutilizables.

---

## Objetivo Final

Al finalizar el laboratorio, el proyecto deberá demostrar:

- Arquitectura limpia.
- Organización Feature-first.
- Desarrollo Frontend mantenible.
- Automatización profesional con Playwright y Selenium.
- Buenas prácticas de QA Automation.

El objetivo es construir una aplicación con una estructura similar a la utilizada en proyectos profesionales, manteniendo siempre el enfoque educativo del laboratorio.