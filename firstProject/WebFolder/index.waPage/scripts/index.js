
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var textField2 = {};	// @textField
	var dataGrid2 = {};	// @dataGrid
	var button1 = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	textField2.keydown = function textField2_keydown (event)// @startlock
	{// @endlock
		if(event.keyCode == 13) {
			if (filterString=="")  sources.employee.query('ID>0 order by ID');
		    else sources.employee.query('occupation = :1 order by ID', filterString );
			}
			
	};// @lock

	dataGrid2.onRowClick = function dataGrid2_onRowClick (event)// @startlock
	{// @endlock
		ds.Project.getManager({
			onSuccess: function(event){
				alert("Manager :"+ event.result);
				}
		
		},sources.project.ID);
	

	};// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		if (filterString=="")  sources.employee.query('ID>0 order by ID');
		else sources.employee.query('occupation = :1 order by ID', filterString );
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("textField2", "keydown", textField2.keydown, "WAF");
	WAF.addListener("dataGrid2", "onRowClick", dataGrid2.onRowClick, "WAF");
	WAF.addListener("button1", "click", button1.click, "WAF");
// @endregion
};// @endlock
