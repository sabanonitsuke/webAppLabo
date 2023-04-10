class HallsController < ApplicationController
  def index
    @secret_rooms = SecretRoom.all
  end

  def timer
    @time = 5
  end
end
