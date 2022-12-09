class StaticPagesController < ApplicationController
  before_action :user_is_authenticated, except: [:login]

  def home
    render 'home'
  end

  def login
    render 'login'
  end

  def user
    render 'user'
  end
end
