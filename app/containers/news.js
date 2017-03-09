/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import Chart from 'react-native-chart';

const data = [
    [0, 1],
    [1, 3],
    [3, 7],
    [4, 9],
    [6, 11],
    [8, 14],
    [12, 16],
    [14, 18],
];

export default class News extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Chart
          style={styles.chart}
          data={data}
          verticalGridStep={5}
          type="bar"
          showDataPoint={true}
          // color={['#e1cd00']}
          // sliceColors={['#e1cd00', '#e1cc00', '#e2cd00', '#e1dd00']}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
  },
  chart: {
      width: 200,
      height: 200,
  },
});
