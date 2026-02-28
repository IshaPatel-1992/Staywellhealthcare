import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";

import VarsityLayout from "@/pages/varsityclinic/VarsityLayout";

// Clinic
import ClinicHomePage from "@/pages/varsityclinic/ClinicHomePage";
import BecomeAPatient from "@/pages/varsityclinic/IntakeFormPage";

// Pharmacy
import PharmacyHomePage from "@/pages/varsitypharmacy/PharmacyHomePage";

// HomeSupplies (example – update import/path to your actual file)
//import HomeSuppliesHomePage from "@/pages/varsitysupplies/HomeSuppliesHomePage";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Landing */}
        <Route path="/" element={<Home />} />

        {/* Clinic */}
        <Route path="/varsityclinic" element={<VarsityLayout />}>
          <Route index element={<ClinicHomePage />} />
          <Route path="become-a-patient" element={<BecomeAPatient />} />
        </Route>

        {/* Pharmacy */}
        <Route path="/varsitypharmacy" element={<VarsityLayout />}>
          <Route index element={<PharmacyHomePage />} />
          {/* If you really want /varsitypharmacy/pharmacy too: */}
          <Route path="pharmacy" element={<PharmacyHomePage />} />
        </Route>

        {/* Home Supplies 
        <Route path="/varsitysupplies" element={<VarsityLayout />}>
          <Route index element={<HomeSuppliesHomePage />} />
        </Route> */}
      </Routes>
    </BrowserRouter>
  );
}