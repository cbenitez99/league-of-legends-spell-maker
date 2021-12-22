class ChampionAbility < ApplicationRecord
    belongs_to :champion, dependent: :destroy
    belongs_to :ability
    validates :cooldown, presence: true
end
