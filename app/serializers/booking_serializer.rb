class BookingSerializer
  include FastJsonapi::ObjectSerializer
  attributes :booking_date, :user_id, :space_id, :confirmed
  
end
