class SessionsController < ApplicationController

    def create
        user = User.find_by_username(params[:username])
        if user && user.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user, status: :created
        else 
            render json: {errors: ["Invalid username or password"]}, status: :unprocessible_entity
        end
    end

    def destroy
        session.clear
        render json: {"logged out": true}, status: :ok
    end

end