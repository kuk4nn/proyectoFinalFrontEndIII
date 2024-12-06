import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context"; // Asegúrate de importar el contexto global

const Card = ({ id, name, username }) => {
  const { state, dispatch } = useContext(ContextGlobal); // Acceder al contexto global

  // Función para agregar un dentista a los favoritos
  const addFav = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    
    // Verificar si el dentista ya está en favoritos
    if (!favorites.find((fav) => fav.id === id)) {
      favorites.push({ id, name, username });
      localStorage.setItem("favorites", JSON.stringify(favorites));

      // Disparar una acción al contexto global si se requiere (opcional)
      // dispatch({ type: "ADD_FAV", payload: { id, name, username } });

      alert(`${name} added to favorites!`);
    } else {
      alert(`${name} is already in favorites.`);
    }
  };

  return (
    <div className="card">
      <Link to={`/detail/${id}`}>
        <img
          src="/images/doctor.jpg"
          alt="Doctor"
          className="doctor-image"
          style={{ width: "100%", borderRadius: "10px" }}
        />
        <h3>{name}</h3>
        <p>{username}</p>
      </Link>
      <button onClick={addFav} className="favButton">
        ⭐
      </button>
    </div>
  );
};

export default Card;

