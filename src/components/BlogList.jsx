import React, { useEffect, useState } from "react";

const BlogList = ({ userId }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      .then(response => response.json())
      .then(data => setBlogs(data))
      .catch(error => console.error("Error fetching blogs:", error));
  }, [userId]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
      {blogs.map(blog => (
        <div key={blog.id}> {/* Ahora la key está en el contenedor principal */}
          <div className="bg-blue-200 p-4 border-2 border-[#858CC6]">
            <h3 className="text-xl text-[#292B3A] font-bold">{blog.title}</h3>
            <p className="text-sm text-[#292b3a9a]">
              Publicado el: {new Date().toLocaleDateString()}
            </p>
          </div>
          <button className="mt-4 mb-8 w-[200px] h-[40px] border-2 border-[#D2B45E] bg-[#F7D881] text-[#292B3A] font-bold hover:brightness-110 transition-all">
            Ver Más
          </button>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
