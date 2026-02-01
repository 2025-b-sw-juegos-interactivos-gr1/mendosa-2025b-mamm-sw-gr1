# Arquitectura Técnica  
# Uber Eats Delivery 3D – Proyecto 02 Bimestre

**Fecha:** 1 de febrero de 2026  
**Alcance:** Diseño conceptual sin implementación; orientado a Babylon.js.

---

## 1. Visión Arquitectónica
- Cliente único (navegador) con motor 3D Babylon.js.  
- Estado de juego residente en memoria; persistencia ligera en `localStorage`.  
- Datos configurables en JSON (restaurantes, destinos, parámetros de física y economía).  
- Diseño orientado a componentes con patrones mínimos para mantener claridad.

## 2. Componentes y Responsabilidades
- **GameManager (Singleton):** Ciclo de partida, orquestación de estados y temporizadores globales.  
- **ResourceLoader:** Precarga modelos/ texturas, gestiona pantalla de carga y notifica progreso.  
- **InputController:** Normaliza teclado/táctil y expone comandos (`acelerar`, `frenar`, `girar`, `interactuar`).  
- **VehiclePhysics:** Aceleración, fricción, límite de velocidad, giro proporcional, rebotes en colisión.  
- **ColliderRepository:** Lista de colliders de edificios/obstáculos con radios pre‑calculados.  
- **OrderSystem:** Cola de pedidos, temporizadores, cálculo de propinas y penalizaciones.  
- **Navigation/Arrow:** Cálculo vectorial hacia objetivo; cambia color según modo (restaurante/destino).  
- **UIController:** HUD (velocímetro, distancias, estado de pedido), mensajes centrales y accesibilidad.  
- **AudioManager:** SFX/BGM con prioridades; ducking en eventos de choque.  
- **DataStore:** Lectura/escritura de récords y configuración en `localStorage`.

## 3. Diagramas UML (texto)
### 3.1 Diagrama de clases conceptual
```
GameManager <>-- ResourceLoader
GameManager <>-- InputController
GameManager <>-- VehiclePhysics
GameManager <>-- OrderSystem
GameManager <>-- Navigation
GameManager <>-- UIController
GameManager <>-- AudioManager

OrderSystem --> Pedido
Navigation --> FlechaGuia
VehiclePhysics --> Moto (Mesh) 
ColliderRepository --> Collider
UIController --> HUD
DataStore --> Record
```

### 3.2 Estados del Pedido
```
Disponible -> EnMano -> EnRuta -> Entregado
Disponible -> Expirado
EnRuta -> Expirado (tiempo = 0)
```

### 3.3 Secuencia: “Tomar y entregar pedido”
```
Jugador -> InputController: Espacio
InputController -> GameManager: command(interactuar)
GameManager -> OrderSystem: intentarTomarPedido(posicionJugador)
OrderSystem -> UIController: actualizarEstadoPedido(enMano)
GameManager -> Navigation: setObjetivo(destino)
Navigation -> UIController: actualizarFlecha(color=amarillo)
Jugador conduce...
InputController -> GameManager: command(interactuar) (en destino)
GameManager -> OrderSystem: entregarPedido()
OrderSystem -> AudioManager: play(SFX_entrega)
OrderSystem -> UIController: mostrarMensaje("Entrega exitosa")
```

## 4. Patrones y decisiones
- **Singleton:** `GameManager`, `AudioManager` para evitar instancias duplicadas.  
- **Observer/Event Bus ligero:** Emisión de eventos `PedidoTomado`, `Entrega`, `Colision` para desacoplar UI y Audio.  
- **Factory:** Creación de pedidos y marcadores desde JSON de configuración.  
- **State Machine:** Estados de pedido y, a futuro, IA de tráfico o clima.  
- **Strategy (opcional):** Variantes de física (seco/lluvia) y esquemas de cálculo de propina.

## 5. Contratos de Datos (propuestos)
### 5.1 Pedidos (`data/pedidos.json`)
```json
{
  "pedidos": [
    { "id": "PZ-001", "restaurante": "pizza_palace", "destino": "casa_roja", "tiempoLimite": 75 },
    { "id": "BG-002", "restaurante": "burger_king", "destino": "casa_amarilla", "tiempoLimite": 60 }
  ]
}
```

### 5.2 Parámetros de balance (`data/balance.json`)
```json
{
  "fisica": { "aceleracion": 0.008, "frenado": 0.015, "friccion": 0.003, "velocidadMax": 0.40, "velocidadGiro": 0.04 },
  "economia": { "propinaBase": 100, "penalizacionChoque": 10, "penalizacionTiempo": 2 },
  "interaccion": { "radioInteraccion": 5 }
}
```

### 5.3 Mapa y colliders (`data/mapa.json`)
```json
{
  "restaurantes": [
    { "id": "pizza_palace", "pos": { "x": -40, "z": 40 } },
    { "id": "burger_king", "pos": { "x": 40, "z": 40 } }
  ],
  "destinos": [
    { "id": "casa_roja", "pos": { "x": -30, "z": -20 } }
  ],
  "colliders": [
    { "id": "edificio_1", "pos": { "x": 10, "z": 5 }, "radio": 8 }
  ]
}
```

## 6. Calidad y No Funcionales
- **Rendimiento:** ≤ 16 ms por frame en equipos medios; limitar draw calls con instancias.  
- **Usabilidad:** HUD legible en 1080p; modo alto contraste para daltónicos.  
- **Portabilidad:** Solo WebGL y APIs estándar; sin dependencias nativas.  
- **Persistencia:** `localStorage` namespaced `ubereats3d.*`; fallback a memoria si está deshabilitado.  
- **Seguridad:** Validar lectura de JSON para evitar fallos de parsing; no se envían datos sensibles.

## 7. Plan de Pruebas Técnicas (documental)
- **Física:** validar límites de velocidad, frenado y rebote con casos numéricos.  
- **Colisiones:** probar trayectorias que toquen esquinas y pared frontal.  
- **Pedidos:** verificar transiciones válidas de estado y expiración por tiempo.  
- **HUD:** comprobar actualización de distancia y estado de pedido en cada tick.  
- **Carga de recursos:** simulación de falla de GLB → uso de fallbacks (moto/bag primitivas).

---
Este documento define la arquitectura técnica y contratos de datos del proyecto, manteniendo foco en diseño sin implementación.
