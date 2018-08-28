Rails.application.routes.draw do
  root :to => 'project#index'
  get '/product/:id' => 'project#product', :as => 'products'
  # 個人創作
  get 'project/productV1'
  get 'project/productV2'
  get 'project/productV3'
  get 'project/productV4'
  get 'project/productV5'
  get 'project/productV6'
  get 'project/productV7'
  get 'project/productV8'


  # 商業紀實
  get 'project/weddingV1'
  get 'project/weddingV2'
  get 'project/weddingV3'
  get 'project/businessV1'
  get 'project/businessV2'
  get 'project/businessV3'
  get 'project/businessV4'


  # 演唱會紀實
  get 'project/liveV1'



  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
