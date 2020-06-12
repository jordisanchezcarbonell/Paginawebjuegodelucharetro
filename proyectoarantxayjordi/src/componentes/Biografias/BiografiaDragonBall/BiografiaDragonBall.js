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
        <h1 className="BioNombreBD"> {detalles.Nombre}</h1>


<div > 
        <Row  className="BioImgyBio">
        <Col className="col-md-5">
        <img
          className="BioImgBD"
          variant="top"
          src={process.env.PUBLIC_URL + detalles.Foto2}
          alt="Error"
        />
        </Col>
        <Col  className="col-md-5  BIOCentrarColDivBD">
        <h1 className="BiotituloBD"> Biografia</h1>
        <h6 className="BioDescBD"> {detalles.Descripcion}</h6>
        </Col>
        </Row>
        <Row  className="BioImgyBio">

        <h1 className="BIOtitulocombosBD"> Combos</h1>



        </Row>
        </div>
        

      </div>
    );
  }
}

export default withRouter(BiografiaDragonBall);
