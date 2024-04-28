class UsersController < ApplicationController
    def create
        user = User.new(user_params)
        if user.save
            render json: { status: 'success', message: 'User registered successfully', data: user }, status: :created
        else
            render json: { status: 'error', message: 'User registration failed', errors: user.errors.full_messages }, status: :unprocessable_entity
        end
    end
    
    private
    
    def user_params
        params.require(:user).permit(:username, :email, :password)
    end
end