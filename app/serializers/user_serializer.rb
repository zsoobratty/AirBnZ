class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :username, :email

  has_many :spaces
  has_many :bookings
end
