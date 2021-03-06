Ext.define('Classes.Manager', {
	extend: 'Classes.Person',
	config: {
			  department: 'sales'
	},
	constructor: function(name, surname, department) {
		 this.initConfig();
		 if(department){
			  this.setDepartment(department);
		 }
		 // передаем параметры в конcтруктор родительского класса
		 this.callParent([name, surname]);
	},
	getinfo: function() {
		this.callParent();
		alert("Департамент : " + this.department);
	}
 });