import React from "react";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import axios from "axios";

import Encabezado from "./components/Encabezado";
import Producto from "./components/Producto";
import Productos from "./components/Productos";
import AgregarProducto from "./components/AgregarProducto";
import ModificarProducto from "./components/ModificarProducto";
import "./App.css";

const consultarProductos = async callback => {
  const resultado = await axios.get("http://localhost:4000/restaurant");
  callback(resultado.data);
};

function App() {
  const [productos, guardarProductos] = useState([]);
  useEffect(() => {
    consultarProductos(guardarProductos);
  }, []);

  const [recargar, guardaRecarga] = useState(true);
  useEffect(() => {
    if (recargar) {
      consultarProductos(guardarProductos);
    }
    guardaRecarga(false);
  }, [recargar]);

  return (
    <Router>
      <div className="App">
        <Encabezado />
      </div>
      <Switch>
        <Route
          exact
          path="/productos"
          render={() => (
            <Productos productos={productos} guardaRecarga={guardaRecarga} />
          )}
        />
        <Route
          exact
          path="/agregarProducto"
          render={() => <AgregarProducto guardaRecarga={guardaRecarga} />}
        />
        <Route
          exact
          path="/producto/modificar/:id"
          render={
						props => {
							const idProducto = parseInt(props.match.params.id);
							const producto = productos.filter(producto => producto.id === idProducto);
							return (
								<ModificarProducto 
									guardaRecarga={guardaRecarga}
									producto={producto[0]}
								/>
							)
						}
					}
        />
      </Switch>
    </Router>
  );
}

export default App;
