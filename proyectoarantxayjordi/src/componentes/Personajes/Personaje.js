import React from "react";
import { withRouter } from "react-router-dom";

class Personaje extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const detalles = this.props.location.state.objecto;
    let comp;

    console.log(detalles.Ataques);

    return (
      <div>
        <button onClick={this.props.history.goBack}>Back</button>
        <h1>{comp}</h1>
        <h1>{detalles.Nombre}</h1>
        <h1>{detalles.Descripcion}</h1>
        <img
          variant="top"
          src={process.env.PUBLIC_URL + detalles.Foto}
          alt="Error"
        />

        <h1>
          {detalles.Ataques.map((Ataque) => (
            <li key={Ataque.nombreAtaque}>
              {Ataque.nombreAtaque}
              {Ataque.Animacion.map((animaciondelataque) => (
                <img
                  variant="top"
                  src={process.env.PUBLIC_URL + animaciondelataque}
                  alt="Error"
                />
              ))}
            </li>
          ))}
        </h1>
      </div>
    );
  }
}

export default withRouter(Personaje);
