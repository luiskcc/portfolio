Rails.application.routes.draw do
  get 'projects/index'
  get 'projects/show'
  get 'pages/home'
  get 'pages/projects'
  get 'pages/experience'
  get 'pages/education'
  get 'pages/contact'
  root "pages#home"

  # Defines the root path route ("/")
  # root "posts#index"
end
