import React, {Component} from 'react';
import { Provider, connect } from 'react-redux';
import { Actions, Router, Scene } from 'react-native-router-flux'

import {
  View,
  Text,
  Image,
  ListView,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';

// import * as reducers from './reducers/reducer-index';
import configureStore from './store/configure-store'

import NavigationDrawer from './utils/navigation_drawer'
import All from './containers/All';
import Home from './containers/home';
import Grievances from './containers/grievances';
import Graph from './containers/graph';

const ConnectedRouter = connect()(Router)
const store = configureStore()

// const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
// const reducer = combineReducers(reducers);
// const store = createStoreWithMiddleware(reducer);

const TabIcon = ({ selected, title }) => {
  return (
    <Text style={{color: selected ? 'red' :'black'}}>{title}</Text>
  );
}

const Scenes = Actions.create(
  <Scene key='root'>
    <Scene key="drawer" component={NavigationDrawer} open={false} >
      <Scene key='wrapper'>
        <Scene key='all' component={All} title='CCMC' />
        <Scene key='home' component={Home} title='Home' />
        <Scene key='grievances' component={Grievances} title='Grievances'/>
        <Scene key='graph' component={Graph} title='News' />
      </Scene>
    </Scene>
  </Scene>
)

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter
          drawerImage={require('./assets/hamburger_menu/ic_menu.png')}
          navigationBarStyle={styles.navBar}
          titleStyle={styles.navBarTitle}
          barButtonTextStyle={styles.barButtonTextStyle}
          barButtonIconStyle={styles.barButtonIconStyle}
          scenes={Scenes}/>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  navBar: {
      backgroundColor:'#5FBFBE',
      borderBottomColor: 'transparent',
  },
  navBarTitle:{
      color:'#FFFFFF'
  },
  barButtonTextStyle:{
      color:'#FFFFFF'
  },
  barButtonIconStyle:{
      tintColor:'rgb(255,255,255)'
  },
});


{/* <Scene key="drawer" component={NavigationDrawer} open={false} >
  <Scene key="wrapper" >
    <Scene key='all' component={All} title='CCMC' />
    <Scene key='home' component={Home} title='Home' />
    <Scene key='grievances' component={Grievances} />
  </Scene>
</Scene> */}

//TABBar Controller
// const Scenes = Actions.create(
//   <Scene key='root'>
//     <Scene key='home' component={Home} title='Home' />
//     <Scene key='grievances' component={Grievances} />
//   </Scene>
//
//   <Scene key="root">
//     {/* Tab Container */}
//     <Scene
//       key="tabbar"
//       tabs={true}
//       tabBarStyle={{ backgroundColor: '#FFFFFF' }}
//     >
//       {/* Tab and it's scenes */}
//       <Scene key="home" title="Home" icon={TabIcon}>
//         <Scene key="scarlet"
//           component={Home}
//           title="Scarlet"
//         />
//       </Scene>
//
//       {/* Tab and it's scenes */}
//       <Scene key="grievances" title="Grievances" icon={TabIcon}>
//         <Scene
//           key="blue"
//           component={Grievances}
//           title="Blue"
//         />
//       </Scene>
//
//       {/* Tab and it's scenes */}
//       {/* <Scene key="vu" title="VU" icon={TabIcon}>
//         <Scene
//           key="gold"
//           component={GoldScreen}
//           title="Gold"
//         />
//         <Scene
//           key="black"
//           component={BlackScreen}
//           title="Black"
//         />
//       </Scene>*/}
//     </Scene>
//   </Scene>
// )
