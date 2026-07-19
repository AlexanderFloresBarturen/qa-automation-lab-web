# QA Automation Lab - Test Execution

## Objetivo

Este documento registra el estado de ejecución de las pruebas automatizadas del proyecto.

Cada registro está asociado a un caso de prueba definido en [test_cases.md](./test_cases.md).

Los resultados se actualizarán conforme se implementen y ejecuten las pruebas.

---

## Convenciones

| Estado | Descripción |
|---------|-------------|
| 🟡 Pendiente | Caso diseñado pero aún no implementado. |
| 🟢 PASS | La prueba se ejecutó correctamente. |
| 🔴 FAIL | La prueba falló. |
| ⚪ SKIPPED | La prueba fue omitida. |

## Autenticación

### Información de la ejecución

| Campo | Valor |
|-------|-------|
| Proyecto | React Authentication |
| Módulo | tokenStorage |
| Entorno | Vitest + jsdom |
| Fecha | 19-07-2026 |
| Ejecutado por | Alex |
| Resultado general | ✅ Aprobado |

---

### Resultados de ejecución

| Test ID | Caso de prueba | Resultado esperado | Resultado obtenido | Estado | Observaciones |
|---------|----------------|--------------------|--------------------|--------|---------------|
| AUTH-001 | Debe almacenar el token de acceso | El token se almacena en localStorage con la clave `access_token`. | El token fue almacenado correctamente. | 🟢 PASS | Sin incidencias. |
| AUTH-002 | Debe recuperar el token almacenado | Se devuelve el token previamente almacenado. | Se obtuvo el valor esperado (`abc123`). | 🟢 PASS | Sin incidencias. |
| AUTH-003 | Debe eliminar el token almacenado | La clave `access_token` deja de existir en `localStorage` | El token fue eliminado correctamente. | 🟢 PASS | Sin incidencias. |
| AUTH-004 | Debe verificar la existencia del token almacenado | Verificar que el método `exists()` indica correctamente cuando existe un token almacenado. | Se obtuvo el valor esperado (`true`). | 🟢 PASS | Sin incidencias. |
| AUTH-005 | Debe recuperar la inexistencia del token almacenado | Verificar que el método `exists()` indica correctamente cuando no existe un token almacenado. | Se obtuvo el valor esperado (`false`). | 🟢 PASS | Sin incidencias. |

---

### Resumen

| Total | PASS | FAIL | Bloqueados |
|------:|-----:|-----:|-----------:|
| 5 | 5 | 0 | 0 |

---

