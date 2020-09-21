class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :email, :password

  has_many :spaces
  has_many :bookings
end
