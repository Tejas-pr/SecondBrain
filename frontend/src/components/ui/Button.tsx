export type Variants = "primary" | "secondary";
export interface ButoonType {
  variant: Variants;
  onClick?: () => void;
  size: "sm" | "md" | "lg";
  startIcon?: any;
  endIcon?: any;
  text: string;
}

const defaultStyle = "rounded-md p-4 flex";

const variantsStyle = {
  primary: "bg-purple-600 text-white",
  secondary: "bg-purple-300 text-purple-500",
};

const sizeStyle = {
  sm: "py-1 px-2",
  md: "py-2 px-4",
  lg: "py-3 px-6",
};

export const Button = (props: ButoonType) => {
  return (
    <button
      className={`${variantsStyle[props.variant]} ${defaultStyle} ${
        sizeStyle[props.size]
      }`}
    >
      {props.startIcon ? <div className="pr-2">{props.startIcon}</div> : null}{" "}
      {props.text} {props.endIcon}
    </button>
  );
};
