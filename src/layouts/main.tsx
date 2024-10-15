import { Outlet } from "react-router-dom";
import { NavBar } from "../components/navbar";
import Footer from "../components/footer";
import { AiOutlineArrowRight } from "react-icons/ai";

export const MainLayout: React.FC = () => {
  return (
    <>
      <div className="w-full flex flex-col bg-[#e9e8e8] mx-auto max-w-[1920px] h-[100vh]">
          <div className="w-full flex  overflow-hidden">
            <div className="overflow-visible max-w-[290px] w-full">
              <NavBar />
            </div>
            <div className="overflow-auto max-w-[1900px] w-full ">
            <button className="text-3xl absolute mt-2 left-[1860px] hover:text-sky-400"><AiOutlineArrowRight /></button>
              <Outlet />
            </div>
          </div>
        <div className="w-[1900px] flex flex-col justify-end items-end bg-gray-900">
            <Footer/>
        </div>
      </div>
      

    </>
  );
};