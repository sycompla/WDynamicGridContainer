sap.ui.define(['sap/ui/core/mvc/Controller'],
    function(Controller) {
        "use strict";
        var PageController = Controller.extend("sources.controllers.view1", {
            onInit: function (oEvent) {

                this._oPnl = this.byId("grid1");
            },
            addInput: function () {
                console.log("clicked")
                this.addTile("bármi")
            },
            addTile: function (title) {
                let oInput1 = new sap.m.Input();
                let genericTile = new sap.m.GenericTile({
                    header: title,
                    subheader: '',
                    headerImage: 'sap-icon://goal',
                    press: function () {
                        alert();
                    },
                    layoutData: new sap.f.GridContainerItemLayoutData({
                        minRows: 2,
                        columns: 2
                    })
                });
                this._oPnl.addItem(genericTile);
            },
        })
        return PageController;
});