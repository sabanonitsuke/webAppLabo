class HallsController < ApplicationController
  def index
    @secret_rooms = SecretRoom.all
  end

  def timer
    @time = 15
  end
end
