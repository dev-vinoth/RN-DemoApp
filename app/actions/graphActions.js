import {Actions} from 'react-native-router-flux'

import * as types from './action-types';
import Network from '../api/network'

export function getNews(URL) {
      //console.log('getGrievances URL', URL);
      return dispatch =>  {
        Network.Get(URL, function(res) {
          //console.log('RESPONSE', res);
          //console.log('res',res['current']['temp_c']);
          dispatch({
            type: types.GET_GRAPH,
            payload: res,
          })
        });
      }
}
