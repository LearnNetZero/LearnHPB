goog.provide('lgb.chart.view.SimulationIframeGraphGUI');




/**
 * @constructor
 * @extends lgb.gui.view.BaseGUI
 */
lgb.chart.view.SimulationIframeGraphGUI = function(dataModel) {

  this._TITLE = 'Graph-Iframe';
  
  lgb.gui.view.BaseGUI.call(this, dataModel);
  this.totalHeaderHeight_ = 70;
  this.isDirty_ = false;
  this.blockUpdates_ = false;
};
goog.inherits(lgb.chart.view.SimulationIframeGraphGUI, lgb.gui.view.BaseGUI);



lgb.chart.view.SimulationIframeGraphGUI.prototype.init = function() {

    this.sessionID_ = 'last';
    this.server_ = 'localhost';

};






lgb.chart.view.SimulationIframeGraphGUI.prototype.calculateLayout = function(theVar) {
  
  
  this.setWidthAndHeight_();

  var src = this.getSrc_();
  this.iframe.attr("src", src);
  this.iframe.attr("width", this.width);
  this.iframe.attr("height", this.height);

  return;
};


lgb.chart.view.SimulationIframeGraphGUI.prototype.injectInto = function(parentElement) {
  
  
  
  
  this.graphContainerDiv_ = this.makeDiv();
  this.append(this.graphContainerDiv_);
  
  goog.base(this, 'injectInto', parentElement);
  
  this.setWidthAndHeight_();
  
  var sessionID = this.dataModel.xmlParsedInfo.sessionID_;

  var src = "/LearnHPB/chartIframe.html?width={0}&height={1}&sessionID={2}"
  .format(this.width, this.height, sessionID);
  
  //this.iframe.attr("src", src);
  
  
  

  
  // var src = this.getSrc_();
  var src = "#";
  
  var tag = '<iframe src="{0}" width="{1}" height="{2}" frameborder="0"></iframe>'.
    format(src, this.width, this.height);
  
  
  this.iframe = $(tag);

  this.graphContainerDiv_.append(this.iframe);

};



lgb.chart.view.SimulationIframeGraphGUI.prototype.setWidthAndHeight_ = function() {
  
  var p = this.getParentElement().parent();
  this.width = p.width() - 36;
  this.height = p.height();
  
};

lgb.chart.view.SimulationIframeGraphGUI.prototype.getSrc_ = function(server, sessionID) {
 

  var src = "/LearnHPB/test/chart_04.html?server={0}&sessionID={1}&width={2}&height={3}".
    format(this.server_, this.sessionID_, this.width, this.height);
    

  return src;
  
};









