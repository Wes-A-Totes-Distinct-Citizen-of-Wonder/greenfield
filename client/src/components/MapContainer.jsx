import React, {Component} from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { convertToCoordinates } from '../helpers/geoLocation.js'
import { API_KEY } from '../helpers/config.js'

const mapStyles = {//sets map size
    width: '100%',
    height: '100%',
}

class MapContainer extends Component {
    constructor(props) {
      super(props);
      this.state = {
        latLng: {//coordinates for map center and marker placement
          lat: 30,
          lng: -90
        },
      }
    }


    componentDidMount() {
      const { geoLocation } = this.props;
      const coordinatesArray = geoLocation.split(', ');
      this.setState({
        latLng:{
        lat: parseFloat(coordinatesArray[0]),
        lng: parseFloat(coordinatesArray[1]),
        }
      }) 
    }
  
    render() {
      const { latLng } = this.state;

      return (

          <Map
            google={this.props.google}
            zoom={15}  //setting for how zoomed in the map is upon rendering
            style={mapStyles}
            center={latLng}
          >
            <Marker position={latLng} />
          </Map>
      );
    }
  }

  export default GoogleApiWrapper({
    apiKey: API_KEY
  })(MapContainer);