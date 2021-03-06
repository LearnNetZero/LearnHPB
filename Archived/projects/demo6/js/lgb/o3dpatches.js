/**
 * a namespace used to patch the 03d  libs
 */



var lgb = (function(lgb) {
	

	/**
	 * @namespace A module for managing 3D models and their assets.
	 */
	lgb.o3dpatches = lgb.o3dpatches || {};
	
	
	
	lgb.init = function() {
		
		
		
		
	}
	
	
	return lgb;
	
})(lgb || {});
	
	
	
/**
* this hack overwrites the function defined in the file io.js
 */
o3djs.io.loadTextFile = function(url, callback) {
  o3djs.BROWSER_ONLY = true;

  var error = 'loadTextFile failed to load url "' + url + '"';
  var request;
  if (!o3djs.base.IsMSIE() && window.XMLHttpRequest) {
    request = new XMLHttpRequest();
    if (request.overrideMimeType) {
      request.overrideMimeType('text/plain');
    }
  } else if (window.ActiveXObject) {
    request = new ActiveXObject('MSXML2.XMLHTTP.3.0');
  } else {
    throw 'XMLHttpRequest is disabled';
  }
  
  var loadInfo = o3djs.io.createLoadInfo(request, false);
  request.open('GET', url, true);
  var finish = function() {
  //	var rdy = request.readyState;
	//console.log ('request.readyState ' + request.readyState);
	
	//request.readyState
	//0 = open has not yet been called
	//1 = send has not yet been called but open has been called
	//2 = send has been called but no response from server
	//3 = data is in the process of being received from the server
	//4 = response from server has arrived

    if (request.readyState == 4) {
      var text = '';
      // HTTP reports success with a 200 status. The file protocol reports
      // success with zero. HTTP does not use zero as a status code (they
      // start at 100).
      // https://developer.mozilla.org/En/Using_XMLHttpRequest
      var success = request.status == 200 || request.status == 0;
      if (success) {
        text = request.responseText;
      }
      loadInfo.finish();
      callback(text, success ? null : 'could not load: ' + url);
    } else if (request.readyState == 3) {
		//request.
		var r = request;
		
	}
  };
  
  
 //  TODO:(raj dye)  this is an event handler that I added which actual gets updates
 // but is not yet fully integrated into the framework
//  var progress  = function (event) {
//  	//var r = event;
//	var percent = event.loaded / event.total
//	this.loadTextFileProgressCallback.call(percent);
//	
//	console.log ('loaded: ' + event.loaded + ' / total:'+ event.total);
//  };
  
  request.onreadystatechange = finish;
  request.onprogress  = this.loadTextFileProgressCallback;
  request.send(null);
  return loadInfo;
};