import React from "react";

import "./BiografiaDragonBall.css";

import { withRouter } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

class BiografiaDragonBall extends React.Component {
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
      <div className="BioDivTotalBD">
        <h1 className="BioTitulocolor"> {detalles.Nombre}</h1>


<div > 
        <Row className="BioImgyBio">
        <Col className="col-md-5">
        <img
          className="BioPersonajeBD"
          variant="top"
          src={process.env.PUBLIC_URL + detalles.Foto2}
          alt="Error"
        />
        </Col>
        <Col  className="col-md-5">
        <h1 className="titulocolor"> Biografia</h1>
        <h6 className="BioTitulocolor"> {detalles.Descripcion}</h6>
        </Col>
        </Row>
        </div>
        
        <h1 className="titulocolor"> Combos</h1>

      </div>
    );
  }
}

export default withRouter(BiografiaDragonBall);
