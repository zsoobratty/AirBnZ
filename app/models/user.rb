class User < ApplicationRecord
    has_secure_password

    has_many :spaces
    has_many :bookings
end
