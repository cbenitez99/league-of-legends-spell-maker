Rails.application.routes.draw do
  resources :users
  resources :champions, only: [:index, :show]
  resources :abilities, only: [:index, :destroy, :create]
  patch '/abilities/:id', to: "abilities#update"

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  # get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
