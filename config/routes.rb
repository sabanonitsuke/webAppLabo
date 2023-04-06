Rails.application.routes.draw do
  root to: 'halls#index'
  get 'url_gotten', to: 'halls#url_gotten'
end
