class SessionsController < ApplicationController

    def create
        @user = User.find_by_username(params[:username])

        if @user && @user.authenticate(params[:password])
            session[:user_id] = @user.id
            render json: @user, status: :created
        else
            render json: {errors: @user.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def destroy 
        session.clear
        render json: {"loggedOut": true}
    end

end