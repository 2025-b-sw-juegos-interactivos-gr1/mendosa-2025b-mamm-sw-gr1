export const createScene = function (engine, canvas) {
    var scene = new BABYLON.Scene(engine);

    // Cámara
    var camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 5, -15), scene);
    camera.setTarget(BABYLON.Vector3.Zero());
    camera.attachControl(canvas, true);

    // Luz
    var light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);
    light.intensity = 0.9;

    // Textura de madera para la caja
    var woodMat = new BABYLON.StandardMaterial("woodMat", scene);
    woodMat.diffuseTexture = new BABYLON.Texture("texture/madera.jpg", scene);

    var box = BABYLON.MeshBuilder.CreateBox("box", {size: 2}, scene);
    box.position = new BABYLON.Vector3(-4, 1, 0);
    box.material = woodMat;

    // Textura de mármol para la esfera
    var marbleMat = new BABYLON.StandardMaterial("marbleMat", scene);
    marbleMat.diffuseTexture = new BABYLON.Texture("texture/marmol.jpeg", scene);

    var sphere = BABYLON.MeshBuilder.CreateSphere("sphere", {diameter: 2}, scene);
    sphere.position = new BABYLON.Vector3(-1.5, 1, 0);
    sphere.material = marbleMat;

    // Textura metálica para el cilindro
    var metalMat = new BABYLON.StandardMaterial("metalMat", scene);
    metalMat.diffuseTexture = new BABYLON.Texture("texture/metal.jpg", scene);

    var cylinder = BABYLON.MeshBuilder.CreateCylinder("cylinder", {height: 2, diameter: 1.5}, scene);
    cylinder.position = new BABYLON.Vector3(1.5, 1, 0);
    cylinder.material = metalMat;

    // Textura de ladrillo para el torus
    var brickMat = new BABYLON.StandardMaterial("brickMat", scene);
    brickMat.diffuseTexture = new BABYLON.Texture("texture/ladrillo.jpg", scene);

    var torus = BABYLON.MeshBuilder.CreateTorus("torus", {diameter: 2, thickness: 0.5}, scene);
    torus.position = new BABYLON.Vector3(4, 1, 0);
    torus.material = brickMat;

    // Textura de césped para el suelo
    var groundMat = new BABYLON.StandardMaterial("groundMat", scene);
    groundMat.diffuseTexture = new BABYLON.Texture("texture/cesped.jpg", scene);

    var ground = BABYLON.MeshBuilder.CreateGround("ground", {width: 12, height: 12}, scene);
    ground.material = groundMat;

    return scene;
};
