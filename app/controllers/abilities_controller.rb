class AbilitiesController < ApplicationController

    def index
        abilities = Ability.all
        if abilities
            render json: abilities, include: :champion, status: :ok
        else
            render json: {error: "No abilities here!"}, status: :not_found
        end
    end

    def show
        ability = find_ability
        if ability
            render json: ability, status: :ok
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

    def destroy 
        ability = find_ability
        if ability
            ability.destroy
            head :no_content
        else
            render json: {error: "Ability not found"}, status: :not_found
        end
    end

    def create
        ability = Ability.new(ability_params)
        # byebug
        if ability.save
            render json: ability, status: :created
        else
            render json: {errors: "Ability not saved"}, status: :unprocessable_entity
        end
    end

    private 

    def ability_params
        params.require(:ability).permit(:name, :description)
    end

    def find_ability
        Ability.find_by(id: params[:id])
    end

end

