MyApp.Models.Book = Backbone.Model.extend({
  defaults: function() {
    return {
      MediumImageURL: "http://www.yahoo.co.jp",
      DetailPageURL: "http://www.amazon.co.jp"
    };
  }
});