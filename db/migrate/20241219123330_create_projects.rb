class CreateProjects < ActiveRecord::Migration[7.1]
  def change
    create_table :projects do |t|
      t.string :title, null: false
      t.text :description
      t.string :technologies, array: true, default: []  # Make sure this line has array: true
      t.string :live_url
      t.string :github_url
      t.string :image_url

      t.timestamps
    end
  end
end