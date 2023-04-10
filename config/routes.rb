Rails.application.routes.draw do
  root to: 'halls#index'
  get 'gotten_url', to: 'halls#gotten_url'
  resources :secret_rooms, only: [:new, :create, :show] do
    get 'password/request', to: 'secret_rooms#passrequest'
    post 'password/check', to: 'secret_rooms#check'
  end
  resources :sounds, only: :index
  get 'timer', to: 'halls#timer'
  resources :rosters, only: [:index, :create]
end
