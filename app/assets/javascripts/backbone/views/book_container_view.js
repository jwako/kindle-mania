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
        bookLi = new MyApp.Collections.BookList(json);
        bookLi.each(self.addOne, self);
        container.masonry('appended', bookLi, true);
        // container.append(json[0]["MediumImageURL"]);
        // var $newElems = $( newElements ).css({ opacity: 0 });
        // $newElems.imagesLoaded(function(){
        //   $newElems.animate({ opacity: 1 });
        //   container.masonry( 'appended', $newElems, true ); 
        // });
      }
    );
  },
    
  addOne: function(book) {
    this.$el.append("<div class='item'><a href='" + book.get("DetailPageURL") + "'><img src='" + book.get("MediumImageURL") + "'/></a></div>");
  }
        
});