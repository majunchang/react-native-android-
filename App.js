/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,WebView} from 'react-native';
import  index from './index.html'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
     <WebView
        originWhitelist={['*']}
        source={{uri: "http://30.208.77.159:8080/?wid=1432872020&supplierId=0"}}
      />
//      <View style={styles.container}>
//        <Text style={styles.welcome}>Welcome to React Native!</Text>
//        <Text style={styles.instructions}>To get started, edit App.js</Text>
//        <Text style={styles.instructions}>{instructions}</Text>
//        <Text style={styles.instructions}>hell1o world</Text>
//      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
