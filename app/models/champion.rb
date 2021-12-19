class Champion < ApplicationRecord
    has_many :champion_abilities 
    has_many :abilities, through: :champion_abilities
end
