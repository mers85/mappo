json.id map.id
json.name map.name
json.description map.description
json.locations do
  json.array! map.locations.each do |location|
    json.title location.title
    json.lat location.lat
    json.long location.long
  end
end
