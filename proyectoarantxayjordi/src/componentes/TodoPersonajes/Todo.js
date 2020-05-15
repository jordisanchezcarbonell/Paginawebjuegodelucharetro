import React from "react";
import data from "../../JSON/Personajes.json";
import MARVEL from "../../JSON/Marvel.json";
import ponys from "../../JSON/ponys.json";

import { BrowserRouter, Route, Link } from "react-router-dom";

class Todo extends React.Component {
  constructor(props) {
    super(props);
  }

  streetfighter(elementoporpasarparametro) {
    return (
      <div className="row">
        {elementoporpasarparametro.map((perso, index) => {
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
  render() {
    let mostrarvalor = this.props.location.state.visible;
    if (mostrarvalor === "Street Fighter III: 3rd Strike") {
      return this.streetfighter(data);
    } else if (mostrarvalor === "Them's fightin herds") {
      return this.streetfighter(ponys);
    } else {
      return this.streetfighter(MARVEL);
    }
  }
}

export default Todo;
