class CreateChampions < ActiveRecord::Migration[6.1]
  def change
    create_table :champions do |t|
      t.string :name
      t.string :bio
      t.string :image

      t.timestamps
    end
  end
end
