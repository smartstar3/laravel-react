import React, { FC, ReactNode } from "react";
import { Header } from "./Header";
import { Container } from "@/components/Atoms/Container";

type FullLayoutProps = {
  children: ReactNode;
};

export const FullLayout: FC<FullLayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen w-screen">
      <div className="max-h-screen w-0 flex-grow overflow-y-auto bg-white">
        <Header />

        <div className="py-10">
          <Container>
            {children}
          </Container>
        </div>
      </div>
    </div>
  );
};
