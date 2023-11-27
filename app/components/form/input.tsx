import { InputProps, tInputChange } from "@/app/types/types";

type TCommonAttributes = {
  type: string;
  id: string;
  name: string;
  className: string;
  placeholder?: string;
  autoComplete?: boolean;
  onChange: tInputChange;
};

export default function Input({
  id,
  inputType,
  inputName,
  placeholder,
  styles,
  step,
  min,
  max,
  handleChange,
}: InputProps) {
  const baseStyles = `bg-emerald-800 border border-slate-700 text-white rounded h-8 px-2 ${styles}`;
  const commonAttributes: TCommonAttributes = {
    type: inputType,
    id,
    name: inputName,
    placeholder,
    //autoComplete: false,
    className: baseStyles,
    onChange: handleChange, // You can apply your own styling class
  };

  const numberAttributes = inputType === "number" ? { min, max, step } : {};

  // Combine common and type-specific attributes
  const inputAttributes = { ...commonAttributes, ...numberAttributes };

  return <input {...inputAttributes} />;
}
