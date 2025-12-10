```
██████╗  ██████╗ ██████╗  ██████╗ ████████╗    ██████╗ ███████╗
██╔══██╗██╔═══██╗██╔══██╗██╔═══██╗╚══██╔══╝    ██╔══██╗██╔════╝
██████╔╝██║   ██║██████╔╝██║   ██║   ██║       ██║  ██║█████╗  
██╔══██╗██║   ██║██╔══██╗██║   ██║   ██║       ██║  ██║██╔══╝  
██║  ██║╚██████╔╝██████╔╝╚██████╔╝   ██║       ██████╔╝███████╗
╚═╝  ╚═╝ ╚═════╝ ╚═════╝  ╚═════╝    ╚═╝       ╚═════╝ ╚══════╝
                                                                
███████╗ █████╗ ██████╗ ██████╗ ██╗ ██████╗ █████╗ 
██╔════╝██╔══██╗██╔══██╗██╔══██╗██║██╔════╝██╔══██╗
█████╗  ███████║██████╔╝██████╔╝██║██║     ███████║
██╔══╝  ██╔══██║██╔══██╗██╔══██╗██║██║     ██╔══██║
██║     ██║  ██║██████╔╝██║  ██║██║╚██████╗██║  ██║
╚═╝     ╚═╝  ╚═╝╚═════╝ ╚═╝  ╚═╝╚═╝ ╚═════╝╚═╝  ╚═╝
```

# ROBOT DE FÁBRICA - Pick & Deliver Game

> Un juego 3D interactivo de simulación industrial desarrollado con Babylon.js

---

## DESCRIPCIÓN GENERAL

**Robot de Fábrica** es una experiencia de juego inmersiva en 3D que te coloca en el control de un robot industrial en una fábrica futurista. Tu misión: optimizar la cadena de producción recogiendo componentes mecánicos desde la zona de suministros y entregándolos en el área de almacenamiento, todo mientras el cronómetro avanza.

El juego combina mecánicas de gestión logística con un entorno 3D completamente navegable, creando una experiencia que desafía tanto tu planificación estratégica como tus habilidades de navegación espacial.

---

## CARACTERÍSTICAS PRINCIPALES

### MECÁNICAS DE JUEGO

```
┌─────────────────────────────────────────────────────────┐
│  OBJETIVO: Completar 5 entregas exitosas                │
│                                                          │
│  ZONA A (Azul)  →  Recogida de componentes              │
│  ZONA B (Verde) →  Entrega de componentes               │
│                                                          │
│  Sistema de puntuación dinámica basado en velocidad     │
└─────────────────────────────────────────────────────────┘
```

- **Sistema de Recogida y Entrega**: Interacción contextual con componentes mecánicos
- **Múltiples Componentes**: Hasta 3 engranajes disponibles simultáneamente en el área de trabajo
- **Gestión de Recursos**: El robot solo puede transportar un componente a la vez
- **Puntuación Dinámica**: 
  - Puntos base: 100 por entrega
  - Bonificación de velocidad: Hasta +50 puntos adicionales
  - La velocidad de entrega afecta directamente tu puntuación final

### ENTORNO 3D INMERSIVO

```
╔══════════════════════════════════════════════════════════╗
║  ELEMENTOS DEL ESCENARIO                                 ║
╠══════════════════════════════════════════════════════════╣
║  • Edificio de fábrica completo con arquitectura         ║
║    industrial realista                                   ║
║  • Cintas transportadoras funcionales en Zona A          ║
║  • Contenedores sci-fi para almacenamiento en Zona B     ║
║  • Baterías de plasma decorativas (iluminación azul)     ║
║  • Bombas de engranajes industriales                     ║
║  • Cajas apiladas en grupos estratégicos                 ║
║  • Suelo con textura de grid metálico                    ║
╚══════════════════════════════════════════════════════════╝
```

### SISTEMA DE ILUMINACIÓN AVANZADO

- **Luz Hemisférica**: Iluminación ambiental general que simula luz natural difusa
- **Luz Direccional**: Simula iluminación de techo industrial
- **Luces Puntuales**:
  - Zona A: Luz azul identificadora del área de recogida
  - Zona B: Luz verde identificadora del área de entrega
  - Baterías de Plasma: Luces pulsantes azules decorativas
- **Indicadores Visuales**: Círculos luminosos en el suelo que pulsan rítmicamente

### EFECTOS VISUALES Y PARTÍCULAS

```
✨ SISTEMA DE PARTÍCULAS DUAL

┌─────────────────────────────────┐
│ RECOGIDA (Azul)                 │
│ • 200 partículas por evento     │
│ • Emisión hacia arriba          │
│ • Color: Azul brillante         │
└─────────────────────────────────┘

┌─────────────────────────────────┐
│ ENTREGA (Verde/Amarillo)        │
│ • 300 partículas por evento     │
│ • Emisión explosiva             │
│ • Color: Verde y dorado         │
└─────────────────────────────────┘
```

---

## CONTROLES

```
╔════════════════════════════════════════╗
║  TECLADO                               ║
╠════════════════════════════════════════╣
║  [W] [A] [S] [D]  →  Movimiento        ║
║                      (relativo a       ║
║                       la cámara)       ║
║                                        ║
║  [ESPACIO]        →  Recoger/Soltar    ║
║                      componente        ║
║                                        ║
║  [F12]            →  Información de    ║
║                      depuración        ║
╚════════════════════════════════════════╝

╔════════════════════════════════════════╗
║  MOUSE                                 ║
╠════════════════════════════════════════╣
║  Arrastrar        →  Rotar cámara      ║
║                      orbital           ║
║                                        ║
║  Scroll           →  Zoom in/out       ║
║                      (límites: 8-52)   ║
╚════════════════════════════════════════╝
```

### SISTEMA DE CÁMARA

- **Tipo**: ArcRotate Camera (tercera persona orbital)
- **Target dinámico**: Sigue al robot automáticamente con interpolación suave
- **Restricciones**:
  - Radio mínimo: 8 unidades
  - Radio máximo: 52 unidades
  - Ángulo beta: Limitado para evitar vistas bajo el suelo
- **Inercia**: Movimiento suave y cinematográfico

---

## INTERFAZ DE USUARIO (HUD)

```
┌─────────────────────────────────────┐
│  ROBOT DE FÁBRICA                   │
├─────────────────────────────────────┤
│  Tiempo:      0:00                  │
│  Puntos:      0                     │
│  Entregados:  0 / 5                 │
│  Estado:      Manos vacías          │
└─────────────────────────────────────┘
```

### ELEMENTOS DEL HUD

- **Cronómetro**: Tiempo transcurrido desde el inicio (MM:SS)
- **Contador de Puntos**: Puntuación acumulada con fuente destacada
- **Progreso de Entregas**: Visualización clara del objetivo (X/5)
- **Estado del Robot**: Indica si está transportando un componente
- **Panel de Controles**: Referencia rápida siempre visible

---

## FLUJO DE JUEGO

```
INICIO DEL JUEGO
      ↓
┌─────────────────────────────────────────────────┐
│  1. EXPLORACIÓN                                 │
│     • Navegar por la fábrica                    │
│     • Localizar componentes (engranajes)        │
│     • Familiarizarse con las zonas              │
└─────────────────────────────────────────────────┘
      ↓
┌─────────────────────────────────────────────────┐
│  2. RECOGIDA (ZONA A - Azul)                    │
│     • Acercarse a un engranaje (< 6 unidades)   │
│     • Presionar [ESPACIO]                       │
│     • El componente se adjunta al robot         │
│     • Efecto de partículas azules               │
│     • +50 pts de bonificación                   │
└─────────────────────────────────────────────────┘
      ↓
┌─────────────────────────────────────────────────┐
│  3. TRANSPORTE                                  │
│     • Navegar cargando el componente            │
│     • El engranaje sigue al robot               │
│     • Dirigirse a la Zona B                     │
└─────────────────────────────────────────────────┘
      ↓
┌─────────────────────────────────────────────────┐
│  4. ENTREGA (ZONA B - Verde)                    │
│     • Posicionarse en el contenedor             │
│     • Presionar [ESPACIO]                       │
│     • El componente desaparece (entregado)      │
│     • Efecto de partículas verdes/doradas       │
│     • +100 pts base + bonificación de tiempo    │
└─────────────────────────────────────────────────┘
      ↓
┌─────────────────────────────────────────────────┐
│  5. RESPAWN                                     │
│     • Nuevo componente aparece en Zona A        │
│     • Posición aleatoria dentro del área        │
│     • Contador de entregas se actualiza         │
└─────────────────────────────────────────────────┘
      ↓
   REPETIR (hasta completar 5 entregas)
      ↓
┌─────────────────────────────────────────────────┐
│  VICTORIA                                       │
│     • Pantalla de victoria con estadísticas     │
│     • Puntuación final                          │
│     • Tiempo total                              │
│     • Opción de reiniciar                       │
└─────────────────────────────────────────────────┘
```

---

## TECNOLOGÍAS UTILIZADAS

### MOTOR GRÁFICO

```javascript
Babylon.js v7.x
├── babylon.js (Core Engine)
└── babylonjs.loaders.min.js (GLTF/GLB Loader)
```

**Babylon.js** es un motor 3D completo y potente basado en WebGL que permite crear experiencias interactivas directamente en el navegador sin necesidad de plugins adicionales.

### FORMATOS DE MODELOS 3D

```
ASSETS UTILIZADOS:
├── lowpoly_robots.glb              (Robot jugador)
├── engranaje.glb                   (Componentes)
├── conveyor_belt.glb               (Cinta transportadora)
├── sci-fi_container_games.glb      (Contenedor de entrega)
├── sewing_factory.glb              (Edificio de fábrica)
├── bateria_de_plasmaplasm_battery_low_poly.glb
├── bomba_engranajes.glb            (Decoración)
└── low_poly_box_in_blender_for_videogames.glb
```

### CARACTERÍSTICAS TÉCNICAS

- **Lenguaje**: JavaScript ES6+
- **Renderizado**: WebGL 2.0
- **Física**: Sistema de colisiones nativo de Babylon.js
- **Animaciones**: Interpolación suave (Lerp) para movimientos
- **Partículas**: Sistema de partículas GPU-acelerado
- **Texturización**: Texturas procedurales y Dynamic Textures

---

## ARQUITECTURA DEL CÓDIGO

```
ESTRUCTURA MODULAR
├── Configuración Global (CONFIG)
│   ├── Velocidades y distancias
│   ├── Sistema de puntuación
│   ├── Rutas de modelos
│   └── Posiciones de zonas
│
├── Inicialización
│   ├── Motor Babylon.js
│   ├── Creación de escena
│   ├── Sistema de carga asíncrona
│   └── Loop de renderizado
│
├── Sistemas de Juego
│   ├── Input System (teclado)
│   ├── Movimiento del jugador
│   ├── Sistema de recogida/entrega
│   ├── Gestión de componentes
│   ├── Actualización de HUD
│   └── Cronómetro
│
├── Carga de Assets
│   ├── Modelos 3D (GLTF/GLB)
│   ├── Sistemas de partículas
│   ├── Materiales y texturas
│   └── Iluminación
│
└── Lógica de Victoria
    ├── Detección de objetivo cumplido
    ├── Pantalla de victoria
    └── Reinicio de partida
```

---

## SISTEMA DE PUNTUACIÓN

```python
CÁLCULO DE PUNTOS POR ENTREGA:

puntos_base = 100

bonificación_velocidad = max(0, 50 - floor(tiempo_transcurrido / 10))

puntos_totales = puntos_base + bonificación_velocidad


EJEMPLO:
• Entrega en 15 segundos:  100 + (50 - 1) = 149 pts
• Entrega en 45 segundos:  100 + (50 - 4) = 146 pts
• Entrega en 500 segundos: 100 + 0 = 100 pts (sin bonificación)
```

### ESTRATEGIAS PARA MAXIMIZAR PUNTUACIÓN

1. **Velocidad**: Completa entregas rápidamente para obtener bonificaciones
2. **Eficiencia de Ruta**: Planifica el camino más corto entre zonas
3. **Conocimiento del Mapa**: Memoriza la ubicación de las zonas
4. **Selección de Componentes**: Elige el engranaje más cercano a tu posición

---

## OPTIMIZACIONES TÉCNICAS

### RENDIMIENTO

```
OPTIMIZACIONES IMPLEMENTADAS:
✓ Oclusión de meshes duplicados (evita renderizado innecesario)
✓ Sistema de fallback para modelos no cargados
✓ Límites de partículas controlados
✓ Colisiones solo en elementos necesarios
✓ Texturas procedurales (reduce peticiones HTTP)
✓ Uso de TransformNodes para jerarquías eficientes
✓ Animaciones basadas en deltaTime implícito
```

### SISTEMA DE CARGA PROGRESIVA

- **Pantalla de Carga**: Spinner animado durante la inicialización
- **Carga Asíncrona**: Modelos se cargan sin bloquear el hilo principal
- **Manejo de Errores**: Fallbacks automáticos a geometrías primitivas
- **Inicialización Diferida**: Motor inicia solo cuando DOM está listo

---

## DETALLES DE IMPLEMENTACIÓN

### SISTEMA DE EMPARENTAMIENTO

El juego utiliza un sistema de jerarquía de transformaciones para el manejo de componentes:

```javascript
// RECOGIDA: El componente se convierte en hijo del robot
componente.parent = robot;
componente.position = Vector3(0, 8, -3.5); // Posición relativa

// ENTREGA: Se rompe la relación padre-hijo
componente.parent = null;
componente.position = Vector3(x, y, z); // Posición absoluta
```

### MOVIMIENTO RELATIVO A LA CÁMARA

El sistema de controles se adapta a la orientación de la cámara:

```javascript
direccion_movimiento = (
    W * vector_adelante_camara +
    S * vector_atras_camara +
    A * vector_izquierda_camara +
    D * vector_derecha_camara
).normalize()
```

Esto garantiza una experiencia intuitiva independientemente del ángulo de visión.

---

## INSTALACIÓN Y EJECUCIÓN

### REQUISITOS PREVIOS

```
NAVEGADORES COMPATIBLES:
✓ Google Chrome (v90+)
✓ Mozilla Firefox (v88+)
✓ Microsoft Edge (v90+)
✓ Safari (v14+)

REQUISITOS DE SISTEMA:
✓ WebGL 2.0 compatible
✓ JavaScript habilitado
✓ Conexión a Internet (para CDN de Babylon.js)
```

### EJECUCIÓN DEL JUEGO

```bash
# Método 1: Servidor local con Python
python -m http.server 8000

# Método 2: Servidor local con Node.js
npx http-server -p 8000

# Método 3: Visual Studio Code con Live Server
# Clic derecho en index.html → "Open with Live Server"
```

Luego abrir en el navegador:
```
http://localhost:8000/index.html
```

### ESTRUCTURA DE ARCHIVOS NECESARIA

```
Examen 01/
├── index.html              (Archivo principal del juego)
├── README.md               (Este archivo)
└── texturas/               (Carpeta de assets 3D)
    ├── lowpoly_robots.glb
    ├── engranaje.glb
    ├── conveyor_belt.glb
    ├── sci-fi_container_games.glb
    ├── sewing_factory.glb
    ├── bateria_de_plasmaplasm_battery_low_poly.glb
    ├── bomba_engranajes.glb
    └── low_poly_box_in_blender_for_videogames.glb
```

---

## SOLUCIÓN DE PROBLEMAS

### PROBLEMAS COMUNES

```
PROBLEMA: Los modelos 3D no cargan
SOLUCIÓN:
→ Verificar que la carpeta "texturas/" existe
→ Comprobar rutas de archivos en CONFIG.models
→ Revisar consola del navegador (F12) para errores
→ El juego tiene fallbacks: verá cubos/cajas si fallan

PROBLEMA: El juego se ve lento
SOLUCIÓN:
→ Cerrar otras pestañas del navegador
→ Actualizar drivers de tarjeta gráfica
→ Reducir calidad de texturas (editar código)
→ Comprobar que WebGL 2.0 está habilitado

PROBLEMA: Los controles no responden
SOLUCIÓN:
→ Hacer clic en el canvas del juego
→ Verificar que JavaScript está habilitado
→ Recargar la página (F5)

PROBLEMA: El robot atraviesa paredes
SOLUCIÓN:
→ Las colisiones están configuradas correctamente
→ Si ocurre, es un bug de física de Babylon.js
→ Reiniciar el juego
```

---

## DEPURACIÓN Y DESARROLLO

### MODO DEBUG

Presionar **F12** durante el juego muestra información técnica en consola:

```javascript
=== DEBUG INFO ===
Player Position: Vector3(x, y, z)
Component Position: Vector3(x, y, z) | N/A
Is Carrying: true | false
Delivery Count: 0-5
FPS: 60
```

### CONSOLA DE MENSAJES

El juego registra eventos importantes:

```
✅ Robot cargado correctamente
✅ Zona A cargada correctamente
✅ Zona B cargada correctamente
✅ Edificio de fábrica cargado como escenario
✅ Baterías de plasma cargadas
✅ 3 componentes creados
✅ Sistemas de partículas creados
✅ Componente recogido
✅ Componente entregado! Total: 1
```

---

## CRÉDITOS Y RECURSOS

### DESARROLLO

- **Motor Gráfico**: Babylon.js by Microsoft
- **Modelos 3D**: Assets de la comunidad de modelado 3D
- **Texturas**: Procedurales generadas con Canvas API

### CONCEPTOS APRENDIDOS

```
TECNOLOGÍAS WEB 3D
├── WebGL y renderizado en tiempo real
├── Gestión de escenas 3D
├── Sistemas de partículas
├── Animaciones y transformaciones
├── Manejo de eventos de usuario
└── Programación orientada a juegos

BABYLON.JS ESPECÍFICO
├── SceneLoader para importar GLTF/GLB
├── ArcRotateCamera para tercera persona
├── Sistema de materiales PBR
├── TransformNodes y jerarquías
├── ParticleSystem GPU-acelerado
└── Colisiones y física básica
```

---

## FUTURAS MEJORAS POTENCIALES

```
ROADMAP DE DESARROLLO:

v2.0 - MECÁNICAS AVANZADAS
□ Sistema de obstáculos móviles
□ Niveles de dificultad (Fácil, Normal, Difícil)
□ Power-ups temporales (velocidad, puntos dobles)
□ Múltiples tipos de componentes
□ Sistema de combos por entregas consecutivas

v3.0 - MULTIJUGADOR
□ Modo cooperativo (2 robots)
□ Tabla de clasificación global
□ Desafíos diarios
□ Sistema de logros

v4.0 - PERSONALIZACIÓN
□ Skins para el robot
□ Temas visuales de fábrica
□ Editor de niveles
□ Música y efectos de sonido
```

---

## LICENCIA

Este proyecto es un trabajo académico desarrollado con fines educativos.

---

## CONTACTO Y SOPORTE

Para reportar bugs, sugerir mejoras o colaborar:

```
GitHub: [Tu repositorio]
Email: [Tu email académico]
Curso: MAMM-SW-GR1
Fecha: Noviembre 2025
```

---

```
╔══════════════════════════════════════════════════════════╗
║                                                          ║
║     ¡GRACIAS POR JUGAR ROBOT DE FÁBRICA!                ║
║                                                          ║
║     Demuestra tu eficiencia logística y conquista       ║
║     la fábrica del futuro.                              ║
║                                                          ║
║     Recuerda: La velocidad es clave para la victoria.   ║
║                                                          ║
╚══════════════════════════════════════════════════════════╝
```

---

**Versión del Documento**: 1.0  
**Última Actualización**: 30 de Noviembre de 2025  
**Autor**: Miguel Mendosa  
**Curso**: Multimedia y Modelado 3D - Software - Grupo 1

