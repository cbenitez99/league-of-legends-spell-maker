class ChampionsController < ApplicationController

    def index
        if session[:user_id]
            champions = Champion.all
            if champions
                render json: champions, include: :abilities, except: [:created_at, :updated_at], status: :ok
            else
                render json: {error: "No champions here!"}, status: :not_found
            end
        else
            render json: {errors: "Must be logged in to view champions!"}, status: :unauthorized
        end
    end
    

    def show

        if session[:user_id]
            champion = Champion.find_by(id: params[:id])
            if champion
                render json: champion, include: :abilities, except: [:created_at, :updated_at], status: :ok
            else
                render json: {error: "Champion not found!"}, status: :not_found
            end
        else
            render json: {errors: "Must be logged in to view champions!"}, status: :unauthorized
        end
    end
    

end
