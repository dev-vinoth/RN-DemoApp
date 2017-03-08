import {Actions} from 'react-native-router-flux'

import * as types from './action-types';
import Network from '../api/network'

export function getGrievances(URL) {
      //console.log('getGrievances URL', URL);
      return dispatch =>  {
        Network.Get(URL, function(res) {
          //console.log('RESPONSE', res);
          //console.log('res',res['current']['temp_c']);
          dispatch({
            type: types.GET_GRIEVANCES,
            payload: res,
          })
        });
      }
}


export const closeDrawer = ()=>{

  Actions.refresh({key: 'drawer', open: value => false})
  // Actions.grievances({title: 'Grievances'})
  // Redux require you to return an object with type.
  return {type: ''}

}
