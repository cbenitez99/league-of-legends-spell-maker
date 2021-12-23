class ChampionAbility < ApplicationRecord
    belongs_to :champion
    belongs_to :ability
    validates :cooldown, inclusion: {in:  1..60}
end
