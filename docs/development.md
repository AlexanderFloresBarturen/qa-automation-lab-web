# Desarrollo

Este documento registra las decisiones técnicas tomadas durante el desarrollo del proyecto.

---

## Sprint 0 - Infraestructura Inicial

### Objetivos

- Crear la infraestructura base del proyecto.
- Definir la arquitectura del frontend.
- Configurar herramientas de calidad.
- Preparar el proyecto para futuras automatizaciones.

---

### Decisiones Adoptadas

#### React + TypeScript

Se eligió React con TypeScript utilizando Vite como herramienta de construcción.

Motivos:

- Amplia adopción en la industria.
- Excelente integración con herramientas de testing.
- Buen soporte para tipado estático.
- Arranque rápido del proyecto.

---

#### ESLint

Se decidió utilizar la configuración Flat Config proporcionada por Vite.

Inicialmente se utilizarán las reglas recomendadas.

Las reglas adicionales se incorporarán únicamente cuando exista una necesidad justificada.

---

#### Prettier

Prettier será el responsable exclusivo del formato del código.

ESLint se utilizará únicamente para análisis estático y calidad.

Esta separación sigue la misma filosofía aplicada en el proyecto Backend (Ruff + Black).

---

#### GitHub Actions

Desde el Sprint 0 el proyecto incorpora Integración Continua.

Actualmente el pipeline valida:

- Instalación de dependencias.
- ESLint.
- Prettier.
- Build del proyecto.

La suite de pruebas se incorporará progresivamente durante los siguientes sprints.

---

#### Arquitectura

Se adopta una arquitectura modular orientada a funcionalidades (Feature-first).

El objetivo es facilitar:

- mantenimiento,
- reutilización,
- crecimiento del proyecto,
- automatización de pruebas.

---

### Filosofía del Proyecto

Cada funcionalidad deberá aportar valor al aprendizaje de QA Automation.

No se desarrollarán pantallas únicamente por motivos estéticos.

La prioridad será generar escenarios útiles para automatización mediante Playwright y Selenium.

---

### Estado Actual

Sprint actual:

Sprint 0

Estado:

- ✅ React
- ✅ TypeScript
- ✅ ESLint
- ✅ Prettier
- ✅ GitHub Actions
- ✅ Arquitectura inicial

Pendiente:

- Vitest
- React Testing Library
- Playwright
- Selenium