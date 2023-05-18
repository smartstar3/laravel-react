import React, { FC, useMemo, useRef } from "react";
import clsx from "classnames";
import { SvgIcon } from "@/components/Atoms";
import { usePopup } from "@/hooks";

type SelectOption = {
  label: string;
  value: string | number;
};

type SelectProps = {
  variant?: "outline" | "no-border";
  className?: string;
  label?: string;
  placeholder?: string;
  options: SelectOption[];
  value: any;
  onChange: (value: any) => void;
  error?: string;
  disabled?: boolean;
};

export const Select: FC<SelectProps> = ({
  className = "",
  label,
  placeholder = "",
  value,
  onChange,
  options,
  error,
  variant,
  disabled,
}) => {
  const ref = useRef(null);
  const { isOpen, toggleMenu, closeMenu } = usePopup(ref);

  const selected = useMemo(() => {
    return options.find((item) => item.value === value);
  }, [value, options]);

  const onSelectItem = (value: any) => {
    closeMenu();
    onChange(value);
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
        className={clsx('flex  w-full cursor-pointer items-center justify-between  border border-solid px-4', {
          "h-10 rounded-2": variant !== "no-border",
          "h-12.5 rounded-3 text-[24px] font-medium": variant === "no-border",
          "border-dark-purple-300": !error && variant !== "no-border",
          "border-transparent text-dark-blue-800": !error && variant === 'no-border' ,
          'border-purple': !error && isOpen,
          "border-error": error,
          "bg-white": variant !== "no-border" && !disabled,
          "bg-blue-20": variant === "no-border" && !disabled,
          "bg-grey-900 border-grey-950 pointer-events-none text-grey": disabled
        })}
        ref={ref}
        onClick={toggleMenu}
      >
        {selected ? <div>{selected.label}</div> : <div className="text-grey">{placeholder}</div>}

        <SvgIcon
          name="arrow-down"
          className={clsx('transition-all duration-150 ease-in', {
            'rotate-180': isOpen,
            'text-red-500': error,
          })}
        />
      </div>

      <div className="relative">
        <div
          className={clsx(
            "absolute top-1 z-10 w-full rounded-3 bg-white transition-all duration-150 ease-in shadow-sm",
            {
              "max-h-80 overflow-auto": isOpen,
              "max-h-0 overflow-hidden py-0 opacity-0": !isOpen,
            }
          )}
        >
          {
            options.length > 0 ? (
              <>
                {options.map((item) => (
                  <div
                    key={item.value}
                    className="cursor-pointer px-4 py-1 hover:bg-blue-20"
                    onClick={() => onSelectItem(item.value)}
                  >
                    {item.label}
                  </div>
                ))}
              </>
            ) : (
              <div className="flex items-center justify-center min-h-30 text-red-500">
                No data
              </div>
            )
          }
        </div>
      </div>

      {error && (
        <p className="mt-1 text-xs leading-[18px] text-red-500">{error}</p>
      )}
    </div>
  );
};
