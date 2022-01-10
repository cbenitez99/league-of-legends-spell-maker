class User < ApplicationRecord
    has_secure_password
    validates :username, presence: true, length: {minimum: 3, maximum: 12}, uniqueness: true
    has_many :abilities
end
