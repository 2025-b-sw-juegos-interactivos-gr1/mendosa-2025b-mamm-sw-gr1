import { createScene } from './scene.js';

// Obtener el canvas
const canvas = document.getElementById("renderCanvas");

// Crear el motor de Babylon.js
const engine = new BABYLON.Engine(canvas, true, { preserveDrawingBuffer: true, stencil: true });

// Crear la escena
const scene = createScene(engine, canvas);

// Ejecutar el render loop
engine.runRenderLoop(function () {
    scene.render();
});

// Manejar el redimensionamiento de la ventana
window.addEventListener("resize", function () {
    engine.resize();
});
