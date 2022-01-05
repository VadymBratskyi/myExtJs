Ext.define('Classes.Person', {
	// singleton : true,
	alias: 'person',
	mixins: {
		car: 'Classes.Car'
	},
	config: {			
			name: 'Eugene',
			surname : 'Popov'
	},
	statics: {
		instanceCount: 0,
		// статический метод, возвращающий объект класса
		factory: function(name, surname) {
			 return new this({name: name, surname: surname});
		}
  	},
	constructor: function(name, surname) {
		 this.initConfig();
		 if(name){
			  this.setName(name);
		 }
		 if(surname){
			  this.setSurname(surname);
		 }
		 this.self.instanceCount ++;
	},
	go: function(speed) {
		this.drive(speed);
	},
	getinfo: function() {
		 alert("Полное имя : " + this.name + " " + this.surname);
	},
});


// Ext.define('Classes.Person', {
// 	name: 'Eugene',
// 	surname : 'Popov',

// 	constructor: function(name, surname) {
// 		if (name && surname) {
// 			this.name = name;
// 			this.surname = surname;
// 		}
// 	},

// 	getinfo: function() {
// 		alert("Полное имя : " + this.name + " " + this.surname);
// 	}
// });