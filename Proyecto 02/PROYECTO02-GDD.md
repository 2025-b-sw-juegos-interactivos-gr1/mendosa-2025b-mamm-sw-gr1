# Proyecto 02 Bimestre  
# Uber Eats Delivery 3D – Pre‑producción y Diseño Técnico

**Fecha:** 1 de febrero de 2026  
**Equipo:** Estudiante (solo)  
**Motor propuesto:** Babylon.js 6.x (WebGL)  
**Plataforma objetivo:** Navegador desktop (Chrome, Edge, Firefox)  
**Regla de oro:** No se implementa código funcional en esta entrega. Todo es análisis, documentación, arquitectura y planificación.

---

## 1. Ficha Técnica y Concepto
- **Género:** Arcade de conducción + time‑management.  
- **Elevator pitch:** “Eres un repartidor de Uber Eats en una ciudad nocturna estilo low‑poly. Gestiona varios pedidos, optimiza rutas y entrega a tiempo mientras evitas colisiones y mantienes la satisfacción del cliente.”  
- **Público meta:** 12+; jugadores casuales de navegador y entusiastas de simuladores ligeros.  
- **Plataformas secundarias (futuro):** Mobile web con esquema táctil.  
- **Objetivo didáctico (si se usa como juego serio):** Introducir nociones de logística urbana y priorización de tareas.

## 2. Visión y Objetivos de Producto
- Ofrecer sensación de **flujo** y **urgencia ligera**, evitando frustración.
- Permitir sesiones cortas (3–5 minutos) con progreso medible por entregas completadas.
- Mantener claridad visual: vista isométrica, colores contrastantes (#06C167 como color guía de marca).
- Escalar fácilmente: nuevas zonas, más restaurantes/casas y variantes de clima sin rehacer sistemas básicos.

## 3. Análisis MDA
### Aesthetics (Experiencia buscada)
- **Tensión suave:** reloj y pedidos simultáneos generan urgencia.
- **Competencia personal:** superar propio récord de entregas y tiempos.
- **Logro y dominio:** controlar derrapes leves y rutas óptimas.
- **Exploración segura:** descubrir atajos entre calles y parques.

### Dynamics (Comportamientos emergentes)
- **Gestión de cola de pedidos:** decidir qué restaurante atender primero según distancia y tiempo restante.
- **Rutas y riesgo:** tomar atajos con mayor probabilidad de colisión vs. calles amplias seguras.
- **Feedback inmediato:** velocímetro, HUD de distancia y mensajes contextuales influyen en la toma de decisiones.
- **Penalizaciones suaves:** pérdida de tiempo o reducción de propina al chocar o retrasarse.

### Mechanics (Reglas base)
- Movimiento con aceleración, fricción y límite de velocidad; giro proporcional a la velocidad.
- Estados de pedido: `Disponible → En mano → En ruta → Entregado / Expirado`.
- Sistema de colisión contra edificios (rebote y pérdida de inercia).
- Puntos/propinas calculados por tiempo restante, distancia recorrida y penalizaciones por choque.
- Flecha guía con dos modos: verde a restaurante, amarilla a destino.
- Controles por teclado (W/A/S/D + Espacio) y mapa táctil propuesto para mobile.

## 4. Mecánicas Detalladas (Game System Design)
### 4.1 Core Loop
1) Recibir lista de pedidos activos.  
2) Conducir hasta el restaurante asignado.  
3) Recoger pedido (cambia a estado “En ruta”).  
4) Seguir flecha hasta la casa destino.  
5) Entregar, sumar puntos y propina, liberar siguiente pedido.  
6) Repetir hasta que expire el tiempo global de sesión.

### 4.2 Sistemas
- **Inventario de pedidos:** Máximo 1 pedido simultáneo en la versión actual; backlog de próximos pedidos con temporizador visible.  
- **Progresión ligera:** Multiplicador de propina por entregas consecutivas sin choque.  
- **Condiciones de fin:** Tiempo global agotado o umbral de satisfacción (promedio de propinas) bajo.  
- **UX/Feedback:** mensajes centrales breves, barra de carga inicial, velocímetro en km/h, distancia dinámica.

### 4.3 Controles y Accesibilidad
- Desktop: W/A/S/D + Espacio.  
- Mobile (futuro): stick virtual (izquierda), botones Acelerar/Frenar (derecha) y botón Recoger/Entregar.  
- Opciones: invertir eje de giro, slider de sensibilidad, alto contraste para daltónicos (paleta alternativa).

### 4.4 Balance inicial (parámetros actuales del prototipo)
- Aceleración 0.008, Frenado 0.015, Fricción 0.003, Velocidad máx. 0.40, Giro 0.04.  
- Radio de colisión de edificios: tamaño/2 + 1.5.  
- Distancia de interacción: 5 unidades.  
- Propina base sugerida: 100 unidades – (segundos consumidos × 2) – choques × 10.

## 5. Narrativa y Mundo
- **Ambientación:** Ciudad densa con mezcla de zonas residenciales y comerciales, atmósfera nocturna con neón verde.  
- **Personaje:** Repartidor anónimo; se comunica con mensajes de la app (texto).  
- **Restaurantes:** Pizza Palace, Burger King, Sushi House, Taco Loco (identidad cromática y señalética visible).  
- **Clientes:** Casas con colores distintivos; se puede añadir personalidad mínima a través de mensajes al entregar (“Gracias, tenía hambre”).  
- **Tono:** Ligero, urbano y optimista.

## 6. Diseño de Niveles
- **Mapa base:** 120×120 unidades; cuadrícula de calles, 16 bloques de césped como obstáculo visual y ruta alternativa.  
- **Capas de progresión propuestas:**  
  - **Nivel 1 (Tutorial):** 1 pedido a la vez, sin penalización por choque.  
  - **Nivel 2:** Dos pedidos en cola; propinas afectan puntuación final.  
  - **Nivel 3:** Tiempo global más corto y tráfico ligero simulado con obstáculos móviles futuros.  
- **Métricas de espacio:** Calles ≥ 6 unidades de ancho para maniobras; puntos de entrega con radio de 5.  
- **Atajos y señalización:** Pintar líneas discontinuas amarillas y flechas en piso para orientar al jugador.

## 7. Arte y Audio (Look & Feel)
- **Estilo visual:** Low‑poly urbano, texturas planas ya presentes (asfalto, césped, ladrillos, concreto).  
- **Paleta base:** Verde Uber (#06C167), negro azulado (#16213e), acentos amarillo (#FFD700) y blanco.  
- **UI:** Tarjetas semiopacas negras con bordes verdes; tipografía sans (Segoe UI o Rubik).  
- **Moodboard verbal:** Nocturno, neón, delivery realista ligero, clima seco.  
- **Audio:** BGM electrónica suave; SFX para arranque, freno, recogida, entrega y colisión; usar ducking para voz de notificaciones (texto‑to‑speech opcional).  
- **Mockups sugeridos:**  
  - HUD: velocímetro circular, caja de estado de pedido, barra de tiempo global.  
  - Pantalla de carga con barra progresiva ya implementada.

## 8. Arquitectura de Software (Ingeniería)
### 8.1 Stack propuesto
- **Front:** HTML5 + CSS3 para UI superpuesta.  
- **Motor 3D:** Babylon.js 6.x con SceneLoader para GLB.  
- **Lenguaje:** JavaScript ES6+ (módulos opcionales).  
- **Datos:** Archivos JSON para catálogo de restaurantes, casas y tablas de balance; `localStorage` para mejores marcas.

### 8.2 Componentes y responsabilidades
- **GameManager (Singleton):** Orquesta estados de partida, temporizadores y transición de pedidos.  
- **InputController:** Normaliza teclado/táctil y expone comandos (acelerar, girar, interactuar).  
- **VehiclePhysics:** Calcula aceleración, fricción, giro y colisión contra `ColliderRepository`.  
- **OrderSystem:** Gestiona cola de pedidos, temporizadores, cálculo de propinas y penalizaciones.  
- **Navigation/Arrow:** Calcula vectores hacia objetivo y actualiza flecha guía.  
- **UIController:** HUD, mensajes centrales, velocímetro, estado de pedido, distancia.  
- **ResourceLoader:** Precarga modelos y texturas, muestra pantalla de carga.  
- **AudioManager:** Reproduce SFX/BGM; aplicar ducking en colisiones.

### 8.3 Patrones seleccionados y justificación
- **Singleton:** `GameManager` y `AudioManager` para un único punto de control.  
- **Observer/Event Bus:** Notificar a UI y Audio ante eventos (`PedidoTomado`, `EntregaExitosa`, `Colision`).  
- **Factory:** Crear pedidos y marcadores con parámetros de JSON.  
- **State Machine:** Estados del pedido y posible IA de tráfico futuro.  
- **Strategy (opcional):** Variantes de física para clima seco/lluvia.

### 8.4 Diagramas UML (texto)
**Diagrama de clases conceptual (simplificado):**
```
GameManager <>-- OrderSystem
GameManager <>-- VehiclePhysics
GameManager <>-- UIController
GameManager <>-- Navigation
OrderSystem --> Pedido
Navigation --> FlechaGuia
VehiclePhysics --> Moto (Mesh)
UIController --> HUD
AudioManager --> SFX/BGM
```

**Estados de Pedido:**
```
Disponible -> EnMano -> EnRuta -> Entregado
Disponible -> Expirado
EnRuta -> Expirado (si tiempo llega a 0)
```

**Casos de uso principales:**
- Actor Jugador: Tomar pedido, conducir, entregar, consultar HUD.  
- Actor Sistema de Pedidos: Generar pedido, expirar pedido, actualizar propina.  
- Actor UI: Mostrar estados y feedback.

### 8.5 Datos y persistencia
- **Config JSON:** posiciones de restaurantes/casas, límites de tiempo, tabla de propinas.  
- **Guardado local:** récord de entregas y mejor tiempo medio; `localStorage` con namespace `ubereats3d.*`.  
- **Telemetría (opcional):** tiempos por tramo para balance de dificultad.

### 8.6 Rendimiento y escalabilidad
- Limitar draw calls: instanciar elementos repetidos (árboles, postes) en versiones futuras.  
- Colisiones: usar bounding spheres simplificados ya existentes (`radioColision`).  
- LOD opcional para modelos de moto/bolsa si se incrementa la distancia de cámara.

## 9. Planificación y Gestión (Ágil)
### 9.1 Épicas sugeridas (mapa a la estructura del GDD)
1) **Investigación y Concepto** – Ficha técnica, referencias visuales.  
2) **Diseño MDA y Gameplay** – Objetivos emocionales, dinámica, balance inicial.  
3) **Mecánicas Core** – Core loop, controles, reglas de propina y penalización.  
4) **Narrativa y Mundo** – Sinopsis, tono, mensajes de cliente.  
5) **Niveles y Espacios** – Layout 120×120, tutorial, rutas y señalización.  
6) **Arte y Audio** – Paleta, mockups de HUD, moodboard, listado SFX/BGM.  
7) **Arquitectura y Datos** – Diagramas, patrones, contratos de JSON.  
8) **UX y Accesibilidad** – HUD legible, alto contraste, mobile touch plan.  
9) **QA y Balance** – Pruebas de parámetros y tiempo por entrega.

### 9.2 User Stories (ejemplos con estimación)
- “Como jugador quiero ver una flecha que cambie de color según objetivo para no perderme.” (3 pts)  
- “Como jugador quiero recibir propina mayor si entrego sin chocar para sentir recompensa.” (2 pts)  
- “Como diseñador necesito un JSON de pedidos para iterar sin tocar código.” (1 pt)  
- “Como jugador quiero un tutorial con un solo pedido y sin penalización para aprender controles.” (3 pts)

### 9.3 Kanban en GitHub Projects (sugerencia)
- Columnas: Backlog → In Progress → Review/UX → Done.  
- Etiquetas: `epic/*`, `gameplay`, `ui`, `art`, `audio`, `architecture`, `docs`, `qa`.  
- Auto‑close con PR (si se habilita implementación en fases posteriores).

### 9.4 Hitos y calendario (fechas absolutas)
- **Semana 1 (3–7 feb 2026):** Completar GDD, MDA y mockups de HUD.  
- **Semana 2 (10–14 feb 2026):** Diagramas UML, JSON de datos base y mapa de nivel.  
- **Semana 3 (17–21 feb 2026):** Ajuste de balance en documento, guías de arte/audio, backlog final.  
- **Semana 4 (24–28 feb 2026):** Revisión cruzada, checklist de entregables, preparación de demo no jugable.

## 10. Riesgos y Mitigaciones
- **Riesgo:** Falta de tiempo para generar arte original.  
  - *Mitigación:* Usar placeholders low‑poly y texturas existentes; priorizar legibilidad.  
- **Riesgo:** HUD saturado en pantallas pequeñas.  
  - *Mitigación:* Maqueta responsive con tamaños relativos y opción de ocultar panel de instrucciones.  
- **Riesgo:** Desbalance de propinas/penalizaciones.  
  - *Mitigación:* Tabla de parámetros editable en JSON y pruebas rápidas con telemetría básica.  
- **Riesgo:** Colisiones frustrantes en esquinas.  
  - *Mitigación:* Ajustar radios de colisión y añadir “rebote suave” (ya previsto) en diseño.

## 11. Checklist de Entregables (para el repositorio)
- [ ] `PROYECTO02-GDD.md` (este documento) con MDA y core loop.  
- [ ] Mockups de HUD y mapa 2D (imágenes o bocetos en `/docs/`).  
- [ ] Archivos JSON de configuración propuestos (`/docs/data/*.json`).  
- [ ] Diagramas UML (PlantUML o draw.io exportados a PNG en `/docs/uml/`).  
- [ ] Tablero de proyecto configurado y capturas de pantalla de columnas/épicas.

---
Este blueprint cubre la pre‑producción y el diseño técnico del juego “Uber Eats Delivery 3D”. Sirve como base para producción sin añadir código funcional, alineado con el objetivo académico del Proyecto 02.
