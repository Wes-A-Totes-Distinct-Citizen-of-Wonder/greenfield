import React, {Component} from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { convertToCoordinates } from './GeoLocation.js'
import { API_KEY } from '../helpers/config.js'

const mapStyles = {
    width: '100%',
    height: '100%',
}

class MapContainer extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        latLng: {
          lat: 30,
          lng: -90
        },
      }
    }

    componentDidMount() {
      const { address } = this.props;
        if(address){
            convertToCoordinates(address)
            .then(response => {
                this.setState({
                    latLng: response.data.results[0].geometry.location,
                })
                console.log(this.state.latLng)
            })
            .catch(err => console.error(err))
      }  
    }
  
    render() {
      
      return (

          <Map
            google={this.props.google}
            zoom={8}
            style={mapStyles}
            initialCenter={this.state.latLng}
          >
            <Marker position={this.state.latLng} />
          </Map>
      );
    }
  }

  export default GoogleApiWrapper({
    apiKey: API_KEY
  })(MapContainer);