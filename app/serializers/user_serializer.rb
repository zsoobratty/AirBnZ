class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :email

  has_many :spaces
  has_many :bookings
end
