MyApp.Collections.BookList = Backbone.Collection.extend({

  model: MyApp.Models.Book,

  url: "/public/books"
  
});