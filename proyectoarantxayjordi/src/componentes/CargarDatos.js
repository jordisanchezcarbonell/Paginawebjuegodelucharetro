import data from "../JSON/Personajes.json";
import data_juegos from "../JSON/juegos.json";
import React, { Component } from "react";

import PropTypes from "prop-types";

export class CargarDatos extends Component {
  render() {
    return (
      <div>
        {data.map((personajes, index) => {
          return (
            <div key={personajes.Nombre} className="MoviesList-item">
              <p>{personajes.Nombre} </p>
              <p>{index}</p>
              {personajes.Ataques.map((premise, j) => {
                return (
                  <div key={j}>
                    <p>{premise.nombreAtaque}</p>

                    <p>{premise.Animacion}</p>
                  </div>
                );
              })}

              <p>{personajes.Descripcion} </p>
              <img src={process.env.PUBLIC_URL + personajes.Foto}  alt="Error" />

              <p>{personajes.Foto} </p>
                
              <p></p>
              <p></p>
            </div>
          );
        })}
      </div>
    );
  }
}
