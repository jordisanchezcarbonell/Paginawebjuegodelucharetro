import React from "react";

import "./BiografiaKiller.css";

import { withRouter } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

class BiografiaKiller extends React.Component {
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
    const fondoKIBIO = {
      backgroundImage: "url(" + process.env.PUBLIC_URL + detalles.Fondo + ")",
      WebkitBackgroundSize: "cover",
      MozBackgroundSize: "cover",
      OBackgroundSize: "cover",
      backgroundSize: "cover",
      color: "black",
      backgroundPosition: "center center",
      backgroundAttachment: "fixed",
    };
    return (
      <div className="BioDivTotalKI">
        
        <div style={({ width: "100%" }, fondoKIBIO)}>
          <h1 className="BioNombreKI"> {detalles.Nombre}</h1>

          <div>
            <Row className="BioImgyBioKI">
              <Col className="col-md-4">
                <img
                  className="BioImgKI"
                  variant="top"
                  src={process.env.PUBLIC_URL + detalles.Foto}
                  alt="Error"
                />
              </Col>
              <Col className="col-md-4  BIOCentrarColDivKI">
                <h1 className="BiotituloKI"> Biografia</h1>
                <h6 className="BioDesPonys"> {detalles.Descripcion}</h6>
              </Col>
            </Row>
            <Row className="BioImgyBioKI">
              <h1 className="BIOtitulocombosKI"> Combos</h1>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(BiografiaKiller);
