"use client";

import type { tFormProps } from "@/app/types/types";
import Input from "./input";
import Label from "./label";

export default function Form({
  handleNameChange,
  handleDistanceChange,
  handleTimeChange,
  handlePriceChange,
  handleSubmit,
}: tFormProps) {
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-transparent text-white w-2/3  mx-auto flex flex-col gap-3"
    >
      <fieldset className="border-2 border-emerald-500 p-4 rounded-md flex flex-col">
        <legend className="border-2 border-emerald-500 px-4 py-2 rounded-md">
          Inputs
        </legend>

        <div className="grid grid-cols-7 grid-rows-4 gap-3 items-center">
          <Label id="distance">distance</Label>
          <Input
            styles="col-span-6"
            id="distance"
            inputType="number"
            step="0.5"
            min="0"
            max="10000"
            inputName="distance"
            placeholder="in km"
            handleChange={handleDistanceChange}
          />

          <Label id="time">time</Label>
          <Input
            styles="col-span-2"
            id="time"
            inputType="number"
            inputName="hours"
            step="1"
            min="0"
            max="1000000"
            placeholder="in hours"
            handleChange={handleTimeChange}
          />

          <Input
            styles="col-span-2"
            id="minutes"
            inputType="number"
            inputName="minutes"
            step="1"
            min="0"
            max="59"
            placeholder="in minutes"
            handleChange={handleTimeChange}
          />

          <Input
            styles="col-span-2"
            id="seconds"
            inputType="number"
            inputName="seconds"
            step="1"
            min="0"
            max="59"
            placeholder="in seconds"
            handleChange={handleTimeChange}
          />

          <Label id="name">name</Label>
          <Input
            styles="col-span-6"
            id="name"
            inputType="text"
            inputName="name"
            placeholder="name [OPTIONAL]"
            handleChange={handleNameChange}
          />

          <Label id="price">price</Label>
          <Input
            styles="col-span-4"
            id="price"
            inputType="number"
            inputName="price"
            step="0.1"
            min="0"
            max="1000000"
            placeholder="sek [OPTIONAL]"
            handleChange={handlePriceChange}
          />
        </div>
      </fieldset>
      <button
        className="bg-emerald-700 px-4 py-2 rounded flex-1 w-1/2"
        type="submit"
      >
        Calculate
      </button>
    </form>
  );
}
