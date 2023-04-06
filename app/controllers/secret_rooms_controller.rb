class SecretRoomsController < ApplicationController
  before_action :require_valid_password, only: :show
  before_action :check_password, only: :check

  def new
    @secret_room = SecretRoom.new
  end

  def create
    @secret_room = SecretRoom.create(secret_room_params)
    if @secret_room.save
      redirect_to root_path
    else
      render :new
    end
  end
  
  def show
    @secret_room = SecretRoom.find(params[:id])
  end

  def passrequest
    @secret_room =  SecretRoom.find(params[:secret_room_id])
  end

  def check
    session[:password_valid_for] ||= {}
    session[:password_valid_for][params[:secret_room_id]] = true
    redirect_to secret_room_path(params[:secret_room_id])
  end



  private
  def secret_room_params
    params.require(:secret_room).permit(:password)
  end

  def check_password
    password = params[:password]
    correct_password =  SecretRoom.find(params[:secret_room_id]).password # 実際のパスワードに置き換えてください
    unless password == correct_password
      flash[:alert] = 'パスワードが間違っています。'
      redirect_to secret_room_password_request_path(params[:secret_room_id])
    end
  end

  def require_valid_password
    unless session[:password_valid_for]&.[](params[:id]) # Using the safe navigation operator to prevent errors when session[:password_valid_for] is nil
      redirect_to secret_room_password_request_path(params[:id])
    end
  end

end
