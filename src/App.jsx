import React, { useEffect, useContext } from "react";  // Asegúrate de importar useEffect
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import { ContextGlobal } from "./Components/utils/global.context";

import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";

function App() {
  const { state } = useContext(ContextGlobal); // Acceder al estado global

  return (
    <div className="App">
      {/* Navbar siempre visible */}
      <Navbar />

      {/* Aquí se definen las rutas */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/favs" element={<Favs />} />
      </Routes>

      {/* Footer siempre visible */}
      <Footer />
    </div>
  );
}

export default App;
