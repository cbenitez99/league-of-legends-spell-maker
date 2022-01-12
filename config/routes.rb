Rails.application.routes.draw do
  resources :users do
    resources :abilities
  end
  resources :champions, only: [:index, :show] 
  resources :abilities, only: [:index, :show, :destroy, :create]
  patch '/abilities/:id', to: "abilities#update"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  # get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
