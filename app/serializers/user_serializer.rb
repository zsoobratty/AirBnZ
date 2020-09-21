class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :email

  has_many :spaces
  has_many :bookings
end
