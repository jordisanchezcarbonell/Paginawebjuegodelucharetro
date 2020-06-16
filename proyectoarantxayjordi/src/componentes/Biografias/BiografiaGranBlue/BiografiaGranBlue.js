import React from "react";

import "./BiografiaGranBlue.css";

import { withRouter } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ResponsivePlayer from "../../video/ResponsivePlayer";

class BiografiaGranBlue extends React.Component {
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
    const fondopersonajeGB = {
      backgroundImage: "url(" + process.env.PUBLIC_URL + detalles.Fondo + ")",
      WebkitBackgroundSize: "cover",
      MozBackgroundSize: "cover",
      OBackgroundSize: "cover",
      backgroundSize: "cover",
      color: "black",
      backgroundPosition: "center center",
      backgroundAttachment: "fixed",
      backgroundColor: "black",

    };
    return (
      <div   style={({ width: "100%" }, fondopersonajeGB)}>
    
      <div  className="BioDivTotalGB" >
    
        <h1 className="BioNombreGB"> {detalles.Nombre}</h1>

        <div>
          <Row className="BioImgyGB">
          <div className="DivIconGB">
          <FontAwesomeIcon
            className="iconoGB"
            icon={faArrowLeft}
            onClick={this.props.history.goBack}
          />
        </div>
            <Col className="col-md-4">         
              <img
                className="BioImgGB"
                variant="top"
                src={process.env.PUBLIC_URL + detalles.Foto2}
                alt="Error"
              />
            </Col>
            <Col className="col-md-4  BIOCentrarColDivGB">
              <h1 className="BiotituloGB"> Biografia</h1>
              <h6 className="BioDesGB"> {detalles.Descripcion}</h6>
            </Col>
          </Row>
          <Row className="BioImgyBioGB">
            <h1 className="BIOtitulocombosGB"> Combos</h1>
          </Row>
          <div className="derechaGB">
          <ResponsivePlayer className="video" url={detalles.Combos} />
          </div>
          <div className="izqGB">
          <ResponsivePlayer className="video" url={detalles.Combos2} />
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default withRouter(BiografiaGranBlue);
