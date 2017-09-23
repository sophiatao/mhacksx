import React from 'react';
import {FlatList, Text, StyleSheet, View} from 'react-native';
import { Col, Grid, Row } from "react-native-easy-grid";

var parkingSpots = [];

const extractKey = ({id}) => id

export default class ParkingList extends React.Component {

  renderItem = ({item}) => {
    return (
      <Row style={styles.row}>
        <Col><Text>{item.name}</Text></Col>
        <Col><Text>{item.distance+'km'}</Text></Col>
        <Col><Text>{item.paid}</Text></Col>
      </Row>
    )
  }

  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.header}>HEADER</Text>
        <FlatList
          styles={styles.row}
          data={this.props.parkingLots}
          renderItem={this.renderItem}
          keyExtractor={extractKey}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
    flex: 1,
  },
  row: {
    padding: 15,
    backgroundColor: 'lightblue',
  },
  header: {
    padding: 15,
    marginBottom: 0,
    backgroundColor: 'skyblue',
  },
})
