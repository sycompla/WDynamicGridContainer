sap.ui.controller("sources.controllers.view1", {
    onInit: function(oEvent) {

        this._oPnl = this.byId("grid1");
    },
    addInput: function(){
        console.log("clicked")
        oInput1 = new sap.m.Input();/*
        delIcon = new sap.ui.core.Icon({
            src:"sap-icon://delete",
            press:this.onDeleteCcMail
        });*/
        _oCcLayout = new sap.m.FlexBox({
            alignItems:"Center",
            justifyContent:"Start",
            items:[oInput1]
        });
        this._oPnl.addItem(_oCcLayout);
    },
    getValue: function(){
        debugger;
        var values = "";
        var pnlDom = this._oPnl.getDomRef()
        $(pnlDom).find('input').each(function(index, elem) {
            debugger;
            values += ", " + $(elem)[0].value;
        });
        alert(values);
    },
    onDeleteCcMail: function(oEvent){
        var rowItemContainer = oEvent.getSource().getParent();
        rowItemContainer.destroy();
    }
});