import { ReactElement } from "react";

interface ButtonProp {
  variant: "primary" | "secondary";
  startIcon?: ReactElement;
  text: string;
  onClick?: () => void;
  className?: string;
  loading?: boolean;
}

const variantClasses = {
  primary: "bg-purple-600 text-white",
  secondary: "bg-purple-300 text-purple-500",
};

const defaultCss =
  "px-4 py-2 rounded-md font-light flex justify-center items-center gap-2";

export function Button(props: ButtonProp) {
  return (
    <button
      disabled={props.loading}
      onClick={props.onClick}
      className={`${variantClasses[props.variant]} ${defaultCss} ${
        props.className
      } ${props.loading ? "opacity-45" : ""}`}
    >
      {props.startIcon}
      {props.text}
    </button>
  );
}
