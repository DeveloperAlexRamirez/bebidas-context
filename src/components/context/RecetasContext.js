import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const RecetasContext = createContext();

const RecetasProvider = ({ children }) => {
  const [recetas, setRecetas] = useState([]);

  const [resultadobusqueda, setBuscaRecetas] = useState({
    ingrediente: "",
    categoria: "",
  });

  const { ingrediente, categoria } = resultadobusqueda;

  const [consultar, setConsultar] = useState(false);

  useEffect(() => {
    if (consultar) {
      const obtenerRecetas = async () => {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingrediente}&c=${categoria}`;
        const resultado = await axios.get(url);
        setRecetas(resultado.data.drinks);
      };
      obtenerRecetas();
    }
    // eslint-disable-next-line
  }, [resultadobusqueda]);

  return (
    <RecetasContext.Provider
      value={{
        resultadobusqueda,
        recetas,
        consultar,
        setBuscaRecetas,
        setConsultar,
      }}
    >
      {children}
    </RecetasContext.Provider>
  );
};

export default RecetasProvider;
