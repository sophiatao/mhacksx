import React from 'react';
import {FlatList, Text, StyleSheet, View} from 'react-native';
import { Col, Grid } from "react-native-easy-grid";

const testRows = [
    {id: 0, name: 'Spot0', distance: '1.0', paid: 'paid'},
    {id: 1, name: 'Spot1', distance: '1.1', paid: 'paid'},
    {id: 2, name: 'Spot2', distance: '1.2', paid: 'paid'},
    {id: 3, name: 'Spot3', distance: '1.3', paid: 'free'},
    {id: 4, name: 'Spot4', distance: '1.4', paid: 'free'},
]

var parkingSpots = [];

const extractKey = ({id}) => id

export default class List extends React.Component {

  renderItem = ({item}) => {
    return (
      <Grid style={styles.row}>
        <Col><Text>{item.name}</Text></Col>
        <Col><Text>{item.distance+'km'}</Text></Col>
        <Col><Text>{item.paid}</Text></Col>
      </Grid>
    )
  }

  render() {
    return (
      <View>
      <Text style={styles.header}>Header</Text>
        <FlatList
          styles={styles.row}
          data={testRows}
          renderItem={this.renderItem}
          keyExtractor={extractKey}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
  },
  row: {
    padding: 15,
    marginBottom: 0,
    backgroundColor: 'lightblue',
  },
  header: {
    padding: 15,
    marginBottom: 0,
    backgroundColor: 'skyblue',
  },
})
