import { Outlet } from "react-router-dom";
import { NavBar } from "../components/navbar";
import Footer from "../components/footer";

export const MainLayout: React.FC = () => {
  return (
    <>
      <div className="w-full flex flex-col bg-[#e9e8e8] mx-auto max-w-[1440px] h-[100vh]"> 
              <NavBar />
              <div className="max-w-[1440px] w-full flex flex-col mx-auto">
              <Outlet />
              </div>
            <div className="w-[1440px] flex flex-col justify-end items-end bg-gray-900">
                <Footer/>
            </div>
      </div>
      

    </>
  );
};