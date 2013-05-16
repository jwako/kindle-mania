MyApp.Views.BookContainerView = Backbone.View.extend({
       
  el: $('#container'),
  
  initialize: function(){
    this.bookAppView = new MyApp.Views.BookAppView();
    this.render();
  },
  
  render: function(){
    this.$el.append(this.bookAppView.render().el);
    this.$('#page-nav').append('<a href="/?bn=465610&amp;page=2"></a>');
  }
        
});