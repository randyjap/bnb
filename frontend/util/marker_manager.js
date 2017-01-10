export default class MarkerManager{
  constructor(map){
    this.map = map;
    this.markers = [];
  }

  updateMarkers(benches){
    this._setMapOnAll(null);
    this._benchesToAdd(benches);
    this._setMapOnAll(this.map);
  }

  _setMapOnAll(map) {
    for (var i = 0; i < this.markers.length; i++) {
      this.markers[i].setMap(map);
    }
  }

  _benchesToAdd(benches){
    //return array of benches that are in the state but not on map
    this.markers = [];
    for (var key in benches) {
      if (benches.hasOwnProperty(key) && benches[key]) {
        let marker = this._createMarkerFromBench(benches[key]);
        this.markers.push(marker);
      }
    }
  }

  _createMarkerFromBench(bench){
    let myLatLng = {lat: bench.lat, lng: bench.lng};
    return new google.maps.Marker({
      position: myLatLng,
      map: this.map,
      title: bench.description
    });
  }
}
