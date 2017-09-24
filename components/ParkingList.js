import React from 'react';
import {FlatList, Text, StyleSheet, View} from 'react-native';
import { Col, Grid, Row } from "react-native-easy-grid";

const extractKey = ({id}) => id

export default class ParkingList extends React.Component {

  renderItem = ({item}) => {
    return (
      <Row style={styles.row}>
        <Col><Text style={styles.text}>{item.name}</Text></Col>
        <Col><Text style={styles.text}>{item.distance+'km'}</Text></Col>
        <Col><Text style={styles.text}>{item.paid? "paid" : "free"}</Text></Col>
        <Col><Text style={styles.text} style={item.spots > 18? {color: '#22485e'} : item.spots > 15? {color: '#416275'} : item.spots > 12? {color: '#617C8C'} : item.spots > 9? {color: '#8096A3'} : item.spots > 6? {color: '#A0B0BA'} : item.spots > 3? {color: '#A0B0BA'} : {color: '#dfe4e8'} }>{item.spots}</Text></Col>
      </Row>
    )
  }

  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.header}>it's a walk in the park.</Text>
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
    fontFamily: 'Roboto',
    fontWeight: '100',
  },
  header: {
    padding: 15,
    fontSize: 24,
    marginLeft: 0,
    backgroundColor: 'skyblue',
    marginTop: 0,
    color: '#22485e',
    fontFamily: 'Roboto',
    fontWeight: '100',
  },
})
