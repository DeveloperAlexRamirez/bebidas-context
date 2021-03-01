import axios from "axios";

import { createContext, useEffect, useState } from "react";

export const ModalContext = createContext();

const ModalProvider = ({ children }) => {
  const [idreceta, setIdReceta] = useState(null);

  const [datos, setDatos] = useState({});

  useEffect(() => {
    if (idreceta) {
      const consultarAPI = async () => {
        const url = ` https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idreceta}`;
        const resultado = await axios.get(url);
        setDatos(resultado.data.drinks[0]);
      };
      consultarAPI();
    }
  }, [idreceta]);

  return (
    <ModalContext.Provider
      value={{
        datos, // resultado de la consulta
        setIdReceta,
        setDatos,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
