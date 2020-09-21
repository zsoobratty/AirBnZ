Rails.application.routes.draw do
  devise_for :users
  root 'pages#index'

  namespace :api do
    namespace :v1 do
      resources :users
      resources :spaces
      resources :bookings
    end
  end

  get '*path', to: 'pages#index', via: :all
end
