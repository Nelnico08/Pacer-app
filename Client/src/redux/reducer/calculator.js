import { GET_DISTANCE, GET_EQUIVALENCES, GET_PACE, GET_TIME, GET_ZONES, RESET_VALUES } from "../actionTypes";

const initialState = {
  distance: 0,
  time: {},
  pace: {},
  equivalences: [],
  zones: []
};

export const calculator = (state = initialState, action) => {
  switch(action.type){
    case GET_PACE:
      return{
        ...state,
        distance: action.payload.distance,
        time: action.payload.time,
        pace: action.payload.pace
      };
    case GET_TIME:
      return{
        ...state,
        distance: action.payload.distance,
        time: action.payload.time,
        pace: action.payload.pace
      };
    case GET_DISTANCE:
      return{
        ...state,
        distance: action.payload.distance,
        time: action.payload.time,
        pace: action.payload.pace
      };
    case GET_EQUIVALENCES:
      return{
        ...state,
        equivalences: action.payload
      };
    case GET_ZONES:
      return{
        ...state,
        zones: action.payload
      };
    case RESET_VALUES:
      return{
        ...state,
        distance: 0,
        time: {},
        pace: {},
        equivalences: [],
        zones: []
      }
    default:
      return state
  };
};