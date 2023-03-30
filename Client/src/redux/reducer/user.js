import { CHANGE_LANGUAGE } from "../actionTypes/index";

const initialState = {
  language: 'EN'
}

export const user = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      return{
        ...state,
        language: action.payload
      }
    default:
      return state
  }
}