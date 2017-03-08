/* @flow */

import React, { Component } from 'react';

import ScrollableTabView, { ScrollableTabBar, DefaultTabBar, } from 'react-native-scrollable-tab-view';

import Home from './home';
import News from './news';

export default class MyComponent extends Component {
  render() {
    return (
      <ScrollableTabView
        style={{marginTop: 60, backgroundColor:'#5FBFBE', }}
        renderTabBar={() => <DefaultTabBar />
        }>
        <Home
          tabLabel="All" />
        <News
          tabLabel="News" />
      </ScrollableTabView>
    );
  }
}
