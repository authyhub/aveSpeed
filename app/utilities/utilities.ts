import type { tDistance, tPrice, tTime } from "../types/types";

export const getTotalTime = (t: tTime): number =>
  t.hours + t.minutes / 60 + t.seconds / 3600;

export const getAverageSpeed = (s: number, t: number): number => {
  const v = s / t;
  return v;
};
export const getPricePerKm = (p: tPrice, s: tDistance): number | null => {
  return s > 0 ? p / s : null;
};
