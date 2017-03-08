import * as types from '../actions/action-types';

const initialState = {
  newsData: [],
};

export default function (state = initialState, action = {}) {
  switch (action.type) {
    case types.GET_NEWS:
  //console.log('payload',action.payload)
    return {
      ...state,
      newsData: action.payload

    };


    default:
      return state;
  }
}
