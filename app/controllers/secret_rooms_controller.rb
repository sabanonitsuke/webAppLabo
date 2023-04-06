class SecretRoomsController < ApplicationController
  def new
    @secret_room = SecretRoom.new
  end
end
