import React from "react";

import "./BiografiaStreetfighter.css";
import { Container, Row, Col } from "reactstrap";

import { withRouter } from "react-router-dom";
import ResponsivePlayer from "../../video/ResponsivePlayer";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class BiografiaStreetfighter extends React.Component {
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
      <div className="BioDivTotalSF">
        <h1 className="BioNombreSF"> {detalles.Nombre}</h1>

        <div>
          <Row className="BioImgyBioSF">
            <Col className="col-md-5">
              <img
                className="BioImgSF"
                variant="top"
                src={process.env.PUBLIC_URL + detalles.Foto2}
                alt="Error"
              />
            </Col>
            <Col className="col-md-5  BIOCentrarColDivSF">
              <h1 className="BiotituloSoul"> Biography</h1>
              <h6 className="BioDesSoul"> {detalles.Descripcion}</h6>
              <h1 className="BiotituloSoul"> Personality</h1>
              <h6 className="BioDesSoul"> {detalles.Personality}</h6>
              <h1 className="BiotituloSoul"> Characteristics </h1>
              <h6 className="BioDesSoul">
                <strong>Likes: </strong> {detalles.Likes}
              </h6>
              <h6 className="BioDesSoul">
                <strong>Dislikes: </strong> {detalles.Dislikes}
              </h6>

              <h6 className="BioDesSoul">
                <strong>Skills: </strong> {detalles.Skills}
              </h6>
              <h6 className="BioDesSoul">
                <strong>Affiliation: </strong> {detalles.Affiliation}
              </h6>
              <h6 className="BioDesSoul">
                <strong>Height: </strong> {detalles.Height}
              </h6>
              <h6 className="BioDesSoul">
                <strong> Weight: </strong>
                {detalles.Weight}
              </h6>
            </Col>
          </Row>
          <div className="">
            <h1 className="BIOtitulocombosSoul"> Combos</h1>
            <div className="derechaBD">
              <ResponsivePlayer className="video" url={detalles.Combos} />
              {/* <Col className="col-md-5 ">
                <ResponsivePlayer url={detalles.Combos} />
                </Col>
                <Col className="col-md-5 ">
                <ResponsivePlayer url={detalles.Combos2} />
              </Col> */}
            </div>
            <div className="izqBD">
              <ResponsivePlayer className="video" url={detalles.Combos2} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(BiografiaStreetfighter);
