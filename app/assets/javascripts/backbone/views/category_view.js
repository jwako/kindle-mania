MyApp.Views.CategoryView = Backbone.View.extend({
  
  tagName: "li",

  events: {
    "click a.ctgr" : 'addCategory'
  },
  
  initialize: function() {
    this.listenTo(this.model, 'change', this.render);
    this.listenTo(this.model, 'destroy', this.remove);
  },

  render: function() {
    this.$el.html(this.appendItem(this.model));
    return this;
  },

  addCategory: function(){    
    // var category = new MyApp.Models.Category();
    // this.collection.add(category);
  },
  
  appendItem: function(item){
    return "<a class='ctgr' id='item_" + item.get('BrowseNodeId') + "'>" + item.get('Name') + "</a>";
  }
  
});