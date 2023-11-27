"use client";

import Form from "./components/form/form";
import { useReducer, ChangeEvent, FormEvent } from "react";
import {
  SET_DISTANCE,
  SET_TIME,
  SET_SPEED,
  SET_NAME,
  SET_PRICE,
  intialState,
} from "./constants/constants";
import type { tDistance, tTime, tName, tPrice } from "./types/types";
import Display from "./components/display/display";
import { getAverageSpeed, getTotalTime } from "./utilities/utilities";
import { formReducer } from "./reducers/formReducer";

export default function Home() {
  const [state, formDispatch] = useReducer(formReducer, intialState);

  const handleDistanceChange = (e: ChangeEvent<HTMLInputElement>) => {
    formDispatch({
      type: SET_DISTANCE,
      payload: parseFloat(e.target.value) as tDistance,
    });
  };

  const handleTimeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    formDispatch({
      type: SET_TIME,
      payload: { ...state.time, [name]: parseInt(value, 10) } as tTime,
    });
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    formDispatch({
      type: SET_NAME,
      payload: e.target.value as tName,
    });
  };
  const handlePriceChange = (e: ChangeEvent<HTMLInputElement>) => {
    formDispatch({
      type: SET_PRICE,
      payload: parseFloat(e.target.value) as tPrice,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const tt = getTotalTime(state.time);
    const aveSpeed = getAverageSpeed(state.distance, tt);
    formDispatch({
      type: SET_SPEED,
      payload: aveSpeed,
    });
  };

  return (
    <main className="bg-slate-800 p-4 h-screen grid place-items-center">
      <Form
        handlePriceChange={handlePriceChange}
        handleNameChange={handleNameChange}
        handleTimeChange={handleTimeChange}
        handleDistanceChange={handleDistanceChange}
        handleSubmit={handleSubmit}
      />
      <Display state={state} />
    </main>
  );
}
