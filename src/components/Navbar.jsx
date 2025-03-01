import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="sticky top-0 bg-[#F0E7D8] p-4 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 
          className="text-4xl font-bold text-[#fc4d18] cursor-pointer hover:text-[#9E122C] transition-colors"
          onClick={() => navigate("/")}
        >
          I Think...
        </h1>

        {/* Menú en pantallas grandes */}
        <div className="hidden md:flex space-x-8">
          <button 
            onClick={() => navigate("/blogs")} 
            className="text-[#9E122C] font-bold text-lg hover:text-[#fc4d18] transition-colors"
          >
            Blogs
          </button>
          <button 
            className="text-[#9E122C] font-bold text-lg hover:text-[#fc4d18] transition-colors"
          >
            Sobre Nosotros
          </button>
          <button 
            className="bg-[#FFB7B7] hover:bg-[#9E122C] border-3 border-[rgb(158,18,44)] text-[#9E122C] hover:text-[#FFB7B7] text-xl font-bold p-2 transition-colors"
          >
            Iniciar Sesión
          </button>
        </div>

        {/* Icono menú hamburguesa (solo en móvil) */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-8 h-8 text-[#9E122C]" /> : <Menu className="w-8 h-8 text-[#9E122C]" />}
        </button>
      </div>

      {/* Menú desplegable en móviles */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center bg-[#F0E7D8] py-4 space-y-4">
          <button 
            onClick={() => navigate("/blogs")} 
            className="text-[#9E122C] font-bold text-lg hover:text-[#fc4d18] transition-colors"
          >
            Blogs
          </button>
          <button 
            className="text-[#9E122C] font-bold text-lg hover:text-[#fc4d18] transition-colors"
          >
            Sobre Nosotros
          </button>
          <button 
            className="bg-[#FFB7B7] hover:bg-[#9E122C] border-3 border-[rgb(158,18,44)] text-[#9E122C] hover:text-[#FFB7B7] text-xl font-bold p-2 transition-colors"
          >
            Iniciar Sesión
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
