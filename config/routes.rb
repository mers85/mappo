Rails.application.routes.draw do

  namespace :api, defaults: { format: "json" } do
      namespace :v1 do
        resources :maps
      end
  end

  root to: "application#index"
  match "*path", to: "application#index", format: false, via: :get
end
