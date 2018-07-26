class Api::V1::LocationsController < ApplicationController

  def create
    @map = Map.find(params[:map_id])
    @location = @map.locations.new(location_params)
    if @location.save
      render json: {message: 'Location Saved'}, status: 200
    else
      render json: {errors: @location.errors.full_messages}, status: 400
    end
  end

  private
  def location_params
    params.require(:location).permit(:title, :description, :address, :lat, :long, :map_id)
  end
end
