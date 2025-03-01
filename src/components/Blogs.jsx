import React from "react";
import Bloggers from "../components/Bloggers";
import Themes from "../components/Themes";

const Blogs = () => {
  return (
    <div className="bg-[#F0E7D8] min-h-screen">
      <Bloggers limit={9} />
      <Themes showAll={true} />
    </div>
  );
};

export default Blogs;
