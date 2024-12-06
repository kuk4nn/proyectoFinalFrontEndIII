import { createContext, useReducer, useEffect } from "react";

// Estado inicial
export const initialState = {
  theme: "light",  // Default theme
  data: [],  // Data for API users
  dentists: [],  // Array for dentists data
};

// Acciones del reducer
const actionTypes = {
  SET_DENTISTS: "SET_DENTISTS",
  TOGGLE_THEME: "TOGGLE_THEME",
};

// Reducer para manejar las acciones
const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_DENTISTS:
      return {
        ...state,
        dentists: action.payload,
      };
    case actionTypes.TOGGLE_THEME:
      return {
        ...state,
        theme: state.theme === "light" ? "dark" : "light",
      };
    default:
      return state;
  }
};

// Contexto global
export const ContextGlobal = createContext();

// Proveedor de contexto
export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Método para obtener los dentistas desde la API
  const fetchDentists = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await response.json();
      dispatch({ type: actionTypes.SET_DENTISTS, payload: data });
    } catch (error) {
      console.error("Error fetching dentists:", error);
    }
  };

  // Llamamos a la función fetchDentists para cargar los datos iniciales
  useEffect(() => {
    fetchDentists();
  }, []);

  const toggleTheme = () => {
    dispatch({ type: actionTypes.TOGGLE_THEME });
  };

  return (
    <ContextGlobal.Provider value={{ state, dispatch, toggleTheme }}>
      {children}
    </ContextGlobal.Provider>
  );
};
