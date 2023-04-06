class HallsController < ApplicationController
  def index
    @secret_rooms = SecretRoom.all
  end
end
