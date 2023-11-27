import { createContext, ReactNode } from "react";
import { intialState } from "../constants/constants";
import { tState } from "../types/types";

const DataContext = createContext(intialState);

interface DataProviderProps {
  children: ReactNode;
}

export default function DataProvider({ children }: DataProviderProps) {
  const state: tState = intialState;
  return <DataContext.Provider value={state}>{children}</DataContext.Provider>;
}
