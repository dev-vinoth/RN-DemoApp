// /* @flow */
//
// import React, { Component } from 'react';
// import {
//   View,
//   Text,
//   Image,
//   StyleSheet,
// } from 'react-native';
// import { getstyles, } from 'react-native-material-kit';
//
// import HomeTopView from './components/homePage/views/HomeTopView';
// import HomeBottomView from './components/homePage/views/HomeBottomView';
//
// //const styles = getstyles();
//
// const styles = require('./styles');
//
// export default class root extends Component {
//
//   constructor(props){
//     super(props)
//
//     this.state = {
//       weatherlocation: 'Coimbatore, India',
//       weatherCondition: 'Partly cloudy',
//       weatherTemp: '27 °C',
//       weatherImgUrl: 'http://www.getmdl.io/assets/demos/welcome_card.jpg'
//     }
//
//   }
//
//   render() {
//
//     var space = (<View style={styles.viewSpace}></View>);
//     return (
//       <View style={styles.container}>
//
//         <HomeTopView />
//
//         <View style = {styles.centerView} >
//           <View style = {styles.cardStyle}>
//             <Image source={{uri : this.state.weatherImgUrl}} style={styles.cardImageStyle}/>
//           </View>
//         </View>
//
//         <View style = {{alignItems: 'stretch', height: 40, backgroundColor : 'white', }}>
//           <Text style={{fontSize:20, marginTop:10, marginLeft: 10}}>Service</Text>
//         </View>
//
//         <HomeBottomView />
//
//       </View>
//     );
//   }
// }
