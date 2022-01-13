class User < ApplicationRecord
    has_many :abilities
    has_secure_password
    validates :username, presence: true, uniqueness: true, length: {minimum: 3, maximum: 12}
    validates :password, presence: true, length: {minimum: 4, maximum: 50}
end
