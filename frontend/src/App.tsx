import React from "react";
import { ToastContainer } from "react-toastify";
import Routing from "@/routing";
import { ThemeProvider } from "@material-tailwind/react";
import { AuthProvider } from "@/providers/AuthProvider";

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Routing />
        <ToastContainer
          position="top-right"
          theme="colored"
        />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
