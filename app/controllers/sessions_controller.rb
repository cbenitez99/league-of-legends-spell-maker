class SessionsController < ApplicationController
#login session

#/login
    def create
        user = User.find_by_username(params[:username])
        # byebug 
        #show 'user'
        if user && user.authenticate(params[:password_digest])
            session[:user_id] = user.id
            #bybug
            render json: user, status: :created
        else
            render json: {errors: user.errors.full_messages}, status: :unprocessable_entity
        end
    end
#/logout
    def destroy 
        session.clear
        render json: {"loggedOut": true}
    end

end