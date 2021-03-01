import { useContext, React, useState } from "react";
import { ModalContext } from "./context/ModalContext";

import Modal from "@material-ui/core/Modal";

function getModalStyle() {
  const top = 50;
  const left = 50;
  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const mostrarIngredientes = (datos) => {
  let ingredientes = [];
  for (let i = 1; i <= 16; i++) {
    if (datos[`strIngredient${i}`]) {
      ingredientes.push(
        <li className="listado-ingredientes">
          {datos[`strIngredient${i}`]}
          <span>{datos[`strMeasure${i}`]}</span>
        </li>
      );
    }
  }
  return ingredientes;
};

// Corazón del componente
const Receta = ({ receta }) => {
  // Context del modal
  const modalContext = useContext(ModalContext);
  const { datos, setIdReceta, setDatos } = modalContext;

  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  // const classes = useStyles();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // Fin modal

  return (
    <div className="receta-card contenedor">
      <h2>{receta.strDrink}</h2>
      <div className="receta-img">
        <img src={receta.strDrinkThumb} alt={receta.strDrink} />
        <button
          type="button"
          className="btn-receta"
          onClick={() => {
            handleOpen();
            setIdReceta(receta.idDrink);
          }}
        >
          Ver Receta
        </button>
        <Modal
          open={open}
          onClose={() => {
            setIdReceta(null);
            handleClose();
            setDatos({}); // para que no se vea la imagen previa
          }}
        >
          <div style={modalStyle} className="paper">
            <h1 className="titulo-receta">Receta</h1>
            <h2 className="titulo-bebida"> {datos.strDrink}</h2>
            <img
              src={datos.strDrinkThumb}
              alt={`Imagen de ${datos.strDrink}`}
              className="img-bebida-receta"
            />
            <h2 className="titulo-ingredientes">Ingredientes y cantidades</h2>
            <ul className="order-list">{mostrarIngredientes(datos)}</ul>
            <h3 className="text-warning">Instrucciones </h3>
            <p>{datos.strInstructions}</p>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Receta;
