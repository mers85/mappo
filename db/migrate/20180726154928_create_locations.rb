class CreateLocations < ActiveRecord::Migration[5.2]
  def change
    create_table :locations do |t|
      t.string :title
      t.text :address
      t.text :description
      t.float :lat
      t.float :long
      t.integer :map_id

      t.timestamps
    end
  end
end
