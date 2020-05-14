import React from "react";
import data from "../../JSON/Personajes.json";
import { BrowserRouter, Route, Link } from "react-router-dom";

class Todo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row">
        {data.map((perso, index) => {
          return (
            <div key={perso.Nombre} className="Personajes">
              <div className="card">
                {/*Para coger la carpeta public */}
                <Link
                  to={{
                    pathname: "/Detalles",
                    state: {
                      objecto: perso,
                      name: perso.Nombre,
                      age: 20,
                    },
                  }}
                >
                  <img
                    variant="top"
                    src={process.env.PUBLIC_URL + perso.Foto}
                    alt="Error"
                  />
                  <span className="Nombre"> {perso.Nombre}</span>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Todo;
