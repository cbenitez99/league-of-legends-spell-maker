class User < ApplicationRecord
    has_many :abilities
    validates :username, presence: true, length: {minimum: 3, maximum: 12}, uniqueness: true
end
