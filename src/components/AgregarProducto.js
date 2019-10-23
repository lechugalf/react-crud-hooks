import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import swal from 'sweetalert';

const AgregarProducto = ({ history, guardaRecarga }) => {
  const [nombre, guardarNombre] = useState("");
  const [precio, guardarPrecio] = useState("");
  const [catego, guardarCatego] = useState("Comida");
  const [error, guardarError] = useState("");

  const agregarProducto = async e => {
    e.preventDefault();
    if (nombre === "" || precio === "" || catego === "") {
      guardarError(true);
    } else {
      guardarError(false);
      try {
        const result = await axios.post("http://localhost:4000/restaurant", {
          nombrePlatillo: nombre,
          precioPlatillo: precio,
          categoria: catego
        });
        swal("Producto agragado", {
          icon: "success",
        });
        guardaRecarga(true);
        history.push("/productos");
      } catch (error) {
        swal("¡Error!, El producto no pudo ser agregado, al parecer hay un problema con el servidor, intentelo mas tarde", {
          icon: "error",
        });
      }
    }
  };

  return (
    <div className="AgregarProducto">
      <div className="headerlista">
        <h3 className="">Agregar Productos</h3>
      </div>
      <div className="lista formAgregar">
        {
          (error) ? 
          <div class="alert alert-dismissible alert-danger">
            <strong>¡Formuladio invalido!</strong>{" "}
            todos los campos son obligatorios
          </div>
          : null 
        }
        <div className="form-group">
          <label for="name">Nombre del Producto</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Nombre del producto"
            onChange={e => guardarNombre(e.target.value)}
          />
        </div>
        <div class="form-group">
          <label for="categoria">Categoria</label>
          <select
            multiple=""
            class="form-control"
            id="categoria"
            onChange={e => guardarCatego(e.target.value)}
          >
            <option value="Comida">Comida</option>
            <option value="Desayuno">Desayuno</option>
            <option value="Bebida">Bebida</option>
            <option value="Postre">Postre</option>
            <option value="Entrada">Entrada</option>
            <option value="Niños">Niños</option>
            <option value="Extra">Extra</option>
          </select>
        </div>
        <div className="form-group">
          <label for="precio">Precio</label>
          <input
            type="number"
            className="form-control"
            id="precio"
            placeholder="Precio"
            onChange={e => guardarPrecio(e.target.value)}
          />
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={agregarProducto}
        >
          Agregar
        </button>
      </div>
    </div>
  );
};

export default withRouter(AgregarProducto);
