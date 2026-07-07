# QA Automation Lab Web

Frontend desarrollado con React diseñado como un laboratorio práctico para aprender automatización de pruebas web, testing de interfaces y buenas prácticas de desarrollo frontend.

Este proyecto complementa el repositorio **QA Automation Lab**, consumiendo su API REST y proporcionando una aplicación real sobre la cual implementar distintos tipos de pruebas automatizadas.

El objetivo principal del proyecto no es construir una interfaz compleja, sino disponer de una aplicación suficientemente realista para practicar técnicas utilizadas habitualmente por un QA Automation Engineer.

---

## Objetivos del Proyecto

Este laboratorio fue creado con los siguientes objetivos:

* Consumir una API REST desarrollada con FastAPI.
* Aprender automatización de pruebas web utilizando Playwright y Selenium.
* Aplicar buenas prácticas de arquitectura frontend.
* Implementar pruebas unitarias, de componentes y End-to-End.
* Diseñar una infraestructura de testing mantenible.
* Integrar herramientas modernas de calidad de código.
* Automatizar la validación del proyecto mediante Integración Continua.
* Documentar las decisiones técnicas tomadas durante el desarrollo.

Cada sprint incorporará nuevas capacidades manteniendo una arquitectura limpia y orientada a la automatización.

---

## Filosofía del Proyecto

Este proyecto se desarrolla siguiendo una regla sencilla:

>Cada funcionalidad debe existir porque aporta valor al aprendizaje de QA Automation, >no únicamente porque una aplicación real la tendría.

Por este motivo, las decisiones de desarrollo estarán orientadas a generar escenarios útiles para automatizar pruebas y aplicar patrones utilizados en proyectos profesionales.

---

## Tecnologías Previstas

### Frontend

* React
* TypeScript
* Vite

### Testing

* Pytest
* Playwright
* Selenium
* Vitest
* React Testing Library

### Calidad del Código

* ESLint
* Prettier
* GitHub Actions

### Infraestructura

* Variables de entorno (.env)
* GitHub Actions
* Docker (si resulta necesario durante la evolución del proyecto)

---

## Arquitectura Prevista

```text
  Frontend (React)
        │
        ▼
    Services
        │
        ▼
  FastAPI Backend
        │
        ▼
   PostgreSQL
```

### Arquitectura de testing:

```text
Playwright / Selenium
        │
        ▼
    Frontend
        │
        ▼
   Backend API
        │
        ▼
   PostgreSQL
```

---

## Roadmap

### Sprint 0 — Infraestructura Inicial

* Crear el proyecto React.
* Configurar TypeScript.
* Configurar ESLint.
* Configurar Prettier.
* Configurar GitHub Actions.
* Definir la estructura del proyecto.
* Configurar variables de entorno.
* Documentación inicial.

---

### Sprint 1 — Autenticación

* Login.
* Gestión del JWT.
* Manejo de sesión.
* Protección de rutas.

---

### Sprint 2 — Gestión de Usuarios

* Listado de usuarios.
* Crear usuario.
* Editar usuario.
* Eliminación lógica.
* Validaciones del lado cliente.

---

### Sprint 3 — Automatización con Playwright

* Configuración inicial.
* Primeras pruebas End-to-End.
* Introducción al patrón Page Object Model.
* Integración con GitHub Actions.

---

### Sprint 4 — Automatización con Selenium

* Configuración inicial.
* Automatización de los mismos escenarios implementados con Playwright.
* Comparación entre ambos frameworks.

---

### Sprint 5 — Arquitectura de Testing

* Consolidación del patrón Page Object Model.
* Fixtures reutilizables.
* Datos dinámicos.
* Helpers compartidos.
* Organización de la suite de pruebas.

---

### Sprint 6 — Pruebas Híbridas

* Integración API + UI.
* Preparación de datos mediante la API.
* Validaciones cruzadas entre frontend y backend.

---

### Sprint 7 — Reportes

* Allure Reports.
* Capturas automáticas.
* Videos.
* Reportes de ejecución.
* Evidencias de pruebas.

---

## Estado Actual

Sprint actual: Sprint 0

Estado del proyecto:

* ⏳ Planificación inicial.
* ⏳ Creación del repositorio.
* ⏳ Configuración de la infraestructura.

---

## Relación con otros proyectos

Este repositorio forma parte del laboratorio **QA Automation Lab**.

Repositorio Backend:

* **QA Automation Lab** (FastAPI + PostgreSQL + Pytest + GitHub Actions)

Este proyecto consume la API desarrollada en dicho repositorio y amplía el laboratorio hacia el testing de aplicaciones web.

---

## Visión

Al finalizar el laboratorio se dispondrá de un entorno completo compuesto por:

* Backend profesional.
* Frontend funcional.
* Automatización mediante Playwright.
* Automatización mediante Selenium.
* Pruebas unitarias.
* Pruebas de componentes.
* Pruebas End-to-End.
* Integración Continua.
* Documentación técnica.

El objetivo final será construir un laboratorio que reproduzca, a pequeña escala, un flujo de trabajo similar al utilizado en proyectos profesionales de QA Automation.