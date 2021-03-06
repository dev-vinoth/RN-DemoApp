// import homeReducer from './reducer-home';
//
// export {
//   homeReducer
// };


import {combineReducers} from 'redux'
import nav, * as fromNav from './navReducers'
import home, * as fromHome from './homeReducer'
import grievance, * as fromGrievance from './grievanceReducer'
import sideMenu, * as fromSideMenu from './sideMenuReducer'
import graph, * as fromGraph from './graphReducer'

export default combineReducers({
  nav,
  home,
  grievance,
  sideMenu,
  graph,
})
