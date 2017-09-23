import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MapView from 'react-native-maps';
// import { WebBrowser } from 'expo';

// import { MonoText } from '../components/StyledText';

export default class MapScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: 37.78825,
      longitude: -122.4324,
    }
  }
  static navigationOptions = {
    header: null,
  };

  componentWillMount() {
    this.setState({latitude: this.props.screenProps.latitude, longitude: this.props.screenProps.longitude})
  }

  render() {
    console.log(this.state.latitude);
    return (
    <View style={styles.container}><MapView style={styles.map}
    region={{
      latitude: this.state.latitude,
      longitude: this.state.longitude,
      // latitude: 37.78825,
      // longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
  /></View>
      //<View style={styles.container}>
        //<ScrollView
        //   style={styles.container}
        //   contentContainerStyle={styles.contentContainer}>
        //   <View style={styles.welcomeContainer}>
        //     <Image
        //       source={
        //         __DEV__
        //           ? require('../assets/images/robot-dev.png')
        //           : require('../assets/images/robot-prod.png')
        //       }
        //       style={styles.welcomeImage}
        //     />
        //   </View>

        //   <View style={styles.getStartedContainer}>
        //     {this._maybeRenderDevelopmentModeWarning()}

        //     <Text style={styles.getStartedText}>Get started by opening</Text>

        //     <View
        //       style={[
        //         styles.codeHighlightContainer,
        //         styles.homeScreenFilename,
        //       ]}>
        //       <MonoText style={styles.codeHighlightText}>
        //         screens/HomeScreen.js
        //       </MonoText>
        //     </View>

        //     <Text style={styles.getStartedText}>
        //       Change this text and your app will automatically reload.
        //     </Text>
        //   </View>

        //   <View style={styles.helpContainer}>
        //     <TouchableOpacity
        //       onPress={this._handleHelpPress}
        //       style={styles.helpLink}>
        //       <Text style={styles.helpLinkText}>
        //         Help, it didn’t automatically reload!
        //       </Text>
        //     </TouchableOpacity>
        //   </View>
        // </ScrollView>

        // <View style={styles.tabBarInfoContainer}>
        //   <Text style={styles.tabBarInfoText}>
        //     This is a tab bar. You can edit it in:
        //   </Text>

        //   <View
        //     style={[styles.codeHighlightContainer, styles.navigationFilename]}>
        //     <MonoText style={styles.codeHighlightText}>
        //       navigation/MainTabNavigator.js
        //     </MonoText>
        //   </View>
        // </View>
      //</View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
