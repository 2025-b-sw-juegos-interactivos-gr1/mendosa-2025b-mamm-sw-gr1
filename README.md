# Proyecto Babylon.js Local

Proyecto de Babylon.js configurado para usar assets y texturas locales.

## 📁 Estructura del Proyecto

```
mendosa-2025b-mamm-sw-gr1/
├── index.html          # Archivo HTML principal
├── js/
│   ├── app.js         # Inicialización de Babylon.js
│   └── scene.js       # Lógica de la escena
├── texture/           # Carpeta para texturas e imágenes
│   ├── wood.jpg
│   ├── marble.jpg
│   ├── metal.jpg
│   ├── brick.jpg
│   └── grass.jpg
├── package.json       # Configuración de npm
└── README.md
```

## 🚀 Instalación y Uso

### 1. Instalar dependencias

```bash
npm install
```

### 2. Descargar texturas

Las texturas deben colocarse en la carpeta `texture/`. Puedes descargar las texturas de ejemplo desde:
- https://assets.babylonjs.com/environments/wood.jpg
- https://assets.babylonjs.com/environments/marble.jpg
- https://assets.babylonjs.com/environments/metal.jpg
- https://assets.babylonjs.com/environments/brick.jpg
- https://assets.babylonjs.com/environments/grass.jpg

### 3. Iniciar el servidor

```bash
npm start
```

O para abrir automáticamente el navegador:

```bash
npm run dev
```

El servidor estará disponible en: `http://localhost:8080`

## 🎨 Cómo Usar Texturas Locales

En tu código de Babylon.js, simplemente referencia las texturas usando rutas relativas:

```javascript
var material = new BABYLON.StandardMaterial("myMaterial", scene);
material.diffuseTexture = new BABYLON.Texture("texture/mi-textura.jpg", scene);
```

## 📝 Características

- ✅ Servidor local con http-server
- ✅ Estructura organizada de archivos
- ✅ Sistema de módulos ES6
- ✅ Gestión de assets locales
- ✅ Fácil de expandir y mantener

## 🛠️ Tecnologías

- Babylon.js 6.x
- Node.js
- http-server

## 📖 Recursos

- [Documentación de Babylon.js](https://doc.babylonjs.com/)
- [Playground de Babylon.js](https://playground.babylonjs.com/)
- [Assets de Babylon.js](https://assets.babylonjs.com/)
Miguel Angel Mendosa Mendoza mamm
Hola mundo!
