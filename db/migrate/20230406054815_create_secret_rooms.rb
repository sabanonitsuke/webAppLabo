class CreateSecretRooms < ActiveRecord::Migration[6.0]
  def change
    create_table :secret_rooms do |t|
      t.string :password
      t.timestamps
    end
  end
end
