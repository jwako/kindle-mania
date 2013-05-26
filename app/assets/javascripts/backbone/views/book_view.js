MyApp.Views.BookView = Backbone.View.extend({
  
  tagName: "div",
  className: "item",
  
  initialize: function(){
  		this.render(this.model);
  },
  
  render: function(book){
  		this.$el.append("<a href='" + book.get("DetailPageURL") + "'><img src='" + book.get("MediumImageURL") + "'/></a>");
  }
      
});