import React from "react";

import "./BiografiaMK.css";

import { withRouter } from "react-router-dom";

class BiografiaMK extends React.Component {
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
          src={process.env.PUBLIC_URL + detalles.Foto2}
          alt="Error"
        />
        <h1 className="titulocolor"> MK</h1>
      </div>


      
    );
  }
}

export default withRouter(BiografiaMK);
