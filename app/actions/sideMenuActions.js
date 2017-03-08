import {Actions} from 'react-native-router-flux'

import * as types from './action-types';

export function routeNavigation(data) {
  console.log(data.route);
  Actions.refresh({key: 'drawer', open: value => false})

  switch (data.route) {
    case types.HOME:
      Actions.all({type: 'replace' })
      return{
        type: data.route
      }
    case types.GRIEVANCES:
      Actions.grievances({type: 'replace' })
      return{
        type: data.route
      }

      break;
    default:

  }

  return dispatch =>  {


  }

}
