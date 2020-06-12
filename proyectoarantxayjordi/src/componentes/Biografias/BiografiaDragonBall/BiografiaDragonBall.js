import React from "react";

import "./BiografiaDragonBall.css";

import { withRouter } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import ResponsivePlayer from "../../video/ResponsivePlayer";

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
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    const detalles = this.props.location.state.ALL;

    return (
      <div className="BioDivTotalBD">
        <button onClick={this.props.history.goBack}>Back</button>

        <h1 className="BioTitulocolor"> {detalles.Nombre}</h1>

        <div>
          <Row className="BioImgyBio">
            <Col className="col-md-5">
              <img
                className="BioImgBD"
                variant="top"
                src={process.env.PUBLIC_URL + detalles.Foto2}
                alt="Error"
              />
            </Col>
            <Col className="col-md-5  BIOCentrarColDivBD">
              <h1 className="BiotituloBD"> Biography</h1>
              <h6 className="BioDescBD"> {detalles.Descripcion}</h6>
              <h1 className="BiotituloBD"> Personality</h1>
              <h6 className="BioDescBD"> {detalles.Personality}</h6>
              <h1 className="BiotituloBD"> Characteristics </h1>
              <h6 className="BioDescBD">
                <p>Anime name: </p>
                {detalles.Animename}
              </h6>
              <h6 className="BioDescBD"> Manga name: {detalles.Manganame}</h6>
              <h6 className="BioDescBD"> Raze: {detalles.Raze}</h6>
              <h6 className="BioDescBD"> Gender: {detalles.Gender}</h6>
              <h6 className="BioDescBD"> Size: {detalles.Size}</h6>
              <h6 className="BioDescBD"> Weight: {detalles.Weight}</h6>
            </Col>
          </Row>
          <div className="">
            <h1 className="BIOtitulocombosBD"> Combos</h1>
            <div>
              <Col className="col-md-5 ">
                <ResponsivePlayer url={detalles.Combos} />

                <ResponsivePlayer url={detalles.Combos2} />
              </Col>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(BiografiaDragonBall);
