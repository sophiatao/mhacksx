import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { Location, Permissions } from 'expo';

const mapStyle = [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#193341"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#2c5a71"}]},{"featureType":"road","elementType":"geometry","stylers":[{"color":"#29768a"},{"lightness":-37}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#406d80"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#406d80"}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#3e606f"},{"weight":2},{"gamma":0.84}]},{"elementType":"labels.text.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"administrative","elementType":"geometry","stylers":[{"weight":0.6},{"color":"#1a3541"}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#2c5a71"}]}]

export default class MapScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = {
    header: null,
    title: 'Map',
  };

  render() {
    console.log("OnMapRender:" + this.props.latitude);
    var lat = this.props.latitude;
    var long = this.props.longitude;
    return (
    <View style={styles.container}>
      <MapView style={styles.map}
      customMapStyle={mapStyle}
      provider={PROVIDER_GOOGLE}
      region={{
        latitude: lat,
        longitude: long,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}>

      {this.props.parkingLots.map(marker => (
        <MapView.Marker
          coordinate={{latitude: marker.latitude, longitude: marker.longitude}}
          title={marker.name}
          description={marker.paid? "This parking lot is paid. \n Available spots: " + marker.spots : "This parking lot is free! \n Available spots: " + marker.spots}
          pinColor={marker.paid ? "red" : "green"}
          key={marker.id}
        />
      ))}
      </MapView>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
