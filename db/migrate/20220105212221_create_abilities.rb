class CreateAbilities < ActiveRecord::Migration[6.1]
  def change
    create_table :abilities do |t|
      t.string :name
      t.string :description
      t.integer :user_id
      t.integer :champion_id

      t.timestamps
    end
  end
end
