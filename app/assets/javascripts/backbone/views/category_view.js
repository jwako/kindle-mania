MyApp.Views.CategoryView = Backbone.View.extend({
  
  el: $('#categoryapp'),

  events: {
    'click button#add': 'addItem'
  },

  initialize: function(){
    _.bindAll(this, 'render', 'addItem', 'appendItem'); 

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

  addItem: function(){
		this.collection.fetch();
  },

  appendItem: function(item){
    $('ul#categories', this.el).append("<li>" + "<a href='/?bn=" + item.get('BrowseNodeId') + "'>" + item.get('Name') + "</a>" + "</li>");
  }

});