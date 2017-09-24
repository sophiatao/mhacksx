import React from 'react';
import {FlatList, Text, StyleSheet, View, StatusBar} from 'react-native';
import { Col, Grid, Row } from "react-native-easy-grid";

const extractKey = ({id}) => id

export default class ParkingList extends React.Component {

  renderItem = ({item}) => {
    return (
      <Row style={styles.row}>
        <Col><Text style={styles.text}>{item.name}</Text></Col>
        <Col><Text style={styles.text}>{item.distance+'km'}</Text></Col>
        <Col><Text style={styles.text}>{item.paid}</Text></Col>
      </Row>
    )
  }

  renderHeader = function() {
    return <Text style={styles.header}>HEADER</Text>
  }

  render() {
    return (
      <View style={styles.container}>
      <StatusBar hidden={true} />
      <Text style={styles.header}>HEADER</Text>
        <FlatList
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
    backgroundColor: 'skyblue',
  },
  row: {
    padding: 15,
    backgroundColor: 'transparent',
  },
  text: {
    color: '#fff',
  },
  header: {
    padding: 15,
    fontSize: 24,
    marginLeft: 0,
    backgroundColor: 'skyblue',
    marginTop: 0,
    color: '#22485e',
  },
})
