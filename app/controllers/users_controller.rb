class UsersController < ApplicationController
    def create
        user = User.new(user_params)
        byebug
        if user.save
            byebug
            session[:user_id] = user.id
            byebug
            render json: user, status: :created
        else
            render json: {errors: user.errors.full_messages}, status: :unprocessable_entity
        end
    end

    # def show
    #     user = User.find_by_id(params[:id])
    #     if user 
    #         render json: user, status: :ok
    #     else 
    #         render json: {errors: ["User not found"]}, status: :not_found
    #     end
    # end

    private 

    def user_params 
        params.permit(:username, :password_digest, :user_id)
    end

end

