import React, { FC } from "react";
import ReactAvatar from "react-avatar";

type AvatarProps = {
  src?: string;
  name?: string;
  size?: string;
  round?: boolean;
  maxInitials?: number;
  className?: string;
}

export const Avatar: FC<AvatarProps> = ({
  src,
  name,
  size = 'md',
  round,
  maxInitials,
  className = ''
}) => {
  return (
    <ReactAvatar
      className={className}
      src={src}
      name={name}
      size={size}
      round={round}
      maxInitials={maxInitials}
    />
  );
}