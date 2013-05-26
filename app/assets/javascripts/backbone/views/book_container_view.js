var Books = Backbone.Collection.extend({

  model: MyApp.Models.Book,

  url: "/public/books"
  
});

var BookView = Backbone.View.extend({
  
  tagName: "div",
  className: "item",

  initialize: function(){
		this.render(this.model);
  },
  
  render: function(book){
		this.$el.append("<a href='" + book.get("DetailPageURL") + "'><img src='" + book.get("MediumImageURL") + "'/></a>");
  }
      
});

MyApp.Views.BookContainerView = Backbone.View.extend({
  
  baseBrowseNodeId: '465610',
       
  el: $('#container'),
  
  initialize: function(){
    _.bindAll(this, 'render', 'addOne');
    this.bookList = new MyApp.Collections.BookList();
    this.listenTo(this.bookList, 'add', this.addOne);
    var self = this;
    this.bookList.fetch({ data: $.param({ bn: this.options.baseBrowseNodeId}) }).complete(function(){
      self.render();
    });
  },
  
  render: function(){
    this.$('#page-nav').append("<a href='/public/books.json?bn=" + this.options.baseBrowseNodeId + "&amp;page=2'></a>");
    var container = this.$el;
    var self = this;
    container.masonry({
      itemSelector : '.item',
      columnWidth : 150,
      isAnimated: true
    });
    container.infinitescroll({
      dataType: 'json',
      appendCallback: false,
      navSelector  : '#page-nav',
      nextSelector : '#page-nav a',
      itemSelector : '.item',
      loading: {
          finishedMsg: 'No more pages to load.',
          img: 'http://i.imgur.com/6RMhx.gif'
        }
      },
      function( json, opts ) {
				var page = opts.state.currPage + 1;
				self.$('#page-nav a').replaceWith("<a href='/public/books.json?bn=" + self.options.baseBrowseNodeId + "&amp;page=" + page + "'></a>");
        var $books = self.addBookList(json).children('div');
				container.append($books).masonry('appended', $books, true);
      }
    );
  },
    
  addOne: function(book) {
    this.$el.append("<div class='item'><a href='" + book.get("DetailPageURL") + "'><img src='" + book.get("MediumImageURL") + "'/></a></div>");
  },

	addBookList: function(json) {
		var books = new Books(json);
		var bookLi = $('<div></div>');
		books.each(function(book){
			var bookView = new BookView({ model: book});
			bookLi.append(bookView.el);
		});
		return bookLi;
  }

});