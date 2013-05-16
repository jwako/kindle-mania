class PublicController < ApplicationController
  
  def index
    @page = params[:page].blank? ? 1 : params[:page].to_i    
    @browse_node_id = params[:bn].blank? ? ROOT_BROWSE_NODE_ID : params[:bn]
    res = Amazon::Ecs.item_search(
      @browse_node_id, 
      { :type => 'BrowseNode', 
        :country => 'jp', 
        :response_group => 'Medium',
        # :sort => 'daterank',
        :item_page => @page })
    @items = res.items
  end
  
  # GET /public/categories.json?bn=1111111
  def categories
    @browse_node_id = params[:bn].blank? ? ROOT_BROWSE_NODE_ID : params[:bn]
    res = Amazon::Ecs.browse_node_lookup(@browse_node_id, :response_group => 'BrowseNodeInfo', :country => 'jp')
    @categories = (res.doc/"Children/BrowseNode").collect { |item| Amazon::Element.new(item).get_hash }
    render :json => @categories.to_json
  end
  
end
