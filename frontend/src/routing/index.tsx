import React from "react";
import { useAuthState } from "@/hooks/redux";
import { MainRouting } from "@/pages/Main/Routing";
import { AuthRouting } from "@/pages/Auth/Routing";

const Routing = () => {
  const { account } = useAuthState();

  return <>{account ? <MainRouting /> : <AuthRouting />}</>;
};

export default Routing;
