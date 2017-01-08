
locations =
  [{ "description" => "PIER 39", "lat" => 37.8086772, "lng" => -122.412015 },
   { "description" => "Golden Gate Bridge", "lat" => 37.8199328, "lng" => -122.4804491 }]

locations.each do |location|
  Bench.create(
  description: location["description"],
  lat: location["lat"],
  lng: location["lng"]
  )
end
