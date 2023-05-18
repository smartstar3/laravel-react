import React from "react";
import { Container } from "@/components/Atoms/Container";
import { UserMenus } from "./UserMenus";
import { MainMenus } from "./MainMenus";
import { MobileMenu } from "./MobileMenu";

export const Header = () => {
  return (
    <div className="py-5 bg-white shadow-2xl">
      <Container>
        <div className="hidden sm:flex items-center">
          <div className="flex items-center flex-grow mr-10">
            <div className="flex items-center flex-shrink-0">
              <img className="h-10 w-10" src="/assets/images/logo.svg" alt="logo"/>
            </div>

            <div className="flex flex-grow justify-center">
              <MainMenus />
            </div>
          </div>

          <UserMenus />
        </div>

        <div className="flex sm:hidden items-center justify-between">
          <img className="h-10 w-10" src="/assets/images/logo.svg" alt="logo"/>

          <MobileMenu />
        </div>
      </Container>
    </div>
  );
};
