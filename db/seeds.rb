# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Faker::Games::DnD.race #=> "Dwarf"
# Faker::Games::DnD.klass #=> "Warlock"
# Faker::Games::DnD.background #=> "Urchin"
# Faker::Games::DnD.alignment #=> "Lawful Neutral"
# Faker::Games::ElderScrolls.name #=> Babette Brill


# weapons = ["greatsword", "sword", "dagger", "longbow", "shortbow", "warhammer", "staff"]
# armor = ["leather", "hide", "chainmail"]
race = ["Dwarf", "Human", "Halfling", "High Elf", "Wood Elf", "Half Orc",]

3.times do |x|
  User.create(
    email: "#{x}@test.com",
    password: "123456",
  )
end

10.times do
  c = Character.create(
    name: Faker::Games::ElderScrolls.name,
    race: race.sample,
    character_class: Faker::Games::DnD.klass,
    level: rand(1..7),
    xp: rand(3..500),
    alignment: Faker::Games::DnD.alignment,
    user_id: rand(1..3)
  )
  Skill.create(
    strength: rand(8..16),
    dexterity: rand(8..16),
    constitution: rand(8..16),
    intelligence: rand(8..16),
    wisdom: rand(8..16),
    charisma: rand(8..16),
    speed: rand(8..16),
    character_id: c.id,
  )
  Equipment.create(
      name: Faker::Games::Pokemon.name,
      description: Faker::GreekPhilosophers.quote,
      armor_class: rand(1..12),
      damage: "4d8",
      range: rand(20..100),
      armor: Faker::Boolean.boolean,
      weapon: Faker::Boolean.boolean,
      character_id: c.id,
  )
  end

  30.times do
  Inventory.create(
    name: Faker::Games::Zelda.item,
    description: Faker::TvShows::RickAndMorty.quote,
    character_id: rand(1..10),
  )
  end 

  puts "seeded!"
  

# create_table "equipment", force: :cascade do |t|
#   t.bigint "character_id", null: false
#   t.string "name"
#   t.string "description"
#   t.integer "armor_class"
#   t.string "damage"
#   t.integer "range"
#   t.boolean "armor"
#   t.boolean "weapon"
#   t.datetime "created_at", precision: 6, null: false
#   t.datetime "updated_at", precision: 6, null: false
#   t.index ["character_id"], name: "index_equipment_on_character_id"
# end

# create_table "attributes", force: :cascade do |t|
#   t.bigint "character_id", null: false
#   t.integer "stength"
#   t.integer "dexterity"
#   t.integer "constitution"
#   t.integer "intelligence"
#   t.integer "wisdom"
#   t.integer "charisma"
#   t.integer "speed"
#   t.datetime "created_at", precision: 6, null: false
#   t.datetime "updated_at", precision: 6, null: false
#   t.index ["character_id"], name: "index_attributes_on_character_id"
# end

# create_table "characters", force: :cascade do |t|
#   t.bigint "user_id", null: false
#   t.string "name"
#   t.string "race"
#   t.string "class"
#   t.integer "level"
#   t.integer "xp"
#   t.string "alignment"
#   t.datetime "created_at", precision: 6, null: false
#   t.datetime "updated_at", precision: 6, null: false
#   t.index ["user_id"], name: "index_characters_on_user_id"
# end


# create_table "inventories", force: :cascade do |t|
#   t.bigint "character_id", null: false
#   t.string "name"
#   t.string "description"
#   t.datetime "created_at", precision: 6, null: false
#   t.datetime "updated_at", precision: 6, null: false
#   t.index ["character_id"], name: "index_inventories_on_character_id"