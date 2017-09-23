import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Parking locations',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <View><Text>Placeholder for List view</Text></View>
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
