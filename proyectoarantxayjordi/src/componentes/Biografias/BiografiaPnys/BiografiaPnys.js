import React from "react";

import "./BiografiaPnys.css";

import { withRouter } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

class BiografiaPnys extends React.Component {
  constructor(props, context) {
    super(props);
    console.log(this.props.location.state.ALL);
    console.log("hijo");
    console.log(this.props.location.state.todo);
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
    const arrayponys = this.props.location.state.todo;
    console.log(arrayponys.FotosPersonajePonys[0].Foto2[0]);
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
      <div className="BioDivTotalPonys">
        <Row>
          {arrayponys.FotosPersonajePonys[0].Foto2.map((imagenes, index) => (
            <img
              key={index}
              className="imgAtaquesBD"
              src={process.env.PUBLIC_URL + imagenes}
              fluid
            />
          ))}
        </Row>
        <div style={({ width: "100%" }, fondopersonaje)}>
          <h1 className="BioNombrePonys"> {detalles.Nombre}</h1>

          <div>
            <Row className="BioImgyPonys">
              <Col className="col-md-4">
                <img
                  className="BioImgPonys"
                  variant="top"
                  src={process.env.PUBLIC_URL + detalles.Foto3}
                  alt="Error"
                />
              </Col>
              <Col className="col-md-4  BIOCentrarColDivPonys">
                <h1 className="BiotituloPonys"> Biografia</h1>
                <h6 className="BioDesPonys"> {detalles.Descripcion}</h6>
              </Col>
            </Row>
            <Row className="BioImgyBioPonys">
              <h1 className="BIOtitulocombosPonys"> Combos</h1>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(BiografiaPnys);
