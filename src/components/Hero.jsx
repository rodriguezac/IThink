import React from "react";

const Hero = () => {
    return (
        <section className="text-center py-16 bg-[#F0E7D8]">
            <h1 className="text-5xl font-bold text-[#6485AE]">¿Tienes una idea en mente?</h1>
            <button className="mt-6 bg-[#F7D881] text-[#292B3A] font-semibold px-6 py-2 border-3 border-[#D2B45E] hover:scale-105 transition-transform">
                Escríbela Aquí
            </button>
            <p className="mt-4 text-gray-600 text-xl">
                siente,   escribe,   comparte.
            </p>
        </section>
    );
};

export default Hero;
