import * as types from '../actions/action-types';

const initialState = {
  graphData: [
    [0, 10],
    [1, 3],
    [3, 77],
    [4, 67],
    [6, 34],
    [8, 11],
    [12, 52],
    [14, 84],
  ],
};

export default function (state = initialState, action = {}) {
  switch (action.type) {
    case types.GET_GRAPH:
  //console.log('payload',action.payload)
    return {
      ...state,
      // graphData: action.payload

    };


    default:
      return state;
  }
}
