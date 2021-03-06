
var test = (undefined == test) ?  {} : test;
test.includes = (undefined == test.includes) ?  {} : test.includes;


test.includes.ThreeEx= function() {};


test.includes.ThreeEx.includeAll = function() {
  test.includes.ThreeEx.init();
};

test.includes.ThreeEx.init = function() {
  
  
  var math = [
    "Color",
    "Quaternion",
    "Vector2",
    "Vector3",
    "Vector4",
    "Euler",
    "Line3",
    "Box2",
    "Box3",
    "Matrix3",
    "Matrix4",
    "Ray",
    "Sphere",
    "Frustum",
    "Plane",
    "Math",
    "Spline",
    "Triangle",
    "Vertex"
  ];
  
  
  var core = [
    "Clock",
    "EventDispatcher",
    "Raycaster",
    "Object3D",
    "Projector",
    "Face3",
    "Face4",
    "Geometry",
    "BufferGeometry"
  ];
  
  
  var cameras = [
    "Camera",
    "OrthographicCamera",
    "PerspectiveCamera"
  ];
  
  
  var lights = [
    "Light",
    "AmbientLight",
    "AreaLight",
    "DirectionalLight",
    "HemisphereLight",
    "PointLight",
    "SpotLight"
  ];
  
  
  
  var loaders = [
    "Loader",
    "ImageLoader",
    "JSONLoader",
    "GeometryLoader",
    "MaterialLoader",
    "TextureLoader",
    "BufferGeometryLoader",
    "LoadingManager",
    "ObjectLoader",
    "XHRLoader"
  ];
  
  
  var materials = [
    "Material",
    "LineBasicMaterial",
    "LineDashedMaterial",
    "MeshBasicMaterial",
    "MeshDepthMaterial",
    "MeshFaceMaterial",
    "MeshLambertMaterial",
    "MeshNormalMaterial",
    "MeshPhongMaterial",
    "ParticleSystemMaterial",
    "ShaderMaterial",
    "SpriteCanvasMaterial",
    "SpriteMaterial"
  ];
  
  
  var textures = [
    "Texture",
    "CompressedTexture",
    "DataTexture"
  ];
  
  
  var objects = [
    "Bone",
    "Line",
    "LOD",
    "Mesh",
    "MorphAnimMesh",
    "ParticleSystem",
    "SkinnedMesh",
    "Sprite"
  ];
  
  
  var scenes = [
    "Scene",
    "Fog",
    "FogExp2"
  ];
  
  var shaders = [
    "ShaderFlares"
  ];
  
  
  var renderers = [
    "WebGLShaders",
    "CanvasRenderer"
  ];
  
  
  var extras_renderers_plugins = [
  
    "ShadowMapPlugin",
    "SpritePlugin",
    "LensFlarePlugin"
    
  ];
  
  
  var extras_objects = [
    "ImmediateRenderObject",
    "LensFlare"
  ];
  
  
  var renderers2 = [
    "WebGLRenderer",
    "WebGLRenderTarget",
    "WebGLRenderTargetCube"
  ];
  
  
  var renderables = [
    "RenderableFace3",
    "RenderableLine",
    "RenderableObject",
    "RenderableSprite",
    "RenderableVertex"
  ];
  
  
  var extras = [
    "FontUtils",
    "GeometryUtils",
    "ImageUtils",
    "SceneUtils"
  ];
  
  var extras_geometries = [
    "CubeGeometry",
    "PlaneGeometry",
    "SphereGeometry",
    "CylinderGeometry",
    "IcosahedronGeometry",
    "PolyhedronGeometry",
    "TorusGeometry"
  ];
  
  var extras2 = [
    "core/Curve",
    "curves/SplineCurve",
    "curves/SplineCurve3",
    "helpers/BoundingBoxHelper"
  ];
  
  var customsrc = [
  
    "SceneLoaderEx",
    "Object3DEx",
    "MeshEx",
    "GeometryEx",
    "TrackballControlsEx",
    "BoundingBox",
    "CameraEx",
    "Vector3Ex",
    "LoaderEx"
    
  ];
  
  var loaders2 = [
    "BinaryLoader"
  ];
  

  // test.includes.MainLibs.addOneScript("../../LearnHPB/js/three/src/", "Three");
  // test.includes.MainLibs.addScripts("../../LearnHPB/js/three/src/math/", math);
  // test.includes.MainLibs.addScripts("../../LearnHPB/js/three/src/core/", core);
  // test.includes.MainLibs.addScripts("../../LearnHPB/js/three/src/cameras/", cameras);
  // test.includes.MainLibs.addScripts("../../LearnHPB/js/three/src/lights/", lights);
  // test.includes.MainLibs.addScripts("../../LearnHPB/js/three/src/loaders/", loaders);
  // test.includes.MainLibs.addScripts("../../LearnHPB/js/three/src/materials/", materials);
  // test.includes.MainLibs.addScripts("../../LearnHPB/js/three/src/textures/", textures);
  // test.includes.MainLibs.addScripts("../../LearnHPB/js/three/src/objects/", objects);
  // test.includes.MainLibs.addScripts("../../LearnHPB/js/three/src/scenes/", scenes);
  // test.includes.MainLibs.addScripts("../../LearnHPB/js/three/src/extras/shaders/", shaders);
  // test.includes.MainLibs.addScripts("../../LearnHPB/js/three/src/renderers/", renderers);
  // test.includes.MainLibs.addScripts("../../LearnHPB/js/three/src/extras/renderers/plugins/", extras_renderers_plugins);
  // test.includes.MainLibs.addScripts("../../LearnHPB/js/three/src/extras/objects/", extras_objects);
  // test.includes.MainLibs.addScripts("../../LearnHPB/js/three/src/renderers/", renderers2);
  // test.includes.MainLibs.addScripts("../../LearnHPB/js/three/src/renderers/renderables/", renderables);
  // test.includes.MainLibs.addScripts("../../LearnHPB/js/three/src/extras/", extras);
  // test.includes.MainLibs.addScripts("../../LearnHPB/js/three/src/extras/geometries/", extras_geometries);
  // test.includes.MainLibs.addScripts("../../LearnHPB/js/three/src/extras/", extras2);
  // test.includes.MainLibs.addScripts("../../LearnHPB/js/three/custom-src/", customsrc);
  // test.includes.MainLibs.addScripts("../../LearnHPB/js/three/loaders/", loaders2);

  test.includes.MainLibs.addOneScript("js/three/src/", "Three");
  test.includes.MainLibs.addScripts("js/three/src/math/", math);
  test.includes.MainLibs.addScripts("js/three/src/core/", core);
  test.includes.MainLibs.addScripts("js/three/src/cameras/", cameras);
  test.includes.MainLibs.addScripts("js/three/src/lights/", lights);
  test.includes.MainLibs.addScripts("js/three/src/loaders/", loaders);
  test.includes.MainLibs.addScripts("js/three/src/materials/", materials);
  test.includes.MainLibs.addScripts("js/three/src/textures/", textures);
  test.includes.MainLibs.addScripts("js/three/src/objects/", objects);
  test.includes.MainLibs.addScripts("js/three/src/scenes/", scenes);
  test.includes.MainLibs.addScripts("js/three/src/extras/shaders/", shaders);
  test.includes.MainLibs.addScripts("js/three/src/renderers/", renderers);
  test.includes.MainLibs.addScripts("js/three/src/extras/renderers/plugins/", extras_renderers_plugins);
  test.includes.MainLibs.addScripts("js/three/src/extras/objects/", extras_objects);
  test.includes.MainLibs.addScripts("js/three/src/renderers/", renderers2);
  test.includes.MainLibs.addScripts("js/three/src/renderers/renderables/", renderables);
  test.includes.MainLibs.addScripts("js/three/src/extras/", extras);
  test.includes.MainLibs.addScripts("js/three/src/extras/geometries/", extras_geometries);
  test.includes.MainLibs.addScripts("js/three/src/extras/", extras2);
  test.includes.MainLibs.addScripts("js/three/custom-src/", customsrc);
  test.includes.MainLibs.addScripts("js/three/loaders/", loaders2);


};







