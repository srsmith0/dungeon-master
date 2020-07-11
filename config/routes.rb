Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  namespace :api do
  get 'armor', to: 'characters#armor'
  get 'weapons', to: 'characters#weapons'
  get 'inventory', to: 'characters#inventory'
  get 'skills', to: 'characters#skills'
  end
end
