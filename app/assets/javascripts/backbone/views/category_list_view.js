MyApp.Views.CategoryListView = Backbone.View.extend({
  
  baseBrowseNodeId: '465610',
     
  tagName: "ul",
  
  events: {
  },
  
  initialize: function(){
    this.categoryList = new MyApp.Collections.CategoryList();
    this.listenTo(this.categoryList, 'add', this.addOne);
    this.categoryList.fetch({ data: $.param({ bn: this.options.baseBrowseNodeId}) });
  },
  
  render: function(){
    this.$el.attr("style", "display:block;");
    // this.$el.removeAttr("style");
    // this.$el.attr("id", "bn_" + this.options.baseBrowseNodeId);
    return this;
  },
  
  addOne: function(category) {
    var view = new MyApp.Views.CategoryView({model: category});
    this.$el.append(view.render().el);
  },
  
  clear: function() {
    // this.remove();
    this.$el.attr("style", "display:none;");
  }
      
});