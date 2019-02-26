import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Map, TileLayer } from 'react-leaflet';

import MarkerList from './MarkerList';
import MarkerClusterGroup from './MapMarkerCluster';

import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

class MyMap extends Component {

  static propTypes = {
    data: PropTypes.array,
  }

  state = {
    lat: 37.7749,
    lng: -122.4194,
  }

  render() {
    const { data } = this.props;
    const position = [this.state.lat, this.state.lng];

    const southWest = L.latLng(37.713159, -122.527084);
    const northEast = L.latLng(37.814666, -122.365723);
    const bounds = L.latLngBounds(southWest, northEast);

    return (
      <Map 
        center={position}
        ref='map' 
        maxBounds={bounds} 
        maxZoom='20'
        zoom='13'
        style={{height: '30em', width: '75%'}}
      >
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
          <MarkerClusterGroup>
            <MarkerList markers={data} />
          </MarkerClusterGroup>
      </Map>
    )
  }
}

export default MyMap;
