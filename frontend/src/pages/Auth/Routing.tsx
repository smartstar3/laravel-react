import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AuthLayout } from "@/components/Layouts";
import { ROUTES } from "@/constants";
import { Login } from "@/pages/Auth/Login";

export const AuthRouting = () => {
  return (
    <AuthLayout>
      <Routes>
        <Route path={ROUTES.AUTH.LOGIN} element={<Login />} />
        <Route path="*" element={<Navigate to={ROUTES.AUTH.LOGIN} />} />
      </Routes>
    </AuthLayout>
  );
};