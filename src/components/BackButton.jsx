import React from "react";
import { useNavigate } from "react-router-dom";
import back from "../assets/back.png"; 

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate(-1)} className="p-2">
      <img src={back} alt="Arrow Left" className="w-6 h-6 text-[#9E122C] hover:scale-110 transition-transform" />
    </button>
  );
};

export default BackButton;
