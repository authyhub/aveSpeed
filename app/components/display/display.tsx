import type { tDisplayProps } from "@/app/types/types";
import { getPricePerKm } from "@/app/utilities/utilities";
import DisplayArticle from "./displayArticle";

export default function Display({ state }: tDisplayProps) {
  console.log("Price: ", state.price);
  const pricePerKm = state.price && getPricePerKm(state.price, state.distance);
  console.log("pricePerKm: ", pricePerKm);
  return (
    <section className="bg-emerald-900 rounded text-2xl h-fit text-white w-2/3 mx-auto flex flex-col gap-2 flex-1 p-4">
      {state.name && <DisplayArticle label="name" value={state.name} unit="" />}

      <DisplayArticle
        label="speed"
        value={state.speed?.toFixed(2)}
        unit="km/h"
      />

      {pricePerKm && (
        <DisplayArticle
          label="price/km"
          value={pricePerKm.toFixed(2)}
          unit="sek/km"
        />
      )}
    </section>
  );
}
