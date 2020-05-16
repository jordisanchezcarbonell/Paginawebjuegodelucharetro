import React, { Component } from "react";
import data from "../JSON/juegos.json";
import "./Juegos.css";
import { CargarDatos } from "./CargarDatos";

import { BrowserRouter, Route, Link } from "react-router-dom";

export class PaginaJuegos extends Component {
  click(e) {
    //const mother = new Mother();
    //mother.addMother(id);
    console.log();
  }

  render() {
    console.log("-> render");
    return (
      <div className=" fondodepantalla">
        <h1 className="TextoIncial">Choose your Game</h1>
        <div className="row">
          {data.map((juego, index) => {
            return (
              <div key={juego.Nombre} className="Personajes">
                <div className="card">
                  <Link
                    to={{
                      pathname: "/PaginaPersonajes",
                      state: {
                        visible: juego.Nombre,
                      },
                    }}
                  >
                    {/*Para coger la carpeta public */}
                    <img
                      variant="top"
                      src={process.env.PUBLIC_URL + juego.Foto}
                      alt="Error"
                    />
                    <span className="Nombre">{juego.Nombre}</span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
