class Api::PokemonController < ApplicationController
  def index
    @pokemon = Pokemon.all
    render :index
  end

  def show
    @pokemon = Pokemon.find_by(id: params[:id])
    render :show
  end

  # private
  # def pokemon_params
  #   params.require().permit()
  # end
end
