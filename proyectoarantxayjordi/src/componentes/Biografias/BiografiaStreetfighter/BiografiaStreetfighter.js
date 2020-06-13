import React from "react";

import "./BiografiaStreetfighter.css";
import { Container, Row, Col } from "reactstrap";

import { withRouter } from "react-router-dom";

class BiografiaStreetfighter extends React.Component {
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
    const fondopersonaje = {
      backgroundImage: "url(" + process.env.PUBLIC_URL + detalles.fondo + ")",
      WebkitBackgroundSize: "cover",
      MozBackgroundSize: "cover",
      OBackgroundSize: "cover",
      backgroundSize: "cover",
      color: "black",
      backgroundPosition: "center center",
      backgroundAttachment: "fixed",
    };

    return (
      <div className="BioDivTotalSF">
         <h1 className="BioNombreSF"> {detalles.Nombre}</h1>

<div>
  <Row className="BioImgyBioSF">
    <Col className="col-md-5">
      <img
        className="BioImgSF"
        variant="top"
        src={process.env.PUBLIC_URL + detalles.Foto2}
        alt="Error"
      />
    </Col>
    <Col className="col-md-5  BIOCentrarColDivSF">
      <h1 className="BiotituloSF"> Biografia</h1>
      <h6 className="BioDescSF"> {detalles.Descripcion}</h6>
    </Col>
  </Row>
  <div className="">
    <h1 className="BIOtitulocombosSF"> Combos</h1>
    <div>
  
    </div>
  </div>
</div>
</div>
    );
  }
}

export default withRouter(BiografiaStreetfighter);
