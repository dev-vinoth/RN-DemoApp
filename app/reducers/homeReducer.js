import * as types from '../actions/action-types';

const initialState = {
  // temp_c: '',
  // weather_condition: '',
  // icon: '',
  // location: '',

  ccmcLogo: 'http://egovreach.in/social/sites/default/files/icon-LogoCMC_0.jpg',
  location: 'Coimbatore, India',
  weather_condition: 'Partly cloudy',
  temp_c: '27 °C',
  icon: '//cdn.apixu.com/weather/64x64/night/116.png'
};

export default function (state = initialState, action = {}) {
  switch (action.type) {
    case types.GET_WEATHER:
    //console.log(action.payload)
    return {
      ...state,
      temp_c: action.payload['current']['temp_c'] + '°C',
      weather_condition: action.payload['current']['condition']['text'],
      icon: action.payload['current']['condition']['icon'],
      location: action.payload['location']['name'] + ',' + action.payload['location']['region'],
    };

    default:
      return state;
  }
}
