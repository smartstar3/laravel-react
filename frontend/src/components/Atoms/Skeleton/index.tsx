import React, { FC } from "react";

type SkeletonProps = {
  className?: string;
};

export const Skeleton: FC<SkeletonProps> = ({ className = "" }) => {
  return (
    <div
      className={`h-5 w-full animate-pulse rounded-3 bg-gray-300 ${className}`}
    />
  );
};
