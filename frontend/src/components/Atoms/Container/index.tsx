import React, {FC, ReactNode} from "react";

type ContainerProps = {
  className?: string;
  children: ReactNode
}

export const Container: FC<ContainerProps> = ({ className = '', children }) => {
  return (
    <div className={`px-5 2xl:px-0 max-w-300 mx-auto ${className}`}>
      {children}
    </div>
  )
}
