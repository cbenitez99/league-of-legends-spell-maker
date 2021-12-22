class ChampionAbility < ApplicationRecord
    belongs_to :champion
    belongs_to :ability
    validates :cooldown, presence: true
end
