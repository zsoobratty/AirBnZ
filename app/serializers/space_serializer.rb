class SpaceSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :description, :price, :img_url, :available_from, :available_to, :user_id
end
