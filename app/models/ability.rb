class Ability < ApplicationRecord
    # belongs_to :user

    belongs_to :champion
    validates :description, length: {minimum: 20}
end
