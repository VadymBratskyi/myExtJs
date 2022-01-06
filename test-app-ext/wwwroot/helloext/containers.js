Ext.onReady(function() {


	Ext.create('Ext.Panel', {
		title: 'Компоновка Anchor',
		width: 300,
		height: 200,
		layout:'anchor',
		items: [
			 {
				  xtype: 'panel',
				  title: 'Л. Толстой',
				  html: 'Произведения Л. Толстого: "Война и мир", "Воскресение", "Крейцерова соната"',
				  anchor: '60% 85%'
			 }],
		renderTo: Ext.getBody()
  });

	// var panel= Ext.create('Ext.Panel', {
	// 	title: 'Слайды писателей',
	// 	width: 400,
	// 	height: 200,
	// 	layout:'card',
	// 	items: [
	// 		 {
	// 			  xtype: 'panel',
	// 			  title: 'Л. Толстой',
	// 			  html: 'Произведения Л. Толстого: "Война и мир", "Воскресение", "Крейцерова соната"'
	// 		 },
	// 		 {
	// 			  xtype: 'panel',
	// 			  title: 'Ф. Достоевский',
	// 			  html: 'Произведения Ф. Достоевского: "Преступление и наказание", "Братья Карамазовы", "Идиот"'
	// 		 },
	// 		 {
	// 			  xtype: 'panel',
	// 			  title: 'И. Тургенев',
	// 			  html: 'Произведения И. Тургенева: "Отцы и дети", "Рудин", "Вешние воды"'
	// 		 }],
	// 		 bbar: ['->', {
	// 			  xtype: 'button',
	// 			  text: 'Предыдущее',
	// 			  handler: function(but){
	// 					var layout=panel.getLayout();
	// 					if(layout.getPrev()){
	// 						 layout.prev();
	// 					}
	// 			  }
	// 		 }, {
	// 			  xtype: 'button',
	// 			  text: 'Далее',
	// 			  handler: function(but){
	// 					var layout=panel.getLayout();
	// 					if(layout.getNext()){
	// 						 layout.next();
	// 					}
	// 			  }
	// 		 }],
	// 	renderTo: Ext.getBody()
  	// });

// 	Ext.create('Ext.Panel', {
// 		width: 500,
// 		height: 360,
// 		padding: 10,
// 		layout:'border',
// 		items: [{
// 				  xtype: 'panel',
// 				  title: 'Центральная панель',
// 				  html: 'Центральная панель',
// 				  region: 'center',
// 				  margin: '5 5 5 5'
// 			 },{
// 				  xtype: 'panel',
// 				  title: 'Верхняя панель',
// 				  html: 'Верхняя панель',
// 				  region: 'north',
// 				  height: 80,
// 				  collapsible: true,
// 				  titleCollapse: false
// 			 },{
// 				  xtype: 'panel',
// 				  title: 'Нижняя панель',
// 				  html: 'Нижняя панель',
// 				  region: 'south',
// 				  height: 80
// 			 },{
// 				  xtype: 'panel',
// 				  title: 'Левая панель',
// 				  html: 'Левая панель',
// 				  region: 'west',
// 				  width: 100,
// 				  collapsed: true,
// 				  collapsible: true,
// 				  titleCollapse: true
// 			 },{
// 				  xtype: 'panel',
// 				  title: 'Правая панель',
// 				  html: 'Правая панель',
// 				  region: 'east',
// 				  width: 120,
// 				  split: true
// 			 }] ,
// 		renderTo: Ext.getBody()
//   });
	
	// Ext.create('Ext.panel.Panel', {
	// 	renderTo: Ext.getBody(),
	// 	width: 500,
	// 	height: 200,
	// 	padding: 10,
	// 	title: 'tables',
	// 	layout: 'accordion',
	// 	items: [
	// 		{
	// 			 xtype: 'panel',
	// 			 title: 'Л. Толстой',
	// 			 html: 'Произведения Л. Толстого: ....'
	// 		},
	// 		{
	// 			 xtype: 'panel',
	// 			 title: 'Ф. Достоевский',
	// 			 html: 'Произведения Ф. Достоевского: ...'
	// 		},
	// 		{
	// 			 xtype: 'panel',
	// 			 title: 'И. Тургенев',
	// 			 html: 'Произведения И. Тургенева: ...'
	// 		}],
	//   renderTo: Ext.getBody()
	// });

	// Ext.create('Ext.panel.Panel', {
	// 	renderTo: Ext.getBody(),
	// 	width: 500,
	// 	height: 100,
	// 	padding: 10,
	// 	title: 'tables',
	// 	layout: 'column',
	// 	items: [
	// 		{
	// 			 xtype: 'panel',
	// 			 title: 'Первый столбец',
	// 			 html: 'Поле 1',
	// 			 width: 200
	// 		},
	// 		{
	// 			 xtype: 'panel',
	// 			 title: 'Второй столбец',
	// 			 html: 'Поле 2',
	// 			 columnWidth:.4
	// 		},
	// 		{
	// 			 xtype: 'panel',
	// 			 title: 'Третий столбец',
	// 			 html: 'Поле 3',
	// 			 columnWidth:.6
	// 		}],
	//   	renderTo: Ext.getBody()
	// });

	// Ext.create('Ext.panel.Panel', {
	// 	renderTo: Ext.getBody(),
	// 	width: 400,
	// 	height: 200,
	// 	padding: 10,
	// 	title: 'Приложение Ext JS 4',
	// 	layout: {
	// 		type: 'hbox',
	// 		align: 'stretch' // 'middle', 'stretchmax', 'top', 'stretch'
	//   	},
	// 	items: [{
	// 		xtype: 'panel',
	// 		title: 'Первая панель',
	// 		width:120
	//   },{
	// 		xtype: 'panel',
	// 		title: 'Вторая панель',
	// 		// width:140
	// 		flex: 1
	//   },{
	// 		xtype: 'panel',
	// 		title: 'Третья панель',
	// 		// width:120
	// 		flex: 2
	//   }]
	// });

	// Ext.create('Ext.panel.Panel', {
	// 	renderTo: Ext.getBody(),
	// 	width: 300,
	// 	height: 330,
	// 	padding: 10,
	// 	title: 'main container',
	// 	layout: {
	// 		type: 'vbox',
	// 		align: 'stretch' // 'center', 'stretchmax', 'left', 'stretch'
	//   	},
	// 	  items: [{
	// 		xtype: 'panel',
	// 		title: 'Первая панель',
	// 		height:100
	//   },{
	// 		xtype: 'panel',
	// 		title: 'Вторая панель',
	// 		// height:80
	// 		flex: 1
	//   },{
	// 		xtype: 'panel',
	// 		title: 'Третья панель',
	// 		// height:100
	// 		flex: 2
	//   }]
	// });

		// Ext.create('Ext.panel.Panel', {
		// 	renderTo: Ext.getBody(),
		// 	width: 300,
		// 	height: 230,
		// 	padding: 10,
		// 	title: 'main container',
		// 	layout: 'fit',
		// 	items: {
		// 		title: 'Внутренняя панель',
		// 		html: 'Внутренняя панель при Fit Layout',
		// 		padding: 2,
		// 		border: true
      //    }
		// });

		// Ext.create('Ext.panel.Panel', {
		// 	renderTo: Ext.getBody(),
		// 	width: 300,
		// 	height: 230,
		// 	padding: 10,
		// 	title: 'main container',
		// 	items: [
		// 		{
		// 			xtype: 'panel',
		// 			title: 'Внутренняя панель 1',
		// 			height: 100,
		// 			width: '100%'
		// 	  },
		// 	  {
		// 			xtype: 'panel',
		// 			title: 'Внутренняя панель 2',
		// 			height: 100,
		// 			width: '100%'
		// 	  }
		// 	]
		// });


});
