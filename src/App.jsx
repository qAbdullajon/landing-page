import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./layout/MainLayout";
import { Spin } from "antd";
import { LoaderCircle } from "lucide-react";

// Sahifalarni dinamik yuklash
const HomePage = lazy(() => import("./pages/home/main"));
const MainAbout = lazy(() => import("./pages/about/Main"));
const ContactMain = lazy(() => import("./pages/contacts/Main"));
const DealersPage = lazy(() => import("./pages/dilers/Main"));
const ServicesPage = lazy(() => import("./pages/services/Main"));

export default function App() {
  const loadingIcon = <LoaderCircle className="animate-spin" color="black" size={36} />;

  return (
    <Suspense fallback={<div className="w-full h-screen flex items-center justify-center">
      <Spin size="large" indicator={loadingIcon} />
    </div>}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<MainAbout />} />
          <Route path="/contacts" element={<ContactMain />} />
          <Route path="/dealers" element={<DealersPage />} />
          <Route path="/services" element={<ServicesPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
