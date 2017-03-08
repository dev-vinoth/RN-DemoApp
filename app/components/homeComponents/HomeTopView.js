/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';
import {
  getTheme,
} from 'react-native-material-kit';

const endpoint = require('../../utils/endpoint');

const theme = getTheme();
// const styles = require('../../styles');



export default class HomeTopView extends Component {

  constructor(props){
    super(props)

  }

  componentWillMount() {

    this.props.getWeather(endpoint.weatherApi)
  }

  render() {

    var space = (<View style={styles.viewSpace}></View>);
    const { weather, getWeather } = this.props;

    return (
      <View style = {styles.topView} >
        <View style={[theme.cardStyle, styles.weatherView]}>
          <View style= {styles.weatherTopView}>
            <Text style= {{fontSize: 14}}>{weather.location}</Text>
          </View>

          <View style= {styles.weatherImageView}>
              <Image source={{uri : 'http:'+weather.icon}} style= {styles.weatherImg} />
              {space}
              <Text style={styles.weatherTemp}>{weather.temp_c}</Text>
          </View>

          <View style= {styles.weatherBottomView}>
            <Text>{weather.weather_condition}</Text>
          </View>
        </View>

        {space}

        <View style = {[theme.cardStyle, {alignItems: 'center', justifyContent: 'space-around',}]}>
          <Image source={{uri : 'http://egovreach.in/social/sites/default/files/icon-LogoCMC_0.jpg'}} style= {[styles.logoImg, {
            flex: 1,
            resizeMode: 'contain',
          }]} />
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({

  topView: {
    flex: 1.3,
    flexDirection: 'row',
    padding: 4,
    // marginTop: 64,
    backgroundColor: 'white',

  },
  viewSpace: {
    //flex:1,
    backgroundColor: 'white',
    marginLeft: 2,
    marginRight: 2,
    marginTop: 5,
    marginBottom: 5,
  },

  weatherView:{
    justifyContent: 'space-around',
    alignItems: 'center',

  },

  weatherImageView: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  weatherImg: {
  width: 24,
  height: 24,
  },

  logoImg: {
    // flex:2,
    // justifyContent: 'space-around',
    width: 65,
    height: 65,
  }
});
