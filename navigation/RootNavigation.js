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
      latitude: 37.78825,
      longitude: -122.4324,
      errorMessage: null,
      parkingLots: [],
    }
  }

  componentWillMount() {
    //this.retrieveCoordinates();
    //TODO: retrieve data from java function, call parseString, push to array
  }

  componentDidMount() {
    this._updateMapPositionAsync();
  }

  parseString() {

  }

  componentDidMount() {
    this._notificationSubscription = this._registerForPushNotifications();
  }

  // retrieveCoordinates() { // gets the coordinate locations for the user
  //   navigator.geolocation.getCurrentPosition(
  //         (position) => {
  //           this.setState({
  //             latitude: position.coords.latitude,
  //             longitude: position.coords.longitude,
  //             error: null,
  //           });
  //         },
  //         (error) => this.setState({ error: error.message }),
  //         { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
  //       );
  // }

  async _getLocationAsync() {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    return location;

  }

  async _updateMapPositionAsync() {
    let location = await this._getLocationAsync();
    this.setState({location, latitude: location.coords.latitude, longitude: location.coords.longitude,});
  }

  componentWillUnmount() {
    this._notificationSubscription && this._notificationSubscription.remove();
  }

  render() {
    console.log(this.state.latitude + " " + this.state.longitude);
    return <RootStackNavigator screenProps={{latitude: this.state.latitude, longitude: this.state.longitude}}/>;
  }

  _registerForPushNotifications() {
    // Send our push token over to our backend so we can receive notifications
    // You can comment the following line out if you want to stop receiving
    // a notification every time you open the app. Check out the source
    // for this function in api/registerForPushNotificationsAsync.js
    registerForPushNotificationsAsync();

    // Watch for incoming notifications
    this._notificationSubscription = Notifications.addListener(
      this._handleNotification
    );
  }

  _handleNotification = ({ origin, data }) => {
    console.log(
      `Push notification ${origin} with data: ${JSON.stringify(data)}`
    );
  };
}
