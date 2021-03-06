/**
 * @author Raj Dye
 * For showing the progress bar of a file load on the screen
 * this requires that the page have the following html
 * 
 *   <div id="progressbarBackground">  
        <div id="progressbar">
            <div id="progressbarTitle">Loading Geometry</div>
            <div id="indicator"><div id="progressnum">0</div></div>
        </div>
    </div>
   in MVC this is  a view class
    
 */
		

		
var lgb = (function(lgb) {
	
	
	/**
	 * @namespace For showing the progress bar of a file load on the screen
	 */
	lgb.progressBar = lgb.progressBar || {};
	
	
	lgb.progressBar.Progressbar = function() {
		
		this.maxprogress = 200; // total to reach
		this.title = "title";
	};

	lgb.progressBar.Progressbar.prototype.init = function(theTitle) {
		//this.onProgress(0);
		
		if (theTitle != null) {
			this.title = theTitle;
		}
	
		this.progressnum = document.getElementById("progressnum");
	    this.indicator = document.getElementById("indicator");
	 	this.progressbarBackground = document.getElementById("progressbarBackground");
		this.progressbarTitle = document.getElementById("progressbarTitle");
		this.progressbarTitle.innerHTML = this.title;
		this.center();
	
	};
	

	
	lgb.progressBar.Progressbar.prototype.center = function() {
	
		var centerX = window.innerWidth / 2;
		var centerY = window.innerHeight / 2;
		
		var x = Math.round(centerX - (this.progressbarBackground.offsetWidth/2));
		var y = Math.round(centerY - (this.progressbarBackground.offsetHeight/2));
		
		
	 	//var backg = document.getElementById("progressbarBackground");
		this.progressbarBackground.style.left=x + 'px';
		this.progressbarBackground.style.top=y + 'px';
	};
	
	
	lgb.progressBar.Progressbar.prototype.hide = function(percent) {
		this.setVisible(false);
	};
	
	lgb.progressBar.Progressbar.prototype.show = function() {
		this.setVisible(true);
	};
	
	lgb.progressBar.Progressbar.prototype.setVisible = function(isVisible) {
		
		var style;
		
		if (isVisible) {
			style = "visible";
		} else {
			style = "hidden";
		}
	
	  	this.indicator.style.visibility = style;
	  	this.progressnum.style.visibility = style;
	  	this.progressbarBackground.style.visibility = style;
		this.progressbarTitle.style.visibility = style;
	};
	
	
	
	lgb.progressBar.Progressbar.prototype.onProgress = function(percent) {
		
		//console.log('Progressbar.prototype.onProgress: ' + percent);			     
	
	  if (percent == '0') return;
	  var px = this.maxprogress * (percent / 100);
	  
	  this.indicator.style.width=px + 'px';
	  this.progressnum.innerHTML = actualprogress = +percent + '%';
	
	
	};

	return lgb;
	
})(lgb || {});