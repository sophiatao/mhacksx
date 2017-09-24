import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import ParkingList from '../components/ParkingList';

export default class ListScreen extends React.Component {
  static navigationOptions = {
    title: 'Parking locations',
    header: null,
  };

  render() {
    return (
        <View style={styles.container}><ParkingList parkingLots={this.props.parkingLots}/></View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
