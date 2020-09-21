class CreateSpaces < ActiveRecord::Migration[6.0]
  def change
    create_table :spaces do |t|
      t.string :name
      t.string :description
      t.integer :price
      t.string :img_url
      t.date :available_from
      t.date :available_to
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
