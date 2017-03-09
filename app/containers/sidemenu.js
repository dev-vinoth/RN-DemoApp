/* @flow */

import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableHighlight,
  ScrollView,
  ListView,
} from 'react-native';

// import { Container, Header, Title, Content, Button, Icon, Card, CardItem } from 'native-base';
import {Actions} from 'react-native-router-flux'
import * as sideMenuActions from '../actions/sideMenuActions'

var {height, width} = Dimensions.get('window');

const press = () => {
  console.log('success');
  Actions.refresh({key: 'grievances', open: value => false });
  Actions.grievances({type: 'replace' })
  // Actions.grievances({title: 'Grievances'})
};

const home = () => {
  console.log('success');
  Actions.refresh({key: 'grievances', open: value => false });
  Actions.all({type: 'replace' })
  // Actions.grievances({title: 'Grievances'})
};

// const menuData = [
//   {
//     route: 'basicList',
//     text: 'Basic List',
//   },
//   {
//     route: 'listDivider',
//     text: 'List Divider',
//   },
//   {
//     route: 'listHeader',
//     text: 'List Headers',
//   },
//   {
//     route: 'listIcon',
//     text: 'List Icon',
//   },
//   {
//     route: 'listAvatar',
//     text: 'List Avatar',
//   },
//   {
//     route: 'listThumbnail',
//     text: 'List Thumbnail',
//   },,
//   {
//     route: 'listSeparator',
//     text: 'List Separator',
//   },
// ];

class SideMenu extends Component {

  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

     this.state = {
       dataSource: ds.cloneWithRows(this.props.sideMenuReducer.menuData),
     };
  }

  renderRow = (data, sId, rId) => {
    // console.log('count', sId, rId);
    //console.log(data);

    //this.props.actions.routeNavigation(data)

    var space = (<View style={styles.viewSpace}></View>);

    return (
      <TouchableHighlight
        underlayColor={'white'}
        onPress={() => this.props.actions.routeNavigation(data)}>
        <View style={{margin:15}}>
          <Text>{data.title}</Text>
        </View>
      </TouchableHighlight>
    );
  }


  render() {

    return (
      <View style={styles.container}>
        {/* <View style={styles.headerView}> */}
          <Image
            style={styles.headerImage}
            source={require('../assets/sidemenu_header_bg/headerImg.png')} />
            {/* source={require('./app/assets/sidemenu_header_bg/headerImg.png')} /> */}
        {/* </View> */}
        <ScrollView>
          <View style={styles.menuView}>
            <ListView
              style= {styles.List}
              dataSource={ this.state.dataSource }
              // renderRow= {this.renderRow}
              renderRow={(item, sId, rId) => this.renderRow(item, sId, rId)}
              enableEmptySections={true}
            />
          </View>
        </ScrollView>

      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
    // marginTop: 100,
  },
  menuView: {
    flex: 1,
  },
  headerImage: {
    height: height * 0.2,
    width: width * 0.8,
    // marginTop: 100,
    // resizeMode: 'cover',
  },

  List: {
    flex: 1,
    marginLeft: 20,
    // backgroundColor: '#EAEAEA',
  },
});


// "state.home" is set in reducers/index.js
export default connect(state => ({
    sideMenuReducer: state.sideMenu,
    navRouteReducer: state.nav //props to get scene details
  }),
  (dispatch) => ({
    actions: bindActionCreators(sideMenuActions, dispatch)
  })
)(SideMenu);
