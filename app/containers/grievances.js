/* @flow */

import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import React, { Component } from 'react';

import {
  View,
  Text,
  Image,
  ListView,
  StyleSheet,
  TouchableHighlight,
  RefreshControl,
  ActivityIndicator,
  Platform,
} from 'react-native';

import {
  MKButton,
  MKColor,
  MKIconToggle,
  getTheme,
} from 'react-native-material-kit';

//Actions
import * as grievanceActions from '../actions/grievanceActions'

const theme = getTheme();
const endpoint = require('../utils/endpoint');


//import Network from '../api/network'

class Grievances extends Component {
  constructor(props) {
    super(props)

    const dataSource = new ListView.DataSource({
      rowHasChanged:  (r1, r2) => r1 !== r2,
    })

    const data = []

    this.state = {
      artists : dataSource.cloneWithRows(data),
      inputValue: 'hello',
      json : [],
      refreshing: false,
      animating: true,
    }


  }


  // //MARK : Initial Datasource
  // static getInitialState() {
  //   return {
  //     dataSource: dataSource.cloneWithRows([])
  //   };
  // }
  //
  //MARK : update Datasource
  // updateDataSource = () => {
  //   Network.Get(endpoint.getGrievanceApi).then( (res) => {
  //     var arr = [];
  //     console.log('Result : ', res);
  //     res.map(function (item) {
  //       console.log("Item", item)
  //       // console.log(item.Name);
  //       arr.push(item)
  //     });
  //     console.log(arr);
  //     //this.updateDataSource(arr);
  //     this.setState({
  //       artists: this.state.artists.cloneWithRows(arr),
  //       json: res.results
  //     });
  //   });
  // }

  // componentWillMount() {
  //   api.getGlasses().then( (res) => {
  //
  //     //this.updateDataSource(res)
  //     this.setState({
  //       json: res.glasses
  //
  //     })
  //   });
  // }

  _onRefresh() {
    this.setState({refreshing: true});
    this.props.actions.getGrievances(endpoint.getGrievanceApi)
    // fetchData().then(() => {
      // this.setState({refreshing: false});
    // });
  }

  componentWillMount() {
    //this.updateDataSource()

    //default : close drawer when mount
    this.props.actions.closeDrawer()

    this.props.actions.getGrievances(endpoint.getGrievanceApi)

  }


  componentWillReceiveProps(newProps) {
    //console.log('newProps', newProps.grievanceReducer.grievanceData);
  let data = newProps.grievanceReducer.grievanceData;

  var arr = [];

  data.map(function (item) {
    //console.log('Item', item);

    arr.push(item)

  })
  this.setState({refreshing: false});
  this.setState({animating: false});
  //console.log('arr',arr);

  this.setState({
    artists: this.state.artists.cloneWithRows(arr)
  });
}


  renderRow = (data, sId, rId) => {
    //console.log('count', sId, rId);

    var space = (<View style={styles.viewSpace}></View>);

    return (
      <TouchableHighlight>
        <View style= {[theme.cardStyle, styles.grievanceCard ]}>
          <View style= {[theme.cardStyle, styles.temp1, data.id == '57342' ? {backgroundColor: 'limegreen'} : {backgroundColor: 'red'}]}>


              {/* <Text > #{ data.id } { data.id == '57342' ? 'open' : 'close'}  </Text> */}
              <Text > #{ data.id } </Text>
              {/* <Text > { data.create_date } </Text> */}
              <Text > { data.status } </Text>

          </View>
          <View style= {[styles.temp2]}>
            <Text>
            </Text>
            <Text style={styles.text}> Category : {data.category} </Text>
            <Text style={styles.text}> Manager  : {data.supporter} </Text>
            {space}
            <Text style={styles.text}> Severity : {data.severity} </Text>
            <Text style={styles.text}> Priority :{data.priority} </Text>
            <Text>
            </Text>
          </View>



        </View>
      </TouchableHighlight>
    );
  }



  render() {

    const { grievanceReducer, actions } = this.props

    // console.log("Glasses : ", grievanceReducer.grievanceData);


    return (
      <View style={[styles.container]}>

        {/* <ActivityIndicator
          animating={this.state.animating}
          style={[styles.centering, {height: 80}]}
          size="large"
        /> */}

      <ListView

        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh.bind(this)}
          />
        }

        style= {styles.List}
        dataSource={ this.state.artists }
        // renderRow= {this.renderRow}
        renderRow={(item, sId, rId) => this.renderRow(item, sId, rId)}
        enableEmptySections={true}
      />

      </View>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#EAEAEA',

    marginTop: Platform.OS !== 'ios' ? 54 : 64,
  },
  List: {
    flex: 1,
    // margin: 10,
    backgroundColor: '#EAEAEA',
  },
  grievanceCard: {
    margin: 7,
    flexDirection: 'row',
  },
  temp1:{
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    // backgroundColor: 'red',
  },
  temp2:{
    flex: 3,
    // backgroundColor: 'blue'
  },
  text: {
    flex: 9,
    // backgroundColor: 'powderblue',
    flexDirection: 'column',
    justifyContent: 'space-between',
    textAlign: 'left',
    fontSize: 12,
    color: '#333333',
    // backgroundColor: '#f3f3f3',
    // padding: 3
  },

  viewSpace: {
    //flex:1,
    backgroundColor: 'white',
    marginLeft: 2,
    marginRight: 2,
    marginTop: 5,
    marginBottom: 5,
  },

});

// "state.home" is set in reducers/index.js
export default connect(state => ({
    grievanceReducer: state.grievance
  }),
  (dispatch) => ({
    actions: bindActionCreators(grievanceActions, dispatch)
  })
)(Grievances);
