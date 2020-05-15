import React from "react";
import { withRouter } from "react-router-dom";

class Personaje extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const detalles = this.props.location.state.objecto;
    debugger;
    console.log(this.props.location.state.objecto);

    return (
      <div>
        <button onClick={this.props.history.goBack}>Back</button>

        <h1>{detalles.Nombre}</h1>
        <h1>{detalles.Descripcion}</h1>
        <img
          variant="top"
          src={process.env.PUBLIC_URL + detalles.Foto}
          alt="Error"
        />
        <h1>
          {detalles.Ataques.map((Ataque) => (
            <li key={Ataque.nombreAtaque}>{Ataque.nombreAtaque}</li>
          ))}
        </h1>
      </div>
    );
  }
}

export default withRouter(Personaje);
