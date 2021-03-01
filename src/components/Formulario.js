import { useContext, useState } from "react";
import { CategoriaContext } from "./context/CategoriaContext";
import { RecetasContext } from "./context/RecetasContext";

const Formulario = () => {
  const recetasContext = useContext(RecetasContext);
  const { setBuscaRecetas, setConsultar } = recetasContext;

  const categoriasContext = useContext(CategoriaContext);
  const { categorias } = categoriasContext;

  const [datos, setDatos] = useState({
    ingrediente: "",
    categoria: "",
  });

  const { ingrediente, categoria } = datos;

  const handleChange = (e) => {
    setDatos({ ...datos, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (ingrediente.trim() === "" || categoria.trim() === "") {
      console.log("Todos los campos son obligatorios");
      return;
    }

    // Paso los datos del formulario para consultar API
    setBuscaRecetas(datos);
    // Cambio el estado para consultar
    setConsultar(true);

    setDatos({
      ingrediente: "",
      categoria: "",
    });
  };

  return (
    <form className="formulario-form contenedor" onSubmit={handleSubmit}>
      {/* Input */}
      <input
        type="text"
        name="ingrediente"
        value={ingrediente}
        placeholder="Buscar por Ingrediente Ej. Tequila"
        className="input-ingrediente form-control"
        onChange={handleChange}
      />
      {/* Select */}
      <select
        className="select form-control"
        name="categoria"
        onChange={handleChange}
      >
        <option value="">--Seleccione--</option>
        {categorias.map((categoria) => (
          <option value={categoria.strCategory} key={categoria.strCategory}>
            {categoria.strCategory}
          </option>
        ))}
      </select>

      {/* Button */}
      <button type="submit" className="button form-control">
        Buscar bebidas
      </button>
    </form>
  );
};

export default Formulario;
