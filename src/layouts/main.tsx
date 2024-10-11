import { Outlet } from "react-router-dom";
import { NavBar } from "../components/navbar";
import Footer from "../components/footer";

export const MainLayout: React.FC = () => {
  return (
    <>
      <div className="flex gap-5 bg-[#f9fafb] h-[84vh]">
        <NavBar />
        <Outlet />
      </div>
      <Footer/>
    </>
  );
};