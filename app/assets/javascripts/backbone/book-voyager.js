MyApp.App = Backbone.View.extend({

	initialize: function () {
		this.categoryApp = new MyApp.Views.CategoryAppView();
		this.bookContainer = new MyApp.Views.BookContainerView({baseBrowseNodeId : "465610"});
	}

});

new MyApp.App();