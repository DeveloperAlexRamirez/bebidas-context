import CategoriasProvider from "./components/context/CategoriaContext";
import ModalProvider from "./components/context/ModalContext";
import RecetasProvider from "./components/context/RecetasContext";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListaRecetas from "./components/ListaRecetas";
import "./components/recetas.css";

function App() {
  return (
    <>
      <CategoriasProvider>
        <RecetasProvider>
          <ModalProvider>
            <div className="header">
              <div className="contenedor">
                <Header />
              </div>
            </div>
            {/* Fin Header */}
            <div className="indicacion">
              <h3>Buscar bebidas por Categoria E Ingrediente</h3>
            </div>

            <div className="formulario">
              <Formulario />
            </div>

            {/* Listado */}
            <div>
              <ListaRecetas />
            </div>

            {/* FOOTER */}
            <footer className="footer">
              <div className="contenedor-footer">
                <div className="campo-footer">
                  <h2>Aplicación hecha por</h2>
                  <p className="text-center text-white">
                    Alejandro Ramírez Rodríguez &copy;
                  </p>
                </div>
                <div className="campo-footer">
                  <h2>Redes sociales</h2>
                  <div className="iconos-sociales">
                    <a
                      href="https://www.facebook.com/alejandro.ramirezrodriguez.796/"
                      className="text-center"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src="facebook.png" alt="facebook-logo" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/alejandro-ramirez-rodriguez"
                      className="text-center"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src="linkedin.png" alt="linkedin-logo" />
                    </a>
                    <a
                      href="https://github.com/DeveloperAlexRamirez"
                      className="text-center"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src="github.png" alt="github-logo" />
                    </a>
                  </div>
                </div>
              </div>
            </footer>
          </ModalProvider>
        </RecetasProvider>
      </CategoriasProvider>
    </>
  );
}

export default App;
