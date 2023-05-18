import React, { ButtonHTMLAttributes, FC, ReactNode } from "react";
import clsx from "classnames";
import { SvgIcon } from "@/components/Atoms";

type ButtonProps = {
  children: ReactNode | ReactNode[];
  className?: string;
  size?: "sm" | "md" | "lg";
  loading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<ButtonProps> = ({
  children,
  className = "",
  size = "md",
  loading,
  disabled,
  ...props
}) => {
  return (
    <button
      className={clsx(
        `relative flex items-center justify-center font-medium ${className}`,
        {
          'py-2 px-7 rounded-3': size === 'md',
          'py-1 px-4 rounded-1 text-xs': size === 'sm',
          "bg-gray-400": loading || disabled,
          "text-white": disabled,
          "text-transparent": loading,
          "bg-amber-500 text-white hover:bg-amber-600 active:bg-amber-700": !(loading || disabled),
        },
      )}
      disabled={loading || disabled}
      {...props}
    >
      {loading && (
        <div className="absolute left-1/2 -translate-x-1/2">
          <SvgIcon className="h-6 w-6 animate-spin text-white" name="spinner" />
        </div>
      )}

      {children}
    </button>
  );
};
