import React from "react";

import "./BiografiaSoul.css";
import { Container, Row, Col } from "reactstrap";

import { withRouter } from "react-router-dom";

class BiografiaSoul extends React.Component {
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
      <div className="BioDivTotalSoul">
       
        <div >
          <h1 className="BioNombreSoul"> {detalles.Nombre}</h1>

          <div>
            <Row className="BioImgySoul">
              <Col className="col-md-4">
                <img
                  className="BioImgSoul"
                  variant="top"
                  src={process.env.PUBLIC_URL + detalles.Foto}
                  alt="Error"
                />
              </Col>
              <Col className="col-md-4  BIOCentrarColDivSoul">
                <h1 className="BiotituloSoul"> Biografia</h1>
                <h6 className="BioDesSoul"> {detalles.Descripcion}</h6>
              </Col>
            </Row>
            <Row className="BioImgyBioSoul">
              <h1 className="BIOtitulocombosSoul"> Combos</h1>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(BiografiaSoul);
