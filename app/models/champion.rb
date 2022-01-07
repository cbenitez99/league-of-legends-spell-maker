class Champion < ApplicationRecord
    has_many :abilities
    # belongs_to :user
end
