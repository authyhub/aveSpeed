import { ChangeEvent, FormEvent } from "react";
import { SET_DISTANCE, SET_TIME, SET_SPEED } from "./constants/constants";

export type tTime = {
  hours: number;
  minutes: number;
  seconds: number;
};

export type tDistance = number;
export type tSpeed = number;
export type tPrice = number;
export type tName = string;

export type tSetDistanceAction = {
  type: typeof SET_DISTANCE;
  payload: tDistance;
};

export type tSetNameAction = {
  type: typeof SET_NAME;
  payload: tName;
};
export type tSetTimeAction = {
  type: typeof SET_TIME;
  payload: tTime;
};

export type tSetPriceAction = {
  type: typeof SET_PRICE;
  payload: tPrice;
};

export type tSetSpeedAction = {
  type: typeof SET_SPEED;
  payload: tSpeed;
};

export type tState = {
  distance: tDistance;
  time: tTime;
  speed?: tSpeed;
  name?: tName;
  price?: tPrice | null;
};

export type tAction = tSetDistanceAction | tSetTimeAction | tSetSpeedAction;

export type tReducer = (state: tState, action: tAction) => tState;

export type tInputChange = (e: ChangeEvent<HTMLInputElement>) => void;
export type tFormSubmit = (e: FormEvent<HTMLFormElement>) => void;

export type tFormProps = {
  state?: tState;
  handleDistanceChange: tInputChange;
  handleTimeChange: tInputChange;
  handleNameChange: tInputChange;
  handlePriceChange: tInputChange;
  handleSubmit: tFormSubmit;
};

export type InputProps = {
  id: string;
  inputType: string;
  inputName: string;
  placeholder?: string;
  styles?: string;
  step?: string;
  min?: string;
  max?: string;
  handleChange: tInputChange;
};

export type LabelProps = {
  children: string;
  id?: string;
};

export type tDisplayProps = {
  state: tState;
};
