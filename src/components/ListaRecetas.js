import { useContext } from "react";
import { RecetasContext } from "./context/RecetasContext";
import Receta from "./Receta";

const ListaRecetas = () => {
  const recetasContext = useContext(RecetasContext);
  const { resultadobusqueda, recetas } = recetasContext;

  return (
    <>
      {recetas.length === 0 ? null : (
        <h2 className="text-center mt-5 titulo-resultado">
          Listado de {resultadobusqueda.ingrediente} en la categoría de{" "}
          {resultadobusqueda.categoria}
        </h2>
      )}
      <div className="contenedor-recetas contenedor">
        {recetas.map((receta) => (
          <Receta key={receta.idDrink} receta={receta} />
        ))}
      </div>
    </>
  );
};

export default ListaRecetas;
