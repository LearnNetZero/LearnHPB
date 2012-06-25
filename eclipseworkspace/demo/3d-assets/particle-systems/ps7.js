/* Converted from: particle system5.blend
 *
 * File generated with Blender 2.58 Exporter
 * https://github.com/mrdoob/three.js/tree/master/utils/exporters/blender/
 *
 * objects:    49
 * geometries: 31
 * materials:  77
 * textures:   0
 */

var scene = {
"name" : "particleSystem",
"type" : "scene",
"urlBaseType" : "relativeToScene",


"objects" :
{
    "Cube.007" : {
        "geometry"  : "geo_Cylinder",
        "groups"    : [ "air-handler", "ps-05" ],
        "materials" : [ "particleRed" ],
        "position"  : [ 0.529892, -5.762990, 3.037380 ],
        "rotation"  : [ -0.000000, 1.570796, 0.000000 ],
        "quaternion": [ 0.707107, 0.000000, 0.707107, 0.000000 ],
        "scale"     : [ 0.500000, 0.500000, 0.500000 ],
        "visible"       : true,
        "castsShadow"   : false,
        "meshCollider"  : false,
        "trigger"       : "None"
    },
    "ps9" : {
        "groups"    : [  ],
        "position"  : [ 0.000000, 0.000000, 0.000000 ],
        "rotation"  : [ 0.000000, -0.000000, 0.000000 ],
        "quaternion": [ 1.000000, 0.000000, 0.000000, 0.000000 ],
        "scale"     : [ 1.000000, 1.000000, 1.000000 ],
        "trigger"   : "None"
    },

    "Diffuser.009" : {
        "groups"    : [  ],
        "position"  : [ 0.000000, 0.000000, 0.000000 ],
        "rotation"  : [ 0.000000, -0.000000, 1.570797 ],
        "quaternion": [ 0.707107, 0.000000, 0.000000, 0.707107 ],
        "scale"     : [ 1.000000, 1.000000, 1.000000 ],
        "trigger"   : "None"
    },

    "Cube.901" : {
        "geometry"  : "geo_Cube.001",
        "groups"    : [ "Diffuser.009" ],
        "materials" : [ "particleBoxBlue" ],
        "position"  : [ -7.630552, -16.417835, 0.754394 ],
        "rotation"  : [ 0.000000, -0.000000, 1.570797 ],
        "quaternion": [ 0.707107, 0.000000, 0.000000, 0.707107 ],
        "scale"     : [ 0.200000, 0.200000, 0.200000 ],
        "visible"       : true,
        "castsShadow"   : false,
        "meshCollider"  : false,
        "trigger"       : "None"
    },

    "Cube.902" : {
        "geometry"  : "geo_Cube.009",
        "groups"    : [ "Diffuser.009" ],
        "materials" : [ "particleBoxBlue" ],
        "position"  : [ -8.120714, -16.496971, 0.795637 ],
        "rotation"  : [ 0.000000, -0.000000, 1.570797 ],
        "quaternion": [ 0.707107, 0.000000, 0.000000, 0.707107 ],
        "scale"     : [ 0.140000, 0.150000, 0.150000 ],
        "visible"       : true,
        "castsShadow"   : false,
        "meshCollider"  : false,
        "trigger"       : "None"
    },

    "Cube.903" : {
        "geometry"  : "geo_Cube.010",
        "groups"    : [ "Diffuser.009" ],
        "materials" : [ "particleBoxBlue" ],
        "position"  : [ -9.412699, -16.467312, 0.796227 ],
        "rotation"  : [ 0.000000, -0.000000, 1.570797 ],
        "quaternion": [ 0.707107, 0.000000, 0.000000, 0.707107 ],
        "scale"     : [ 0.140000, 0.150000, 0.150000 ],
        "visible"       : true,
        "castsShadow"   : false,
        "meshCollider"  : false,
        "trigger"       : "None"
    },

    "Cube.904" : {
        "geometry"  : "geo_Cube.012",
        "groups"    : [ "Diffuser.009" ],
        "materials" : [ "particleBoxBlue" ],
        "position"  : [ -9.885302, -16.446796, 0.781313 ],
        "rotation"  : [ 0.000000, -0.000000, 1.570797 ],
        "quaternion": [ 0.707107, 0.000000, 0.000000, 0.707107 ],
        "scale"     : [ 0.090000, 0.120000, 0.110000 ],
        "visible"       : true,
        "castsShadow"   : false,
        "meshCollider"  : false,
        "trigger"       : "None"
    },

    "Cube.906" : {
        "geometry"  : "geo_Cube.015",
        "groups"    : [ "Diffuser.009" ],
        "materials" : [ "particleBoxBlue" ],
        "position"  : [ -10.406653, -16.417093, -0.145206 ],
        "rotation"  : [ 0.000000, -0.000000, 1.570797 ],
        "quaternion": [ 0.707107, 0.000000, 0.000000, 0.707107 ],
        "scale"     : [ 0.500000, 0.500000, 0.100000 ],
        "visible"       : true,
        "castsShadow"   : false,
        "meshCollider"  : false,
        "trigger"       : "None"
    },

    "Cube.907" : {
        "geometry"  : "geo_Cube.016",
        "groups"    : [ "Diffuser.009" ],
        "materials" : [ "particleBoxGreen" ],
        "position"  : [ -10.473335, -16.429626, -0.696259 ],
        "rotation"  : [ 0.000000, -0.000000, 1.570797 ],
        "quaternion": [ 0.707107, 0.000000, 0.000000, 0.707107 ],
        "scale"     : [ 1.000000, 1.000000, 0.100000 ],
        "visible"       : true,
        "castsShadow"   : false,
        "meshCollider"  : false,
        "trigger"       : "None"
    },

    "Cube.905" : {
        "geometry"  : "geo_Cube.032",
        "groups"    : [ "Diffuser.009" ],
        "materials" : [ "particleBoxBlue" ],
        "position"  : [ -10.414740, -16.446796, 0.356984 ],
        "rotation"  : [ 0.000000, -0.000000, 1.570797 ],
        "quaternion": [ 0.707107, 0.000000, 0.000000, 0.707107 ],
        "scale"     : [ 0.115000, 0.115000, 0.115000 ],
        "visible"       : true,
        "castsShadow"   : false,
        "meshCollider"  : false,
        "trigger"       : "None"
    },

    "ps6" : {
        "groups"    : [  ],
        "position"  : [ 0.000000, 0.000000, 0.000000 ],
        "rotation"  : [ 0.000000, -0.000000, 0.000000 ],
        "quaternion": [ 1.000000, 0.000000, 0.000000, 0.000000 ],
        "scale"     : [ 1.000000, 1.000000, 1.000000 ],
        "trigger"   : "None"
    },

    "Diffuser.006" : {
        "groups"    : [  ],
        "position"  : [ 0.000000, 0.000000, 0.000000 ],
        "rotation"  : [ 0.000000, -0.000000, 3.141591 ],
        "quaternion": [ 0.000001, 0.000000, 0.000000, 1.000000 ],
        "scale"     : [ 1.000000, 1.000000, 1.000000 ],
        "trigger"   : "None"
    },

    "Cube.601" : {
        "geometry"  : "geo_Cube.056",
        "groups"    : [ "ps-06" ],
        "materials" : [ "particleRed" ],
        "position"  : [ -0.118666, -16.490501, 0.742418 ],
        "rotation"  : [ 0.000000, -0.000000, -3.141591 ],
        "quaternion": [ -0.000001, 0.000000, 0.000000, 1.000000 ],
        "scale"     : [ 0.200000, 0.200000, 0.200000 ],
        "visible"       : true,
        "castsShadow"   : false,
        "meshCollider"  : false,
        "trigger"       : "None"
    },

    "Cube.602" : {
        "geometry"  : "geo_Cube.055",
        "groups"    : [ "ps-06" ],
        "materials" : [ "particleRed" ],
        "position"  : [ -0.039528, -16.980663, 0.783662 ],
        "rotation"  : [ 0.000000, -0.000000, -3.141591 ],
        "quaternion": [ -0.000001, 0.000000, 0.000000, 1.000000 ],
        "scale"     : [ 0.140000, 0.150000, 0.150000 ],
        "visible"       : true,
        "castsShadow"   : false,
        "meshCollider"  : false,
        "trigger"       : "None"
    },

    "Cube.603" : {
        "geometry"  : "geo_Cube.054",
        "groups"    : [ "ps-06" ],
        "materials" : [ "particleRed" ],
        "position"  : [ -0.069188, -18.272648, 0.784251 ],
        "rotation"  : [ 0.000000, -0.000000, -3.141591 ],
        "quaternion": [ -0.000001, 0.000000, 0.000000, 1.000000 ],
        "scale"     : [ 0.140000, 0.150000, 0.150000 ],
        "visible"       : true,
        "castsShadow"   : false,
        "meshCollider"  : false,
        "trigger"       : "None"
    },

    "Cube.604" : {
        "geometry"  : "geo_Cube.053",
        "groups"    : [ "ps-06" ],
        "materials" : [ "particleRed" ],
        "position"  : [ -0.089702, -18.745251, 0.769337 ],
        "rotation"  : [ 0.000000, -0.000000, -3.141591 ],
        "quaternion": [ -0.000001, 0.000000, 0.000000, 1.000000 ],
        "scale"     : [ 0.090000, 0.120000, 0.110000 ],
        "visible"       : true,
        "castsShadow"   : false,
        "meshCollider"  : false,
        "trigger"       : "None"
    },

    "Cube.606" : {
        "geometry"  : "geo_Cube.052",
        "groups"    : [ "ps-06" ],
        "materials" : [ "particleRed" ],
        "position"  : [ -0.119405, -19.266603, -0.157182 ],
        "rotation"  : [ 0.000000, -0.000000, -3.141591 ],
        "quaternion": [ -0.000001, 0.000000, 0.000000, 1.000000 ],
        "scale"     : [ 0.500000, 0.500000, 0.100000 ],
        "visible"       : true,
        "castsShadow"   : false,
        "meshCollider"  : false,
        "trigger"       : "None"
    },

    "Cube.607" : {
        "geometry"  : "geo_Cube.051",
        "groups"    : [ "ps-06" ],
        "materials" : [ "particleRed" ],
        "position"  : [ -0.106872, -19.333284, -0.708235 ],
        "rotation"  : [ 0.000000, -0.000000, -3.141591 ],
        "quaternion": [ -0.000001, 0.000000, 0.000000, 1.000000 ],
        "scale"     : [ 1.000000, 1.000000, 0.100000 ],
        "visible"       : true,
        "castsShadow"   : false,
        "meshCollider"  : false,
        "trigger"       : "None"
    },

    "Cube.605" : {
        "geometry"  : "geo_Cube.050",
        "groups"    : [ "ps-06" ],
        "materials" : [ "particleRed" ],
        "position"  : [ -0.089702, -19.274689, 0.345008 ],
        "rotation"  : [ 0.000000, -0.000000, -3.141591 ],
        "quaternion": [ -0.000001, 0.000000, 0.000000, 1.000000 ],
        "scale"     : [ 0.115000, 0.115000, 0.115000 ],
        "visible"       : true,
        "castsShadow"   : false,
        "meshCollider"  : false,
        "trigger"       : "None"
    },

    "duct1" : {
        "groups"    : [  ],
        "position"  : [ 1.526053, -19.278402, 0.000000 ],
        "rotation"  : [ 0.000000, -0.000000, 0.000000 ],
        "quaternion": [ 1.000000, 0.000000, 0.000000, 0.000000 ],
        "scale"     : [ 1.000000, 1.000000, 1.000000 ],
        "trigger"   : "None"
    },

    "ps5" : {
        "groups"    : [  ],
        "position"  : [ 0.000000, 0.000000, 0.000000 ],
        "rotation"  : [ 0.000000, -0.000000, 0.000000 ],
        "quaternion": [ 1.000000, 0.000000, 0.000000, 0.000000 ],
        "scale"     : [ 1.000000, 1.000000, 1.000000 ],
        "trigger"   : "None"
    },

    "Diffuser.005" : {
        "groups"    : [ "ps-05" ],
        "position"  : [ 0.000000, 0.000000, 0.000000 ],
        "rotation"  : [ 0.000000, -0.000000, 0.000000 ],
        "quaternion": [ 1.000000, 0.000000, 0.000000, 0.000000 ],
        "scale"     : [ 1.000000, 1.000000, 1.000000 ],
        "trigger"   : "None"
    },

    "Cube.015" : {
        "geometry"  : "geo_Cube.032",
        "groups"    : [ "ps-05" ],
        "materials" : [ "particleBoxBlue" ],
        "position"  : [ 0.626000, -5.580567, 0.356984 ],
        "rotation"  : [ 0.000000, -0.000000, 0.000000 ],
        "quaternion": [ 1.000000, 0.000000, 0.000000, 0.000000 ],
        "scale"     : [ 0.115000, 0.115000, 0.115000 ],
        "visible"       : true,
        "castsShadow"   : false,
        "meshCollider"  : false,
        "trigger"       : "None"
    },

    "Cube.017" : {
        "geometry"  : "geo_Cube.016",
        "groups"    : [ "ps-05" ],
        "materials" : [ "particleBoxGreen" ],
        "position"  : [ 0.643170, -5.521972, -0.696259 ],
        "rotation"  : [ 0.000000, -0.000000, 0.000000 ],
        "quaternion": [ 1.000000, 0.000000, 0.000000, 0.000000 ],
        "scale"     : [ 1.000000, 1.000000, 0.100000 ],
        "visible"       : true,
        "castsShadow"   : false,
        "meshCollider"  : false,
        "trigger"       : "None"
    },

    "Cube.016" : {
        "geometry"  : "geo_Cube.015",
        "groups"    : [ "ps-05" ],
        "materials" : [ "particleBoxBlue" ],
        "position"  : [ 0.655703, -5.588653, -0.145206 ],
        "rotation"  : [ 0.000000, -0.000000, 0.000000 ],
        "quaternion": [ 1.000000, 0.000000, 0.000000, 0.000000 ],
        "scale"     : [ 0.500000, 0.500000, 0.100000 ],
        "visible"       : true,
        "castsShadow"   : false,
        "meshCollider"  : false,
        "trigger"       : "None"
    },

    "Cube.014" : {
        "geometry"  : "geo_Cube.012",
        "groups"    : [ "ps-05" ],
        "materials" : [ "particleBoxBlue" ],
        "position"  : [ 0.626000, -6.110005, 0.781313 ],
        "rotation"  : [ 0.000000, -0.000000, 0.000000 ],
        "quaternion": [ 1.000000, 0.000000, 0.000000, 0.000000 ],
        "scale"     : [ 0.090000, 0.120000, 0.110000 ],
        "visible"       : true,
        "castsShadow"   : false,
        "meshCollider"  : false,
        "trigger"       : "None"
    },

    "Cube.013" : {
        "geometry"  : "geo_Cube.010",
        "groups"    : [ "ps-05" ],
        "materials" : [ "particleBoxBlue" ],
        "position"  : [ 0.605484, -6.582608, 0.796227 ],
        "rotation"  : [ 0.000000, -0.000000, 0.000000 ],
        "quaternion": [ 1.000000, 0.000000, 0.000000, 0.000000 ],
        "scale"     : [ 0.140000, 0.150000, 0.150000 ],
        "visible"       : true,
        "castsShadow"   : false,
        "meshCollider"  : false,
        "trigger"       : "None"
    },

    "Cube.012" : {
        "geometry"  : "geo_Cube.009",
        "groups"    : [ "ps-05" ],
        "materials" : [ "particleBoxBlue" ],
        "position"  : [ 0.575823, -7.874592, 0.795637 ],
        "rotation"  : [ 0.000000, -0.000000, 0.000000 ],
        "quaternion": [ 1.000000, 0.000000, 0.000000, 0.000000 ],
        "scale"     : [ 0.140000, 0.150000, 0.150000 ],
        "visible"       : true,
        "castsShadow"   : false,
        "meshCollider"  : false,
        "trigger"       : "None"
    },

    "Cube.011" : {
        "geometry"  : "geo_Cube.001",
        "groups"    : [ "ps-05" ],
        "materials" : [ "particleBoxBlue" ],
        "position"  : [ 0.654960, -8.364754, 0.754394 ],
        "rotation"  : [ 0.000000, -0.000000, 0.000000 ],
        "quaternion": [ 1.000000, 0.000000, 0.000000, 0.000000 ],
        "scale"     : [ 0.200000, 0.200000, 0.200000 ],
        "visible"       : true,
        "castsShadow"   : false,
        "meshCollider"  : false,
        "trigger"       : "None"
    },

    "Cube.027" : {
        "geometry"  : "geo_Cube.024",
        "groups"    : [ "ps-05" ],
        "materials" : [ "particleBoxBlue" ],
        "position"  : [ 0.531557, 6.417870, 3.000491 ],
        "rotation"  : [ 0.000000, -0.000000, 0.000000 ],
        "quaternion": [ 1.000000, 0.000000, 0.000000, 0.000000 ],
        "scale"     : [ 0.800000, 0.100000, 0.700000 ],
        "visible"       : true,
        "castsShadow"   : false,
        "meshCollider"  : false,
        "trigger"       : "None"
    },

    "Cube.026" : {
        "geometry"  : "geo_Cube.022",
        "groups"    : [ "ps-05" ],
        "materials" : [ "particleBoxBlue" ],
        "position"  : [ 0.531557, 3.445758, 3.000491 ],
        "rotation"  : [ 0.000000, -0.000000, 0.000000 ],
        "quaternion": [ 1.000000, 0.000000, 0.000000, 0.000000 ],
        "scale"     : [ 0.800000, 0.800000, 0.700000 ],
        "visible"       : true,
        "castsShadow"   : false,
        "meshCollider"  : false,
        "trigger"       : "None"
    },

    "Cube.025" : {
        "geometry"  : "geo_Cube.021",
        "groups"    : [ "ps-05" ],
        "materials" : [ "particleBoxBlue" ],
        "position"  : [ 0.598349, 3.445758, 2.018711 ],
        "rotation"  : [ 0.000000, -0.000000, 0.000000 ],
        "quaternion": [ 1.000000, 0.000000, 0.000000, 0.000000 ],
        "scale"     : [ 0.800000, 0.800000, 0.100000 ],
        "visible"       : true,
        "castsShadow"   : false,
        "meshCollider"  : false,
        "trigger"       : "None"
    },

    "Cube.024" : {
        "geometry"  : "geo_Cube.020",
        "groups"    : [ "ps-05" ],
        "materials" : [ "particleBoxBlue" ],
        "position"  : [ 0.598349, 3.445758, 0.601592 ],
        "rotation"  : [ 0.000000, -0.000000, 0.000000 ],
        "quaternion": [ 1.000000, 0.000000, 0.000000, 0.000000 ],
        "scale"     : [ 0.800000, 0.800000, 0.100000 ],
        "visible"       : true,
        "castsShadow"   : false,
        "meshCollider"  : false,
        "trigger"       : "None"
    },

    "Cube.023" : {
        "geometry"  : "geo_Cube.019",
        "groups"    : [ "ps-05" ],
        "materials" : [ "particleBoxBlue" ],
        "position"  : [ 0.598349, 2.454700, 0.601592 ],
        "rotation"  : [ 1.570797, -0.000000, 0.000000 ],
        "quaternion": [ 0.707107, 0.707107, 0.000000, 0.000000 ],
        "scale"     : [ 0.600000, 0.500000, 0.100000 ],
        "visible"       : true,
        "castsShadow"   : false,
        "meshCollider"  : false,
        "trigger"       : "None"
    },

    "Cube.022" : {
        "geometry"  : "geo_Cube.014",
        "groups"    : [ "ps-05" ],
        "materials" : [ "particleBoxBlue" ],
        "position"  : [ 1.567474, 0.957014, -0.381363 ],
        "rotation"  : [ 0.000000, -0.000000, 0.000000 ],
        "quaternion": [ 1.000000, 0.000000, 0.000000, 0.000000 ],
        "scale"     : [ 2.000000, 1.500000, 0.100000 ],
        "visible"       : true,
        "castsShadow"   : false,
        "meshCollider"  : false,
        "trigger"       : "None"
    },

    "Cube.021" : {
        "geometry"  : "geo_Cube.011",
        "groups"    : [ "ps-05" ],
        "materials" : [ "particleBoxBlue" ],
        "position"  : [ 1.711410, -0.582856, -1.223312 ],
        "rotation"  : [ 0.000000, -0.000000, 0.000000 ],
        "quaternion": [ 1.000000, 0.000000, 0.000000, 0.000000 ],
        "scale"     : [ 1.999999, 3.000000, 0.100000 ],
        "visible"       : true,
        "castsShadow"   : false,
        "meshCollider"  : false,
        "trigger"       : "None"
    },

    "Cube.020" : {
        "geometry"  : "geo_Cube.008",
        "groups"    : [ "ps-05" ],
        "materials" : [ "particleBoxBlue" ],
        "position"  : [ 1.711410, -1.694056, -1.816074 ],
        "rotation"  : [ 0.000000, -0.000000, 0.000000 ],
        "quaternion": [ 1.000000, 0.000000, 0.000000, 0.000000 ],
        "scale"     : [ 1.999999, 3.999998, 0.100000 ],
        "visible"       : true,
        "castsShadow"   : false,
        "meshCollider"  : false,
        "trigger"       : "None"
    },

    "Cube.019" : {
        "geometry"  : "geo_Cube.018",
        "groups"    : [ "ps-05" ],
        "materials" : [ "particleBoxBlue" ],
        "position"  : [ 1.711410, -3.811996, -2.463070 ],
        "rotation"  : [ 0.000000, -0.000000, 0.000000 ],
        "quaternion": [ 1.000000, 0.000000, 0.000000, 0.000000 ],
        "scale"     : [ 1.999999, 3.999998, 0.100000 ],
        "visible"       : true,
        "castsShadow"   : false,
        "meshCollider"  : false,
        "trigger"       : "None"
    },

    "Cube.018" : {
        "geometry"  : "geo_Cube.017",
        "groups"    : [ "ps-05" ],
        "materials" : [ "particleBoxBlue" ],
        "position"  : [ 0.438051, -5.705773, -1.302173 ],
        "rotation"  : [ 0.000000, -0.000000, 0.000000 ],
        "quaternion": [ 1.000000, 0.000000, 0.000000, 0.000000 ],
        "scale"     : [ 1.999999, 1.999999, 0.100000 ],
        "visible"       : true,
        "castsShadow"   : false,
        "meshCollider"  : false,
        "trigger"       : "None"
    },

    "Cube.010" : {
        "geometry"  : "geo_Cube.001",
        "groups"    : [ "air-handler", "ps-05" ],
        "materials" : [ "particleBoxBlue" ],
        "position"  : [ 0.547076, -8.652985, 1.354098 ],
        "rotation"  : [ 0.000000, -0.000000, 0.000000 ],
        "quaternion": [ 1.000000, 0.000000, 0.000000, 0.000000 ],
        "scale"     : [ 0.800000, 0.400000, 0.200000 ],
        "visible"       : true,
        "castsShadow"   : false,
        "meshCollider"  : false,
        "trigger"       : "None"
    },

    "Cube.009" : {
        "geometry"  : "geo_Cube.001",
        "groups"    : [ "air-handler", "ps-05" ],
        "materials" : [ "particleBoxBlue" ],
        "position"  : [ 0.604418, -8.476593, 2.382770 ],
        "rotation"  : [ 0.000000, -0.000000, 0.000000 ],
        "quaternion": [ 1.000000, 0.000000, 0.000000, 0.000000 ],
        "scale"     : [ 0.800000, 0.400000, 0.200000 ],
        "visible"       : true,
        "castsShadow"   : false,
        "meshCollider"  : false,
        "trigger"       : "None"
    },

    "Cube.008" : {
        "geometry"  : "geo_Cube.001",
        "groups"    : [ "air-handler", "ps-05" ],
        "materials" : [ "particleBoxBlue" ],
        "position"  : [ 0.514000, -7.574209, 3.345594 ],
        "rotation"  : [ 0.000000, -0.000000, 0.000000 ],
        "quaternion": [ 1.000000, 0.000000, 0.000000, 0.000000 ],
        "scale"     : [ 0.800000, 0.400000, 0.200000 ],
        "visible"       : true,
        "castsShadow"   : false,
        "meshCollider"  : false,
        "trigger"       : "None"
    },

    "Cube.006" : {
        "geometry"  : "geo_Cube.006",
        "groups"    : [ "air-handler", "ps-05" ],
        "materials" : [ "particleBoxBlue" ],
        "position"  : [ -0.182446, -5.700182, 2.989167 ],
        "rotation"  : [ -1.570797, -0.000000, 1.570797 ],
        "quaternion": [ 0.500000, -0.500000, -0.500000, 0.500000 ],
        "scale"     : [ -0.610121, -0.533856, -0.152530 ],
        "visible"       : true,
        "castsShadow"   : false,
        "meshCollider"  : false,
        "trigger"       : "None"
    },

    "Cube.005" : {
        "geometry"  : "geo_Cube.005",
        "groups"    : [ "air-handler", "ps-05" ],
        "materials" : [ "particleBoxBlue" ],
        "position"  : [ 0.552208, -4.265293, 3.010249 ],
        "rotation"  : [ -1.570797, 0.000000, 0.000000 ],
        "quaternion": [ 0.707107, -0.707107, 0.000000, 0.000000 ],
        "scale"     : [ 0.800000, 0.840000, 0.200000 ],
        "visible"       : true,
        "castsShadow"   : false,
        "meshCollider"  : false,
        "trigger"       : "None"
    },

    "Cube.004" : {
        "geometry"  : "geo_Cube.004",
        "groups"    : [ "air-handler", "ps-05" ],
        "materials" : [ "particleBoxBlue" ],
        "position"  : [ 0.586567, -2.849115, 2.999788 ],
        "rotation"  : [ -1.570797, 0.000000, 0.000000 ],
        "quaternion": [ 0.707107, -0.707107, 0.000000, 0.000000 ],
        "scale"     : [ 0.800000, 0.840000, 0.200000 ],
        "visible"       : true,
        "castsShadow"   : false,
        "meshCollider"  : false,
        "trigger"       : "None"
    },

    "Cube.003" : {
        "geometry"  : "geo_Cube.003",
        "groups"    : [ "air-handler", "ps-05" ],
        "materials" : [ "particleBoxBlue" ],
        "position"  : [ 0.537852, -1.226563, 3.013781 ],
        "rotation"  : [ -1.570797, 0.000000, 0.000000 ],
        "quaternion": [ 0.707107, -0.707107, 0.000000, 0.000000 ],
        "scale"     : [ 0.800000, 0.840000, 0.220000 ],
        "visible"       : true,
        "castsShadow"   : false,
        "meshCollider"  : false,
        "trigger"       : "None"
    },

    "Cube.002" : {
        "geometry"  : "geo_Cube.002",
        "groups"    : [ "air-handler", "ps-05" ],
        "materials" : [ "particleBoxBlue" ],
        "position"  : [ 0.489000, 0.527197, 2.975121 ],
        "rotation"  : [ 0.000000, -0.000000, 0.000000 ],
        "quaternion": [ 1.000000, 0.000000, 0.000000, 0.000000 ],
        "scale"     : [ 0.605182, 0.605000, 0.750000 ],
        "visible"       : true,
        "castsShadow"   : false,
        "meshCollider"  : false,
        "trigger"       : "None"
    },

    "Cube.001" : {
        "geometry"  : "geo_Cube.001",
        "groups"    : [ "air-handler", "ps-05" ],
        "materials" : [ "particleBoxBlue" ],
        "position"  : [ 0.514000, 0.512000, 5.940923 ],
        "rotation"  : [ 0.000000, -0.000000, 0.000000 ],
        "quaternion": [ 1.000000, 0.000000, 0.000000, 0.000000 ],
        "scale"     : [ 0.800000, 0.700000, 0.200000 ],
        "visible"       : true,
        "castsShadow"   : false,
        "meshCollider"  : false,
        "trigger"       : "None"
    },

    "Cube.000" : {
        "geometry"  : "geo_Cube",
        "groups"    : [ "air-handler", "ps-05" ],
        "materials" : [ "particleBoxBlue" ],
        "position"  : [ 0.471000, 0.542000, 6.790266 ],
        "rotation"  : [ 0.000000, -0.000000, 0.000000 ],
        "quaternion": [ 1.000000, 0.000000, 0.000000, 0.000000 ],
        "scale"     : [ 1.499999, 1.500000, 0.200000 ],
        "visible"       : true,
        "castsShadow"   : false,
        "meshCollider"  : false,
        "trigger"       : "None"
    }
},


"geometries" :
{
    "geo_Cube.001" : {
        "type" : "embedded_mesh",
        "id"  : "emb_Cube.001"
    },

    "geo_Cube.009" : {
        "type" : "embedded_mesh",
        "id"  : "emb_Cube.009"
    },

    "geo_Cube.010" : {
        "type" : "embedded_mesh",
        "id"  : "emb_Cube.010"
    },

    "geo_Cube.012" : {
        "type" : "embedded_mesh",
        "id"  : "emb_Cube.012"
    },

    "geo_Cube.015" : {
        "type" : "embedded_mesh",
        "id"  : "emb_Cube.015"
    },

    "geo_Cube.016" : {
        "type" : "embedded_mesh",
        "id"  : "emb_Cube.016"
    },

    "geo_Cube.032" : {
        "type" : "embedded_mesh",
        "id"  : "emb_Cube.032"
    },

    "geo_Cube.056" : {
        "type" : "embedded_mesh",
        "id"  : "emb_Cube.056"
    },

    "geo_Cube.055" : {
        "type" : "embedded_mesh",
        "id"  : "emb_Cube.055"
    },

    "geo_Cube.054" : {
        "type" : "embedded_mesh",
        "id"  : "emb_Cube.054"
    },

    "geo_Cube.053" : {
        "type" : "embedded_mesh",
        "id"  : "emb_Cube.053"
    },

    "geo_Cube.052" : {
        "type" : "embedded_mesh",
        "id"  : "emb_Cube.052"
    },

    "geo_Cube.051" : {
        "type" : "embedded_mesh",
        "id"  : "emb_Cube.051"
    },

    "geo_Cube.050" : {
        "type" : "embedded_mesh",
        "id"  : "emb_Cube.050"
    },

    "geo_Cube.024" : {
        "type" : "embedded_mesh",
        "id"  : "emb_Cube.024"
    },

    "geo_Cube.022" : {
        "type" : "embedded_mesh",
        "id"  : "emb_Cube.022"
    },

    "geo_Cube.021" : {
        "type" : "embedded_mesh",
        "id"  : "emb_Cube.021"
    },

    "geo_Cube.020" : {
        "type" : "embedded_mesh",
        "id"  : "emb_Cube.020"
    },

    "geo_Cube.019" : {
        "type" : "embedded_mesh",
        "id"  : "emb_Cube.019"
    },

    "geo_Cube.014" : {
        "type" : "embedded_mesh",
        "id"  : "emb_Cube.014"
    },

    "geo_Cube.011" : {
        "type" : "embedded_mesh",
        "id"  : "emb_Cube.011"
    },

    "geo_Cube.008" : {
        "type" : "embedded_mesh",
        "id"  : "emb_Cube.008"
    },

    "geo_Cube.018" : {
        "type" : "embedded_mesh",
        "id"  : "emb_Cube.018"
    },

    "geo_Cube.017" : {
        "type" : "embedded_mesh",
        "id"  : "emb_Cube.017"
    },

    "geo_Cube.007" : {
        "type" : "embedded_mesh",
        "id"  : "emb_Cube.007"
    },

    "geo_Cube.006" : {
        "type" : "embedded_mesh",
        "id"  : "emb_Cube.006"
    },

    "geo_Cube.005" : {
        "type" : "embedded_mesh",
        "id"  : "emb_Cube.005"
    },

    "geo_Cube.004" : {
        "type" : "embedded_mesh",
        "id"  : "emb_Cube.004"
    },

    "geo_Cube.003" : {
        "type" : "embedded_mesh",
        "id"  : "emb_Cube.003"
    },

    "geo_Cube.002" : {
        "type" : "embedded_mesh",
        "id"  : "emb_Cube.002"
    },

    "geo_Cube" : {
        "type" : "embedded_mesh",
        "id"  : "emb_Cube"
    },
    "geo_Cylinder" : {
        "type" : "embedded_mesh",
        "id"  : "emb_Cylinder"
    }
    
    
},


"materials" :
{
    "actuator" : {
        "type": "MeshLambertMaterial",
        "parameters": { "color": 16549688, "opacity": 1 }
    },

    "actuator.001" : {
        "type": "MeshLambertMaterial",
        "parameters": { "color": 16549688, "opacity": 1 }
    },

    "blue" : {
        "type": "MeshLambertMaterial",
        "parameters": { "color": 2830709, "opacity": 1 }
    },

    "blue.001" : {
        "type": "MeshLambertMaterial",
        "parameters": { "color": 2830709, "opacity": 1 }
    },

    "cyan" : {
        "type": "MeshLambertMaterial",
        "parameters": { "color": 8162993, "opacity": 1 }
    },

    "cyan.001" : {
        "type": "MeshLambertMaterial",
        "parameters": { "color": 8162993, "opacity": 1 }
    },

    "damper" : {
        "type": "MeshLambertMaterial",
        "parameters": { "color": 13158600, "opacity": 1 }
    },

    "damper-edges" : {
        "type": "MeshLambertMaterial",
        "parameters": { "color": 15634833, "opacity": 1 }
    },

    "damper-edges.001" : {
        "type": "MeshLambertMaterial",
        "parameters": { "color": 15634833, "opacity": 1 }
    },

    "damper.001" : {
        "type": "MeshLambertMaterial",
        "parameters": { "color": 13158600, "opacity": 1 }
    },

    "Dark" : {
        "type": "MeshLambertMaterial",
        "parameters": { "color": 2830709, "opacity": 1 }
    },

    "Dark.001" : {
        "type": "MeshLambertMaterial",
        "parameters": { "color": 2830709, "opacity": 1 }
    },

    "Default" : {
        "type": "MeshLambertMaterial",
        "parameters": { "color": 13158600, "opacity": 0.05 }
    },

    "Default.001" : {
        "type": "MeshLambertMaterial",
        "parameters": { "color": 13158600, "opacity": 1 }
    },

    "Default.002" : {
        "type": "MeshLambertMaterial",
        "parameters": { "color": 13158600, "opacity": 1 }
    },

    "DefaultVent" : {
        "type": "MeshLambertMaterial",
        "parameters": { "color": 13158600, "opacity": 1 }
    },

    "Ductwork" : {
        "type": "MeshLambertMaterial",
        "parameters": { "color": 3289650, "opacity": 1 }
    },

    "ductwork" : {
        "type": "MeshLambertMaterial",
        "parameters": { "color": 3355443, "opacity": 1 }
    },

    "Ductwork.001" : {
        "type": "MeshLambertMaterial",
        "parameters": { "color": 3289650, "opacity": 1 }
    },

    "ductwork.001" : {
        "type": "MeshLambertMaterial",
        "parameters": { "color": 3355443, "opacity": 1 }
    },

    "Ductwork.002" : {
        "type": "MeshLambertMaterial",
        "parameters": { "color": 3289650, "opacity": 1 }
    },

    "ductwork.002" : {
        "type": "MeshLambertMaterial",
        "parameters": { "color": 3355443, "opacity": 1 }
    },

    "FanAxle" : {
        "type": "MeshLambertMaterial",
        "parameters": { "color": 3103601, "opacity": 1 }
    },

    "FanAxle.001" : {
        "type": "MeshLambertMaterial",
        "parameters": { "color": 3103601, "opacity": 1 }
    },

    "FanAxle.002" : {
        "type": "MeshLambertMaterial",
        "parameters": { "color": 3103601, "opacity": 1 }
    },

    "FanAxleWheel" : {
        "type": "MeshLambertMaterial",
        "parameters": { "color": 3103601, "opacity": 1 }
    },

    "FanAxleWheel.001" : {
        "type": "MeshLambertMaterial",
        "parameters": { "color": 3103601, "opacity": 1 }
    },

    "FanAxleWheel.002" : {
        "type": "MeshLambertMaterial",
        "parameters": { "color": 3103601, "opacity": 1 }
    },

    "FanBelt" : {
        "type": "MeshLambertMaterial",
        "parameters": { "color": 2891073, "opacity": 1 }
    },

    "FanBelt.001" : {
        "type": "MeshLambertMaterial",
        "parameters": { "color": 2891073, "opacity": 1 }
    },

    "FanBelt.002" : {
        "type": "MeshLambertMaterial",
        "parameters": { "color": 2891073, "opacity": 1 }
    },

    "FanBlades" : {
        "type": "MeshLambertMaterial",
        "parameters": { "color": 14995363, "opacity": 1 }
    },

    "FanBlades.001" : {
        "type": "MeshLambertMaterial",
        "parameters": { "color": 14995363, "opacity": 1 }
    },

    "FanBlades.002" : {
        "type": "MeshLambertMaterial",
        "parameters": { "color": 14995363, "opacity": 1 }
    },

    "FanChassis" : {
        "type": "MeshLambertMaterial",
        "parameters": { "color": 6201021, "opacity": 1 }
    },

    "FanChassis.001" : {
        "type": "MeshLambertMaterial",
        "parameters": { "color": 6201021, "opacity": 1 }
    },

    "FanChassis.002" : {
        "type": "MeshLambertMaterial",
        "parameters": { "color": 6201021, "opacity": 1 }
    },

    "fanengine" : {
        "type": "MeshLambertMaterial",
        "parameters": { "color": 3355443, "opacity": 1 }
    },

    "fanengine.001" : {
        "type": "MeshLambertMaterial",
        "parameters": { "color": 3355443, "opacity": 1 }
    },

    "fanengine.002" : {
        "type": "MeshLambertMaterial",
        "parameters": { "color": 3355443, "opacity": 1 }
    },

    "FanMotorWheel" : {
        "type": "MeshLambertMaterial",
        "parameters": { "color": 3103601, "opacity": 1 }
    },

    "FanMotorWheel.001" : {
        "type": "MeshLambertMaterial",
        "parameters": { "color": 3103601, "opacity": 1 }
    },

    "FanMotorWheel.002" : {
        "type": "MeshLambertMaterial",
        "parameters": { "color": 3103601, "opacity": 1 }
    },

    "FanRibs" : {
        "type": "MeshLambertMaterial",
        "parameters": { "color": 7952744, "opacity": 1 }
    },

    "FanRibs.001" : {
        "type": "MeshLambertMaterial",
        "parameters": { "color": 7952744, "opacity": 1 }
    },

    "FanRibs.002" : {
        "type": "MeshLambertMaterial",
        "parameters": { "color": 7952744, "opacity": 1 }
    },

    "filter" : {
        "type": "MeshLambertMaterial",
        "parameters": { "color": 15724431, "opacity": 1 }
    },

    "filter.001" : {
        "type": "MeshLambertMaterial",
        "parameters": { "color": 15724431, "opacity": 1 }
    },

    "metalwork" : {
        "type": "MeshLambertMaterial",
        "parameters": { "color": 3683896, "opacity": 1 }
    },

    "metalwork.001" : {
        "type": "MeshLambertMaterial",
        "parameters": { "color": 3683896, "opacity": 1 }
    },

    "metalwork.002" : {
        "type": "MeshLambertMaterial",
        "parameters": { "color": 3683896, "opacity": 1 }
    },

    "outer" : {
        "type": "MeshLambertMaterial",
        "parameters": { "color": 3947580, "opacity": 1 }
    },

    "outer-trans" : {
        "type": "MeshLambertMaterial",
        "parameters": { "color": 3947580, "opacity": 0.1 }
    },

    "outer-trans.001" : {
        "type": "MeshLambertMaterial",
        "parameters": { "color": 3947580, "opacity": 0.1 }
    },

    "outer.001" : {
        "type": "MeshLambertMaterial",
        "parameters": { "color": 3947580, "opacity": 1 }
    },

    "outer.002" : {
        "type": "MeshLambertMaterial",
        "parameters": { "color": 3947580, "opacity": 1 }
    },

    "particleBoxBlue" : {
        "type": "MeshLambertMaterial",
        "parameters": { "color": 1977507, "opacity": 1 }
    },

    "particleBoxGreen" : {
        "type": "MeshLambertMaterial",
        "parameters": { "color": 1977507, "opacity": 1 }
    },

    "particleRed" : {
        "type": "MeshLambertMaterial",
        "parameters": { "color": 2752512, "opacity": 1 }
    },

    "pink" : {
        "type": "MeshLambertMaterial",
        "parameters": { "color": 11765639, "opacity": 1 }
    },

    "pink.001" : {
        "type": "MeshLambertMaterial",
        "parameters": { "color": 11765639, "opacity": 1 }
    },

    "red" : {
        "type": "MeshLambertMaterial",
        "parameters": { "color": 8861495, "opacity": 1 }
    },

    "red.001" : {
        "type": "MeshLambertMaterial",
        "parameters": { "color": 8861495, "opacity": 1 }
    },

    "VAVCoilFins" : {
        "type": "MeshLambertMaterial",
        "parameters": { "color": 16751466, "opacity": 0.2 }
    },

    "VAVControlBox" : {
        "type": "MeshLambertMaterial",
        "parameters": { "color": 9945724, "opacity": 1 }
    },

    "VAVHeatingCoils" : {
        "type": "MeshLambertMaterial",
        "parameters": { "color": 16711680, "opacity": 1 }
    },

    "VAVHydraulic" : {
        "type": "MeshLambertMaterial",
        "parameters": { "color": 13020243, "opacity": 1 }
    },

    "VAVLever" : {
        "type": "MeshLambertMaterial",
        "parameters": { "color": 11251650, "opacity": 1 }
    },

    "VAVLink" : {
        "type": "MeshLambertMaterial",
        "parameters": { "color": 11251650, "opacity": 1 }
    },

    "VAVLinkHinge" : {
        "type": "MeshLambertMaterial",
        "parameters": { "color": 27551, "opacity": 1 }
    },

    "VAVPaddle" : {
        "type": "MeshLambertMaterial",
        "parameters": { "color": 13602416, "opacity": 1 }
    },

    "VAVPaddleAxle" : {
        "type": "MeshLambertMaterial",
        "parameters": { "color": 27551, "opacity": 1 }
    },

    "VAVPiston" : {
        "type": "MeshLambertMaterial",
        "parameters": { "color": 6779021, "opacity": 1 }
    },

    "VAVPistonHinge" : {
        "type": "MeshLambertMaterial",
        "parameters": { "color": 27551, "opacity": 1 }
    },

    "VAVWireGold" : {
        "type": "MeshLambertMaterial",
        "parameters": { "color": 12555072, "opacity": 1 }
    },

    "VAVWireGreen" : {
        "type": "MeshLambertMaterial",
        "parameters": { "color": 2719273, "opacity": 1 }
    },

    "VAVWireRed" : {
        "type": "MeshLambertMaterial",
        "parameters": { "color": 7743301, "opacity": 1 }
    }
},


"embeds" :
{
"emb_Cube.018": {    "version" : 2,

    "scale" : 1.000000,

    "materials": [	{
	"DbgColor" : 15658734,
	"DbgIndex" : 0,
	"DbgName" : "particleBoxBlue",
	"colorAmbient" : [0.0, 0.0, 0.0],
	"colorDiffuse" : [0.12114807547849527, 0.17566639446715104, 0.6400000190734865],
	"colorSpecular" : [0.5, 0.5, 0.5],
	"shading" : "Lambert",
	"specularCoef" : 50,
	"transparency" : 1.0,
	"vertexColors" : false
	}],

    "vertices": [1.000000,1.000000,-1.000000,1.000000,-1.000000,-1.000000,-1.000000,-1.000000,-1.000000,-1.000000,1.000000,-1.000000,1.000000,0.999999,1.000000,0.999999,-1.000001,1.000000,-1.000000,-1.000000,1.000000,-1.000000,1.000000,1.000000],

    "morphTargets": [],

    "normals": [],

    "colors": [],

    "uvs": [[]],

    "faces": [3,0,1,2,3,0,3,4,7,6,5,0,3,0,4,5,1,0,3,1,5,6,2,0,3,2,6,7,3,0,3,4,0,3,7,0]

},

"emb_Cube.019": {    "version" : 2,

    "scale" : 1.000000,

    "materials": [	{
	"DbgColor" : 15658734,
	"DbgIndex" : 0,
	"DbgName" : "particleBoxBlue",
	"colorAmbient" : [0.0, 0.0, 0.0],
	"colorDiffuse" : [0.12114807547849527, 0.17566639446715104, 0.6400000190734865],
	"colorSpecular" : [0.5, 0.5, 0.5],
	"shading" : "Lambert",
	"specularCoef" : 50,
	"transparency" : 1.0,
	"vertexColors" : false
	}],

    "vertices": [1.000000,1.000000,-1.000000,1.000000,-1.000000,-1.000000,-1.000000,-1.000000,-1.000000,-1.000000,1.000000,-1.000000,1.000000,0.999999,1.000000,0.999999,-1.000001,1.000000,-1.000000,-1.000000,1.000000,-1.000000,1.000000,1.000000],

    "morphTargets": [],

    "normals": [],

    "colors": [],

    "uvs": [[]],

    "faces": [3,0,1,2,3,0,3,4,7,6,5,0,3,0,4,5,1,0,3,1,5,6,2,0,3,2,6,7,3,0,3,4,0,3,7,0]

},
"emb_Cylinder": {    
  "version" : 2,
  "scale" : 1.000000,

    "materials": [  {
  "DbgColor" : 15658734,
  "DbgIndex" : 0,
  "DbgName" : "particleRed",
  "colorAmbient" : [0.0, 0.0, 0.0],
  "colorDiffuse" : [0.16822353596500328, 0.0020594158165673643, 0.0],
  "colorSpecular" : [0.3005025088787079, 0.3005025088787079, 0.3005025088787079],
  "shading" : "Lambert",
  "specularCoef" : 68,
  "transparency" : 1.0,
  "vertexColors" : false
  }],

    "vertices": [0.000000,1.000000,-1.000000,0.195090,0.980785,-1.000000,0.382683,0.923880,-1.000000,0.555570,0.831470,-1.000000,0.707107,0.707107,-1.000000,0.831470,0.555570,-1.000000,0.923880,0.382683,-1.000000,0.980785,0.195090,-1.000000,1.000000,0.000000,-1.000000,0.980785,-0.195090,-1.000000,0.923880,-0.382683,-1.000000,0.831470,-0.555570,-1.000000,0.707107,-0.707107,-1.000000,0.555570,-0.831470,-1.000000,0.382683,-0.923880,-1.000000,0.195090,-0.980785,-1.000000,-0.000000,-1.000000,-1.000000,-0.195091,-0.980785,-1.000000,-0.382684,-0.923879,-1.000000,-0.555571,-0.831469,-1.000000,-0.707107,-0.707106,-1.000000,-0.831470,-0.555570,-1.000000,-0.923880,-0.382683,-1.000000,-0.980785,-0.195089,-1.000000,-1.000000,0.000001,-1.000000,-0.980785,0.195091,-1.000000,-0.923879,0.382684,-1.000000,-0.831469,0.555571,-1.000000,-0.707106,0.707108,-1.000000,-0.555569,0.831470,-1.000000,-0.382682,0.923880,-1.000000,-0.195089,0.980786,-1.000000,0.000002,1.000000,1.000000,0.195092,0.980785,1.000000,0.382685,0.923879,1.000000,0.555572,0.831469,1.000000,0.707108,0.707105,1.000000,0.831471,0.555569,1.000000,0.923880,0.382682,1.000000,0.980786,0.195088,1.000000,1.000000,-0.000002,1.000000,0.980785,-0.195092,1.000000,0.923879,-0.382685,1.000000,0.831469,-0.555571,1.000000,0.707106,-0.707107,1.000000,0.555570,-0.831470,1.000000,0.382684,-0.923880,1.000000,0.195091,-0.980785,1.000000,0.000001,-1.000000,1.000000,-0.195089,-0.980786,1.000000,-0.382682,-0.923880,1.000000,-0.555568,-0.831471,1.000000,-0.707105,-0.707109,1.000000,-0.831468,-0.555573,1.000000,-0.923878,-0.382686,1.000000,-0.980785,-0.195094,1.000000,-1.000000,-0.000004,1.000000,-0.980786,0.195086,1.000000,-0.923881,0.382679,1.000000,-0.831473,0.555566,1.000000,-0.707111,0.707103,1.000000,-0.555575,0.831466,1.000000,-0.382689,0.923877,1.000000,-0.195097,0.980784,1.000000,0.000000,0.000000,-1.000000,0.000000,0.000000,1.000000],

    "morphTargets": [],

    "normals": [],

    "colors": [],

    "uvs": [[]],

    "faces": [2,64,0,1,0,2,65,33,32,0,2,64,1,2,0,2,65,34,33,0,2,64,2,3,0,2,65,35,34,0,2,64,3,4,0,2,65,36,35,0,2,64,4,5,0,2,65,37,36,0,2,64,5,6,0,2,65,38,37,0,2,64,6,7,0,2,65,39,38,0,2,64,7,8,0,2,65,40,39,0,2,64,8,9,0,2,65,41,40,0,2,64,9,10,0,2,65,42,41,0,2,64,10,11,0,2,65,43,42,0,2,64,11,12,0,2,65,44,43,0,2,64,12,13,0,2,65,45,44,0,2,64,13,14,0,2,65,46,45,0,2,64,14,15,0,2,65,47,46,0,2,64,15,16,0,2,65,48,47,0,2,64,16,17,0,2,65,49,48,0,2,64,17,18,0,2,65,50,49,0,2,64,18,19,0,2,65,51,50,0,2,64,19,20,0,2,65,52,51,0,2,64,20,21,0,2,65,53,52,0,2,64,21,22,0,2,65,54,53,0,2,64,22,23,0,2,65,55,54,0,2,64,23,24,0,2,65,56,55,0,2,64,24,25,0,2,65,57,56,0,2,64,25,26,0,2,65,58,57,0,2,64,26,27,0,2,65,59,58,0,2,64,27,28,0,2,65,60,59,0,2,64,28,29,0,2,65,61,60,0,2,64,29,30,0,2,65,62,61,0,2,64,30,31,0,2,65,63,62,0,2,31,0,64,0,2,65,32,63,0,3,0,32,33,1,0,3,1,33,34,2,0,3,2,34,35,3,0,3,3,35,36,4,0,3,4,36,37,5,0,3,5,37,38,6,0,3,6,38,39,7,0,3,7,39,40,8,0,3,8,40,41,9,0,3,9,41,42,10,0,3,10,42,43,11,0,3,11,43,44,12,0,3,12,44,45,13,0,3,13,45,46,14,0,3,14,46,47,15,0,3,15,47,48,16,0,3,16,48,49,17,0,3,17,49,50,18,0,3,18,50,51,19,0,3,19,51,52,20,0,3,20,52,53,21,0,3,21,53,54,22,0,3,22,54,55,23,0,3,23,55,56,24,0,3,24,56,57,25,0,3,25,57,58,26,0,3,26,58,59,27,0,3,27,59,60,28,0,3,28,60,61,29,0,3,29,61,62,30,0,3,30,62,63,31,0,3,32,0,31,63,0]

},
"emb_Cube.016": {    "version" : 2,

    "scale" : 1.000000,

    "materials": [	{
	"DbgColor" : 15658734,
	"DbgIndex" : 0,
	"DbgName" : "particleBoxGreen",
	"colorAmbient" : [0.0, 0.0, 0.0],
	"colorDiffuse" : [0.12114807547849527, 0.17566639446715104, 0.6400000190734865],
	"colorSpecular" : [0.5, 0.5, 0.5],
	"shading" : "Lambert",
	"specularCoef" : 50,
	"transparency" : 1.0,
	"vertexColors" : false
	}],

    "vertices": [1.000000,1.000000,-1.000000,1.000000,-1.000000,-1.000000,-1.000000,-1.000000,-1.000000,-1.000000,1.000000,-1.000000,1.000000,0.999999,1.000000,0.999999,-1.000001,1.000000,-1.000000,-1.000000,1.000000,-1.000000,1.000000,1.000000],

    "morphTargets": [],

    "normals": [],

    "colors": [],

    "uvs": [[]],

    "faces": [3,0,1,2,3,0,3,4,7,6,5,0,3,0,4,5,1,0,3,1,5,6,2,0,3,2,6,7,3,0,3,4,0,3,7,0]

},

"emb_Cube.017": {    "version" : 2,

    "scale" : 1.000000,

    "materials": [	{
	"DbgColor" : 15658734,
	"DbgIndex" : 0,
	"DbgName" : "particleBoxBlue",
	"colorAmbient" : [0.0, 0.0, 0.0],
	"colorDiffuse" : [0.12114807547849527, 0.17566639446715104, 0.6400000190734865],
	"colorSpecular" : [0.5, 0.5, 0.5],
	"shading" : "Lambert",
	"specularCoef" : 50,
	"transparency" : 1.0,
	"vertexColors" : false
	}],

    "vertices": [1.000000,1.000000,-1.000000,1.000000,-1.000000,-1.000000,-1.000000,-1.000000,-1.000000,-1.000000,1.000000,-1.000000,1.000000,0.999999,1.000000,0.999999,-1.000001,1.000000,-1.000000,-1.000000,1.000000,-1.000000,1.000000,1.000000],

    "morphTargets": [],

    "normals": [],

    "colors": [],

    "uvs": [[]],

    "faces": [3,0,1,2,3,0,3,4,7,6,5,0,3,0,4,5,1,0,3,1,5,6,2,0,3,2,6,7,3,0,3,4,0,3,7,0]

},

"emb_Cube.032": {    "version" : 2,

    "scale" : 1.000000,

    "materials": [	{
	"DbgColor" : 15658734,
	"DbgIndex" : 0,
	"DbgName" : "particleBoxBlue",
	"colorAmbient" : [0.0, 0.0, 0.0],
	"colorDiffuse" : [0.12114807547849527, 0.17566639446715104, 0.6400000190734865],
	"colorSpecular" : [0.5, 0.5, 0.5],
	"shading" : "Lambert",
	"specularCoef" : 50,
	"transparency" : 1.0,
	"vertexColors" : false
	}],

    "vertices": [1.000000,1.000000,-1.000000,1.000000,-1.000000,-1.000000,-1.000000,-1.000000,-1.000000,-1.000000,1.000000,-1.000000,1.000000,0.999999,1.000000,0.999999,-1.000001,1.000000,-1.000000,-1.000000,1.000000,-1.000000,1.000000,1.000000],

    "morphTargets": [],

    "normals": [],

    "colors": [],

    "uvs": [[]],

    "faces": [3,0,1,2,3,0,3,4,7,6,5,0,3,0,4,5,1,0,3,1,5,6,2,0,3,2,6,7,3,0,3,4,0,3,7,0]

},

"emb_Cube.015": {    "version" : 2,

    "scale" : 1.000000,

    "materials": [	{
	"DbgColor" : 15658734,
	"DbgIndex" : 0,
	"DbgName" : "particleBoxBlue",
	"colorAmbient" : [0.0, 0.0, 0.0],
	"colorDiffuse" : [0.12114807547849527, 0.17566639446715104, 0.6400000190734865],
	"colorSpecular" : [0.5, 0.5, 0.5],
	"shading" : "Lambert",
	"specularCoef" : 50,
	"transparency" : 1.0,
	"vertexColors" : false
	}],

    "vertices": [1.000000,1.000000,-1.000000,1.000000,-1.000000,-1.000000,-1.000000,-1.000000,-1.000000,-1.000000,1.000000,-1.000000,1.000000,0.999999,1.000000,0.999999,-1.000001,1.000000,-1.000000,-1.000000,1.000000,-1.000000,1.000000,1.000000],

    "morphTargets": [],

    "normals": [],

    "colors": [],

    "uvs": [[]],

    "faces": [3,0,1,2,3,0,3,4,7,6,5,0,3,0,4,5,1,0,3,1,5,6,2,0,3,2,6,7,3,0,3,4,0,3,7,0]

},

"emb_Cube.012": {    "version" : 2,

    "scale" : 1.000000,

    "materials": [	{
	"DbgColor" : 15658734,
	"DbgIndex" : 0,
	"DbgName" : "particleBoxBlue",
	"colorAmbient" : [0.0, 0.0, 0.0],
	"colorDiffuse" : [0.12114807547849527, 0.17566639446715104, 0.6400000190734865],
	"colorSpecular" : [0.5, 0.5, 0.5],
	"shading" : "Lambert",
	"specularCoef" : 50,
	"transparency" : 1.0,
	"vertexColors" : false
	}],

    "vertices": [1.000000,1.000000,-1.000000,1.000000,-1.000000,-1.000000,-1.000000,-1.000000,-1.000000,-1.000000,1.000000,-1.000000,1.000000,0.999999,1.000000,0.999999,-1.000001,1.000000,-1.000000,-1.000000,1.000000,-1.000000,1.000000,1.000000],

    "morphTargets": [],

    "normals": [],

    "colors": [],

    "uvs": [[]],

    "faces": [3,0,1,2,3,0,3,4,7,6,5,0,3,0,4,5,1,0,3,1,5,6,2,0,3,2,6,7,3,0,3,4,0,3,7,0]

},

"emb_Cube.010": {    "version" : 2,

    "scale" : 1.000000,

    "materials": [	{
	"DbgColor" : 15658734,
	"DbgIndex" : 0,
	"DbgName" : "particleBoxBlue",
	"colorAmbient" : [0.0, 0.0, 0.0],
	"colorDiffuse" : [0.12114807547849527, 0.17566639446715104, 0.6400000190734865],
	"colorSpecular" : [0.5, 0.5, 0.5],
	"shading" : "Lambert",
	"specularCoef" : 50,
	"transparency" : 1.0,
	"vertexColors" : false
	}],

    "vertices": [1.000000,1.000000,-1.000000,1.000000,-1.000000,-1.000000,-1.000000,-1.000000,-1.000000,-1.000000,1.000000,-1.000000,1.000000,0.999999,1.000000,0.999999,-1.000001,1.000000,-1.000000,-1.000000,1.000000,-1.000000,1.000000,1.000000],

    "morphTargets": [],

    "normals": [],

    "colors": [],

    "uvs": [[]],

    "faces": [3,0,1,2,3,0,3,4,7,6,5,0,3,0,4,5,1,0,3,1,5,6,2,0,3,2,6,7,3,0,3,4,0,3,7,0]

},

"emb_Cube.011": {    "version" : 2,

    "scale" : 1.000000,

    "materials": [	{
	"DbgColor" : 15658734,
	"DbgIndex" : 0,
	"DbgName" : "particleBoxBlue",
	"colorAmbient" : [0.0, 0.0, 0.0],
	"colorDiffuse" : [0.12114807547849527, 0.17566639446715104, 0.6400000190734865],
	"colorSpecular" : [0.5, 0.5, 0.5],
	"shading" : "Lambert",
	"specularCoef" : 50,
	"transparency" : 1.0,
	"vertexColors" : false
	}],

    "vertices": [1.000000,1.000000,-1.000000,1.000000,-1.000000,-1.000000,-1.000000,-1.000000,-1.000000,-1.000000,1.000000,-1.000000,1.000000,0.999999,1.000000,0.999999,-1.000001,1.000000,-1.000000,-1.000000,1.000000,-1.000000,1.000000,1.000000],

    "morphTargets": [],

    "normals": [],

    "colors": [],

    "uvs": [[]],

    "faces": [3,0,1,2,3,0,3,4,7,6,5,0,3,0,4,5,1,0,3,1,5,6,2,0,3,2,6,7,3,0,3,4,0,3,7,0]

},

"emb_Cube": {    "version" : 2,

    "scale" : 1.000000,

    "materials": [	{
	"DbgColor" : 15658734,
	"DbgIndex" : 0,
	"DbgName" : "particleBoxBlue",
	"colorAmbient" : [0.0, 0.0, 0.0],
	"colorDiffuse" : [0.12114807547849527, 0.17566639446715104, 0.6400000190734865],
	"colorSpecular" : [0.5, 0.5, 0.5],
	"shading" : "Lambert",
	"specularCoef" : 50,
	"transparency" : 1.0,
	"vertexColors" : false
	}],

    "vertices": [1.000000,1.000000,-1.000000,1.000000,-1.000000,-1.000000,-1.000000,-1.000000,-1.000000,-1.000000,1.000000,-1.000000,1.000000,0.999999,1.000000,0.999999,-1.000001,1.000000,-1.000000,-1.000000,1.000000,-1.000000,1.000000,1.000000],

    "morphTargets": [],

    "normals": [],

    "colors": [],

    "uvs": [[]],

    "faces": [3,0,1,2,3,0,3,4,7,6,5,0,3,0,4,5,1,0,3,1,5,6,2,0,3,2,6,7,3,0,3,4,0,3,7,0]

},

"emb_Cube.022": {    "version" : 2,

    "scale" : 1.000000,

    "materials": [	{
	"DbgColor" : 15658734,
	"DbgIndex" : 0,
	"DbgName" : "particleBoxBlue",
	"colorAmbient" : [0.0, 0.0, 0.0],
	"colorDiffuse" : [0.12114807547849527, 0.17566639446715104, 0.6400000190734865],
	"colorSpecular" : [0.5, 0.5, 0.5],
	"shading" : "Lambert",
	"specularCoef" : 50,
	"transparency" : 1.0,
	"vertexColors" : false
	}],

    "vertices": [1.000000,1.000000,-1.000000,1.000000,-1.000000,-1.000000,-1.000000,-1.000000,-1.000000,-1.000000,1.000000,-1.000000,1.000000,0.999999,1.000000,0.999999,-1.000001,1.000000,-1.000000,-1.000000,1.000000,-1.000000,1.000000,1.000000],

    "morphTargets": [],

    "normals": [],

    "colors": [],

    "uvs": [[]],

    "faces": [3,0,1,2,3,0,3,4,7,6,5,0,3,0,4,5,1,0,3,1,5,6,2,0,3,2,6,7,3,0,3,4,0,3,7,0]

},

"emb_Cube.014": {    "version" : 2,

    "scale" : 1.000000,

    "materials": [	{
	"DbgColor" : 15658734,
	"DbgIndex" : 0,
	"DbgName" : "particleBoxBlue",
	"colorAmbient" : [0.0, 0.0, 0.0],
	"colorDiffuse" : [0.12114807547849527, 0.17566639446715104, 0.6400000190734865],
	"colorSpecular" : [0.5, 0.5, 0.5],
	"shading" : "Lambert",
	"specularCoef" : 50,
	"transparency" : 1.0,
	"vertexColors" : false
	}],

    "vertices": [1.000000,1.000000,-1.000000,1.000000,-1.000000,-1.000000,-1.000000,-1.000000,-1.000000,-1.000000,1.000000,-1.000000,1.000000,0.999999,1.000000,0.999999,-1.000001,1.000000,-1.000000,-1.000000,1.000000,-1.000000,1.000000,1.000000],

    "morphTargets": [],

    "normals": [],

    "colors": [],

    "uvs": [[]],

    "faces": [3,0,1,2,3,0,3,4,7,6,5,0,3,0,4,5,1,0,3,1,5,6,2,0,3,2,6,7,3,0,3,4,0,3,7,0]

},

"emb_Cube.001": {    "version" : 2,

    "scale" : 1.000000,

    "materials": [	{
	"DbgColor" : 15658734,
	"DbgIndex" : 0,
	"DbgName" : "particleBoxBlue",
	"colorAmbient" : [0.0, 0.0, 0.0],
	"colorDiffuse" : [0.12114807547849527, 0.17566639446715104, 0.6400000190734865],
	"colorSpecular" : [0.5, 0.5, 0.5],
	"shading" : "Lambert",
	"specularCoef" : 50,
	"transparency" : 1.0,
	"vertexColors" : false
	}],

    "vertices": [1.000000,1.000000,-1.000000,1.000000,-1.000000,-1.000000,-1.000000,-1.000000,-1.000000,-1.000000,1.000000,-1.000000,1.000000,0.999999,1.000000,0.999999,-1.000001,1.000000,-1.000000,-1.000000,1.000000,-1.000000,1.000000,1.000000],

    "morphTargets": [],

    "normals": [],

    "colors": [],

    "uvs": [[]],

    "faces": [3,0,1,2,3,0,3,4,7,6,5,0,3,0,4,5,1,0,3,1,5,6,2,0,3,2,6,7,3,0,3,4,0,3,7,0]

},

"emb_Cube.003": {    "version" : 2,

    "scale" : 1.000000,

    "materials": [	{
	"DbgColor" : 15658734,
	"DbgIndex" : 0,
	"DbgName" : "particleBoxBlue",
	"colorAmbient" : [0.0, 0.0, 0.0],
	"colorDiffuse" : [0.12114807547849527, 0.17566639446715104, 0.6400000190734865],
	"colorSpecular" : [0.5, 0.5, 0.5],
	"shading" : "Lambert",
	"specularCoef" : 50,
	"transparency" : 1.0,
	"vertexColors" : false
	}],

    "vertices": [1.000000,1.000000,-1.000000,1.000000,-1.000000,-1.000000,-1.000000,-1.000000,-1.000000,-1.000000,1.000000,-1.000000,1.000000,0.999999,1.000000,0.999999,-1.000001,1.000000,-1.000000,-1.000000,1.000000,-1.000000,1.000000,1.000000],

    "morphTargets": [],

    "normals": [],

    "colors": [],

    "uvs": [[]],

    "faces": [3,0,1,2,3,0,3,4,7,6,5,0,3,0,4,5,1,0,3,1,5,6,2,0,3,2,6,7,3,0,3,4,0,3,7,0]

},

"emb_Cube.002": {    "version" : 2,

    "scale" : 1.000000,

    "materials": [	{
	"DbgColor" : 15658734,
	"DbgIndex" : 0,
	"DbgName" : "particleBoxBlue",
	"colorAmbient" : [0.0, 0.0, 0.0],
	"colorDiffuse" : [0.12114807547849527, 0.17566639446715104, 0.6400000190734865],
	"colorSpecular" : [0.5, 0.5, 0.5],
	"shading" : "Lambert",
	"specularCoef" : 50,
	"transparency" : 1.0,
	"vertexColors" : false
	}],

    "vertices": [1.000000,1.000000,-1.000000,1.000000,-1.000000,-1.000000,-1.000000,-1.000000,-1.000000,-1.000000,1.000000,-1.000000,1.000000,0.999999,1.000000,0.999999,-1.000001,1.000000,-1.000000,-1.000000,1.000000,-1.000000,1.000000,1.000000],

    "morphTargets": [],

    "normals": [],

    "colors": [],

    "uvs": [[]],

    "faces": [3,0,1,2,3,0,3,4,7,6,5,0,3,0,4,5,1,0,3,1,5,6,2,0,3,2,6,7,3,0,3,4,0,3,7,0]

},

"emb_Cube.005": {    "version" : 2,

    "scale" : 1.000000,

    "materials": [	{
	"DbgColor" : 15658734,
	"DbgIndex" : 0,
	"DbgName" : "particleBoxBlue",
	"colorAmbient" : [0.0, 0.0, 0.0],
	"colorDiffuse" : [0.12114807547849527, 0.17566639446715104, 0.6400000190734865],
	"colorSpecular" : [0.5, 0.5, 0.5],
	"shading" : "Lambert",
	"specularCoef" : 50,
	"transparency" : 1.0,
	"vertexColors" : false
	}],

    "vertices": [1.000000,1.000000,-1.000000,1.000000,-1.000000,-1.000000,-1.000000,-1.000000,-1.000000,-1.000000,1.000000,-1.000000,1.000000,0.999999,1.000000,0.999999,-1.000001,1.000000,-1.000000,-1.000000,1.000000,-1.000000,1.000000,1.000000],

    "morphTargets": [],

    "normals": [],

    "colors": [],

    "uvs": [[]],

    "faces": [3,0,1,2,3,0,3,4,7,6,5,0,3,0,4,5,1,0,3,1,5,6,2,0,3,2,6,7,3,0,3,4,0,3,7,0]

},

"emb_Cube.004": {    "version" : 2,

    "scale" : 1.000000,

    "materials": [	{
	"DbgColor" : 15658734,
	"DbgIndex" : 0,
	"DbgName" : "particleBoxBlue",
	"colorAmbient" : [0.0, 0.0, 0.0],
	"colorDiffuse" : [0.12114807547849527, 0.17566639446715104, 0.6400000190734865],
	"colorSpecular" : [0.5, 0.5, 0.5],
	"shading" : "Lambert",
	"specularCoef" : 50,
	"transparency" : 1.0,
	"vertexColors" : false
	}],

    "vertices": [1.000000,1.000000,-1.000000,1.000000,-1.000000,-1.000000,-1.000000,-1.000000,-1.000000,-1.000000,1.000000,-1.000000,1.000000,0.999999,1.000000,0.999999,-1.000001,1.000000,-1.000000,-1.000000,1.000000,-1.000000,1.000000,1.000000],

    "morphTargets": [],

    "normals": [],

    "colors": [],

    "uvs": [[]],

    "faces": [3,0,1,2,3,0,3,4,7,6,5,0,3,0,4,5,1,0,3,1,5,6,2,0,3,2,6,7,3,0,3,4,0,3,7,0]

},

"emb_Cube.007": {    "version" : 2,

    "scale" : 1.000000,

    "materials": [	{
	"DbgColor" : 15658734,
	"DbgIndex" : 0,
	"DbgName" : "particleBoxBlue",
	"colorAmbient" : [0.0, 0.0, 0.0],
	"colorDiffuse" : [0.12114807547849527, 0.17566639446715104, 0.6400000190734865],
	"colorSpecular" : [0.5, 0.5, 0.5],
	"shading" : "Lambert",
	"specularCoef" : 50,
	"transparency" : 1.0,
	"vertexColors" : false
	}],

    "vertices": [1.000000,1.000000,-1.000000,1.000000,-1.000000,-1.000000,-1.000000,-1.000000,-1.000000,-1.000000,1.000000,-1.000000,1.000000,0.999999,1.000000,0.999999,-1.000001,1.000000,-1.000000,-1.000000,1.000000,-1.000000,1.000000,1.000000],

    "morphTargets": [],

    "normals": [],

    "colors": [],

    "uvs": [[]],

    "faces": [3,0,1,2,3,0,3,4,7,6,5,0,3,0,4,5,1,0,3,1,5,6,2,0,3,2,6,7,3,0,3,4,0,3,7,0]

},

"emb_Cube.006": {    "version" : 2,

    "scale" : 1.000000,

    "materials": [	{
	"DbgColor" : 15658734,
	"DbgIndex" : 0,
	"DbgName" : "particleBoxBlue",
	"colorAmbient" : [0.0, 0.0, 0.0],
	"colorDiffuse" : [0.12114807547849527, 0.17566639446715104, 0.6400000190734865],
	"colorSpecular" : [0.5, 0.5, 0.5],
	"shading" : "Lambert",
	"specularCoef" : 50,
	"transparency" : 1.0,
	"vertexColors" : false
	}],

    "vertices": [1.000000,1.000000,-1.000000,1.000000,-1.000000,-1.000000,-1.000000,-1.000000,-1.000000,-1.000000,1.000000,-1.000000,1.000000,0.999999,1.000000,0.999999,-1.000001,1.000000,-1.000000,-1.000000,1.000000,-1.000000,1.000000,1.000000],

    "morphTargets": [],

    "normals": [],

    "colors": [],

    "uvs": [[]],

    "faces": [3,0,1,2,3,0,3,4,7,6,5,0,3,0,4,5,1,0,3,1,5,6,2,0,3,2,6,7,3,0,3,4,0,3,7,0]

},

"emb_Cube.009": {    "version" : 2,

    "scale" : 1.000000,

    "materials": [	{
	"DbgColor" : 15658734,
	"DbgIndex" : 0,
	"DbgName" : "particleBoxBlue",
	"colorAmbient" : [0.0, 0.0, 0.0],
	"colorDiffuse" : [0.12114807547849527, 0.17566639446715104, 0.6400000190734865],
	"colorSpecular" : [0.5, 0.5, 0.5],
	"shading" : "Lambert",
	"specularCoef" : 50,
	"transparency" : 1.0,
	"vertexColors" : false
	}],

    "vertices": [1.000000,1.000000,-1.000000,1.000000,-1.000000,-1.000000,-1.000000,-1.000000,-1.000000,-1.000000,1.000000,-1.000000,1.000000,0.999999,1.000000,0.999999,-1.000001,1.000000,-1.000000,-1.000000,1.000000,-1.000000,1.000000,1.000000],

    "morphTargets": [],

    "normals": [],

    "colors": [],

    "uvs": [[]],

    "faces": [3,0,1,2,3,0,3,4,7,6,5,0,3,0,4,5,1,0,3,1,5,6,2,0,3,2,6,7,3,0,3,4,0,3,7,0]

},

"emb_Cube.008": {    "version" : 2,

    "scale" : 1.000000,

    "materials": [	{
	"DbgColor" : 15658734,
	"DbgIndex" : 0,
	"DbgName" : "particleBoxBlue",
	"colorAmbient" : [0.0, 0.0, 0.0],
	"colorDiffuse" : [0.12114807547849527, 0.17566639446715104, 0.6400000190734865],
	"colorSpecular" : [0.5, 0.5, 0.5],
	"shading" : "Lambert",
	"specularCoef" : 50,
	"transparency" : 1.0,
	"vertexColors" : false
	}],

    "vertices": [1.000000,1.000000,-1.000000,1.000000,-1.000000,-1.000000,-1.000000,-1.000000,-1.000000,-1.000000,1.000000,-1.000000,1.000000,0.999999,1.000000,0.999999,-1.000001,1.000000,-1.000000,-1.000000,1.000000,-1.000000,1.000000,1.000000],

    "morphTargets": [],

    "normals": [],

    "colors": [],

    "uvs": [[]],

    "faces": [3,0,1,2,3,0,3,4,7,6,5,0,3,0,4,5,1,0,3,1,5,6,2,0,3,2,6,7,3,0,3,4,0,3,7,0]

},

"emb_Cube.021": {    "version" : 2,

    "scale" : 1.000000,

    "materials": [	{
	"DbgColor" : 15658734,
	"DbgIndex" : 0,
	"DbgName" : "particleBoxBlue",
	"colorAmbient" : [0.0, 0.0, 0.0],
	"colorDiffuse" : [0.12114807547849527, 0.17566639446715104, 0.6400000190734865],
	"colorSpecular" : [0.5, 0.5, 0.5],
	"shading" : "Lambert",
	"specularCoef" : 50,
	"transparency" : 1.0,
	"vertexColors" : false
	}],

    "vertices": [1.000000,1.000000,-1.000000,1.000000,-1.000000,-1.000000,-1.000000,-1.000000,-1.000000,-1.000000,1.000000,-1.000000,1.000000,0.999999,1.000000,0.999999,-1.000001,1.000000,-1.000000,-1.000000,1.000000,-1.000000,1.000000,1.000000],

    "morphTargets": [],

    "normals": [],

    "colors": [],

    "uvs": [[]],

    "faces": [3,0,1,2,3,0,3,4,7,6,5,0,3,0,4,5,1,0,3,1,5,6,2,0,3,2,6,7,3,0,3,4,0,3,7,0]

},

"emb_Cube.020": {    "version" : 2,

    "scale" : 1.000000,

    "materials": [	{
	"DbgColor" : 15658734,
	"DbgIndex" : 0,
	"DbgName" : "particleBoxBlue",
	"colorAmbient" : [0.0, 0.0, 0.0],
	"colorDiffuse" : [0.12114807547849527, 0.17566639446715104, 0.6400000190734865],
	"colorSpecular" : [0.5, 0.5, 0.5],
	"shading" : "Lambert",
	"specularCoef" : 50,
	"transparency" : 1.0,
	"vertexColors" : false
	}],

    "vertices": [1.000000,1.000000,-1.000000,1.000000,-1.000000,-1.000000,-1.000000,-1.000000,-1.000000,-1.000000,1.000000,-1.000000,1.000000,0.999999,1.000000,0.999999,-1.000001,1.000000,-1.000000,-1.000000,1.000000,-1.000000,1.000000,1.000000],

    "morphTargets": [],

    "normals": [],

    "colors": [],

    "uvs": [[]],

    "faces": [3,0,1,2,3,0,3,4,7,6,5,0,3,0,4,5,1,0,3,1,5,6,2,0,3,2,6,7,3,0,3,4,0,3,7,0]

},

"emb_Cube.024": {    "version" : 2,

    "scale" : 1.000000,

    "materials": [	{
	"DbgColor" : 15658734,
	"DbgIndex" : 0,
	"DbgName" : "particleBoxBlue",
	"colorAmbient" : [0.0, 0.0, 0.0],
	"colorDiffuse" : [0.12114807547849527, 0.17566639446715104, 0.6400000190734865],
	"colorSpecular" : [0.5, 0.5, 0.5],
	"shading" : "Lambert",
	"specularCoef" : 50,
	"transparency" : 1.0,
	"vertexColors" : false
	}],

    "vertices": [1.000000,1.000000,-1.000000,1.000000,-1.000000,-1.000000,-1.000000,-1.000000,-1.000000,-1.000000,1.000000,-1.000000,1.000000,0.999999,1.000000,0.999999,-1.000001,1.000000,-1.000000,-1.000000,1.000000,-1.000000,1.000000,1.000000],

    "morphTargets": [],

    "normals": [],

    "colors": [],

    "uvs": [[]],

    "faces": [3,0,1,2,3,0,3,4,7,6,5,0,3,0,4,5,1,0,3,1,5,6,2,0,3,2,6,7,3,0,3,4,0,3,7,0]

},

"emb_Cube.052": {    "version" : 2,

    "scale" : 1.000000,

    "materials": [	{
	"DbgColor" : 15658734,
	"DbgIndex" : 0,
	"DbgName" : "particleRed",
	"colorAmbient" : [0.0, 0.0, 0.0],
	"colorDiffuse" : [0.16822353596500328, 0.0020594158165673643, 0.0],
	"colorSpecular" : [0.3005025088787079, 0.3005025088787079, 0.3005025088787079],
	"shading" : "Lambert",
	"specularCoef" : 68,
	"transparency" : 1.0,
	"vertexColors" : false
	}],

    "vertices": [1.000000,1.000000,-1.000000,1.000000,-1.000000,-1.000000,-1.000000,-1.000000,-1.000000,-1.000000,1.000000,-1.000000,1.000000,0.999999,1.000000,0.999999,-1.000001,1.000000,-1.000000,-1.000000,1.000000,-1.000000,1.000000,1.000000],

    "morphTargets": [],

    "normals": [],

    "colors": [],

    "uvs": [[]],

    "faces": [3,0,1,2,3,0,3,4,7,6,5,0,3,0,4,5,1,0,3,1,5,6,2,0,3,2,6,7,3,0,3,4,0,3,7,0]

},

"emb_Cube.053": {    "version" : 2,

    "scale" : 1.000000,

    "materials": [	{
	"DbgColor" : 15658734,
	"DbgIndex" : 0,
	"DbgName" : "particleRed",
	"colorAmbient" : [0.0, 0.0, 0.0],
	"colorDiffuse" : [0.16822353596500328, 0.0020594158165673643, 0.0],
	"colorSpecular" : [0.3005025088787079, 0.3005025088787079, 0.3005025088787079],
	"shading" : "Lambert",
	"specularCoef" : 68,
	"transparency" : 1.0,
	"vertexColors" : false
	}],

    "vertices": [1.000000,1.000000,-1.000000,1.000000,-1.000000,-1.000000,-1.000000,-1.000000,-1.000000,-1.000000,1.000000,-1.000000,1.000000,0.999999,1.000000,0.999999,-1.000001,1.000000,-1.000000,-1.000000,1.000000,-1.000000,1.000000,1.000000],

    "morphTargets": [],

    "normals": [],

    "colors": [],

    "uvs": [[]],

    "faces": [3,0,1,2,3,0,3,4,7,6,5,0,3,0,4,5,1,0,3,1,5,6,2,0,3,2,6,7,3,0,3,4,0,3,7,0]

},

"emb_Cube.050": {    "version" : 2,

    "scale" : 1.000000,

    "materials": [	{
	"DbgColor" : 15658734,
	"DbgIndex" : 0,
	"DbgName" : "particleRed",
	"colorAmbient" : [0.0, 0.0, 0.0],
	"colorDiffuse" : [0.16822353596500328, 0.0020594158165673643, 0.0],
	"colorSpecular" : [0.3005025088787079, 0.3005025088787079, 0.3005025088787079],
	"shading" : "Lambert",
	"specularCoef" : 68,
	"transparency" : 1.0,
	"vertexColors" : false
	}],

    "vertices": [1.000000,1.000000,-1.000000,1.000000,-1.000000,-1.000000,-1.000000,-1.000000,-1.000000,-1.000000,1.000000,-1.000000,1.000000,0.999999,1.000000,0.999999,-1.000001,1.000000,-1.000000,-1.000000,1.000000,-1.000000,1.000000,1.000000],

    "morphTargets": [],

    "normals": [],

    "colors": [],

    "uvs": [[]],

    "faces": [3,0,1,2,3,0,3,4,7,6,5,0,3,0,4,5,1,0,3,1,5,6,2,0,3,2,6,7,3,0,3,4,0,3,7,0]

},

"emb_Cube.051": {    "version" : 2,

    "scale" : 1.000000,

    "materials": [	{
	"DbgColor" : 15658734,
	"DbgIndex" : 0,
	"DbgName" : "particleRed",
	"colorAmbient" : [0.0, 0.0, 0.0],
	"colorDiffuse" : [0.16822353596500328, 0.0020594158165673643, 0.0],
	"colorSpecular" : [0.3005025088787079, 0.3005025088787079, 0.3005025088787079],
	"shading" : "Lambert",
	"specularCoef" : 68,
	"transparency" : 1.0,
	"vertexColors" : false
	}],

    "vertices": [1.000000,1.000000,-1.000000,1.000000,-1.000000,-1.000000,-1.000000,-1.000000,-1.000000,-1.000000,1.000000,-1.000000,1.000000,0.999999,1.000000,0.999999,-1.000001,1.000000,-1.000000,-1.000000,1.000000,-1.000000,1.000000,1.000000],

    "morphTargets": [],

    "normals": [],

    "colors": [],

    "uvs": [[]],

    "faces": [3,0,1,2,3,0,3,4,7,6,5,0,3,0,4,5,1,0,3,1,5,6,2,0,3,2,6,7,3,0,3,4,0,3,7,0]

},

"emb_Cube.056": {    "version" : 2,

    "scale" : 1.000000,

    "materials": [	{
	"DbgColor" : 15658734,
	"DbgIndex" : 0,
	"DbgName" : "particleRed",
	"colorAmbient" : [0.0, 0.0, 0.0],
	"colorDiffuse" : [0.16822353596500328, 0.0020594158165673643, 0.0],
	"colorSpecular" : [0.3005025088787079, 0.3005025088787079, 0.3005025088787079],
	"shading" : "Lambert",
	"specularCoef" : 68,
	"transparency" : 1.0,
	"vertexColors" : false
	}],

    "vertices": [1.000000,1.000000,-1.000000,1.000000,-1.000000,-1.000000,-1.000000,-1.000000,-1.000000,-1.000000,1.000000,-1.000000,1.000000,0.999999,1.000000,0.999999,-1.000001,1.000000,-1.000000,-1.000000,1.000000,-1.000000,1.000000,1.000000],

    "morphTargets": [],

    "normals": [],

    "colors": [],

    "uvs": [[]],

    "faces": [3,0,1,2,3,0,3,4,7,6,5,0,3,0,4,5,1,0,3,1,5,6,2,0,3,2,6,7,3,0,3,4,0,3,7,0]

},

"emb_Cube.054": {    "version" : 2,

    "scale" : 1.000000,

    "materials": [	{
	"DbgColor" : 15658734,
	"DbgIndex" : 0,
	"DbgName" : "particleRed",
	"colorAmbient" : [0.0, 0.0, 0.0],
	"colorDiffuse" : [0.16822353596500328, 0.0020594158165673643, 0.0],
	"colorSpecular" : [0.3005025088787079, 0.3005025088787079, 0.3005025088787079],
	"shading" : "Lambert",
	"specularCoef" : 68,
	"transparency" : 1.0,
	"vertexColors" : false
	}],

    "vertices": [1.000000,1.000000,-1.000000,1.000000,-1.000000,-1.000000,-1.000000,-1.000000,-1.000000,-1.000000,1.000000,-1.000000,1.000000,0.999999,1.000000,0.999999,-1.000001,1.000000,-1.000000,-1.000000,1.000000,-1.000000,1.000000,1.000000],

    "morphTargets": [],

    "normals": [],

    "colors": [],

    "uvs": [[]],

    "faces": [3,0,1,2,3,0,3,4,7,6,5,0,3,0,4,5,1,0,3,1,5,6,2,0,3,2,6,7,3,0,3,4,0,3,7,0]

},

"emb_Cube.055": {    "version" : 2,

    "scale" : 1.000000,

    "materials": [	{
	"DbgColor" : 15658734,
	"DbgIndex" : 0,
	"DbgName" : "particleRed",
	"colorAmbient" : [0.0, 0.0, 0.0],
	"colorDiffuse" : [0.16822353596500328, 0.0020594158165673643, 0.0],
	"colorSpecular" : [0.3005025088787079, 0.3005025088787079, 0.3005025088787079],
	"shading" : "Lambert",
	"specularCoef" : 68,
	"transparency" : 1.0,
	"vertexColors" : false
	}],

    "vertices": [1.000000,1.000000,-1.000000,1.000000,-1.000000,-1.000000,-1.000000,-1.000000,-1.000000,-1.000000,1.000000,-1.000000,1.000000,0.999999,1.000000,0.999999,-1.000001,1.000000,-1.000000,-1.000000,1.000000,-1.000000,1.000000,1.000000],

    "morphTargets": [],

    "normals": [],

    "colors": [],

    "uvs": [[]],

    "faces": [3,0,1,2,3,0,3,4,7,6,5,0,3,0,4,5,1,0,3,1,5,6,2,0,3,2,6,7,3,0,3,4,0,3,7,0]

}
},



"transform" :
{
    "position"  : [ -0.80000, -1.20000, 0.000000 ],
    "rotation"  : [ -1.570796, 0.000000, 1.570796 ],
    "scale"     : [ 1.000000, 1.000000, 1.000000 ]
},


"defaults" :
{
    "bgcolor" : [ 0.000000, 0.000000, 0.000000 ],
    "bgalpha" : 1.000000,
    "camera"  : ""
}

}

postMessage( scene );
close();
