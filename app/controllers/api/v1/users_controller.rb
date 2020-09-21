module Api
    module V1
        class UsersController < ApplicationController
            def create
                input = User.new(params.permit(:username, :email, :password))

                if(input.save)
                    :ok
                else
                    :bad_request
                end
            end
        end
    end
end
