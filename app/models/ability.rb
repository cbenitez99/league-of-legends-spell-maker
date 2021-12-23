class Ability < ApplicationRecord
    has_many :champion_abilities
    has_many :champions, through: :champion_abilities
    validates :description, length: {minimum: 20}
end
