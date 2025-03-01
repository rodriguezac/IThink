import React from "react";

const Features = () => {
  return (
    <section className="pb-10 pt-10 sm:pt-20 mx-auto max-w-screen-md lg:max-w-screen-lg text-[#4E5488] flex flex-col sm:flex-row items-center sm:items-center gap-6">
      <div className="w-full sm:w-1/3 text-center sm:text-left">
        <h3 className="text-3xl sm:text-5xl font-bold sm:flex sm:items-center">
          ¿Qué puedes hacer aquí?
        </h3>
      </div>
      <div className="w-full sm:w-2/3 mt-4 sm:mt-6 max-w-2xl">
        <ul className="list-inside font-semibold list-none">
          <li className="text-[#292B3A] text-sm sm:text-xl mb-4 mx-4">
            <span className="underline underline-offset-2 text-[#858CC6]">Publicar tus ideas:</span> Comparte lo que piensas, sin restricciones.
          </li>
          <li className="text-[#292B3A] text-sm sm:text-xl mb-4 mx-4">
            <span className="underline underline-offset-2 text-[#858CC6]">Leer las ideas de otros:</span> Descubre pensamientos de todo el mundo.
          </li>
          <li className="text-[#292B3A] text-sm sm:text-xl mb-4 mx-4">
            <span className="underline underline-offset-2 text-[#858CC6]">Comentar y conectarte:</span> Únete a las conversaciones y haz nuevas conexiones.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Features;
