import React from "react";
import HomePage from "./pages/home/main";
import { MainAbout } from "./pages/about/Main";
import { MainLayout } from "./layout/MainLayout";
import { Route, Routes } from "react-router-dom";
import { ContactMain } from "./pages/contacts/Main";
import { DealersPage } from "./pages/dilers/Main";
import { ServicesPage } from "./pages/services/Main";

export default function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<MainAbout />} />
          <Route path="/contacts" element={<ContactMain />} />
          <Route path="/dealers" element={<DealersPage />} /> 
          <Route path="/services" element={<ServicesPage />} />
        </Route>
      </Routes>
    </>
  );
}
