import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import ParkingList from '../components/ParkingList';

export default class ListScreen extends React.Component {
  static navigationOptions = {
    title: 'Parking locations',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <View><ParkingList parkingLots={this.props.screenProps.parkingLots}/></View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
