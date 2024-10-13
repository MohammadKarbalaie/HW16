import { Outlet } from "react-router-dom";
import { NavBar } from "../components/navbar";
import Footer from "../components/footer";

export const MainLayout: React.FC = () => {
  return (
    <>
      <div className="w-full flex flex-col bg-[#e9e8e8] mx-auto max-w-[1920px] h-[100vh]">
          <div className="w-full flex max-h-[93vh] overflow-hidden">
            <div className="overflow-visible max-w-[290px] w-full max-h-[920vh] h-full ">
              <NavBar />
            </div>
            <div className="overflow-auto max-w-[1920px] w-full max-h-[920vh] h-full">
              <Outlet />
            </div>
          </div>
        <div className="w-[1920px] flex flex-col justify-end items-end bg-gray-900">
            <Footer/>
        </div>
      </div>
      

    </>
  );
};