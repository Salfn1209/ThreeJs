import * as THREE from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.module.js';
        import { GLTFLoader } from 'https://threejsfundamentals.org/threejs/resources/threejs/r132/examples/jsm/loaders/GLTFLoader.js';

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();
        const listener = new THREE.AudioListener();
        camera.add(listener);



        // Audio 
        const sound = new THREE.Audio(listener);

        // Cargar musica 
        const audioLoader = new THREE.AudioLoader();
        audioLoader.load('./buda.mp3', function (buffer) {
            sound.setBuffer(buffer);
            sound.setLoop(true);
            sound.setVolume(0.5);
            sound.play();
        });


        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.position.set(1, 10, 40);
        document.body.appendChild(renderer.domElement);
        

        //Agrega fondo
        var loader = new THREE.TextureLoader();
        loader.load('./museo.jpg', function (texture) {
            scene.background = texture;
        });


        var loader = new GLTFLoader();
 
         //Se agrega el modelo 3d
         var obj;
         loader.load("scene.gltf",function(gltf){
             obj = gltf.scene;
             scene.add(gltf.scene);
         });


        //Se agrega la luz 
        var light = new THREE.HemisphereLight(0xffffff, 0x000000, 9);
        scene.add(light);


        // Se anima el modelo 
        function animate() {
            requestAnimationFrame(animate);
            obj.rotation.y += 0.02;
            renderer.render(scene, camera);
        }
        animate();
