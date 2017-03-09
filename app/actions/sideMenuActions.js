import {Actions} from 'react-native-router-flux'

import * as types from './action-types';

export function routeNavigation(data) {
  console.log(data.route);

  switch (data.route) {
    case types.HOME:
      Actions.refresh({key: 'drawer', open: value => false})
      Actions.all({type: 'replace' })
      return dispatch =>{
        type: types.HOME
      }
    case types.GRIEVANCES:
      Actions.refresh({key: 'drawer', open: value => false})
      Actions.grievances({type: 'replace' })
      return dispatch =>{
        type: types.GRIEVANCES
      }

      break;
    default:

  }

  return dispatch =>  {
    Actions.refresh({key: 'drawer', open: value => false})
  }

}
