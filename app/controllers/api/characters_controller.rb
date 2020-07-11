class Api::CharactersController < ApplicationController


  def index
    render json: current_user.characters.all 
  end

  def show
    character = current_user.characters.find(params[:character_id])
  end

  def create 
  end

  def update
  end

  def destroy
  end

  def inventory
    render json: Character.set_inventory(params[:character_id])
  end

  def armor
    render json: Character.set_armor(params[:character_id])
  end

  def weapons
    render json: Character.set_weapons(params[:character_id])
  end

  def skills
    render json: Character.set_skills(params[:character_id])
  end

end
