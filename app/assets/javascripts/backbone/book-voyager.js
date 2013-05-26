MyApp.App = Backbone.View.extend({

	initialize: function () {
		this.categoryApp = new MyApp.Views.CategoryAppView();
	}

});

new MyApp.App();