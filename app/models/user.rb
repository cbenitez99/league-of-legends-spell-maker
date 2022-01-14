class User < ApplicationRecord
    has_many :abilities
    has_secure_password
    validates :username, presence: true, uniqueness: true, length: {minimum: 2}
    validates :password, presence: true, length: {maximum: 50}
end
