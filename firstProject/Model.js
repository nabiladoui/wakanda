
guidedModel =// @startlock
{
	Project :
	{
		methods :
		{// @endlock
			getManager:function(ID)
			{// @lock
				var project = ds.Project.find("ID = :1", ID);
				return project.manager.firstName+" "+project.manager.lastName;
			}// @startlock
		}
	},
	Employee :
	{
		project :
		{
			onGet:function()
			{// @endlock
				
				if (this.occupation == "employee") {
					return this.manager.projectCollection[0].title;
				} else {
					return this.projectCollection[0].title;
				}
			   
			
			}// @startlock
		}
	}
};// @endlock
