Ext.onReady(function() {

		Ext.create('Ext.container.Viewport', {
			layout: 'fit',
			items: [
				{
					title: 'Приложение на Ext JS 4',
					html : '<h3>Добро пожаловать в мир Ext JS 4!</h3>'
				},
				// {
				// 	xtype: 'personpanel'
				// }
			]
		});


		// var jon = Ext.create('Classes.Manager');
		// jon.getinfo();
		// jon.go(10);
		// jon.go(0);

		var tom = Ext.create('Classes.Manager', 'Tom', 'James', 'Software');
		//tom.getinfo();
		
		var eugene = Ext.create('person');
		//eugene.getinfo();
		// eugene.setName('Tom');
		// eugene.surname='Johns';
		// eugene.getinfo();
		// var eugene = Ext.create('Classes.Person', 'testName', 'testSurname');
		// var eugene1 = new Classes.Person('testName', 'testSurname');
		// eugene1.getinfo();


		// var pre = Ext.Class.getDefaultPreprocessors(); // получаем предобработчики
		// var post = Ext.ClassManager.defaultPostprocessors; // постобработчики
		// console.log('Ext.Class.getDefaultPreprocessors', pre);
		// console.log('Ext.ClassManager.defaultPostprocessors',post);


		// var james = Classes.Person.factory('James', 'Gosling');
		// alert(Classes.Person.instanceCount);
		// james.getinfo();
});


Ext.define('Person.Panel', {
	alias: 'widget.personpanel',
	extend: 'Ext.panel.Panel',
	title: 'Персональна панель',
	html: 'Новая панель'
});