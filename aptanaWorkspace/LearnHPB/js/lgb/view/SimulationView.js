/**
 * @author Raj Dye - raj@rajdye.com
 * Copyright (c) 2011 Institute for Sustainable Performance of Buildings (Superb)
 */

goog.provide('lgb.view.SimulationView');

goog.require('lgb.simulation.model.MainModel');
goog.require('lgb.simulation.model.voNative.SimStateNative');
goog.require('lgb.component.LinkDataSource');
goog.require('lgb.component.Link');
goog.require('lgb.view.DialogView');
goog.require('lgb.events.MouseClick');
goog.require('lgb.simulation.events.SimStateNativeRequest');

/**
 * @constructor
 * @extends {lgb.view.DialogView}
 */
lgb.view.SimulationView = function(dataModel) {
    lgb.view.DialogView.call(this, dataModel);

    this.dataModel = dataModel;

    this.htmlID = 'simulationView';
    this.title = 'Simulation View';

    this.useSlideEffect = false;
    this._NAME = 'lgb.view.SimulationView';

};
goog.inherits(lgb.view.SimulationView, lgb.view.DialogView);

/**
 * @protected
 * @param {lgb.events.DataModelChanged} event Fired when the DM changes.
 */
lgb.view.SimulationView.prototype.onChange = function(event) {

    var whatIsDirty = event.payload;

    if (whatIsDirty.simStateNative) {

        this.disableAllButtons();

        switch (this.dataModel.simStateNative) {

            case lgb.simulation.model.voNative.SimStateNative.simStateNative_0_uninitialized :
                this.connectLink_.setEnabled(true);
                break;
            case lgb.simulation.model.voNative.SimStateNative.simStateNative_1_connect_completed :
                this.xmlParseLink_.setEnabled(true);
                break;
            case lgb.simulation.model.voNative.SimStateNative.simStateNative_2_xmlParse_completed :
                this.initLink_.setEnabled(true);
                break;

            case lgb.simulation.model.voNative.SimStateNative.simStateNative_3_ready :
                this.runLink_.setEnabled(true);
                this.stepLink_.setEnabled(true);
                this.terminateLink_.setEnabled(true);
                this.clearLink_.setEnabled(true);
                break;

            case lgb.simulation.model.voNative.SimStateNative.simStateNative_4_run_started :
                this.stopLink_.setEnabled(true);
                break;

        }

    }

    if (whatIsDirty.messageStruct) {

        var messageStruct = this.dataModel.messageStruct;
        this.messageBox_.append(messageStruct.msgText + '<br />' + "\n");
    }

    if (whatIsDirty.xmlParsedInfo) {

        var xmlParsedInfo = this.dataModel.xmlParsedInfo;
        this.showXMLparsedInfo(xmlParsedInfo);
    }

    if (whatIsDirty.scalarValueResults) {
        this.showScalarValueResults(this.dataModel.scalarValueResults);
    }

};

lgb.view.SimulationView.prototype.showScalarValueResults = function(scalarValueResults) {

    var time = scalarValueResults.time_;
    
    var realVarList = scalarValueResults.output.realList;
    var newRow = {time:time};
    
    for (var i = 1, j = this.columnHeaders_.length; i < j; i++) {
        var columnHeader = this.columnHeaders_[i];
        newRow[columnHeader] = realVarList[i-1].value_;
    };
    
    this.resultLogDataSource_.insert(0,newRow);
    
    
    
    return;

}


lgb.view.SimulationView.prototype.showXMLparsedInfo = function(xmlParsedInfo) {


    var fields = {time:  { type: "number" , width: "100px" } };

    
    this.scalarVariablesAll_ = xmlParsedInfo.scalarVariablesAll_;
    this.columnHeaders_ = ['time'];

    var resultLogVars = this.scalarVariablesAll_.output_.realVarList_;


    var fields = {time: { type: "number" }};
    
    var len = resultLogVars.length;
    for (var i = 0, j = len; i < j; i++) {

        var oneVar = resultLogVars[i];

        var propertyName = oneVar.name_;
        propertyName = propertyName.split('[').join('_');
        propertyName = propertyName.split(']').join('');
        fields[propertyName] = { type: "number" , width: "150px" };
        
        this.columnHeaders_ .push(propertyName);
    };
    


    this.resultLogDataSource_ = new kendo.data.DataSource( {

      schema: {
           model: {
               fields: fields
           }
       }

       }
    );
    
    this.resultsLogBox_.kendoGrid({
        dataSource : this.resultLogDataSource_,
        autoBind: true,
        height:700,
        scrollable: true,
        filterable: true,
        sortable: true,
        groupable: false,
        pageable: false
    });
    
    this.resultsLogGrid_ = this.outputBox_.data("kendoGrid");
    
    

};


/**
 * @public
 */
lgb.view.SimulationView.prototype.init = function() {


    this.injectHtml_();
    this.bind_();
};


/**
 * injects HTML into the DOM
 * @private
 */
lgb.view.SimulationView.prototype.injectHtml_ = function() {

    this.makeDialog_();
    this.makeTopPanel_();
    this.makeBottomPanel_();
    this.show();
};



/**
 * event handler
 * @private
 * @param {lgb.events.MouseClick} event The Event.
 */
lgb.view.SimulationView.prototype.onClickSimStateNativeRequest_ = function(event) {

    var simState = event.target.data;

    var event = new lgb.simulation.events.SimStateNativeRequest(simState);
    this.dispatchLocal(event);

};



/**
 * Binds specific event types to functions which handle the events.
 * If no event target is specified then the listener is set  on the global
 * event bus.
 * @private
 */
lgb.view.SimulationView.prototype.bind_ = function() {

    //data model changed
    //this.listenTo(this.dataModel, lgb.events.DataModelChanged.TYPE, this.onChange);

    var len = this.topPanelButtons_.length;
    for (var i = 0; i < len - 1; i++) {

        var button = this.topPanelButtons_[i];

        button.bind();
        this.listenTo(button, lgb.events.MouseClick.TYPE, this.onClickSimStateNativeRequest_);

    };

};



/**
 * Event handler triggered when the user clicks the
 * close button (x) on the dialog.
 * @param {goog.events.Event} event The event received.
 */
lgb.view.SimulationView.prototype.onCloseButtonClicked = function(event) {
    // this.dispatchLocal(new lgb.events.ViewClosed());

};

/**
 * @private
 */
lgb.view.SimulationView.prototype.makeTopPanel_ = function() {

    this.topPanelID = this.htmlID + '-topPanel';

    this.topPanelButtons_ = new Array();

    // linkHtml = '';
    var ds = new lgb.component.LinkDataSource('Connect~', this.htmlID, 'connect')
    this.connectLink_ = new lgb.component.Link(ds);
    this.connectLink_.data = lgb.simulation.model.voNative.SimStateNative.simStateNative_1_connect_requested;
    this.topPanelButtons_.push(this.connectLink_);

    var ds2 = new lgb.component.LinkDataSource('XML Parse {}', this.htmlID, 'xmlParse-link')
    this.xmlParseLink_ = new lgb.component.Link(ds2);
    this.xmlParseLink_.data = lgb.simulation.model.voNative.SimStateNative.simStateNative_2_xmlParse_requested;

    this.topPanelButtons_.push(this.xmlParseLink_);

    var ds3 = new lgb.component.LinkDataSource('Init ^', this.htmlID, 'init-link')
    this.initLink_ = new lgb.component.Link(ds3);
    this.initLink_.data = lgb.simulation.model.voNative.SimStateNative.simStateNative_3_init_requested;

    this.topPanelButtons_.push(this.initLink_);

    var ds4 = new lgb.component.LinkDataSource('Run >', this.htmlID, 'run-link')
    this.runLink_ = new lgb.component.Link(ds4);
    this.runLink_.data = lgb.simulation.model.voNative.SimStateNative.simStateNative_4_run_requested;

    this.topPanelButtons_.push(this.runLink_);

    var ds5 = new lgb.component.LinkDataSource('Step >', this.htmlID, 'step-link')
    this.stepLink_ = new lgb.component.Link(ds5);
    this.stepLink_.data = lgb.simulation.model.voNative.SimStateNative.simStateNative_5_step_requested;

    this.topPanelButtons_.push(this.stepLink_);

    var ds6 = new lgb.component.LinkDataSource('Stop []', this.htmlID, 'stop-link')
    this.stopLink_ = new lgb.component.Link(ds6);
    this.stopLink_.data = lgb.simulation.model.voNative.SimStateNative.simStateNative_5_stop_requested;

    this.topPanelButtons_.push(this.stopLink_);

    var ds7 = new lgb.component.LinkDataSource('Terminate.', this.htmlID, 'terminate-link')
    this.terminateLink_ = new lgb.component.Link(ds7);
    this.terminateLink_.data = lgb.simulation.model.voNative.SimStateNative.simStateNative_7_terminate_requested;

    this.topPanelButtons_.push(this.terminateLink_);

    var ds8 = new lgb.component.LinkDataSource('Clear -', this.htmlID, 'clear-link')
    this.clearLink_ = new lgb.component.Link(ds8);
    this.topPanelButtons_.push(this.clearLink_);

    var linkHtml = "";
    //this.topPanelButtons_[0].getHTML2();

    var len = this.topPanelButtons_.length;
    for (var i = 0; i < len; i++) {

        var button = this.topPanelButtons_[i];

        button.ds.isEnabled = false;
        linkHtml += button.getHTML2();

    };

    var divHtml = '<div id="{0}" class="simulationViewClass">' + linkHtml + '</div>';
    divHtml = divHtml.format(this.topPanelID);
    this.dialog.append(divHtml);

};


lgb.view.SimulationView.prototype.disableAllButtons = function() {

    var len = this.topPanelButtons_.length;
    for (var i = 0; i < len; i++) {
        var button = this.topPanelButtons_[i];
        button.setEnabled(false);
    };

};

lgb.view.SimulationView.prototype.makeBottomPanel_ = function() {

    this.mainPanel_ = $('<div>').attr('id', "simulationViewMainPanel");
    this.mainPanel_.appendTo(this.jq());

    var tabsID = 'simulationView-tabs';
    var tabStripID = 'simulationView-tabstrip';

    var htmlTabs = '<div id="{0}" class="k-content">' + '<div id="{1}" />' + '</div>';

    htmlTabs = htmlTabs.format(tabsID, tabStripID);

    this.mainPanel_.append(htmlTabs);

    this.kendoTabStrip = $('#' + tabStripID).kendoTabStrip({
        animation : false
    }).data('kendoTabStrip');

    this.kendoTabStrip.append([{
        text : 'Console'
    }, {
        text : 'Input'
    }, {
        text : 'Output'
    }, {
        text : 'Results Log'
    }]);

    this.kendoTabStrip.select(this.kendoTabStrip.tabGroup[0].children[0]);

    this.messageBox_ = $('<div>').attr('id', "simulationViewMessageBox");
    $('#' + tabStripID + '-1').append(this.messageBox_);

    this.inputBox_ = $('<div>').attr('id', "simulationViewInputBox");
    $('#' + tabStripID + '-2').append(this.inputBox_);

    //  this.outputBox_ = $('<div>').attr('id', "simulationViewOutputBox");

    this.outputBox_ = $('#' + tabStripID + '-3');
    
    this.resultsLogBox_ = $('#' + tabStripID + '-4');
    
    //this.resultsLogBox_ = $('<div>').attr('id', "simulationViewResultsLogBox");
   // $('#' + tabStripID + '-4').append(this.resultsLogBox_);

};

/**
 * injects the dialog panel into the DOM
 * @private
 */
lgb.view.SimulationView.prototype.makeDialog_ = function() {
    var jq = $('<div>').attr('id', this.htmlID);
    jq.direction = 'left';
    jq.bind('dialogclose', this.d(this.onCloseButtonClicked));

    jq.appendTo('body');

    this.dialog = jq.dialog({
        title : this.title,
        dialogClass : this.htmlID + '-dialog',
        hide : 'fade',
        width : 800,
        height : 900,
        position : ['center', 'center'],
        autoOpen : false
    });
};
