MyApp.Views.CategoryListView = Backbone.View.extend({
    
  el: $('#categoryapp'),
  
  events: {
  },
  
  initialize: function(){
    CategoryList = new MyApp.Collections.CategoryList();
    this.listenTo(CategoryList, 'add', this.addOne);
    CategoryList.fetch();
  },
  
  render: function(){
  },
  
  addOne: function(category) {
    var view = new MyApp.Views.CategoryView({model: category});
    this.$("#categories").append(view.render().el);
  }
      
});