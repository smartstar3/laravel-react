import React, { MouseEvent } from "react";

import { ReactComponent as ArrowDownSvg } from "./svg/chevron-down.svg";
import { ReactComponent as BellSvg } from "./svg/bell.svg";
import { ReactComponent as EyeSvg } from "./svg/eye.svg";
import { ReactComponent as LogOutSvg } from "./svg/log-out.svg";
import { ReactComponent as EyeOffSvg } from "./svg/eye-off.svg";
import { ReactComponent as MenuSvg } from "./svg/menu.svg";
import { ReactComponent as SearchSvg } from "./svg/search.svg";
import { ReactComponent as StarSvg } from "./svg/star.svg";
import { ReactComponent as StarFilledSvg } from "./svg/star-filled.svg";
import { ReactComponent as SpinnerSvg } from "./svg/spinner.svg";

const iconsMap: Record<string, React.FC> = {
  "arrow-down": ArrowDownSvg,
  bell: BellSvg,
  eye: EyeSvg,
  "eye-off": EyeOffSvg,
  menu: MenuSvg,
  "log-out": LogOutSvg,
  search: SearchSvg,
  spinner: SpinnerSvg,
  star: StarSvg,
  "star-filled": StarFilledSvg,
};

interface SvgIconProps {
  className?: string;
  name: string;
  onClick?: (e: MouseEvent<HTMLOrSVGElement>) => void;
  strokeWidth?: number;
  width?: number;
  height?: number;
}

export const SvgIcon = ({ className, name, ...others }: SvgIconProps) => {
  const Component = iconsMap[name];

  if (!Component) {
    return <div />;
  }

  return React.cloneElement(<Component data-testid="svg-icon" />, {
    className,
    ...others,
  });
};
