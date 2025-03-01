import React, { useEffect, useState } from "react"; 
import { useNavigate } from "react-router-dom";

const Bloggers = ({ limit }) => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Estado de carga
  const [error, setError] = useState(null); // Estado de error
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true); // Iniciar carga
    setError(null); // Resetear error antes de una nueva petición

    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        if (!response.ok) {
          throw new Error("Error al obtener los datos"); // Lanzar error si la respuesta no es exitosa
        }
        return response.json();
      })
      .then(data => {
        setUsers(data.slice(0, limit));
        setIsLoading(false); // Datos cargados correctamente
      })
      .catch(error => {
        setError(error.message); // Guardar el mensaje de error
        setIsLoading(false); // Terminar carga aunque haya error
      });
  }, [limit]);

  return (
    <section className="pb-12 px-6">
      <h2 className="text-[#6B2138] text-3xl font-bold text-center my-8">
        Populares del mes
      </h2>
      
      {/* Centramos "Bloggeros" */}
      <div className="flex justify-center">
        <h3 className="text-[#CE3813] text-2xl font-bold text-center my-4">
          Bloggeros
        </h3>
      </div>

      {/* Muestra el mensaje de carga */}
      {isLoading && (
        <p className="text-center text-lg text-[#858CC6]">Cargando datos...</p>
      )}

      {/* Muestra el mensaje de error si algo falló */}
      {error && (
        <p className="text-center text-lg text-red-500">{error}</p>
      )}

      {/* Solo muestra los usuarios si no hay error y no está cargando */}
      {!isLoading && !error && (
        <div className="mt-6 flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl">
            {users.map(user => (
              <div
                key={user.id}
                onClick={() => navigate(`/profile/${user.id}`)}
                className="p-4 w-[300px] h-[300px] bg-[#B8D8FF] border-2 border-[#858CC6] text-[#292B3A] cursor-pointer shadow-lg hover:scale-105 transition-transform duration-200 overflow-hidden"
              >
                <h4 className="text-xl font-bold">{user.name}</h4>
                <p className="text-[#6485AE]">@{user.username}</p>
                <p className="text-gray-600">{user.email}</p>
                <p className="mt-2 text-[#6485AE]">#EjemploHashtag</p>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/profile/${user.id}`);
                  }}
                  className="mt-4 w-full h-[50px] border-2 border-[#D2B45E] bg-[#F7D881] text-[#292B3A] font-bold hover:brightness-110 transition-all"
                >
                  Ver más
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Bloggers;
