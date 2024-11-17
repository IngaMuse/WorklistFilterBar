sap.ui.define(
  [
    "zjblessons/WorklistFilterBar/controller/BaseController",
    "sap/ui/model/json/JSONModel",
    "jblibs/s000/formatter",
    "jblibs/s000/Back",
  ],
  function (BaseController, JSONModel, formatter, libsjbBack) {
    "use strict";

    return BaseController.extend(
      "zjblessons.WorklistFilterBar.controller.Worklist",
      {
        jbBack: new libsjbBack(),
        formatter: formatter,
				jsonAnnotation: new JSONModel({
					RequestAtLeast: "",
					Annotation: [
						{
							id: "HeaderID",
							label: "{i18n>HeaderID}",
              Filter: {
                order: 2,
								mode: "SingleSelectMaster",
								filter: "HeaderID",
								text: "HeaderID",
								sort: "HeaderID",
								key: "HeaderID",
								entitySet: "zjblessons_base_Headers",
								visible: true,
								hidden: false,
							},
							Column: {
								order: 1,
								sortProperty: "HeaderID",
								visible: true,
								width: "9rem",
								type: "text",
								text: "{HeaderID}",
							},
						},
						{
							id: "MaterialID",
							label: "{i18n>MaterialID}",
              Filter: {
                order: 4,
								mode: "MultiSelect",
								filter: "MaterialID",
								text: "MaterialID",
								sort: "MaterialID",
								key: "MaterialID",
								entitySet: "zjblessons_base_Materials",
								filterKey: "MaterialID",
								visible: true,
								hidden: false,
							},
							Column: {
								order: 3,
								sortProperty: "MaterialID",
								visible: true,
								width: "9rem",
								text: "{MaterialID}",
								select: "MaterialID",
								type: "text",
							},
						},
						{
							id: "GroupID",
							label: "{i18n>GroupID}",
              Filter: {
                order: 6,
							  mode: "MultiSelect",
								filter: "GroupID",
								text: "GroupID",
								sort: "GroupID",
								key: "GroupID",
								entitySet: "zjblessons_base_Groups",
								filterKey: "GroupID",
								visible: true,
								hidden: false,
							},
							Column: {
								order: 5,
								sortProperty: "GroupID",
								visible: true,
								width: "9rem",
								text: "{GroupID}",
								select: "GroupID",
								type: "text",
							},
						},
						{
							id: "SubGroupID",
							label: "{i18n>SubGroupID}",
              Filter: {
                order: 8,
								mode: "MultiSelect",
								filter: "SubGroupID",
								text: "SubGroupID",
								sort: "SubGroupID",
								key: "SubGroupID",
								entitySet: "zjblessons_base_SubGroups",
								filterKey: "SubGroupID",
								visible: true,
								hidden: false,
							},
							Column: {
								order: 7,
								sortProperty: "SubGroupID",
								visible: true,
								width: "9rem",
								text: "{SubGroupID}",
								select: "SubGroupID",
								type: "text",
							},
						},
						{
							id: "Quantity",
							label: "{i18n>Quantity}",
              Filter: { 
                order: 10,
								filter: "Quantity",
								text: "Quantity",
                sort: "Quantity",
                key: "Quantity",
                filterKey: "Quantity",
								entitySet: "zjblessons_base_Items",
                visible: true,
                hidden: false,
              },
							Column: {
								order: 9,
                sortProperty: "Quantity",
                visible: true,
                width: "7rem",
                type: "Number",
                number: "{Quantity}",
                select: "Quantity",
              },
						},
						{
							id: "Price",
							label: "{i18n>Price}",
              Filter: {
                order: 12,
                mode:"SearchField",
								filter: "Price",
								text: "Price",
                sort: "Price",
                key: "Price",
                filterKey: "Price",
                entitySet: "zjblessons_base_Items",
                visible: true,
                hidden: false,
              },
							Column: {
								order: 11,
                sortProperty: "Price",
                visible: true,
                width: "7rem",
                type: "Number",
                select: "Price",
                number:"{Price}"
              },
            },
            {
              id: "Created",
              label: "{i18n>Created}",
              Filter: {
                order: 14,
                visible: true,
                hidden: false,
                mode: "DateField",
                width: "9rem",
                datePath: "Created",
                dateMode: true,
                selectedPeriod: "all",
                visiblePeriodButtons: "day, week, month, year, all",
              },
              Column: {
                order: 13,
                sortProperty: "Created",
                sortOrder: 1,
                sort: "desc",
                visible: true,
                width: "9rem",
                type: "date",
                typeFormat: "medium",
                text: "{Created}",
              },
						},
            {
							id: "CreatedBy",
							label: "{i18n>CreatedBy}",
              Filter: {
                order: 16,
                mode: "MultiSelect",
                filter: "CreatedByFullName",
                text: "CreatedByFullName",
                sort: "CreatedByFullName",
                image: "CreatedByAvatar",
                key: "CreatedBy",
                entitySet: "jbcommon_auth_CreatedBy",
                visible: true,
                hidden: false,
              },
              Column: {
                order: 15,
                sortProperty: "CreatedByFullName",
                visible: true,
                width: "9rem",
                text: "CreatedByFullName",
                imageURL: "CreatedByAvatar",
                type: "avatarAndLink",
								select: "CreatedByAvatar,CreatedByFullName"
              },
            },
						{
              id: "Modified",
              label: "{i18n>Modified}",
              Filter: {
                order: 18,
                visible: true,
                hidden: false,
                mode: "DateField",
                width: "9rem",
                datePath: "Modified",
                dateMode: true,
                selectedPeriod: "day",
                visiblePeriodButtons: "day, week, month, year, all",
              },
              Column: {
                order: 17,
                sortProperty: "Modified",
                visible: true,
                width: "9rem",
                type: "dateTime",
                typeFormat: "medium",
                text: "{Modified}",
              },
						},
						{
							id: "ModifiedBy",
							label: "{i18n>ModifiedBy}",
              Filter: {
                order: 20,
                mode: "MultiSelect",
                filter: "ModifiedByFullName",
                text: "ModifiedByFullName",
                sort: "ModifiedByFullName",
                image: "ModifiedByAvatar",
                key: "ModifiedBy",
                entitySet: "jbcommon_auth_ModifiedBy",
                visible: true,
                hidden: false,
              },
              Column: {
                order: 19,
                sortProperty: "ModifiedBy",
                visible: true,
                width: "9rem",
                text: "ModifiedByFullName",
                imageURL: "ModifiedByAvatar",
                type: "avatarAndLink",
                select: "ModifiedByAvatar,ModifiedByFullName",
              },
            },
          ],
				}),

				checkAvatar: function (sName, sAvatar) {
					if (sName && sName !== "" && sAvatar==="") {
						return "sap-icon://person-placeholder"
					} else
					return "";
			  },

        onInit: function () {
          let oViewModel = new JSONModel({});
          this.setModel(oViewModel, "worklistView");

          this.jbBack.Init(this);

          this.setModel(this.jsonAnnotation, "annotation");
        },

        onPressRefresh: function () {
          this.byId("table").getBinding("rows").refresh();
        },

        prepareSelect: function (oEvent) {
          this.aSorter = oEvent.getParameter("aSorts");
          this.sSelect = oEvent.getParameter("sSelect");

          this.callBindTable();
        },

        callBindTable: function (sPath) {
          if (this.sSelect && this.aFilters) {
            let sRequestAtLeast =
              this.getModel("annotation").getData().RequestAtLeast;
            this.byId("table").bindRows({
              path: "/zjblessons_base_Items",
              template: new sap.ui.table.Row({}),
              filters: this.aFilters,
              sorter: this.aSorter,
              parameters: {
                select:
                  this.sSelect + (sRequestAtLeast ? "," + sRequestAtLeast : ""),
              },
            });
          }
        },

        onPressFilterBarChange: function (oEvent) {
          this.aFilters = oEvent.getParameter("OdataFilters");
          this.callBindTable();
        },
      }
    );
  }
);
