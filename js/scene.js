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

    // Cargar el modelo 3D del Yeti
    BABYLON.SceneLoader.Append("Yeti/", "Yeti.gltf", scene, function (scene) {
        console.log("Yeti cargado exitosamente!");
        
        // Encontrar todos los meshes del Yeti (cuerpo, cuernos, ojos, etc.)
        var yetiMeshes = scene.meshes.filter(m => 
            m.name.includes("Yeti") || 
            m.name.includes("Body") || 
            m.name.includes("Eyes") || 
            m.name.includes("Teeth") ||
            m.name.includes("Antlers") ||
            m.name.includes("Beard") ||
            m.name.includes("Fur")
        );
        
        console.log("Meshes del Yeti encontrados:", yetiMeshes.length);
        
        // Escalar todos los meshes del Yeti
        yetiMeshes.forEach(mesh => {
            if (mesh.scaling) {
                mesh.scaling = new BABYLON.Vector3(0.09, 0.09, 0.09);
            }
        });
        
        // Buscar el nodo raíz del Yeti para posicionarlo
        var yetiRoot = scene.transformNodes.find(node => 
            node.name === "SkeletonGroup" || node.name.includes("Skeleton")
        );
        
        if (yetiRoot) {
            // Posicionar el Yeti más adelante (más cerca de la cámara)
            // X = 0 (centro), Y = 0 (suelo), Z = -45 (adelante, hacia la cámara)
            yetiRoot.position = new BABYLON.Vector3(0, 0, -45);
            
            // Rotación para que mire de frente hacia la cámara
            yetiRoot.rotation.y = Math.PI * 1.5; // 270° - Ajuste para mirar de frente
            
            console.log("Yeti posicionado en:", yetiRoot.position);
            console.log("Yeti rotación:", yetiRoot.rotation.y, "radianes =", BABYLON.Tools.ToDegrees(yetiRoot.rotation.y), "grados");
        } else {
            console.warn("No se encontró el nodo raíz del Yeti");
        }
        
        // Reproducir animaciones si existen
        if (scene.animationGroups && scene.animationGroups.length > 0) {
            scene.animationGroups.forEach(animGroup => {
                animGroup.start(true); // true = loop
                console.log("Animación iniciada:", animGroup.name);
            });
        }
    }, null, function (scene, message) {
        console.error("Error al cargar el Yeti:", message);
    });

    return scene;
};
