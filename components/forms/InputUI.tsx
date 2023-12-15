import { InputType } from "@/types/Input";
import { FC } from "react";

export const InputUI: FC<{
  srText?: string;
  children?: React.ReactNode;
  type?: "text" | "email" | "file" | "url" | "password";
  title: string;
  placeholder: string;
  name: string;
  value: string;
  changeHandler: (value: InputType) => void;
}> = ({
  srText,
  children,
  type,
  title,
  placeholder,
  name,
  value,
  changeHandler,
}) => {
  return (
    <label className="relative block" htmlFor={name}>
      <span className="text-xs font-normal text-dark-gray mb-2">{title}</span>
      <span className="sr-only">{srText}</span>
      <span className="absolute top-1/2 flex items-center pl-2 left-0">
        <svg
          className="h-5 w-5 fill-gray"
          viewBox="0 0 16 16"
          height={16}
          width={16}
          fill="none"
        >
          {children}
        </svg>
      </span>
      <input
        id={name}
        name={name}
        type={type}
        className="placeholder:text-dark-gray 
        placeholder:opacity-50 block
        text-dark-gray w-full border border-border
        focus:shadow-input rounded-lg py-2 pl-9 pr-3 focus:outline-none
     focus:border-purple 
        text-sm"
        placeholder={placeholder}
        onChange={(e) => changeHandler(e)}
        value={value}
      />
    </label>
  );
};
