class Api::V1::MapsController < ApplicationController
  def index
    @maps = Map.all
  end

  def show
    @map = Map.find(params[:id])
  end

  def new
    @map = Map.new
    render :show, status:200
  end

  def create
    @map = Map.new(map_params)
    if @map.save
      render json: {message: 'Map Saved'}, status: 200
    else
      render json: {errors: @map.errors.full_messages}, status: 400
    end
  end

  def update
    @map = Map.find(params[:id])
    if @map.update(map_params)
      render :show, status: 200
    else
      render json: { errors: @map.errors.full_messages}, status: 400
    end
  end

  def destroy
    @map = Map.find(params[:id])
    if @map.destroy
      render json: {message: 'Map Deleted'}, status: 200
    else
      render json: {errors: @map.errors.full_messages}, status: 400
    end
  end

  private

  def map_params
    params.require(:map).permit(:name, :description)
  end

end
