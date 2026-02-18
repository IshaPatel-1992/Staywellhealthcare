import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Clinic from "../pages/varsity/Clinic";
import VarsityLayout from "../pages/varsity/VarsityLayout";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* No navbar here (location selection page) */}
        <Route path="/" element={<Home />} />

        {/* Varsity pages share navbar */}
        <Route path="/varsity" element={<VarsityLayout />}>
          <Route path="clinic" element={<Clinic />} />
          {/* Later you can add: */}
          {/* <Route path="pharmacy" element={<Pharmacy />} /> */}
          {/* <Route path="homecare" element={<HomeCare />} /> */}
          {/* <Route path="policies" element={<Policies />} /> */}
          {/* <Route path="new-patients" element={<NewPatients />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
