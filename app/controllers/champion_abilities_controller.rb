class ChampionAbilitiesController < ApplicationController
   def create 
    champion_ability = ChampionAbility.new(champion_ability_params)
        if champion_ability.save
            render json: champion_ability.champion, include: :abilities, status: :created
        else
            render json: {errors: champion_ability.errors.full_messages}, status: :unprocessable_entity
        end
   end

   def show
    champion_ability = ChampionAbility.find_by(id: params[:id])
    render json: champion_ability, include: :ability
   end

   private 
   def champion_ability_params
    params.permit(:champion_id, :ability_id, :cooldown)
   end
end
