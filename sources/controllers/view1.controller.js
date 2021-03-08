sap.ui.define(['sap/ui/core/mvc/Controller'],
    function(Controller) {
        "use strict";
        var PageController = Controller.extend("sources.controllers.view1", {
            onInit: function (oEvent) {

                this._oPnl = this.byId("grid1");
            },
            addInput: function () {
                console.log("clicked")
                let oInput1 = new sap.m.Input();/*
        delIcon = new sap.ui.core.Icon({
            src:"sap-icon://delete",
            press:this.onDeleteCcMail
        });*/
                let genericTile = new sap.m.GenericTile({
                    header: 'A very looooooooooooooooooooooooooooooooooooooooooong header',
                    subheader: 'Percentage completion of goals',
                    headerImage: 'sap-icon://goal',
                    press: function () {
                        alert();
                    },
                    layoutData: new sap.f.GridContainerItemLayoutData({
                        minRows: 6,
                        columns: 4
                    })
                });


                    let _oCcLayout = new sap.m.FlexBox({
                        alignItems: "Center",
                        justifyContent: "Start",
                        items: [genericTile]
                    });
                this._oPnl.addItem(genericTile);
            },
            getValue: function () {
                debugger;
                var values = "";
                var pnlDom = this._oPnl.getDomRef()
                $(pnlDom).find('input').each(function (index, elem) {
                    debugger;
                    values += ", " + $(elem)[0].value;
                });
                alert(values);
            },
            onDeleteCcMail: function (oEvent) {
                var rowItemContainer = oEvent.getSource().getParent();
                rowItemContainer.destroy();
            }
        });
        return PageController;
});