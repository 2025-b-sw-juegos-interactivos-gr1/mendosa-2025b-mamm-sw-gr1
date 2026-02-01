# Planificación y Gestión de Proyecto  
# Uber Eats Delivery 3D – Proyecto 02 Bimestre

**Fecha:** 1 de febrero de 2026  
**Metodología:** Kanban ágil con cadencia semanal  
**Herramienta sugerida:** GitHub Projects (Columns: Backlog → In Progress → Review/UX → Done)  
**Regla de oro:** No se codifica; solo organización, diseño y documentación.

---

## 1. Épicas (mapa a GDD)
1) Investigación y Concepto  
2) Diseño MDA y Gameplay  
3) Mecánicas Core y Balance  
4) Narrativa y Mundo  
5) Niveles y Espacios  
6) Arte y Audio  
7) Arquitectura y Datos  
8) UX y Accesibilidad  
9) QA y Balance Documental

## 2. Backlog de Historias de Usuario (ejemplos con estimación)
| ID | Historia | Criterios de aceptación | Estimación (pts) | Épica |
|----|----------|-------------------------|------------------|-------|
| US-01 | Como jugador quiero una flecha que cambie color según el objetivo para orientarme. | Flecha verde a restaurante, amarilla a destino; responde en <100 ms al cambiar objetivo. | 3 | Mecánicas Core |
| US-02 | Como jugador quiero que los choques reduzcan mi propina para sentir riesgo. | Fórmula de propina documentada; penalización por choque descrita. | 2 | Mecánicas Core |
| US-03 | Como diseñador quiero editar un JSON de pedidos sin tocar código. | Formato JSON definido; ejemplo de archivo de pedidos. | 1 | Arquitectura y Datos |
| US-04 | Como jugador quiero un tutorial con un solo pedido y sin penalizaciones. | Flow de tutorial descrito; condiciones de victoria/fin definidas. | 3 | Niveles |
| US-05 | Como artista quiero una paleta aprobada y mockup de HUD. | Paleta HEX y mockup de HUD entregados. | 2 | Arte y Audio |
| US-06 | Como QA quiero checklist de pruebas de balance. | Checklist de parámetros (velocidad, propinas, tiempos) documentado. | 2 | QA |

## 3. Roadmap y Hitos (fechas absolutas)
- **Semana 1 (3–7 feb 2026):** Validar GDD+MDA, cerrar mockup HUD, definir JSON base.  
- **Semana 2 (10–14 feb 2026):** Diagramas UML, contratos de datos, mapa 2D del nivel.  
- **Semana 3 (17–21 feb 2026):** Ajuste de balance y accesibilidad; moodboard final.  
- **Semana 4 (24–28 feb 2026):** Revisión integral, checklist final, preparación de demo no jugable.

## 4. Configuración obligatoria de GitHub Project
- Crear un **Proyecto** tipo *Board* llamado `Proyecto02-UberEats3D` enlazado a este repo.  
- Columnas mínimas: `Backlog`, `In Progress`, `Review/UX`, `Done`.  
- Limitar WIP en `In Progress` a 3 tarjetas.  
- Labels requeridas: `epic/*` (una por épica), `gameplay`, `ui`, `art`, `audio`, `architecture`, `docs`, `qa`, `tutorial`.  
- Cada historia debe: tener criterio de aceptación, estimación en puntos, épica asignada y checklist de sub‑tareas.  
- Entregable: captura de pantalla del board con al menos 6 tarjetas distribuidas en columnas y subida a `docs/gestion/board.png` (o similar).

## 5. Política de Flujo y Definiciones
- **WIP máximo:** 3 tarjetas por columna “In Progress”.  
- **Definition of Ready:** Historia con criterio de aceptación, épica asignada y estimación.  
- **Definition of Done:** Documento o artefacto versionado, revisado por pares, enlazado en la tarjeta.

## 6. Riesgos y Planes de Contingencia
- Falta de insumos visuales → usar placeholders low‑poly y texturas actuales.  
- Saturación de HUD en mobile → línea de diseño responsive y opción de ocultar panel de instrucciones.  
- Desbalance de tiempos/propinas → plan de pruebas en QA y tabla de parámetros editable.

## 7. Métricas de Gestión
- Throughput semanal de tarjetas terminadas.  
- Edad de tarjeta en columna “In Progress”.  
- % de historias con criterios completos y revisados.  
- Burn-up de hitos (hitos vs. entregables documentales).

## 8. Checklist operativo
- [ ] Tablero creado con columnas y WIP configurado.  
- [ ] Épicas como labels `epic/*`.  
- [ ] Historias priorizadas con estimación.  
- [ ] Capturas del tablero exportadas al repo (`/docs/gestion/`).  
- [ ] Retro semanal breve (15 min) registrada en notas.
