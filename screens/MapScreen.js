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
import MapView from 'react-native-maps';
import { Location, Permissions } from 'expo';

export default class MapScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = {
    header: null,
    title: 'Map',
  };

  render() {
    console.log("OnMapRender:" + this.props.screenProps.latitude);
    var lat = this.props.screenProps.latitude;
    var long = this.props.screenProps.longitude;
    return (
    <View style={styles.container}>
      <MapView style={styles.map}
      region={{
        latitude: lat,
        longitude: long,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}>

      {this.props.screenProps.parkingLots.map(marker => (
        <MapView.Marker
          coordinate={{latitude: marker.latitude, longitude: marker.longitude}}
          title={marker.name}
          description={marker.paid}
          pinColor={"red"}
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
