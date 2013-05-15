MyApp.Views.CategoryView = Backbone.View.extend({
  
  tagName: "li",

  events: {
    "click a.ctgr" : 'toggleCategoryList'
  },
  
  initialize: function() {
    this.listenTo(this.model, 'change', this.render);
    this.listenTo(this.model, 'destroy', this.remove);
  },

  render: function() {
    this.$el.html(this.addCategory(this.model));
    this.$el.attr("id", "bn_" + this.model.get('BrowseNodeId'));
    return this;
  },

  toggleCategoryList: function(){
    if (!this.categoryListView) {
      this.categoryListView = new MyApp.Views.CategoryListView({ baseBrowseNodeId: this.model.get('BrowseNodeId') });
    }
    if (this.categoryListView.$el.attr("style") == "display:block;") {
      this.categoryListView.clear();
    } else {
      this.$el.append(this.categoryListView.render().el);
    }
    return false;
  },
  
  addCategory: function(category){
    return "<a class='ctgr'>" + category.get('Name') + "</a>";
  }
  
});