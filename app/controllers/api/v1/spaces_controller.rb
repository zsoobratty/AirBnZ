module Api
    module V1
        class SpacesController < ApplicationController
            protect_from_forgery with: :null_session
            
            def index
                spaces = Space.all

                render json: SpaceSerializer.new(spaces).serialized_json
            end

            def show
                spaces = Space.find_by(id: params[:id])

                render json: SpaceSerializer.new(spaces).serialized_json
            end

            def create
                space = Space.new(spaces_params)

                if space.save
                    render json: SpaceSerializer.new(space).serialized_json
                else
                    render json: {error: space.errors.messages }, status: 422
                end
            end

            def update
                space = Space.find_by(id: params[:id])

                if space.update(spaces_params)
                    render json: SpaceSerializer.new(space).serialized_json
                else
                    render json: {error: space.errors.messages }, status: 422
                end
            end

            def destroy
                space = Space.find_by(id: params[:id])

                if airline.destroy
                    head :no_content
                else 
                    render json: { error: airline.errors.messages }, status: 422
                end
            end


            private
            
            def spaces_params
                params.require(:space).permit(:name, :description, :price, :image_url, :available_from, :available_to)
            end
        end
    end
end
