import React from "react";
import { useAuthState } from "@/hooks/redux";

export const About = () => {
  const { account } = useAuthState();

  return (
    <div>
      <h1 className="text-2xl font-medium mb-1">
        Welcome, {account?.name}!
      </h1>

      <p>About page is coming soon</p>
    </div>
  )
}
