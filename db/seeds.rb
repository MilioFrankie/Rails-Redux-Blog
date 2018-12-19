10.times do 
  Blog.create(
    title: Faker::DumbAndDumber.quote,
    body: Faker::BojackHorseman.quote,
    author: Faker::BojackHorseman.character
  )
end

puts '10 blogs created'