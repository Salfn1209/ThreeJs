var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(120, window.innerWidth / window.innerHeight, 0.6, 2000);

var loader = new THREE.TextureLoader();
loader.load('/Escenario1/cielo.jpg', function(texture){
    scene.background = texture;
})



var renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
document.body.appendChild(renderer.domElement);


// figura Cubo
var geometry = new THREE.BoxGeometry(13, 13, 13, 4, 4, 4);
var material = new THREE.MeshStandardMaterial({ color: 0xDAF7A6});
var Cube = new THREE.Mesh(geometry, material);
Cube.castShadow = true;
Cube.position.set(10,1,3);
scene.add(Cube);

// Agrega luz
var light = new THREE.PointLight(0xffffff, 20, 200);
light.position.set(40, 16, 2);
light.castShadow = true;
scene.add(light);



//Posicion de la camara con ejes 
camera.position.z = 20;
camera.position.y = -3;
camera.rotation.x = .5;


//Se anima la figura cubo
function render() {
    Cube.rotation.x += 0.01
    Cube.rotation.y += 0.01
  
    requestAnimationFrame(render);
    renderer.render(scene, camera);

   
}
render();

