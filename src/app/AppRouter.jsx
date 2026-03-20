import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";

import VarsityLayout from "@/pages/varsityclinic/VarsityLayout";

// Clinic
import ClinicHomePage from "@/pages/varsityclinic/ClinicHomePage";

// Pharmacy
import PharmacyHomePage from "@/pages/varsitypharmacy/PharmacyHomePage";
import PrescribingPharmacist from "@/pages/varsitypharmacy/PrescribingPharmacist";
import ScrollToTop from "@/components/common/ScrollToTop";




// HomeSupplies (example – update import/path to your actual file)
//import HomeSuppliesHomePage from "@/pages/varsitysupplies/HomeSuppliesHomePage";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <ScrollToTop />   {/* ✅ self-closing, not wrapping */}
      <Routes>
        {/* Landing */}
        <Route path="/" element={<Home />} />

        {/* Clinic */}
        <Route path="/varsityclinic" element={<VarsityLayout />}>
          <Route index element={<ClinicHomePage />} />
        </Route>

        {/* Pharmacy */}
        <Route path="/varsitypharmacy" element={<VarsityLayout />}>
          <Route index element={<PharmacyHomePage />} />
          <Route path="pharmacy" element={<PharmacyHomePage />} />

          {/* ✅ Only real page */}
          <Route path="PrescribingPharmacist" element={<PrescribingPharmacist />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}