import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router';
import MarkerManager from '../../util/marker_manager';

const _getCoordsObj = latLng => ({
  lat: latLng.lat(),
  lng: latLng.lng()
});

let mapOptions = {
  center: {lat: 37.773972, lng: -122.431297}, // San Francisco coords
  zoom: 13
};

class BenchMap extends Component {
  componentDidMount() {
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers(this.props.benches);

    google.maps.event.addListener(this.map, 'idle',
      this._registerListeners.bind(this)
    );

    google.maps.event.addListener(this.map, 'click',
      this._handleClick.bind(this)
    );
  }

  componentDidUpdate() {
    this.MarkerManager.updateMarkers(this.props.benches);
  }

  _registerListeners() {
    const { north, south, east, west } = this.map.getBounds().toJSON();
    const bounds = {
      northEast: { lat: north, lng: east },
      southWest: { lat: south, lng: west } };
    this.props.updateFilter({bounds});
  }

  _handleClick(coords){
     this.props.router.push({
       pathname: "benches/new",
       query: coords
     });
   }

  render() {
    return (<div id='map-container' ref={ map => this.mapNode = map }/>);
  }
}

export default withRouter(BenchMap);
