import type { LabelProps } from "@/app/types/types";

export default function Label({ children, id }: LabelProps) {
  return (
    <label
      className="capitalize text-right inline-block w-full  col-span-1"
      htmlFor={id}
    >
      {children}
    </label>
  );
}
