import React from 'react';  
import { AiOutlineClose } from "react-icons/ai";
interface ModalProps {  
  isOpen: boolean;  
  onClose: () => void;  
  children: React.ReactNode;  
}  

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {  
  if (!isOpen) return null;  

  return (  
    <div className="-ml-52 mt-10 absolute flex items-center justify-start px-5 bg-white transition-opacity delay-900 rounded-3xl">  
      <div className="" onClick={onClose} />  
      <div className="">  
      {children} 
        <div className="flex flex-col items-end justify-end py-3 delay-900 transition-opacity">  
          <button className="text-white px-2 bg-red-500 py-2 rounded-xl transition-opacity delay-900 hover:bg-red-700" onClick={onClose}><AiOutlineClose /></button>  
        </div>  
      </div>  
    </div>  
  );  
};  

export default Modal;