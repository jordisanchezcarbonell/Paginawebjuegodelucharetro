import React from "react";

import "./BiografiaPnys.css";

import { withRouter } from "react-router-dom";

class BiografiaPnys extends React.Component {
  constructor(props, context) {
    super(props);
    console.log(this.props.location.state.ALL);
    console.log("hijo");
  }

  state = {
    show: false,
    elmento: "",
    imagen: "",
  };

  showModal = (e, imagenes) => {
    this.setState({
      show: true,
      elmento: e,
      imagen: imagenes,
    });
  };

  handleCloseModal = (e) => {
    this.setState({ show: false });
  };

  render() {
    const detalles = this.props.location.state.ALL;

    return (
      <div>
        <h1 className="titulocolor"> {detalles.Nombre}</h1>
        <img
          className="imgAtaque"
          variant="top"
          src={process.env.PUBLIC_URL + detalles.Foto}
          alt="Error"
        />
        <h1 className="titulocolor"> Ponys</h1>
      </div>
    );
  }
}

export default withRouter(BiografiaPnys);
