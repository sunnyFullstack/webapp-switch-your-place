import React from "react";
import clsx from "clsx";

type Variant = "primary" | "secondary" | "danger" | "success" | "neutral";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  icon,
  className,
  ...props
}) => {
  const baseClasses =
    "px-4 py-2 rounded-lg text-white font-medium focus:outline-none transition";

  const variantClasses: Record<Variant, string> = {
    primary: "bg-blue-600 hover:bg-blue-700",
    secondary: "bg-gray-600 hover:bg-gray-700",
    danger: "bg-red-600 hover:bg-red-700",
    success: "bg-green-600 hover:bg-green-700",
    neutral: "bg-gray-300 text-black hover:bg-gray-400",
  };

  return (
    <button
      className={clsx(baseClasses, variantClasses[variant], className)}
      {...props}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
