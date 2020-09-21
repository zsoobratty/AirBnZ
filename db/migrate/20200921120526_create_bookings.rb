class CreateBookings < ActiveRecord::Migration[6.0]
  def change
    create_table :bookings do |t|
      t.date :booking_date
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :space, null: false, foreign_key: true

      t.timestamps
    end
  end
end
