# Arte, UI y Mockups  
# Uber Eats Delivery 3D – Proyecto 02 Bimestre

**Fecha:** 1 de febrero de 2026  
**Enfoque:** Lineamientos visuales y sonoros; prototipos de baja/media fidelidad. No se generan assets finales en esta entrega.

---

## 1. Dirección Visual
- **Estilo:** Low‑poly urbano nocturno con acentos de neón verde (#06C167).  
- **Paleta base:**  
  - Primario: #06C167 (Uber Green)  
  - Fondo oscuro: #16213e  
  - Acento cálido: #FFD700  
  - Neutros: #0f0f0f, #f5f5f5  
- **Texturas existentes:** asfalto, césped, ladrillo rojo/beige, concreto, tejas, madera (ver carpeta `textures/`).  
- **Iluminación:** Luz direccional suave (simula farolas) + hemisférica tenue; contraste suficiente para legibilidad.

## 2. UI / HUD
- **Layout recomendado:**  
  - Panel de instrucciones (sup‑izq) semitransparente negro con borde verde.  
  - Estado de pedido (sup‑der) con badges de color según estado: verde = en ruta, amarillo = recoger, rojo = expirado.  
  - Velocímetro circular (inf‑izq) con valor en km/h y aro verde.  
  - Mensaje central emergente para feedback (éxito/expirado/choque).  
  - Barra de tiempo global opcional (inf‑sup centrada).  
- **Tipografía:** Segoe UI / Rubik; peso medio para texto, bold para números HUD.  
- **Accesibilidad:**  
  - Modo alto contraste: fondo #000, texto blanco, bordes amarillos.  
  - Tamaño mínimo texto HUD: 14 px; botones táctiles ≥ 44 px.  
  - Iconografía con contornos gruesos para legibilidad.

## 3. Wireframes (texto)
```
[Sup-Izq] Panel instrucciones
[Sup-Der] Panel estado pedido   [Tiempo global centrado opcional]

                [Mensaje central emergente]

[Inf-Izq] Velocimetro circular           [Inf-Der] (reservado mobile: botones)
```
Incluir mockups en `/docs/arte/` (PNG o JPG). Se sugiere draw.io, Figma o wireframe.io.

## 4. Mockups/Assets a producir
- HUD desktop: 1 pantalla en juego mostrando flecha verde y HUD completo.  
- HUD mobile: versión con stick virtual izq. y botones Acelerar/Frenar/Acción a la derecha.  
- Mapa 2D nivel base (120×120) con ubicación de restaurantes/casas.  
- Set de íconos minimalistas: entregar, recoger, choque, tiempo.  
- Placas de restaurante (carteles) con color distintivo.  
- Moodboard: 6–8 referencias (no incluidas) que muestren low‑poly nocturno + neón.

## 5. Audio
- **BGM:** Electrónica suave (90–110 BPM) en loop; volumen moderado.  
- **SFX mínimos:** arranque moto, aceleración, frenado, choque, recoger, entregar, notificación de pedido.  
- **Ducking:** Al sonar choque, reducir BGM -6 dB por 1 s.  
- **Licencias:** Usar bancos libres (OpenGameArt, freesound) y documentar links en `/docs/audio/`.

## 6. Guía de Entrega de Assets
- Formatos:  
  - Imágenes HUD: PNG.  
  - Moodboard: PDF o PNG.  
  - Íconos: SVG (preferible) o PNG 512 px.  
  - Audio: WAV/OGG 44.1 kHz.  
- Estructura sugerida:  
  ```
  docs/
    arte/
      hud-desktop.png
      hud-mobile.png
      mapa-120x120.png
      moodboard.pdf
      iconos/*.svg
    audio/
      bgm-loop.ogg
      sfx-*.wav
  ```

## 7. Checklist visual
- [ ] Paleta aprobada y documentada.  
- [ ] Mockup HUD desktop exportado.  
- [ ] Mockup HUD mobile exportado.  
- [ ] Mapa 2D con puntos de entrega/restaurantes.  
- [ ] Íconos funcionales para estados de pedido.  
- [ ] Moodboard nocturno con 6–8 referencias.  
- [ ] Carpeta de audio con BGM + SFX mínimos.

---
Esta guía detalla la dirección de arte, HUD y assets requeridos para el blueprint del proyecto sin producir código funcional.
