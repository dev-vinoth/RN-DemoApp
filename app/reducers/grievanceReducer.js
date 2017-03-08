import * as types from '../actions/action-types';

const initialState = {
  grievanceData: [],
};

export default function (state = initialState, action = {}) {
  switch (action.type) {
    case types.GET_GRIEVANCES:
  //console.log('payload',action.payload)
    return {
      ...state,
      grievanceData: action.payload

    };


    default:
      return state;
  }
}
