import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#FFB7B7] py-12 text-center">
      <h1 className="text-2xl font-bold mb-2 text-[#6B2138] px-4">Únete y empieza a compartir</h1>
      <h3 className="text-lg mb-8 text-[#6B2138] px-4">Comienza a publicar hoy mismo y únete a nuestra comunidad.</h3>
      <form className="relative max-w-lg mx-auto w-full px-4 mb-10">
        <input 
          type="email" 
          placeholder="Escribe tu correo" 
          required 
          className="w-full h-12 px-5 border-2 border-[#4E5488] bg-[#858CC6] text-lg text-[#2f335c] box-border"
        />
        <button 
          type="submit" 
          className="mt-3 w-full h-12 border-2 border-[#59682E] bg-[#ADBE7F] text-[#59682E] text-lg font-bold transition duration-300 hover:bg-[#59682E] hover:text-[#ADBE7F]"
        >
          Crear Cuenta
        </button>
      </form>
      <h2 className="text-3xl font-bold text-[#fc4d18]">I Think...</h2>
      <h5 className="text-[#fc4d1892] text-sm font-normal">©Angélica Rodríguez 2025</h5>
    </footer>
  );
};

export default Footer;
