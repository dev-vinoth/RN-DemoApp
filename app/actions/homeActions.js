
import {Actions} from 'react-native-router-flux'

import * as types from './action-types';
import Network from '../api/network'

export function getWeather(URL) {
      //console.log('getWeather URL', URL);

      return dispatch =>  {
        Network.Get(URL, function(res) {
          //console.log('RESPONSE',res);
          //console.log('res',res['current']['temp_c']);
          dispatch({
            type: types.GET_WEATHER,
            payload: res,
            // temp_c: res['current']['temp_c'],
            // weather_condition: res['current']['condition']['text'],
            // icon: res['current']['condition']['icon'],
            // location: res['location']['name'],
            // region: res['location']['region']
          })
        });
      }
}


export const goToGrievances = ()=>{
  // Actions.refresh({key: 'drawer', open: value => !value });
  Actions.grievances({title: 'Grievances'})
  // Redux require you to return an object with type.
  return {type: types.GRIEVANCES_PUSH}
}

export const closeDrawer = ()=>{
  Actions.refresh({key: 'drawer', open: value => false})
  // Redux require you to return an object with type.
  return {type: ''}
}
