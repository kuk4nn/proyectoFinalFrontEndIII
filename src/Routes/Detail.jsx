import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { ContextGlobal } from "../Components/utils/global.context";

const Detail = () => {
  const { id } = useParams();
  const { state } = useContext(ContextGlobal); // Cambié a usar `state` directamente
  const { dentists } = state; // Obtener los dentistas desde el contexto
  const [dentist, setDentist] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    console.log("ID from URL: ", id);

    if (!id || isNaN(id)) {
      setError(true);
      return;
    }

    // Verificar si dentists ya está cargado
    if (!dentists || dentists.length === 0) {
      setError(true); // Mostrar mensaje de error si los dentistas no están disponibles
      return;
    }

    // Buscar al dentista en el contexto global por su id
    const foundDentist = dentists.find((doc) => doc.id === parseInt(id));

    if (!foundDentist) {
      fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((response) => response.json())
        .then((data) => {
          setDentist(data);
          setError(false);
        })
        .catch((err) => {
          console.error("Error fetching dentist:", err);
          setError(true);
        });
    } else {
      setDentist(foundDentist);
      setError(false);
    }
  }, [id, dentists]);

  return (
    <div>
      <h1>Detail Dentist {id}</h1>
      {error ? (
        <p className="error">Verifique sus datos e intente de nuevo</p>
      ) : dentist ? (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Website</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{dentist.name}</td>
              <td>{dentist.email}</td>
              <td>{dentist.phone}</td>
              <td>{dentist.website}</td>
            </tr>
          </tbody>
        </table>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Detail;

