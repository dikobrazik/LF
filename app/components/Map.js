import React from 'react';
import {
    Image,
} from 'react-native';

import MapView, {Marker} from 'react-native-maps';

export default class Map extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            coords:{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            },
        }
        this.findCoordinates()
    }
    findCoordinates = () => {
        navigator.geolocation.getCurrentPosition(
          position => {
            this.setState({ coords : {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
              latitudeDelta: this.state.latitudeDelta,
              longitudeDelta: this.state.longitudeDelta,
            }});
          },
          error => console.log(error.message),
          // { enableHighAccuracy: true, timeout: 0, maximumAge: 1000 }
        );
      };
  render() {
    const coords = this.state.coords;
    
    return (
        <MapView 
            showsUserLocation={false}
            showsPointsOfInterest={false}
            camera={{
                center: {
                    latitude: coords.latitude,
                    longitude: coords.longitude,
                },
                pitch: 0,
                heading: 0,
                altitude: 0,
                zoom: 15
            }}
            style={{flex:1}}
        >
            <Marker coordinate={coords}>
              <Image source={require('../images/flag.png')} />
            </Marker>
        </MapView>
    );
  }
}