class AbilitiesController < ApplicationController
    def index
        abilities = Ability.all
        render json: abilities
    end

    def show
    end
end
