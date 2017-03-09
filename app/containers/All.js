/* @flow */

import React, { Component } from 'react';
import {Platform} from 'react-native';
import ScrollableTabView, { ScrollableTabBar, DefaultTabBar, } from 'react-native-scrollable-tab-view';

import Home from './home';
import Graph from './graph';
import Map from './map';

export default class MyComponent extends Component {
  render() {
    return (
      <ScrollableTabView
        style={{marginTop: Platform.OS !== 'ios' ? 54 : 64, backgroundColor:'#5FBFBE', }}
        renderTabBar={() => <DefaultTabBar />
        }>
        <Home
          tabLabel="All" />
        <Graph
          tabLabel="Graph" />
        <Map
          tabLabel="Map" />
      </ScrollableTabView>
    );
  }
}
