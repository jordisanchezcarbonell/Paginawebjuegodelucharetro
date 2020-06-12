import React from "react";

import "./BiografiaUndernight.css";
import { Container, Row, Col } from "reactstrap";
import { withRouter } from "react-router-dom";

class BiografiaUndernight extends React.Component {
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
      <div className="BioDivTotalUN">
        
      <div className="BioEspTopUN">
        <h1 className="BioNombreUN"> {detalles.Nombre}</h1>

        <div>
          <Row className="BioImgyBioUN">
            <Col className="col-md-5">
              <img
                className="BioImgUN"
                variant="top"
                src={process.env.PUBLIC_URL + detalles.Foto2}
                alt="Error"
              />
            </Col>
            <Col className="col-md-5  BIOCentrarColDivUN">
              <h1 className="BiotituloUN"> Biografia</h1>
              <h6 className="BioDescUN"> {detalles.Descripcion}</h6>
            </Col>
          </Row>
          <div className="">
            <h1 className="BIOtitulocombosUN"> Combos</h1>
            <div>
              
            </div>
          </div>
        </div>
        </div>
    </div>
    );
  }
}

export default withRouter(BiografiaUndernight);
