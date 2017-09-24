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
      parkingLots: [
        {id: 0, name: 'Lot0', latitude: 37.786000, longitude: -122.40100, distance: '1.0', paid: 'paid'},
        {id: 1, name: 'Lot1', latitude: 37.787000, longitude: -122.40100, distance: '1.1', paid: 'paid'},
        {id: 2, name: 'Lot2', latitude: 37.788000, longitude: -122.40200, distance: '1.2', paid: 'paid'},
        {id: 3, name: 'Lot3', latitude: 37.789000, longitude: -122.40300, distance: '1.3', paid: 'free'},
        {id: 4, name: 'Lot4', latitude: 37.781000, longitude: -122.40400, distance: '1.4', paid: 'free'},
      ],
    }
  }

  componentWillMount() {
    this.retrieveCoordinates();
    var parkingLots = this.state.parkingLots;
    for (var i = 5; i < 200; i++) {
      var lot = {id: i, name: 'Lot' + i, latitude: 37.786000 + 0.001*i, longitude: -122.40100 - 0.001*i, distance: '1.' + i, paid: 'paid'};
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