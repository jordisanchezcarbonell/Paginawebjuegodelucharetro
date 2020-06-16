import React from "react";

import "./BiografiaKiller.css";

import { withRouter } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import ResponsivePlayer from "../../video/ResponsivePlayer";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
  componentDidMount() {
    window.scrollTo(0, 0);
  }
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
          <div>
            <FontAwesomeIcon
              className="iconoBD"
              icon={faArrowLeft}
              onClick={this.props.history.goBack}
            />
          </div>
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
                <h1 className="BiotituloKI"> Personality</h1>
                <h6 className="BioDesPonys"> {detalles.Personality}</h6>
                <h1 className="BiotituloKI"> Characteristics </h1>

                <h6 className="BioDesPonys">
                  <strong>Size: </strong> {detalles.Size}
                </h6>
                <h6 className="BioDesPonys">
                  <strong> Weight: </strong> {detalles.Weight}
                </h6>
              </Col>
            </Row>
            <Row className="BioImgyBioKI">
              <h1 className="BIOtitulocombosKI"> Combos</h1>
            </Row>
            <ResponsivePlayer className="video" url={detalles.Combos} />
            <ResponsivePlayer className="video" url={detalles.Combos2} />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(BiografiaKiller);
