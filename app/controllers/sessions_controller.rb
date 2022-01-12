class SessionsController < ApplicationController

    def create
        user = User.find_by_username(params[:username])
        if user 
            session[:user_id] = user.id
            render json: user, status: :created
        else 
            render json: {errors: ["Invalid username or password"]}, status: :unprocessable_entity
        end
    end

    def destroy
        session.delete
        head :no_content
    end

end