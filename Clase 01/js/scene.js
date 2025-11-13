export const createScene = function (engine, canvas) {
    var scene = new BABYLON.Scene(engine);

    // ========== ESCENARIO: "EL GUARDIÁN DEL BOSQUE ANCESTRAL" ==========
    // Un Yeti legendario protege un bosque mágico de un dragón amenazante
    // mientras una antigua torre de vigilancia observa la épica confrontación

    // Cámara cinemática - Vista amplia del escenario
    var camera = new BABYLON.ArcRotateCamera("camera1", 
        -Math.PI / 2, Math.PI / 3, 50, 
        new BABYLON.Vector3(0, 3, 10), scene);
    camera.attachControl(canvas, true);
    camera.lowerRadiusLimit = 20;
    camera.upperRadiusLimit = 80;

    // Sistema de iluminación atmosférico
    // Luz principal - Amanecer místico
    var mainLight = new BABYLON.DirectionalLight("mainLight", 
        new BABYLON.Vector3(-1, -2, 1), scene);
    mainLight.intensity = 0.8;
    mainLight.diffuse = new BABYLON.Color3(1, 0.95, 0.8);

    // Luz ambiental del bosque
    var ambientLight = new BABYLON.HemisphericLight("ambient", 
        new BABYLON.Vector3(0, 1, 0), scene);
    ambientLight.intensity = 0.4;
    ambientLight.diffuse = new BABYLON.Color3(0.6, 0.8, 1);
    ambientLight.groundColor = new BABYLON.Color3(0.2, 0.4, 0.2);

    // Niebla atmosférica para ambiente misterioso
    scene.fogMode = BABYLON.Scene.FOGMODE_EXP2;
    scene.fogDensity = 0.01;
    scene.fogColor = new BABYLON.Color3(0.7, 0.8, 0.9);
    scene.clearColor = new BABYLON.Color3(0.7, 0.8, 0.9);

    // ========== TERRENO DEL BOSQUE ==========
    var groundMat = new BABYLON.StandardMaterial("groundMat", scene);
    groundMat.diffuseTexture = new BABYLON.Texture("texture/cesped.jpg", scene);
    groundMat.diffuseTexture.uScale = 8;
    groundMat.diffuseTexture.vScale = 8;

    var ground = BABYLON.MeshBuilder.CreateGround("ground", 
        {width: 100, height: 100}, scene);
    ground.material = groundMat;

    // Colinas y elevaciones del terreno
    var hill1 = BABYLON.MeshBuilder.CreateCylinder("hill1", 
        {height: 2, diameterTop: 15, diameterBottom: 20}, scene);
    hill1.position = new BABYLON.Vector3(-20, 0.5, 15);
    hill1.material = groundMat;

    var hill2 = BABYLON.MeshBuilder.CreateCylinder("hill2", 
        {height: 3, diameterTop: 12, diameterBottom: 18}, scene);
    hill2.position = new BABYLON.Vector3(25, 1, -10);
    hill2.material = groundMat;

    // ========== ROCAS ANTIGUAS ==========
    var rockMat = new BABYLON.StandardMaterial("rockMat", scene);
    rockMat.diffuseTexture = new BABYLON.Texture("texture/marmol.jpeg", scene);
    rockMat.bumpTexture = new BABYLON.Texture("texture/marmol.jpeg", scene);

    // Círculo de rocas místicas alrededor del Yeti
    for (let i = 0; i < 8; i++) {
        let angle = (i / 8) * Math.PI * 2;
        let radius = 8;
        let rock = BABYLON.MeshBuilder.CreatePolyhedron("rock" + i, 
            {type: 1, size: 1.5 + Math.random()}, scene);
        rock.position = new BABYLON.Vector3(
            Math.cos(angle) * radius,
            0.7,
            Math.sin(angle) * radius + 8
        );
        rock.rotation.y = Math.random() * Math.PI;
        rock.material = rockMat;
    }

    // ========== ALTARES DE PODER ==========
    var altarMat = new BABYLON.StandardMaterial("altarMat", scene);
    altarMat.diffuseTexture = new BABYLON.Texture("texture/ladrillo.jpg", scene);
    altarMat.emissiveColor = new BABYLON.Color3(0.2, 0.3, 0.5);

    // Altar del guardián (frente al Yeti)
    var altar = BABYLON.MeshBuilder.CreateCylinder("altar", 
        {height: 1.5, diameter: 2}, scene);
    altar.position = new BABYLON.Vector3(0, 0.75, 3);
    altar.material = altarMat;

    // Cristales de energía sobre el altar
    var crystalMat = new BABYLON.StandardMaterial("crystalMat", scene);
    crystalMat.diffuseColor = new BABYLON.Color3(0.3, 0.6, 1);
    crystalMat.emissiveColor = new BABYLON.Color3(0.2, 0.4, 0.8);
    crystalMat.alpha = 0.7;

    for (let i = 0; i < 3; i++) {
        let crystal = BABYLON.MeshBuilder.CreatePolyhedron("crystal" + i, 
            {type: 4, size: 0.3}, scene);
        let angle = (i / 3) * Math.PI * 2;
        crystal.position = new BABYLON.Vector3(
            Math.cos(angle) * 0.5,
            2.5 + i * 0.3,
            3 + Math.sin(angle) * 0.5
        );
        crystal.rotation.y = angle;
        crystal.material = crystalMat;
        
        // Animación de levitación
        scene.registerBeforeRender(function() {
            crystal.position.y += Math.sin(Date.now() * 0.001 + i) * 0.001;
            crystal.rotation.y += 0.01;
        });
    }

    // ========== HOGUERAS MÍSTICAS ==========
    var fireMat = new BABYLON.StandardMaterial("fireMat", scene);
    fireMat.diffuseColor = new BABYLON.Color3(1, 0.5, 0);
    fireMat.emissiveColor = new BABYLON.Color3(1, 0.4, 0);

    // Hogueras en las esquinas del escenario
    var firePositions = [
        new BABYLON.Vector3(-12, 0.5, -5),
        new BABYLON.Vector3(12, 0.5, -5),
        new BABYLON.Vector3(-10, 0.5, 20),
        new BABYLON.Vector3(10, 0.5, 20)
    ];

    firePositions.forEach((pos, index) => {
        var fireBase = BABYLON.MeshBuilder.CreateCylinder("fireBase" + index, 
            {height: 1, diameter: 1.5}, scene);
        fireBase.position = pos;
        fireBase.material = rockMat;

        var fire = BABYLON.MeshBuilder.CreateCylinder("fire" + index, 
            {height: 2, diameterTop: 0.1, diameterBottom: 1}, scene);
        fire.position = new BABYLON.Vector3(pos.x, pos.y + 1.5, pos.z);
        fire.material = fireMat;
        
        // Luz de fuego
        var fireLight = new BABYLON.PointLight("fireLight" + index, 
            new BABYLON.Vector3(pos.x, pos.y + 2, pos.z), scene);
        fireLight.diffuse = new BABYLON.Color3(1, 0.6, 0.2);
        fireLight.intensity = 3;
        fireLight.range = 15;
    });


    // ========== CARGANDO EL YETI - GUARDIÁN DEL BOSQUE ==========
    BABYLON.SceneLoader.Append("Yeti/", "Yeti.gltf", scene, function (scene) {
        console.log("🏔️ El Guardián Yeti ha aparecido!");
        
        var yetiMeshes = scene.meshes.filter(m => 
            m.name.includes("Yeti") || m.name.includes("Body") || 
            m.name.includes("Eyes") || m.name.includes("Teeth") ||
            m.name.includes("Antlers") || m.name.includes("Beard") || 
            m.name.includes("Fur")
        );
        
        yetiMeshes.forEach(mesh => {
            if (mesh.scaling) {
                mesh.scaling = new BABYLON.Vector3(0.22, 0.22, 0.22);
            }
            if (mesh.rotation) {
                mesh.rotation.y = Math.PI; // Mirando hacia el dragón
            }
        });
        
        var yetiRoot = scene.transformNodes.find(node => 
            node.name === "SkeletonGroup" || node.name.includes("Skeleton")
        );
        
        if (yetiRoot) {
            yetiRoot.position = new BABYLON.Vector3(0, 0, -50);
            yetiRoot.rotation.y = Math.PI;
            
            // Luz especial en el Yeti - aura de guardián
            var yetiLight = new BABYLON.PointLight("yetiLight", 
                new BABYLON.Vector3(0, 4, 8), scene);
            yetiLight.diffuse = new BABYLON.Color3(0.7, 0.9, 1);
            yetiLight.intensity = 5;
            yetiLight.range = 12;
        }
        
        if (scene.animationGroups && scene.animationGroups.length > 0) {
            scene.animationGroups.forEach(animGroup => {
                animGroup.start(true);
            });
        }
    });

    // ========== CARGANDO EL DRAGÓN - LA AMENAZA ==========
    BABYLON.SceneLoader.ImportMesh("", "dragon_stl/", "Dragon 2.5_stl.stl", scene, 
        function (meshes) {
            console.log("🐉 ¡El Dragón ha llegado!");
            
            meshes.forEach(mesh => {
                mesh.scaling = new BABYLON.Vector3(0.03, 0.03, 0.03);
                mesh.rotation.y = -Math.PI / 4; // Volteado hacia el Yeti
                mesh.position = new BABYLON.Vector3(25, 8, -15);
                
                // Material del dragón - escamas metálicas oscuras
                var dragonMat = new BABYLON.StandardMaterial("dragonMat", scene);
                dragonMat.diffuseColor = new BABYLON.Color3(0.2, 0.1, 0.15);
                dragonMat.specularColor = new BABYLON.Color3(0.8, 0.3, 0.3);
                dragonMat.emissiveColor = new BABYLON.Color3(0.3, 0.05, 0.05);
                mesh.material = dragonMat;
            });
            
            // Luz del dragón - amenazante rojo
            var dragonLight = new BABYLON.PointLight("dragonLight", 
                new BABYLON.Vector3(25, 8, -15), scene);
            dragonLight.diffuse = new BABYLON.Color3(1, 0.3, 0);
            dragonLight.intensity = 8;
            dragonLight.range = 20;
            
            // Animación de vuelo circular del dragón
            var dragonCenter = new BABYLON.Vector3(10, 8, 0);
            var dragonRadius = 20;
            var dragonAngle = 0;
            
            scene.registerBeforeRender(function() {
                dragonAngle += 0.003;
                meshes[0].position.x = dragonCenter.x + Math.cos(dragonAngle) * dragonRadius;
                meshes[0].position.z = dragonCenter.z + Math.sin(dragonAngle) * dragonRadius;
                meshes[0].position.y = 8 + Math.sin(dragonAngle * 2) * 2;
                meshes[0].rotation.y = dragonAngle + Math.PI / 2;
                
                dragonLight.position = meshes[0].position;
            });
    });

    // ========== TORRE DE VIGILANCIA ABANDONADA ==========
    BABYLON.SceneLoader.ImportMesh("", "construccion_dxf/", 
        "wooden watch tower2.blend.dxf", scene, function (meshes) {
            console.log("🏰 Torre de vigilancia cargada");
            
            meshes.forEach(mesh => {
                mesh.scaling = new BABYLON.Vector3(2, 2, 2);
                mesh.position = new BABYLON.Vector3(-18, 0, -12);
                mesh.rotation.y = Math.PI / 6;
                
                var towerMat = new BABYLON.StandardMaterial("towerMat", scene);
                towerMat.diffuseTexture = new BABYLON.Texture("texture/madera.jpg", scene);
                towerMat.diffuseColor = new BABYLON.Color3(0.6, 0.5, 0.4);
                mesh.material = towerMat;
            });
            
            // Luz en la torre - farol abandonado
            var towerLight = new BABYLON.PointLight("towerLight", 
                new BABYLON.Vector3(-18, 8, -12), scene);
            towerLight.diffuse = new BABYLON.Color3(1, 0.8, 0.5);
            towerLight.intensity = 2;
            towerLight.range = 12;
    });

    // ========== BOSQUE DE ÁRBOLES MÍSTICOS ==========
    BABYLON.SceneLoader.ImportMesh("", "22-trees_9_obj/", "trees9.obj", scene, 
        function (meshes) {
            console.log("🌲 Bosque ancestral creado");
            
            var treeMat = new BABYLON.StandardMaterial("treeMat", scene);
            treeMat.diffuseColor = new BABYLON.Color3(0.3, 0.5, 0.3);
            treeMat.specularColor = new BABYLON.Color3(0.1, 0.1, 0.1);
            
            // Configuración del árbol base
            meshes.forEach(mesh => {
                mesh.material = treeMat;
            });
            
            // Crear bosque alrededor del escenario
            var treePositions = [
                // Bosque detrás del Yeti (protegiendo)
                {x: -8, z: 18}, {x: -4, z: 20}, {x: 0, z: 22}, 
                {x: 4, z: 20}, {x: 8, z: 18},
                {x: -10, z: 15}, {x: 10, z: 15},
                
                // Bosque a los lados
                {x: -25, z: 5}, {x: -22, z: 8}, {x: -20, z: 0},
                {x: 25, z: 5}, {x: 22, z: 8}, {x: 20, z: 0},
                
                // Bosque disperso
                {x: -15, z: -8}, {x: 15, z: -8},
                {x: -12, z: 10}, {x: 12, z: 10}
            ];
            
            treePositions.forEach((pos, index) => {
                var treeInstance = meshes[0].clone("tree" + index);
                treeInstance.position = new BABYLON.Vector3(pos.x, 0, pos.z);
                treeInstance.scaling = new BABYLON.Vector3(
                    0.8 + Math.random() * 0.4,
                    0.8 + Math.random() * 0.5,
                    0.8 + Math.random() * 0.4
                );
                treeInstance.rotation.y = Math.random() * Math.PI * 2;
            });
    });

    // ========== PARTÍCULAS MÁGICAS ==========
    var particleSystem = new BABYLON.ParticleSystem("particles", 2000, scene);
    particleSystem.particleTexture = new BABYLON.Texture("texture/cesped.jpg", scene);
    
    particleSystem.emitter = new BABYLON.Vector3(0, 2, 8); // Desde el altar
    particleSystem.minEmitBox = new BABYLON.Vector3(-10, 0, -5);
    particleSystem.maxEmitBox = new BABYLON.Vector3(10, 0, 20);
    
    particleSystem.color1 = new BABYLON.Color4(0.4, 0.7, 1, 0.5);
    particleSystem.color2 = new BABYLON.Color4(0.6, 0.9, 1, 0.3);
    particleSystem.colorDead = new BABYLON.Color4(0, 0, 0, 0);
    
    particleSystem.minSize = 0.1;
    particleSystem.maxSize = 0.3;
    particleSystem.minLifeTime = 2;
    particleSystem.maxLifeTime = 4;
    
    particleSystem.emitRate = 50;
    particleSystem.gravity = new BABYLON.Vector3(0, 2, 0);
    
    particleSystem.direction1 = new BABYLON.Vector3(-1, 2, -1);
    particleSystem.direction2 = new BABYLON.Vector3(1, 4, 1);
    
    particleSystem.minAngularSpeed = 0;
    particleSystem.maxAngularSpeed = Math.PI;
    
    particleSystem.minEmitPower = 0.5;
    particleSystem.maxEmitPower = 1.5;
    particleSystem.updateSpeed = 0.01;
    
    particleSystem.start();

    console.log("⚔️ ESCENARIO LISTO: El Guardián del Bosque Ancestral");
    console.log("🏔️ Yeti protector vs 🐉 Dragón amenazante");
    console.log("🌲 Bosque místico con torre abandonada");

    return scene;
};

