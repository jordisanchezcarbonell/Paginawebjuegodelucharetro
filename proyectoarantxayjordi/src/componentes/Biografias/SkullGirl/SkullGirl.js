import React from "react";

import "./SkullGirl.css";

import { withRouter } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

class SkullGirl extends React.Component {
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
      <div className="BioDivTotalSG">
        
      <div>
        <h1 className="BioNombreSG"> {detalles.Nombre}</h1>

        <div>
          <Row className="BioImgyBioSG">
            <Col className="col-md-5">
              <img
                className="BioImgSG"
                variant="top"
                src={process.env.PUBLIC_URL + detalles.Foto}
                alt="Error"
              />
            </Col>
            <Col className="col-md-5  BIOCentrarColDivSG">
              <h1 className="BiotituloSG"> Biografia</h1>
              <h6 className="BioDescSG"> {detalles.Descripcion}</h6>
            </Col>
          </Row>
          <div className="">
            <h1 className="BIOtitulocombosSG"> Combos</h1>
            <div>
              
            </div>
          </div>
        </div>
        </div>
    </div>
    );
  }
}

export default withRouter(SkullGirl);
