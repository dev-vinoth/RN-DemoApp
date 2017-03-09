/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';

export default class Map extends Component {
  render() {
    var {height, width} = Dimensions.get('window');
    return (
      <View>
        <Text>
          {height} , {width}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
