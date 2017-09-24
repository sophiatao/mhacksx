import { Notifications, Location, Permissions } from 'expo';
import React from 'react';
import { StyleSheet, StatusBar} from 'react-native';
import { StackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import registerForPushNotificationsAsync from '../api/registerForPushNotificationsAsync';
import MapScreen from '../screens/MapScreen';
import ListScreen from '../screens/ListScreen';
import CommentsScreen from '../screens/CommentsScreen';

var ScrollableTabView = require('react-native-scrollable-tab-view');

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
      parkingLots: [],
    }
  }

  componentWillMount() {
    this.retrieveCoordinates();
    var parkingLots = this.state.parkingLots;
    for (var i = 0; i < 200; i++) {
      var lot = {id: i, name: 'Lot' + i, latitude: 42.2959020 + 0.001*i, longitude: -83.7103320 - 0.001*i, distance: '1.' + i, paid: Math.random() < 0.5? 'paid' : 'free'};
      parkingLots.push(lot);
    }
    console.log("RootNav" + this.props.parkingLots);
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

  render() {
    console.log("OnRootNavigationRender:" + this.state.latitude + " " + this.state.longitude);
    return (
      <ScrollableTabView style={this.props.style} tabBarTextStyle={styles.tabBar} tabBarPosition='overlayBottom' tabBarBackgroundColor='skyblue' tabBarInactiveTextColor='white'>
        <MapScreen tabLabel="Map" latitude={this.state.latitude} longitude={this.state.longitude} parkingLots={this.state.parkingLots} />
        <ListScreen tabLabel="List" latitude={this.state.latitude} longitude={this.state.longitude} parkingLots={this.state.parkingLots} />
        <CommentsScreen tabLabel="Reviews" latitude={this.state.latitude} longitude={this.state.longitude} parkingLots={this.state.parkingLots} />
      </ScrollableTabView>
    );
  }

}

const styles = StyleSheet.create({
  tabBar: {
    fontFamily: 'Roboto',
    fontWeight: '100',
    padding: 5,
  }
});