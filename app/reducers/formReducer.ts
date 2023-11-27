import {
  SET_DISTANCE,
  SET_NAME,
  SET_PRICE,
  SET_SPEED,
  SET_TIME,
} from "../constants/constants";
import {
  tDistance,
  tName,
  tPrice,
  tReducer,
  tSpeed,
  tTime,
} from "../types/types";

export const formReducer: tReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_DISTANCE:
      return {
        ...state,
        distance: payload as tDistance,
      };

    case SET_TIME:
      return {
        ...state,
        time: payload as tTime,
      };

    case SET_NAME:
      return {
        ...state,
        name: payload as tName,
      };
    case SET_PRICE:
      return {
        ...state,
        price: payload as tPrice,
      };
    case SET_SPEED:
      return {
        ...state,
        speed: payload as tSpeed,
      };

    default:
      return state;
  }
};
