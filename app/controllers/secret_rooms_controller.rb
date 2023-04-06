class SecretRoomsController < ApplicationController
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

  private
  def secret_room_params
    params.require(:secret_room).permit(:password)
  end
end
