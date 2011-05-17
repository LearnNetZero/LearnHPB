/* 
 * Kuda includes a library and editor for authoring interactive 3D content for the web.
 * Copyright (C) 2011 SRI International.
 *
 * This program is free software; you can redistribute it and/or modify it under the terms
 * of the GNU General Public License as published by the Free Software Foundation; either 
 * version 2 of the License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; 
 * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License along with this program; 
 * if not, write to the Free Software Foundation, Inc., 51 Franklin Street, Fifth Floor, 
 * Boston, MA 02110-1301 USA.
 */

o3djs.require('hemi.octane');
o3djs.require('hemi.world');

var hemi = (function(hemi) {
	/**
	 * @namespace A module for loading resources (Octane, models, images, etc).
	 */
	hemi.loader = hemi.loader || {};
	
	/**
	 * The relative path from the referencing HTML file to the Kuda directory.
	 * @type string
	 * @default ''
	 */
	hemi.loader.loadPath = '';
	
	var knownFiles = new Hashtable(),
		intervalId = null,
		locked = false;
	
	var syncedIntervalFcn = function(url, loadInfo) {			
		var obj = {
			percent: 0,
			loadInfo: loadInfo
		};
		
		knownFiles.put(url, obj);
			
		createIntervalFcn();
	};
	
	var createIntervalFcn = function() {
		if (intervalId == null) {
			intervalId = window.setInterval(function(){
				var keys = knownFiles.keys(),
					percent = 0;
				
				for (var ndx = 0, len = keys.length; ndx < len; ndx++) {
					var url = keys[ndx],
						fileObj = knownFiles.get(url), 
						loadInfo = fileObj.loadInfo;					
					
					// check for finished (may have finished very quickly)
					fileObj.percent = loadInfo.request_ == null ? 100 : 
						loadInfo.getKnownProgressInfoSoFar().percent;
					hemi.world.send(hemi.msg.progress, {
						url: url,
						percent: fileObj.percent,
						isTotal: false
					});
					
					if (checkFinished()) {
						break;
					}
				}
			}, 50);
		}
	};
	
	var updateTotal = function() {
		var total = knownFiles.size(),
			values = knownFiles.values(),
			percent = 0;
			
		for (var ndx = 0; ndx < total; ndx++) {
			var fileObj = values[ndx];
			
			percent += fileObj.percent / total;
		}
		
		hemi.world.send(hemi.msg.progress, {
			isTotal: true,
			percent: percent
		});
		
		return percent;
	};
	
	var checkFinished = function() {					
		var percent = updateTotal();
		
		if (percent >= 99.9) {
			knownFiles.clear();
			window.clearInterval(intervalId);
			intervalId = null;
			return true;
		}
		
		return false;
	};
	
	/**
	 * Load the HTML (or HTM) file at the given URL. If an error occurs, an
	 * alert is thrown. Otherwise the given callback is executed and passed the
	 * loaded data.
	 * 
	 * @param {string} url the url of the file to load relative to the Kuda
	 *     directory
	 * @param {function(string):void} callback a function to pass the string of
	 *     data that was loaded
	 */
	hemi.loader.loadHtml = function(url, callback) {
		url = hemi.loader.getPath(url);
		
		hemi.utils.get(url, function(data, status) {
			if (data == null) {
				alert(status);
			} else {
				callback(data);
			}
		});
	};

	/**
	 * Load the bitmap file at the given URL into the given Pack. If an error
	 * occurs, an alert is thrown. Otherwise the given callback is executed and
	 * passed an array of the loaded bitmaps.
	 * 
	 * @param {string} url the url of the file to load relative to the Kuda
	 *     directory
	 * @param {o3d.Pack} pack the Pack to load bitmaps into
	 * @param {function(o3d.Bitmap[]):void} callback a function to pass an array
	 *     of the loaded bitmaps
	 */
	hemi.loader.loadBitmap = function(url, pack, callback) {
		url = hemi.loader.getPath(url);

		hemi.world.loader.loadBitmaps(pack, url,
			function(bitmaps, exception){
				if (exception) {
					alert('Loading failed: ' + exception);
				} else {
					callback(bitmaps);
				}
				var fileObj = knownFiles.get(url);
				
				if (fileObj)
					fileObj.percent = 100;
				checkFinished();
			});
		
		var list = hemi.world.loader.loadInfo.children_,
			loadInfo = list[list.length - 1];
		
		syncedIntervalFcn(url, loadInfo);
	};

	/**
	 * Load the image file at the given URL. If an error occurs, it is logged.
	 * Otherwise the given callback is executed and passed the loaded image.
	 * 
	 * @param {string} url the url of the file to load relative to the Kuda
	 *     directory
	 * @param {function(Image):void} callback a function to pass the loaded
	 *     image
	 */
	hemi.loader.loadImage = function(url, callback) {
		++hemi.world.loader.count_;
		var img = new Image();
		
		img.onabort = function() {
			hemi.console.log('Aborted loading: ' + url, hemi.console.WARN);
			hemi.world.loader.countDown_();
		};
		img.onerror = function() {
			hemi.console.log('Error loading: ' + url, hemi.console.ERR);
			hemi.world.loader.countDown_();
		};
		img.onload = function() {
			callback(img);
			hemi.world.loader.countDown_();
		};
		
		img.src = hemi.loader.getPath(url);
	};

	/**
	 * Load the texture at the given URL. If an error occurs, an alert is
	 * thrown. Otherwise the given callback is executed and passed the texture.
	 * 
	 * @param {string} url the url of the file to load relative to the Kuda
	 *     directory
	 * @param {function(o3d.Texture):void} onLoadTexture a function to pass the
	 *     loaded texture
	 * @param {thisArg} opt_this the value for this inside the onLoadTexture
	 *     function 
	 * @param {o3d.Pack} opt_pack the Pack to load bitmaps into
	 */
	hemi.loader.loadTexture = function(url, onLoadTexture, opt_this, opt_pack) {
		url = hemi.loader.getPath(url);
		var pack = opt_pack || hemi.core.mainPack;

		hemi.world.loader.loadTexture(pack, url,
			function(texture, exception) {
				if (exception) {
					alert(exception);
				}

				var fileObj = knownFiles.get(url);
				
				if (fileObj)
					fileObj.percent = 100;
				checkFinished();
				onLoadTexture.call(opt_this, texture);
			});
		
		var list = hemi.world.loader.loadInfo.children_,
			loadInfo = list[list.length - 1];
		
		syncedIntervalFcn(url, loadInfo);
	};

	/**
	 * Load the model file at the given URL into the given Pack and set the
	 * given Transform as the parent of the loaded Transforms. If an error
	 * occurs, an alert is thrown. Otherwise the given optional callback is
	 * executed and passed the pack and parent Transform loaded with data from
	 * the file.
	 * 
	 * @param {string} url the url of the file to load relative to the Kuda
	 *     directory
	 * @param {o3d.Pack} pack the Pack to load textures, shapes, etc into
	 * @param {o3d.Transform} parent the Transform to parent the Model under
	 * @param {function(o3d.Pack, o3d.Transform):void} opt_callback a function
	 *     to pass the Pack and Transform loaded with data from the file
	 * @param {o3djs.serialization.Options} opt_options options for the loader
	 */
	hemi.loader.loadModel = function(url, pack, parent, opt_callback, opt_options) {
		url = hemi.loader.getPath(url);
		opt_options = opt_options || {};

		hemi.world.loader.loadScene(hemi.core.client, pack, parent, url,
			function(pack, parent, exception) {
				if (exception) {
					alert('Loading failed: ' + exception);
				} else if (opt_callback) {
					opt_callback(pack, parent);
				}
				var fileObj = knownFiles.get(url);
				
				if (fileObj)
					fileObj.percent = 100;
				checkFinished();
			}, opt_options);
		
		var list = hemi.world.loader.loadInfo.children_,
			loadInfo = list[list.length - 1];
		
		syncedIntervalFcn(url, loadInfo);
	};

	/**
	 * Load the Octane file at the given URL. If an error occurs, an alert is
	 * thrown. Otherwise the loaded data is decoded into JSON and passed to the
	 * Octane module. If the Octane is for an object, it is created and passed
	 * to the given optional callback. If the Octane is for a World, the current
	 * World is cleaned up and the new World is created. The given optional
	 * callback is then executed, followed by hemi.world.ready().
	 * 
	 * @param {string} url the url of the file to load relative to the Kuda
	 *     directory
	 * @param {function([Object]):void} opt_callback an optional function to
	 *     either pass the Object created or execute before the created World's
	 *     ready function is called
	 */
	hemi.loader.loadOctane = function(url, opt_callback) {
		url = hemi.loader.getPath(url);

		hemi.utils.get(url, function(data, status) {
			if (data == null) {
				alert(status);
			} else {
				if (typeof data === 'string') {
					data = JSON.decode(data);
				}
				
				if (data.type) {
					var obj = hemi.octane.createObject(data);
					
					if (opt_callback) {
						opt_callback(obj);
					}
				} else {
					hemi.octane.createWorld(data);
				
					if (opt_callback) {
						opt_callback();
					}
					
					hemi.world.ready();
				}
			}
		});
	};
	
	/**
	 * Get the correct path for the given URL. If the URL is absolute, then
	 * leave it alone. Otherwise prepend it with the load path.
	 * 
	 * @param {string} url the url to update
	 * @return {string} the udpated url
	 */
	hemi.loader.getPath = function(url) {
		if (url.substr(0, 4) === 'http') {
			return url;
		} else {
			return hemi.loader.loadPath + url;
		}
	};
	
	return hemi;
})(hemi || {});
