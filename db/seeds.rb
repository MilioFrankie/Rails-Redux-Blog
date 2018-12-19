12.times do 
  Blog.create(
    title: Faker::DumbAndDumber.quote,
    body: Faker::BojackHorseman.quote,
    author: Faker::BojackHorseman.character
  )
end

puts '12 blogs created'