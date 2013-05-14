MyApp.Collections.CategoryList = Backbone.Collection.extend({

  model: MyApp.Models.Category,

  url: "/public/categories"
  
});