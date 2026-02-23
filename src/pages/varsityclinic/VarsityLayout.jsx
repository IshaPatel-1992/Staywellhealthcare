import { Outlet } from "react-router-dom";
import NavbarClinic from "@/components/varsityclinic/NavbarClinic";

export default function VarsityLayout() {
  return (
    <>
      <NavbarClinic />
      <Outlet />
    </>
  );
}