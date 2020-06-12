import React from "react";

import "./BiografiaTekken.css";
import { Container, Row, Col } from "reactstrap";

import { withRouter } from "react-router-dom";

class BiografiaTekken extends React.Component {
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
      <div className="BioDivTotalTK">
        
      <div className="BioEspTopTK">
        <h1 className="BioNombreTK"> {detalles.Nombre}</h1>

        <div>
          <Row className="BioImgyBioTK">
            <Col className="col-md-5">
              <img
                className="BioImgTK"
                variant="top"
                src={process.env.PUBLIC_URL + detalles.Foto2}
                alt="Error"
              />
            </Col>
            <Col className="col-md-5  BIOCentrarColDivTK">
              <h1 className="BiotituloTK"> Biografia</h1>
              <h6 className="BioDescTK"> {detalles.Descripcion}</h6>
            </Col>
          </Row>
          <div className="">
            <h1 className="BIOtitulocombosTK"> Combos</h1>
            <div>
              
            </div>
          </div>
        </div>
        </div>
    </div>
    );
  }
}

export default withRouter(BiografiaTekken);
