class Ability < ApplicationRecord
    belongs_to :champion
    belongs_to :user
    validates :description, presence: true, length: {minimum: 20}
end
