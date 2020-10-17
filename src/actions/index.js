//action types
export const ADD_TO_RIGHT = "ADD_TO_RIGHT";
export const ADD_TO_LEFT = "ADD_TO_LEFT";
export const REMOVE_FROM_RIGHT = "REMOVE_FROM_RIGHT";
export const REMOVE_FROM_LEFT = "REMOVE_FROM_LEFT";

//action creators
export function addToLeft(list) {
  return {
    type: ADD_TO_LEFT,
    list,
  };
}

export function removeFromLeft(choice) {
  return {
    type: REMOVE_FROM_LEFT,
    choice,
  };
}

export function addToRight(choices) {
  return {
    type: ADD_TO_RIGHT,
    choices,
  };
}

export function removeFromRight(choice) {
  return {
    type: REMOVE_FROM_RIGHT,
    choice,
  };
}
