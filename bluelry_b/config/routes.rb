Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.

  # Defines the root path route ("/")
  # root "posts#index"

  get '/api', to: 'api#index'

  post '/api/register', to: 'users#create'

  

  namespace :api do
    namespace :v1 do
      resources :products, only: [:index] 
    end
  end
end
