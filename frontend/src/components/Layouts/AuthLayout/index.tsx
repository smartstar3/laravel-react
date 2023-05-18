import React, { FC, ReactNode } from "react";

type AuthLayoutProps = {
  children: ReactNode;
};

export const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-white px-5">
      {children}
    </div>
  );
};
