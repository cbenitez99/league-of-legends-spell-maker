class ChampionsController < ApplicationController
    def index
        champions = Champion.all
        if champions
            render json: champions, include: :abilities, except: [:created_at, :updated_at], status: :ok
        else
            render json: {error: "No champions here!"}, status: :not_found
        end
    end

    def show
        champion = Champion.find_by(id: params[:id])
        if champion
            render json: champion, include: :abilities, except: [:created_at, :updated_at], status: :ok
        else
            render json: {error: "Champion not found!"}, status: :not_found
        end
    end

end
