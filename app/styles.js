var {StyleSheet, Platform} = require('react-native');
var {MKColor} = require('react-native-material-kit');

module.exports = StyleSheet.create({
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

  // test: {
  //   backgroundColor: 'red',
  // },

  //TopView & viewSpace
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



  //BottomView & BottomSubView
  bottomView: {
    flex:1.5,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'white',
  },
  btmSubView: {
    // flex:9,
    marginLeft: 5,
    marginRight: 5,
    // marginTop: 5,
    marginBottom: 5,
    backgroundColor: '#EAEAEA',
  },


  cardStyle: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderRadius: 2,
    borderColor: '#ffffff',
    borderWidth: 1,
    shadowColor: 'rgba(0, 0, 0, 0.12)',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 2,
    },
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
