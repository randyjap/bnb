class Bench < ActiveRecord::Base
  def self.in_bounds(bounds)
    # y_min = bounds["northEast"]["lat"]
    # y_max = bounds["southWest"]["lat"]
    # x_min = bounds["northEast"]["lng"]
    # x_max = bounds["southWest"]["lng"]
    # Bench.where(:lat => y_min..y_max).where(:lng => x_min..x_max)
    self.where("lat < ?", bounds[:northEast][:lat])
        .where("lat > ?", bounds[:southWest][:lat])
        .where("lng > ?", bounds[:southWest][:lng])
        .where("lng < ?", bounds[:northEast][:lng])
  end
end
