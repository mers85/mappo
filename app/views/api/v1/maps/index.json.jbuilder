json.array! @maps do |map|
  json.partial! 'map.json.jbuilder', map: map
end
