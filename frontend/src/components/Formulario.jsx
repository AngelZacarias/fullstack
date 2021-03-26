import React, { useState } from "react";
import Axios from "axios";
import Swal from "sweetalert";

export default function Formulario({setNewUser, setUser}) {

  //Functions to our state
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [salary, setSalary] = useState("");

  // Connection to backend
  const register = async (e) => {
    e.preventDefault();
    const newEmployee = { name, lastName, salary };
    const response = await Axios.post("http://localhost:4000/api", newEmployee);
    setUser(newEmployee)
    const message = response.data.message;
    Swal("Succesfull!", message, "success");
    setNewUser(true)
  };

  return (
      <div className="container col-md-5 mt-4">
        <figure class="text-center">
        <p className="h2">Agregar y Listar registros a BD</p>
        <p>Programación para Internet</p>
        <p>Practica desarrollada en MERN Stack</p>
        <figcaption class="blockquote-footer">
          <cite title="Source Title">Luis Angel Zacarias Magaña</cite>
        </figcaption>
        </figure>
        
        <form onSubmit={register}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              required
              placeholder="Nombre"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              required
              placeholder="Apellido"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              className="form-control"
              required
              placeholder="Salario"
              onChange={(e) => setSalary(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Guardar
          </button>
        </form>
      </div>
  );
}
