import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading, Asset, Font } from 'expo';
import RootNavigation from './navigation/RootNavigation';
import Intro from './Intro';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    isLoadingComplete: false,
    hasReadIntro: false,
    };
    this.readIntro = this.readIntro.bind(this);
  }

  readIntro() {
    this.setState({hasReadIntro: true});
  }

  componentWillMount() {
    this._fetchDataAsync();
  }

  async _fetchDataAsync() {
    try {
      let response = await fetch('https://facebook.github.io/react-native/movies.json');
      let responseJson = await response.json();
      this.setState({parkingLots: responseJson});
    } catch(error) {
      console.error(error);
    }
    console.log("Async done")
  }

  render() {

    var hasReadIntro = this.state.hasReadIntro;
    console.log(this.state.parkingLots);
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      if (!hasReadIntro) {
        return <Intro readIntro={this.readIntro}/>
      }
      return (
        <View style={styles.container}>
        <StatusBar hidden={true} />
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          {Platform.OS === 'android' &&
            <View style={styles.statusBarUnderlay} />}
          <RootNavigation parkingLots={this.state.parkingLots}/>
        </View>
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/robot-dev.png'),
        require('./assets/images/robot-prod.png'),
      ]),
      Font.loadAsync([
        // This is the font that we are using for our tab ba
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        { 'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf') },
      ]),
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  statusBarUnderlay: {
    height: 24,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
});
