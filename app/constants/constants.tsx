import { tState } from "../types/types";

export const SET_DISTANCE = "SET_DISTANCE";
export const SET_TIME = "SET_TIME";
export const SET_SPEED = "SET_SPEED";
export const SET_NAME = "SET_NAME";
export const SET_PRICE = "SET_PRICE";
export const intialState: tState = {
  distance: 0,
  time: {
    hours: 0,
    minutes: 0,
    seconds: 0,
  },
  speed: 0,
  name: "",
  price: null,
};
