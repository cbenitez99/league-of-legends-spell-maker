class UsersController < ApplicationController
    def create
        user = User.new(username: params[:username], password: params[:password])
        if user.save
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: {errors: user.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def show
        user = User.find_by_id(params[:id])
        if user 
            render json: user, status: :ok
        else 
            render json: {errors: ["User not found"]}, status: :not_found
        end
    end

    private 

    def user_params 
        params.require(:user).permit(:username, :password_digest)
    end

end

