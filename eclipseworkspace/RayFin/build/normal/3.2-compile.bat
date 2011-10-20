@echo off
echo 3.2-compile.bat

set "SRC=..\.."
set "DEST=..\..\bin\bin-normal"

..\closure_builder\calcdeps.py ^
-i %SRC%\inc.js ^
-i %SRC%\main.src.js ^
-p %SRC%\js\closure ^
-p %SRC%\js\hemi ^
-p %SRC%\js\lgb ^
-p %SRC%\js\o3djs ^
--compiler_flag=--warning_level=VERBOSE ^
--compiler_flag=--externs=%SRC%\js\externs\browser.js ^
--compiler_flag=--externs=%SRC%\js\externs\jquery1.6.js ^
--compiler_flag=--externs=%SRC%\js\externs\jquery-ui.js ^
--compiler_flag=--externs=%SRC%\js\externs\jquery-plugins.js ^
--compiler_flag=--externs=%SRC%\js\externs\tipped.js ^
--compiler_flag=--externs=%SRC%\js\externs\kendo.core.js ^
--compiler_flag=--externs=%SRC%\js\externs\kendo.data.js ^
--compiler_flag=--externs=%SRC%\js\externs\three.cameras.js ^
--compiler_flag=--externs=%SRC%\js\externs\three.core.js ^
--compiler_flag=--externs=%SRC%\js\externs\three.extras.controls.js ^
--compiler_flag=--externs=%SRC%\js\externs\three.extras.geometries.js ^
--compiler_flag=--externs=%SRC%\js\externs\three.extras.io.loaders.js ^
--compiler_flag=--externs=%SRC%\js\externs\three.extras.physics.js ^
--compiler_flag=--externs=%SRC%\js\externs\three.extras.js ^
--compiler_flag=--externs=%SRC%\js\externs\three.lights.js ^
--compiler_flag=--externs=%SRC%\js\externs\three.materials.js ^
--compiler_flag=--externs=%SRC%\js\externs\three.objects.js ^
--compiler_flag=--externs=%SRC%\js\externs\three.renderers.js ^
--compiler_flag=--externs=%SRC%\js\externs\three.scenes.js ^
--compiler_flag=--externs=%SRC%\js\externs\jquery-ui-raj.js ^
--output_mode compiled ^
--compiler_jar ..\compiler.jar ^
--output_file %DEST%\lgb.js



