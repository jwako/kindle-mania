KindleMania::Application.routes.draw do

  root :to => 'public#index'
  
  resources :public, :controller => :public, :only => :index do
    get 'categories', :on => :collection
  end
  
end
