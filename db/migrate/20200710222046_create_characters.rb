class CreateCharacters < ActiveRecord::Migration[6.0]
  def change
    create_table :characters do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.string :name
      t.string :race
      t.string :class
      t.integer :level
      t.integer :xp
      t.string :alignment

      t.timestamps
    end
  end
end
