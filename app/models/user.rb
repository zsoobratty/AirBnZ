class User < ApplicationRecord
    has_many :spaces
    has_many :bookings
end
