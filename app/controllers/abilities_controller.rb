class AbilitiesController < ApplicationController
    def index
        abilities = Ability.all
        render json: abilities, status: :ok
    end

    def show
        ability = find_ability
        if ability
            render json: ability
        else
            render json: {error: "Ability not found"}, status: :not_found
        end
    end

    def update
        ability = find_ability
        if ability.update(ability_params)
            render json: ability, status: :ok
        else
            render json: {errors: ability.errors.full_messages}, status: :unprocessable_entity
        end
    end

    private 

    def ability_params
        params.permit(:description)
    end

    def find_ability
        Ability.find_by(id: params[:id])
    end
end
