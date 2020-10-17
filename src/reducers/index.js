import { combineReducers } from "redux";

import {
  ADD_TO_RIGHT,
  REMOVE_FROM_RIGHT,
  ADD_TO_LEFT,
  REMOVE_FROM_LEFT,
} from "../actions";

const initialLeftState = {
  list: [],
  choices: [],
};

export function left(state = initialLeftState, action) {
  switch (action.type) {
    case ADD_TO_LEFT:
      return {
        ...state,
        list: action.list,
      };
    case REMOVE_FROM_LEFT:
      return {
        ...state,
        choices: state.choices.filter((choice) => choice !== action.choice),
      };
    default:
      return state;
  }
}

const initialRightState = {
  choices: [],
};

export function right(state = initialRightState, action) {
  switch (action.type) {
    case ADD_TO_RIGHT:
      return {
        ...state,
        choices: action.choices,
      };
    case REMOVE_FROM_RIGHT:
      return {
        ...state,
        choices: state.choices.filter((choice) => choice !== action.choice),
      };
    default:
      return state;
  }
}

export default combineReducers({
  left,
  right,
});
