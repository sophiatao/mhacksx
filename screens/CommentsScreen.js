import React from 'react';
import {View, Text} from 'react-native';

export default class CommentsScreen extends React.Component {
  static navigationOptions = {
    title: 'Comments',
  };

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return (
        <View><Text>Placeholder for comments</Text></View>
    )
  }
}
