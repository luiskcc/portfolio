class CreateEducations < ActiveRecord::Migration[7.1]
  def change
    create_table :educations do |t|
      t.string :degree
      t.string :school
      t.string :period
      t.text :description
      t.integer :position

      t.timestamps
    end
  end
end
