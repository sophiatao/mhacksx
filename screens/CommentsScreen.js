import React from 'react';
import {View, Text, StyleSheet, FlatList, TextInput } from 'react-native';
import { Col, Grid, Row } from "react-native-easy-grid";
import Input from './Input';

const extractKey = ({id}) => id;

export default class CommentsScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nextID: 5,
            sampleText: [
                {id: 0, text: "Lot68 is absolute garbage, there are more snakes there than in my family"},
                {id: 1, text: 'I actually hate Lot41 because I parked there at MHacks and they fined me'},
                {id: 2, text: 'You vs. the guy she tells you not to worry about: Lot28 vs Lot102'},
                {id: 3, text: 'Wish 👏 somebody 👏 would 👏 let 👏 me 👏 park 👏 in 👏 them 👏 like 👏 Lot88'},
                {id: 4, text: "I don't really have a complaint, I am just depressed and I would like somebody out there to hear me..."},
            ]
        }
        this.addInput = this.addInput.bind(this);
    }
  static navigationOptions = {
    title: 'Comments',
  };

    renderItem = ({item}) => {
    return (
        <Row style={styles.row}><Text style={styles.text}>{item.text}</Text></Row>
    )
  }

  addInput(content) {
    arr = this.state.sampleText;
    nextNextID = this.state.nextID + 1;
    arr.unshift({id: this.state.nextID, text: content});
    this.setState({nextID: nextNextID, text: arr})
  }

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return (
        <View style={styles.container}>
        <Text style={styles.header}>say something:</Text>
        <Input addInput={this.addInput} />
        <FlatList
          data={this.state.sampleText}
          renderItem={this.renderItem}
          keyExtractor={extractKey}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: 'skyblue',
  },
  row: {
    marginBottom: 5,
    padding: 15,
    backgroundColor: '#22485e',
    borderRadius: 10,
  },
  text: {
    color: '#fff',
    fontFamily: 'Roboto',
    fontWeight: '100',
  },
  header: {
    paddingTop: 15,
    fontSize: 24,
    marginLeft: 0,
    backgroundColor: 'skyblue',
    marginTop: 0,
    color: '#22485e',
    fontFamily: 'Roboto',
    fontWeight: '100',
  },

});
