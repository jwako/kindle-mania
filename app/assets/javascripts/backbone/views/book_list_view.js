MyApp.Views.BookListView = Backbone.View.extend({
    
  baseBrowseNodeId: '465610',
  
  events: {
  },
  
  initialize: function(){
    this.bookList = new MyApp.Collections.BookList();
    this.listenTo(this.bookList, 'add', this.addOne);
    this.bookList.fetch({ data: $.param({ bn: this.options.baseBrowseNodeId}) });
  },
  
  render: function(){
    return this;
  },
  
  addOne: function(book) {
    this.$el.append("<div class='item'><a href='" + book.get("DetailPageURL") + "'><img src='" + book.get("MediumImageURL") + "'/></a></div>");
  }
      
});