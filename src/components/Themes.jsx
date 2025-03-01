import React from "react";
import food from "../assets/food.png";
import art from "../assets/art.png";
import music from "../assets/music.png";
import tech from "../assets/tech.png";
import anime from "../assets/anime.png";
import moda from "../assets/moda.png";
import terror from "../assets/terror.png";
import movie from "../assets/movie.png";
import serie from "../assets/serie.png";
import mind from "../assets/mind.png";
import culture from "../assets/culture.png";
import gym from "../assets/gym.png";

const themeData = [
  { name: "Comida", img: food },
  { name: "Arte", img: art },
  { name: "Música", img: music },
  { name: "Tecnología", img: tech },
  { name: "Anime", img: anime },
  { name: "Moda", img: moda },
  { name: "Terror", img: terror },
  { name: "Películas", img: movie },
  { name: "Series", img: serie },
  { name: "Salud Mental", img: mind },
  { name: "Cultura", img: culture },
  { name: "Gym", img: gym }
];

const Themes = ({ showAll }) => {
  const themesToShow = showAll ? themeData : themeData.slice(0, 4);

  return (
    <section className="py-12 bg-[#F0E7D8]">
      <h3 className="text-[#75834F] text-2xl font-bold text-center my-4">
        Temas
      </h3>
      <div className="flex flex-wrap justify-center gap-4 px-6">
        {themesToShow.map((theme, index) => (
          <button
            key={index}
            className="flex flex-col justify-center items-center w-[228px] h-[244px] font-semibold px-6 py-2 bg-[#CEDBAC] border-2 border-[#ADBE7F] text-[#292B3A] hover:scale-105 transition-transform"
          >
            <img src={theme.img} alt={theme.name} className="w-20 h-20 mb-2" />
            <span className="text-center">{theme.name}</span>
          </button>
        ))}
      </div>
    </section>
  );
};

export default Themes;
