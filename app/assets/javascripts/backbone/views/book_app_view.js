MyApp.Views.BookAppView = Backbone.View.extend({
  
  baseBrowseNodeId: '465610',
       
  el: $('#bookapp'),
  
  initialize: function(){
    this.bookListView = new MyApp.Views.BookListView({baseBrowseNodeId : this.options.baseBrowseNodeId});
    this.render();
  },
  
  render: function(){
    this.$el.append(this.bookListView.render().el);
    return this;
  }
  
});

