import * as BABYLON from '@babylonjs/core';

const canvas = document.getElementById('renderCanvas');

const engine = new BABYLON.Engine(canvas);

const createScene = function(){
  const scene = new BABYLON.Scene(engine);

  // This is to create a fixed camera view
  scene.createDefaultCameraOrLight(true, false, true);
  // scene.createDefaultCamera();

  // This is to create a Universal Camera View that moves along the mouse
  // scene.createDefaultLight();
  // const camera = new BABYLON.UniversalCamera('camera', new BABYLON.Vector3(0,15,20), scene);
  // camera.attachControl(true);
  // camera.inputs.addMouseWheel();
  // camera.setTarget(BABYLON.Vector3.Zero());


  // 

  const box = new BABYLON.MeshBuilder.CreateBox('myBox', {
    size:0.7,
    // width:2,
    // height:0.05,
    // depth:0.5,
    faceColors: [
      new BABYLON.Color4(1, 0, 0, 2),
      BABYLON.Color3.Green(),
   
    ]
  });


  // const sphere = new BABYLON.MeshBuilder.CreateSphere('mySphere', {
  //   segments: 50,
  //   diameter: 0.3,
  //   diameterY: 0.4

  // }, scene);

  // const sphereMaterial = new BABYLON.StandardMaterial();
  // sphere.material = sphereMaterial;

  // sphereMaterial.diffuseColor = new BABYLON.Color3(0,1,0); //Gives colors to the object
  // sphereMaterial.specularColor = new BABYLON.Color3(1,0,0);

  // sphereMaterial.ambientColor = new BABYLON.Color3(0, 1, 1); //Gives ambient color to the object,  but not visible with default camera.
  // scene.ambientColor = new BABYLON.Color3(0,1,0.5); 

  // sphereMaterial.emissiveColor = new BABYLON.Color3(0,1,0); //Gives color even with default scene.

  // sphereMaterial.alpha = 1; //opacity of the material
  // sphereMaterial.wireframe = true; //Creates a wireframe to the sphere.

  // Diffuse texture can be given by sphere.Material.diffuseTexture, the image of the texture must be provided in the instance argument. 

  // const ground = new BABYLON.MeshBuilder.CreateGround('',{
  //     height:10,
  //     width:10,
  //     subdivisions:5,
  //     subdivisionsX: 10
  // })

  //   ground.material = new BABYLON.StandardMaterial();
  //   ground.material.wireframe = true;


  // The below code helps to create a Map from the height map. 
  // Height map is a black & white image, based on the pixel value height on the Z value will change accordingly. 
  // const groundFromHM = new BABYLON.MeshBuilder.CreateGroundFromHeightMap('', '/assets/heightMap.jpeg',{
  //   height:10,
  //   width:10,
  //   subdivisions:50
  // });

  // groundFromHM.material = new BABYLON.StandardMaterial();
  // groundFromHM.material.wireframe = true;

  // GEOMETRIC TRANSFORMATIONS

  // box.position.x = 1;
  // box.position = new BABYLON.Vector3(-1,0.5,9);
  // box.scaling.y = 2;


  return scene;
}

const scene = createScene();

engine.runRenderLoop(function(){
  scene.render();
});

window.addEventListener('resize', function(){
  engine.resize();
});