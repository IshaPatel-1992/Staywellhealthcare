import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import VarsityLayout from "@/pages/varsityclinic/VarsityLayout";
import ClinicHomePage from "@/pages/varsityclinic/ClinicHomePage";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/varsityclinic" element={<VarsityLayout />}>
          <Route index element={<ClinicHomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}