import { Notifications, Location, Permissions } from 'expo';
import React from 'react';
import { StackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import registerForPushNotificationsAsync from '../api/registerForPushNotificationsAsync';

const RootStackNavigator = StackNavigator(
  {
    Main: {
      screen: MainTabNavigator,
    },
  },
  {
    navigationOptions: () => ({
      headerTitleStyle: {
        fontWeight: 'normal',
      },
    }),
  }
);


export default class RootNavigator extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      latitude: 12,
      longitude: -12,
      errorMessage: null,
      parkingLots: [
        {id: 0, name: 'Spot0', distance: '1.0', paid: 'paid'},
        {id: 1, name: 'Spot1', distance: '1.1', paid: 'paid'},
        {id: 2, name: 'Spot2', distance: '1.2', paid: 'paid'},
        {id: 3, name: 'Spot3', distance: '1.3', paid: 'free'},
        {id: 4, name: 'Spot4', distance: '1.4', paid: 'free'},
      ],
    }
  }

  componentWillMount() {
    // this._updateMapPositionAsync();
    this.retrieveCoordinates();
    //TODO: retrieve data from java function, call parseString, push to array
  }
g
  componentDidMount() {

  }

  parseString() {

  }

  componentDidMount() {
    // this._notificationSubscription = this._registerForPushNotifications();
  }

  retrieveCoordinates() { // gets the coordinate locations for the user
    navigator.geolocation.getCurrentPosition(
          (position) => {
            this.setState({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
              error: null,
            });
          },
          (error) => this.setState({ error: error.message }),
          { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
        );
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
  // }/


  render() {
    console.log("OnRootNavigationRender:" + this.state.latitude + " " + this.state.longitude);
    return <RootStackNavigator screenProps={{latitude: this.state.latitude, longitude: this.state.longitude, parkingLots: this.state.parkingLots}}/>;
  }

}
