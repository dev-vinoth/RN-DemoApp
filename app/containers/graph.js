/* @flow */

import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import Chart from 'react-native-chart';

//Actions
import * as graphActions from '../actions/graphActions';

// const data = [
//     [0, 10],
//     [1, 3],
//     [3, 77],
//     [4, 67],
//     [6, 34],
//     [8, 11],
//     [12, 52],
//     [14, 84],
// ];

// const data = [['first', 122], ['second', 44], ['third', 17], ['fourth', 16]];

class Graph extends Component {
  render() {
    const {graphData} = this.props.graphReducer
    return (
      <View style={styles.container}>
        <Chart
          style={styles.chart}
          data={graphData}
          verticalGridStep={5}
          type="line"
          showDataPoint={true}
          gridColor={'#ffffff'}
          // color={['#e1cd00']}
          sliceColors={['#00ffff', '#0000ff', '#8a2be2', '#d2691e', '#228b22']}
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
      width: 320,
      height: 400,
  },
});

// "state.home" is set in reducers/index.js
export default connect(state => ({
    graphReducer: state.graph
  }),
  (dispatch) => ({
    actions: bindActionCreators(graphActions, dispatch)
  })
)(Graph);
