import {Actions} from 'react-native-router-flux'

import * as types from '../actions/action-types';

const initialState = {
  menuData: [
    {
      route: types.HOME,
      title: 'Home',
    },
    {
      route: types.GRIEVANCES,
      title: 'Grievances',
    },
    {
      route: types.KNOW_MY_TAX,
      title: 'Know My Tax',
    },
    {
      route: types.TAX_CALCULATOR,
      title: 'Tax Calculator',
    },
    {
      route: types.TAX_PAYMENT,
      title: 'Tax Payment',
    },
    {
      route: types.BIRTH_CERTIFICATE,
      title: 'Birth Certificate',
    },
    {
      route: types.DEATH_CERTIFICATE,
      title: 'Death Certificate',
    },
    {
      route: types.LOGOUT,
      title: 'Logout',
    },
  ],
};

export default function (state = initialState, action = {}) {

  return state
  /*
  switch (action.type) {
    case types.HOME:
  //console.log('payload',action.payload)
    console.log('ACTION TYPE', action.type);
    // Actions.home({type: 'replace' })
    return {
      ...state,
    };

    case types.GRIEVANCES:
    //console.log('payload',action.payload)
    // Actions.grievances({type: 'replace' })
    return {
      ...state,
    };

    default:
      return state;
  }
  */
}
