class RostersController < ApplicationController
  def index
    @rosters = Roster.all
    @roster = Roster.new
  end
  def create
    name = Roster.create(name: params[:name])
    render json:{ name: name }
  end
end
