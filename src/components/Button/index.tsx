import React, { ButtonHTMLAttributes } from "react";
import Spinner from "../Spinner";

type ButtonProps = {
  isLoading?: boolean;
  variant?: "primary" | "warning" | "secondary" | "success" | "dark";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
};

const Button = React.forwardRef<
  HTMLButtonElement,
  ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>
>(({ isLoading = false, variant = "primary", size = "md", ...props }, ref) => {
  const getColor = () => {
    switch (variant) {
      case "primary":
        return "bg-indigo-600";
      case "warning":
        return "bg-orange-400";
      case "secondary":
        return "bg-gray-400";
      case "success":
        return "bg-green-500";
      case "dark":
        return "bg-gray-800";
    }
  };
  const getSize = () => {
    switch (size) {
      case "xs":
        return "py-2 px-4 text-xs";
      case "sm":
        return "py-2 px-4 text-sm";
      case "md":
        return "py-2 px-6";
      case "lg":
        return "py-2 px-8 text-lg";
      case "xl":
        return "py-2 px-12 text-2xl";
    }
  };
  const { className, disabled, children } = props;
  return (
    <button
      {...props}
      className={`${getColor()} ${getSize()} ${
        disabled || isLoading
          ? "opacity-50 cursor-not-allowed"
          : "hover:opacity-80 cursor-pointer"
      } flex items-center justify-center transition-all text-white font-semibold py-2 px-4 rounded-lg ${
        className ?? ""
      }`}
      disabled={disabled || isLoading}
      ref={ref}
    >
      {isLoading ? (
        <div className="flex justify-center items-center">
          <Spinner />
          <span>Loading...</span>
        </div>
      ) : (
        <>{children}</>
      )}
    </button>
  );
});

export default Button;
