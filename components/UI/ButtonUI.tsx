import { FC, HTMLAttributes } from "react";

export const ButtonUI: FC<{
  type: "submit" | "reset" | "button";
  value: string;
  disabled?: boolean;
  generic?: "primary" | "secondary";
}> = ({ type = "button", value, disabled, generic = "primary" }) => {
  const primary =
    "bg-purple  text-white active:shadow-input active:bg-purple-hover";
  const secondary =
    "text-purple border border-solid border-purple active:bg-light-purple";
  return (
    <button
      type={type}
      className={`flex justify-center items-center w-full py-2 px-4 text-sm font-semibold rounded-lg disabled:opacity-25 ${
        generic === "primary" ? primary : secondary
      }`}
      disabled={disabled}
    >
      {value}
    </button>
  );
};

