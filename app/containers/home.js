/* @flow */

import { getstyles, } from 'react-native-material-kit';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {
  getTheme,
} from 'react-native-material-kit';


//Actions
import * as homeActions from '../actions/homeActions'
/*** Components ***/
import HomeTopView from '../components/homeComponents/HomeTopView';
import HomeBottomView from '../components/homeComponents/HomeBottomView';

//const styles = getstyles();

//const styles = require('../styles');
const theme = getTheme();

class Home extends Component {

  constructor(props){
    super(props)

    this.state = {
      weatherlocation: 'Coimbatore, India',
      weatherCondition: 'Partly cloudy',
      weatherTemp: '27 °C',
      weatherImgUrl: 'http://www.getmdl.io/assets/demos/welcome_card.jpg'
    }

  }

  componentWillMount() {
    //default : close drawer when mount
    this.props.actions.closeDrawer()
  }


  render() {

    const { homeReducer, actions } = this.props
    //console.log(this.props.homeReducer.weather_condition);

    return (
      <View style={styles.container}>

        <HomeTopView
          weather={homeReducer}
          {...actions}/>

        <View style = {styles.centerView} >
          <View style = {theme.cardStyle}>
            <Image source={{uri : this.state.weatherImgUrl}} style={theme.cardImageStyle}/>
          </View>
        </View>

        <View style = {{flex: 0.3, alignItems: 'stretch', backgroundColor : 'white', }}>
          <Text style={{fontSize:20, marginLeft:10, }}>Service</Text>
        </View>

        <HomeBottomView
        {...actions}/>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'column',
    // justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: 'grey',
  },

  centerView: {
    flex: 3,
   backgroundColor: 'red'
  },

});


// "state.home" is set in reducers/index.js
export default connect(state => ({
    homeReducer : state.home
  }),
  (dispatch) => ({
    actions : bindActionCreators(homeActions, dispatch)
  })
)(Home);
