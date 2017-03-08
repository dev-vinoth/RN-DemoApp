/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

import {
  getTheme,
} from 'react-native-material-kit';


import Grievances from '../../containers/grievances'

const styles = require('../../styles');
const theme = getTheme();

var base64Icon = 'http://www.getmdl.io/assets/demos/welcome_card.jpg';


export default class HomeBottomView extends Component {

  constructor(props) {
    super(props);

    //  this.showSecondScreen = this.showSecondScreen.bind(this);
  }

  render() {

    var space = (<View style={styles.viewSpace}></View>);

    return (
      <View style = {styles.bottomView} >
        {/* {space} */}
        <View style = {[styles.cardStyle, styles.btmSubView]}>
          <Image source={{uri : base64Icon}} style={styles.cardImageStyle}/>
          <View style={styles.cardActionStyle}>
            <Text style={{fontSize:12}}>Submit Grievance</Text>
          </View>
        </View>
        {/* {space} */}
        <View style = {[styles.cardStyle, styles.btmSubView]}>
          <Image source={{uri : base64Icon}} style={styles.cardImageStyle}/>
          <View style={styles.cardActionStyle}>
            <Text style={{fontSize:12}}>Know My Tax</Text>
          </View>
        </View>
        {/* {space} */}
        <TouchableOpacity onPress={()=>this.props.goToGrievances()} style = {[styles.cardStyle, styles.btmSubView]}>
          <Image source={{uri : base64Icon}} style={styles.cardImageStyle}/>
          <View style={styles.cardActionStyle}>
            <Text style={{fontSize:12}}>Grievance</Text>
          </View>
        </TouchableOpacity>
        {space}
      </View>
    );
  }
}

const stylessd = StyleSheet.create({

  btmSubView: {
    // flex:9,
    marginLeft: 5,
    marginRight: 5,
    // marginTop: 5,
    marginBottom: 5,
    backgroundColor: '#EAEAEA',
  },

  viewSpace: {
    //flex:1,
    backgroundColor: 'white',
    marginLeft: 2,
    marginRight: 2,
    marginTop: 5,
    marginBottom: 5,
  },



  cardImageStyle: {
    flex: 1,
    height: 170,
    resizeMode: 'cover',
  },
  cardTitleStyle: {
    position: 'absolute',
    top: 120,
    left: 26,
    backgroundColor: 'transparent',
    padding: 16,
    fontSize: 24,
    color: '#000000',
    fontWeight: 'bold',
  },
  cardContentStyle: {
    padding: 15,
    color: 'rgba(0, 0, 0, 0.54)',
  },
  cardActionStyle: {
    flex:0.2,
    borderStyle: 'solid',
    borderTopColor: 'rgba(0, 0, 0, 0.1)',
    borderTopWidth: 1,
    marginBottom:10,
    padding: 10,
    backgroundColor: '#EAEAEA',
  },

});
