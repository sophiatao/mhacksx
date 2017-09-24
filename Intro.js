import React from 'react';
import {View, Text, StyleSheet, FlatList, TextInput, TouchableOpacity, Image} from 'react-native';
import { Col, Grid, Row } from "react-native-easy-grid";

export default class Intro extends React.Component {

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return (
        <View style={styles.container}>
        <Text style={styles.header}>Welcome to {"\n"}Walk in the Park.</Text>
        <Text style={styles.text}>Finding a place to park shouldn't be hard. Take a brake. Let us do it for you.</Text>
        <TouchableOpacity onPress={this.props.readIntro}><Image source={require('./assets/images/car.png')} style={{alignSelf: 'center'}}/><Text style={styles.button}>Yes, please!</Text></TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#22485e',
    alignItems: 'center'
  },
  row: {
    marginBottom: 5,
    padding: 15,
    backgroundColor: '#22485e',
    borderRadius: 10,
  },
  text: {
    color: 'lightblue',
    fontFamily: 'Helvetica',
    fontWeight: '100',
    fontSize: 18,
    padding: 18,
    paddingLeft: 30,
    paddingRight: 30,
    textAlign: 'center',
  },
  button: {
    color: '#fdfdfd',
    fontFamily: 'Helvetica',
    fontWeight: '100',
    fontSize: 14,
    textAlign: 'center',
  },
  header: {
    paddingTop: 15,
    fontSize: 24,
    marginLeft: 0,
    backgroundColor: 'transparent',
    marginTop: 150,
    color: '#fff',
    fontFamily: 'Helvetica',
    fontWeight: '100',
    textAlign: 'center',
  },

});
