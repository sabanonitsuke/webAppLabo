class CreateRosters < ActiveRecord::Migration[6.0]
  def change
    create_table :rosters do |t|

      t.timestamps
    end
  end
end
