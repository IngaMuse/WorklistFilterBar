sap.ui.define([
		"zjblessons/WorklistFilterBar/controller/BaseController"
	], function (BaseController) {
		"use strict";

		return BaseController.extend("zjblessons.WorklistFilterBar.controller.NotFound", {

			/**
			 * Navigates to the worklist when the link is pressed
			 * @public
			 */
			onLinkPressed : function () {
				this.getRouter().navTo("worklist");
			}

		});

	}
);