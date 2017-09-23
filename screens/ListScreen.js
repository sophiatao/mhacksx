import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import List from '../components/List';

export default class ListScreen extends React.Component {
  static navigationOptions = {
    title: 'Parking locations',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <View><List testRows={this.props.screenProps.testRows}/></View>
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
