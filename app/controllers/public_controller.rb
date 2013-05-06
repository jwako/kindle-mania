class PublicController < ApplicationController
  def index
    # res = Amazon::Ecs.browse_node_lookup(ROOT_BROWSE_NODE_ID, :response_group => 'TopSellers', :country => 'jp')
    # @res = (res.doc/"TopItem").collect { |item| Amazon::Element.new(item).get_hash }
    # puts @res
    @browse_node_id = params[:bn].blank? ? ROOT_BROWSE_NODE_ID : params[:bn]
    res = Amazon::Ecs.browse_node_lookup(@browse_node_id, :response_group => 'BrowseNodeInfo', :country => 'jp')
    @categories = (res.doc/"BrowseNode").collect { |item| Amazon::Element.new(item).get_hash }
    
    res = Amazon::Ecs.item_search(
      @browse_node_id, 
      { :type => 'BrowseNode', :country => 'jp', :response_group => 'Large' })
    @items = res.items
  end
end
