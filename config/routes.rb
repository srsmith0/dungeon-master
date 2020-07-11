Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  namespace :api do
  get 'armor/:character_id', to: 'characters#armor'
  get 'weapons/:character_id', to: 'characters#weapons'
  get 'inventory/:character_id', to: 'characters#inventory'
  get 'skills/:character_id', to: 'characters#skills'

  resources :users, only: [] do
    resources :characters
  end
  end
end
