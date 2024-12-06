import React, { useContext, useEffect } from 'react';
import { Link } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context"; // Importa el contexto global

const Navbar = () => {
  const { state, dispatch } = useContext(ContextGlobal);

  const toggleTheme = () => {
    dispatch({ type: "TOGGLE_THEME" });  // Alterna el tema a través del contexto
  };

  useEffect(() => {
    if (state.theme === "dark") {
      document.body.classList.add("dark");  // Aplica el tema oscuro
    } else {
      document.body.classList.remove("dark");  // Remueve el tema oscuro
    }
  }, [state.theme]); // Este efecto se ejecutará cada vez que el tema cambie

  return (
    <nav>
      <div id="dhodont">
        <img src="./public/DH.ico" alt="dhico" />
        <h4>
          DH Odont
        </h4>
      </div>
      <div id="navbar">
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/favs">Favs</Link>
        <button onClick={toggleTheme}>
          {state.theme === "light" ? "🌙" : "☀️"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;


