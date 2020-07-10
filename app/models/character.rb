class Character < ApplicationRecord
  belongs_to :user
  has_many :inventories
  has_many :equipments
  has_many :skills
end
