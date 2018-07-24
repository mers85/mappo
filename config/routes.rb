Rails.application.routes.draw do
  get 'landing/index'
  namespace :api, defaults: { format: "json" } do
      namespace :v1 do
        resources :maps
      end
  end

  root to: 'landing#index'
end
