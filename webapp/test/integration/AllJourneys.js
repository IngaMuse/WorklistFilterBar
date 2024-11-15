/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"zjblessons/WorklistFilterBar/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"zjblessons/WorklistFilterBar/test/integration/pages/Worklist",
	"zjblessons/WorklistFilterBar/test/integration/pages/Object",
	"zjblessons/WorklistFilterBar/test/integration/pages/NotFound",
	"zjblessons/WorklistFilterBar/test/integration/pages/Browser",
	"zjblessons/WorklistFilterBar/test/integration/pages/App"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "zjblessons.WorklistFilterBar.view."
	});

	sap.ui.require([
		"zjblessons/WorklistFilterBar/test/integration/WorklistJourney",
		"zjblessons/WorklistFilterBar/test/integration/ObjectJourney",
		"zjblessons/WorklistFilterBar/test/integration/NavigationJourney",
		"zjblessons/WorklistFilterBar/test/integration/NotFoundJourney"
	], function () {
		QUnit.start();
	});
});