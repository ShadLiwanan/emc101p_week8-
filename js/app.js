//Important Stuff
let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(60, window.innerWidth/ window.innerHeight, 0.1, 1000); 
let renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);  



///shapes

///table top
let tableGeometry = new THREE.BoxGeometry( 30, 1, 10);
let tableTop = new THREE.MeshLambertMaterial( {color: "brown"} );
let cube1 = new THREE.Mesh(tableGeometry, tableTop);
scene.add(cube1);

cube1.position.y = -3.5
cube1.position.x = 1
cube1.rotation.y = 1

// leg 1
let geometryLeg1 = new THREE.CylinderGeometry( 0.5, 0.5, 15, 32 );
let leg1 = new THREE.MeshLambertMaterial( {color: "brown"} );
let cylinder1 = new THREE.Mesh( geometryLeg1, leg1 );
scene.add( cylinder1 );

cylinder1.position.y = -12
cylinder1.position.x = -5.5
cylinder1.rotation.y = -13
cylinder1.position.z = -0.5
geometryLeg1.scale (5.5,0.8,-5)

// leg 2
let geometryLeg2 = new THREE.CylinderGeometry( 0.5, 0.5, 15, 32 );
let leg2 = new THREE.MeshLambertMaterial( {color: "brown"} );
let cylinder2 = new THREE.Mesh( geometryLeg2, leg2 );
scene.add( cylinder2 );

cylinder2.position.y = -10
cylinder2.position.x = 4
cylinder2.rotation.y = -13
cylinder2.position.z = -4

geometryLeg2.scale (5,0.8,-5)

///lamp stand

let lampstandGeometry = new THREE.CylinderGeometry( -0.5, 1, 5);
let lampStand = new THREE.MeshLambertMaterial( {color: "gray"} );
let cylinder3 = new THREE.Mesh(lampstandGeometry, lampStand );
scene.add( cylinder3 );

cylinder3.position.y = -0.5
cylinder3.position.x = 2
cylinder3.position.z = -3


///lamp circle thing
let lampbulbGeometry = new THREE.SphereGeometry(1,50,50);
let lampCT= new THREE.MeshLambertMaterial({color : "yellow"});
let sphere1 = new THREE.Mesh(lampbulbGeometry, lampCT);
scene.add(sphere1);

sphere1.position.y=2.5
sphere1.position.x = 1.5
sphere1.rotation.z = 3
sphere1.rotation.y = 1

///lamp cone
let lampconeGeometry = new THREE.CylinderGeometry( -2, 0.80, 1);
let lampCone = new THREE.MeshLambertMaterial( {color: "blue"} );
let cylinder4 = new THREE.Mesh( lampconeGeometry, lampCone );
scene.add( cylinder4 );

cylinder4.position.y = 3
cylinder4.position.x = 1.6		
cylinder4.rotation.x = 3.8

///Monitor
let monitorGeometry = new THREE.BoxGeometry( 8, 5, -0.20);
let monitor = new THREE.MeshLambertMaterial( {color: "gray"} );
let cube2 = new THREE.Mesh(monitorGeometry, monitor);
scene.add(cube2);

cube2.position.y = 2
cube2.position.x =-5.5
cube2.position.z = 14
cube2.rotation.y = 4

///Monitor Stand

let letmonitorstandGeometry = new THREE.CylinderGeometry( 0.12, 0.8, 5);
let monitorStand = new THREE.MeshLambertMaterial( {color: "gray"} );
let cylinder5 = new THREE.Mesh( letmonitorstandGeometry, monitorStand );
scene.add( cylinder5 );

cylinder5.position.y = 0
cylinder5.position.x =-7
cylinder5.position.z = 14
cylinder5.rotation.y = 4

///Book 1
let book1Geometry = new THREE.BoxGeometry( 5, 1, 2);
let book1 = new THREE.MeshLambertMaterial( {color: "green"} );
let cube3 = new THREE.Mesh(book1Geometry, book1);
scene.add(cube3);
cube3.position.y = -2
cube3.position.x = 1
cube3.position.z = 4
cube3.rotation.y = 1

///Book 2
let book2Geometry = new THREE.BoxGeometry( 5, 1, 2);
let book2 = new THREE.MeshLambertMaterial( {color: "blue"} );
let cube4 = new THREE.Mesh(book2Geometry, book2);
scene.add(cube4);

cube4.position.y = -2
cube4.position.x = 4
cube4.position.z = 4	
cube4.rotation.y = 1
///Book 3
let book3Geometry = new THREE.BoxGeometry( 5, 1, 2);
let book3 = new THREE.MeshLambertMaterial( {color: "violet"} );
let cube5 = new THREE.Mesh(book3Geometry, book3);
scene.add(cube5);

cube5.position.y = -2
cube5.position.x = 1
cube5.position.z = 10
cube5.rotation.y = 1

///Light

let light1 = new THREE.AmbientLight( 0x404040 );
scene.add( light1 );

let light2 = new THREE.PointLight( 0xffff00, 1, 100 );
light2.position.set( 1.5, 2.5, 1 );
scene.add( light2 );





///Camera
camera.position.z= 40;
camera.position.y= 1;
camera.position.x= -7;
camera.rotation.y= -0.5;
renderer.render(scene, camera); 

