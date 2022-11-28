# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
users = User.create([
    {username: 'jack123', email: 'jack123@test.com', password: 'password'},
    {username: 'bob123', email: 'bob123@test.com', password: 'password'},
    {username: 'liz123', email: 'liz123@test.com', password: 'password'}
])

tweets = Tweet.create([
    {message: 'some sample text', user: users.first},
    {message: 'i love coding!', user: users.first},
    {message: 'just joined twitter!', user: users.second},
    {message: 'seems cool', user: users.second},
    {message: 'knock knock', user: users.third},
    {message: 'its me!', user: users.third},
])