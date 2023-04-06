Rails.application.routes.draw do
  root to: 'halls#index'
  get 'gotten_url', to: 'halls#gotten_url'
end
