class RostersController < ApplicationController
  def index
    @rosters = Roster.all
    @roster = Roster.new
  end
  def create
    
  end
end
