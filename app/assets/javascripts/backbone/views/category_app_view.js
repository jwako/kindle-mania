MyApp.Views.CategoryAppView = Backbone.View.extend({
       
  el: $('#categoryapp'),
  
  initialize: function(){
    this.categoryListView = new MyApp.Views.CategoryListView({baseBrowseNodeId : "465610"});
    this.render();
  },
  
  render: function(){
    this.$el.append(this.categoryListView.render().el);
  }
        
});
