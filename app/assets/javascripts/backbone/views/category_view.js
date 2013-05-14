MyApp.Views.CategoryView = Backbone.View.extend({
  
  el: $('#categoryapp'),

  events: {
    "click a.ctgr" : 'addCategory'
  },
  
  initialize: function(){
    _.bindAll(this, 'render', 'addCategory', 'appendItem'); 

    this.collection = new MyApp.Collections.CategoryList();
    this.collection.bind('add', this.appendItem);
		this.collection.fetch();
    this.render();
  },

  render: function(){
    var self = this;
    _(this.collection.models).each(function(item){ 
      self.appendItem(item);
    }, this);
  },

  addCategory: function(){
    var category = new MyApp.Models.Category();
    this.collection.add(category);
  },
  
  appendItem: function(item){
    $('ul#categories', this.el).append("<li>" + "<a class='ctgr'>" + item.get('Name') + "</a>" + "</li>");
  }
  
});