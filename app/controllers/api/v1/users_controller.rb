module Api
    module V1
        class UsersController < ApplicationController
            def create
                input = User.new(users_params)

                if(input.save)
                    render json: UserSerializer.new(input).serialized_json
                else
                    :bad_request
                end
            end

            private 
            
            def users_params
                params.permit(:name, :username, :email, :password)
            end

        end
    end
end
