class ChampionsController < ApplicationController
    def index
        champions = Champion.all
        render json: champions, except: [:created_at, :updated_at], status: :ok
    end

    def show
        champion = Champion.find_by(id: params[:id])
        if champion
            render json: champion, include: :abilities, except: [:created_at, :updated_at], status: :ok
        else
            render json: {errors: "Champion not found!"}, status: :unprocessable_entity
        end
    end

end
