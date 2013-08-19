/**
 * @author Raj Dye - raj@rajdye.com
 * Copyright (c) 2011 Institute for Sustainable Performance of Buildings (Superb)
 */

goog.provide('lgb.view.input.LayoutView');

goog.require('lgb.view.input.BaseViewGUI');
goog.require('lgb.component.SplitPanel');
goog.require('lgb.component.SplitPanelDataSource');
goog.require('lgb.view.LayoutUtil');
goog.require('lgb.Config');
goog.require('lgb.model.input.LayoutModel');




/**
 * @constructor
 * @extends {lgb.view.input.BaseViewGUI}
 */
lgb.view.input.LayoutView = function(dataModel) {

  lgb.view.input.BaseViewGUI.call(this, dataModel, 'pageContainer', 'theBody');

  this.parentMap = [];
  this.layoutUtils_ = [];
  
};
goog.inherits(lgb.view.input.LayoutView, lgb.view.input.BaseViewGUI);

/**
 * @private
 */
lgb.view.input.LayoutView.prototype.init = function() {

  this.splitPanelDS_ = new lgb.component.SplitPanelDataSource();
  this.splitPanelDS_.splitLocation = 380;
  
  this.splitPanel_ = new lgb.component.SplitPanel(this.splitPanelDS_);
  
  this.bind_();
  this.inject();
};


lgb.view.input.LayoutView.prototype.bind_ = function(guiView) {
  
  this.listenTo(this.splitPanel_, e.Resize, this.onSplitter1Resize_);
  this.listenForChange_('add');
  
};




lgb.view.input.LayoutView.prototype.onChange_add_ = function(value) {
  
  this.add(value);
}





lgb.view.input.LayoutView.prototype.toggleVisibility = function(guiView) {
  
  guiView.toggleVisibility();
  
};



lgb.view.input.LayoutView.prototype.toggleVisibility = function(guiView) {
  
  guiView.isVisible_ = !guiView.isVisible_;
  var el = guiView.getMainElement();
  
  el.toggle();

};






lgb.view.input.LayoutView.prototype.add = function(guiView) {
  
  var parent;
  var LAYOUT_ID = lgb.Config.LAYOUT_ID;
    
  if (null == guiView.layoutID) {
    debugger;
  } else {
    parent = this.parentMap[guiView.layoutID];
  }

  
  switch(guiView.layoutID )
  {
  case LAYOUT_ID.TopMenu:
      var el = guiView.getMainElement();
      
      el.css("z-index",100); 
      el.css("position","absolute"); 
      guiView.inject(parent);
      
      break;
      
  case LAYOUT_ID.PropertiesButton:
      this.propertiesButton_ = guiView;
      
      guiView.inject(parent);
      var util = new lgb.view.LayoutUtil(guiView);
      
      util.alignHorizontal(lgb.view.LayoutUtil.ALIGN.Right, 6);
      util.show();
      
      this.layoutUtils_.push(util);
      
      break;
  case LAYOUT_ID.SimulationButton:
      this.simulationButton_ = guiView;
      
      guiView.inject(parent);
      var util = new lgb.view.LayoutUtil(guiView);
      
      util.alignHorizontal(lgb.view.LayoutUtil.ALIGN.Right, 43);
      util.show();
      
      this.layoutUtils_.push(util);
      
      break;
  case LAYOUT_ID.TitleBar:

      guiView.inject(parent);
      
      var util = new lgb.view.LayoutUtil(guiView);
      util.alignHorizontal(lgb.view.LayoutUtil.ALIGN.Left, 5);
      util.show();
      
      this.layoutUtils_.push(util);
      
      break;
  case LAYOUT_ID.RightTopInputGUI:
      guiView.inject(parent);
      break;

  default: //LAYOUT_ID.PropertiesView, LAYOUT_ID.SimulationView
      guiView.inject(parent);
  }
  
};


lgb.view.input.LayoutView.prototype.onSplitter1Resize_ = function(event) {
  this.triggerLocal(e.LayoutChange);
};

lgb.view.input.LayoutView.prototype.calculateLayout = function(windowDimensions) {
  
 // if (null != windowDimensions) {
    
    // var heightCss = "{0}px".format(window.innerHeight-100);
//     
    // this.leftPanel_.css({
      // height : heightCss,
      // background:"#ff0000"
    // });
    
  //}
  
  this.each(this.layoutUtils_, this.calculateOneLayout);
};

lgb.view.input.LayoutView.prototype.calculateOneLayout = function(layoutUtil) {
  layoutUtil.tweenToPosition();
};


lgb.view.input.LayoutView.prototype.inject = function() {

  goog.base(this,'inject');

  this.splitPanel_.inject(this.getMainElement());
  
  this.leftPanel_ = this.splitPanel_.getPane(0);
  this.rightPanel_ = this.splitPanel_.getPane(1);
  
  
  this.webGLcanvas_ = this.makeDiv('webGLcanvas');
  this.rightPanelTop_ = this.makeDiv('rightPanelTop');
  
  
  this.rightPanel_.append(this.rightPanelTop_);
  this.rightPanel_.append(this.webGLcanvas_);
  
  var ID = lgb.Config.LAYOUT_ID;
  
  this.parentMap[ID.TestingInputGUI] = this.leftPanel_;
  this.parentMap[ID.MainInputGUI] = this.leftPanel_;
  
  this.parentMap[ID.TitleBar] = this.leftPanel_;
  this.parentMap[ID.TopMenu] = this.rightPanelTop_;
  this.parentMap[ID.PropertiesButton] = this.webGLcanvas_;
  this.parentMap[ID.PropertiesView] = this.webGLcanvas_;
  this.parentMap[ID.SimulationView] = this.getMainElement();
  this.parentMap[ID.RightTopInputGUI] = this.rightPanelTop_;



  this.webGLcanvas_.css({
    width : "100%",
    height : "95%"
  });
  

  this.rightPanelTop_.css({
    width : "100%",
    height : "32px",
    background:"#fafafa"
  });
  

  
  
 
};





