import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const CategoriaContext = createContext();

const CategoriasProvider = ({ children }) => {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const consultarCategorias = async () => {
      const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";
      const respuesta = await axios.get(url);
      setCategorias(respuesta.data.drinks);
    };
    consultarCategorias();
  }, []);

  return (
    <CategoriaContext.Provider
      value={{
        categorias,
      }}
    >
      {children}
    </CategoriaContext.Provider>
  );
};

export default CategoriasProvider;
