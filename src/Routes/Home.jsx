import React, { useContext } from 'react';
import { ContextGlobal } from '../Components/utils/global.context'; // Importamos el contexto global
import Card from '../Components/Card';

const Home = () => {
  const { state } = useContext(ContextGlobal); // Acceder al estado global
  const { dentists } = state; // Obtener los dentistas desde el contexto

  return (
    <main>
      <h1>Home</h1>
      <div className="card-grid">
        {/* Mapeo de los dentistas para renderizar las Cards */}
        {dentists.length > 0 ? (
          dentists.map((dentist) => (
            <Card
              key={dentist.id}
              id={dentist.id}
              name={dentist.name}
              username={dentist.username}
            />
          ))
        ) : (
          <p>Loading dentists...</p> // Mensaje si los dentistas aún no están cargados
        )}
      </div>
    </main>
  );
};

export default Home;
