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
    this.state = {
      latitude: 12,
      longitude: -12,
    }
  }
  static navigationOptions = {
    header: null,
    title: 'Map',
  };

  componentWillMount() {
    // this.setState({latitude: this.props.screenProps.latitude, longitude: this.props.screenProps.longitude});
    // console.log("OnMapWillMount: SCREENPROPS:" + this.props.screenProps.latitude);
  }

  componentDidMount() {
    // this._updateMapPositionAsync();
  }

  // async _getLocationAsync() {
  //   let { status } = await Permissions.askAsync(Permissions.LOCATION);
  //   if (status !== 'granted') {
  //     this.setState({
  //       errorMessage: 'Permission to access location was denied',
  //     });
  //   }

  //   let location = await Location.getCurrentPositionAsync({});
  //   return location;

  // }

  // async _updateMapPositionAsync() {
  //   let location = await this._getLocationAsync();
  //   this.setState({location, latitude: location.coords.latitude, longitude: location.coords.longitude,});
   // }

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
      <MapView.Marker
      coordinate={{latitude: lat, longitude: long}}
      title={"hi"}
      description={"hi!"}
      pinColor={"green"}
      />
      </MapView>
    </View>
      //<View style={styles.container}>
        //<ScrollView
        //   style={styles.container}
        //   contentContainerStyle={styles.contentContainer}>
        //   <View style={styles.welcomeContainer}>
        //     <Image
        //       source={
        //         __DEV__
        //           ? require('../assets/images/robot-dev.png')
        //           : require('../assets/images/robot-prod.png')
        //       }
        //       style={styles.welcomeImage}
        //     />
        //   </View>

        //   <View style={styles.getStartedContainer}>
        //     {this._maybeRenderDevelopmentModeWarning()}

        //     <Text style={styles.getStartedText}>Get started by opening</Text>

        //     <View
        //       style={[
        //         styles.codeHighlightContainer,
        //         styles.homeScreenFilename,
        //       ]}>
        //       <MonoText style={styles.codeHighlightText}>
        //         screens/HomeScreen.js
        //       </MonoText>
        //     </View>

        //     <Text style={styles.getStartedText}>
        //       Change this text and your app will automatically reload.
        //     </Text>
        //   </View>

        //   <View style={styles.helpContainer}>
        //     <TouchableOpacity
        //       onPress={this._handleHelpPress}
        //       style={styles.helpLink}>
        //       <Text style={styles.helpLinkText}>
        //         Help, it didn’t automatically reload!
        //       </Text>
        //     </TouchableOpacity>
        //   </View>
        // </ScrollView>

        // <View style={styles.tabBarInfoContainer}>
        //   <Text style={styles.tabBarInfoText}>
        //     This is a tab bar. You can edit it in:
        //   </Text>

        //   <View
        //     style={[styles.codeHighlightContainer, styles.navigationFilename]}>
        //     <MonoText style={styles.codeHighlightText}>
        //       navigation/MainTabNavigator.js
        //     </MonoText>
        //   </View>
        // </View>
      //</View>
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
