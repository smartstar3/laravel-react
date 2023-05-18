import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { ROUTES } from "@/constants";
import { FullLayout } from "@/components/Layouts";

import { Dashboard } from "@/pages/Main/Dashboard";
import { Products } from "@/pages/Main/Products";
import { About } from "@/pages/Main/About";
import {Faqs} from "@/pages/Main/Faqs";

export const MainRouting = () => {
  return (
    <FullLayout>
      <Routes>
        <Route path={ROUTES.MAIN.DASHBOARD} element={<Dashboard />} />
        <Route path={ROUTES.MAIN.PRODUCTS} element={<Products />} />
        <Route path={ROUTES.MAIN.FAQS} element={<Faqs />} />
        <Route path={ROUTES.MAIN.ABOUT} element={<About />} />

        <Route path="*" element={<Navigate to={ROUTES.MAIN.PRODUCTS} />} />
      </Routes>
    </FullLayout>
  );
};
