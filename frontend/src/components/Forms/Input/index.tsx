import React, {
  ChangeEvent,
  FC,
  InputHTMLAttributes,
  MouseEvent,
  useState,
} from "react";
import clsx from "classnames";
import { SvgIcon } from "@/components/Atoms";

type InputProps = {
  className?: string;
  label?: string;
  value?: string | number;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  prefixIcon?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input: FC<InputProps> = ({
  label,
  type,
  className = "",
  error,
  prefixIcon,
  ...props
}) => {
  const [defaultType, setDefaultType] = useState(true);

  const onClickVisible = (e: MouseEvent<HTMLOrSVGElement>) => {
    e.stopPropagation();
    setDefaultType(!defaultType);
  };

  return (
    <div className={`${className}`}>
      {label && (
        <p
          className={clsx("mb-1 text-xs", {
            "text-dark-purple-300": !error,
            "text-red-500": error,
          })}
        >
          {label}
        </p>
      )}

      <div
        className={clsx(
          "relative flex h-10 w-full items-center rounded-2 bg-white px-4 border border-solid",
          {
            "border-dark-purple-300 focus-within:border-purple": !error,
            "border-error focus-within:border-error": error,
          }
        )}
      >
        {
          prefixIcon && (
            <SvgIcon name={prefixIcon} className="h-4 w-4 mr-2" />
          )
        }
        <input
          className={clsx(
            "w-full text-dark-purple-300 outline-0 focus:text-black",
            {
              "pr-5": type === "password",
            }
          )}
          type={defaultType ? type : "text"}
          {...props}
        />

        {type === "password" && (
          <SvgIcon
            className={clsx(
              "absolute right-4 h-4 w-4 hover:cursor-pointer hover:text-purple",
              {}
            )}
            name={defaultType ? "eye" : "eye-off"}
            onClick={onClickVisible}
          />
        )}
      </div>

      {error && (
        <p className="mt-1 text-xs leading-[18px] text-red-500">{error}</p>
      )}
    </div>
  );
};
