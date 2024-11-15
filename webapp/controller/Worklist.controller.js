sap.ui.define(
  [
    "zjblessons/WorklistFilterBar/controller/BaseController",
    "sap/ui/model/json/JSONModel",
    "zjblessons/WorklistFilterBar/model/formatter",
    "sap/ui/model/Sorter",
  ],
  function (BaseController, JSONModel, formatter, Sorter) {
    "use strict";

    return BaseController.extend(
      "zjblessons.WorklistFilterBar.controller.Worklist",
      {
        formatter: formatter,

        onInit: function () {
          const oViewModel = new JSONModel({
            busy: false,
            busyIndicatorDelay: 0,
          });
          this.setModel(oViewModel, "worklistView");
        },

        onBeforeRendering: function () {
          this._bindTable();
        },

        _bindTable() {
          const oTable = this.getView().byId("table");
          oTable.bindItems({
            path: "/zjblessons_base_Items",
            sorter: [new Sorter("Created", true)],
            template: this._getTableTemplate(),
            urlParameters: {
              $select:
                "HeaderID,Created"
            },
          });
        },

        _getTableTemplate() {
          const oTemplate = new sap.m.ColumnListItem({
            type: "Navigation",
            cells: [
              new sap.m.Text({
                text: "{HeaderID}",
              }),
              new sap.m.Text({
                text: {
                  path: "Created",
                  type: "sap.ui.model.type.Date",
                  formatOptions: { style: "short" },
                },
              }),
            ],
          });
          return oTemplate;
        },

      }
    );
  }
);
