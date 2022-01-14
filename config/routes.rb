Rails.application.routes.draw do
  resources :users, only: [:index, :show, :create, :destroy]
  resources :champions, only: [:index, :show] 
  resources :abilities, only: [:index, :show, :destroy, :create]
  patch '/abilities/:id', to: "abilities#update"
  post "/login", to: "sessions#create"
  # post "/champions/:id/abilities", to: "champions#new_ability"
  delete "/logout", to: "sessions#destroy"

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  # get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
