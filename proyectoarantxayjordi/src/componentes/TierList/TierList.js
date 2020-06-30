import React from "react";

import "./TierList.css";

import { Container, Row, Col } from "reactstrap";

import { withRouter } from "react-router-dom";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Table from "react-bootstrap/Table";
class TierList extends React.Component {
  constructor(props, context) {
    super(props);
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
    const descripcionbiojuego = this.props.location.state.descripcionjuego;
    let comp;

    console.log(detalles);

    return (
      /*  const style2 = {
        backgroundPosition: "right right",
        backgroundSize: "cover",
  
        display: "block",
        backgroundImage:
          "linear-gradient(to left, rgba(255,255,255,0), rgba(0, 0, 0, 1)), url(" +
          this.props.detalles.personaje +
          ")",
        backgroundRepeat: "no-repeat",
      };*/

      <div className="DivPrincTier">
        <Row className="FondoTier">
          <FontAwesomeIcon
            className="iconoTier"
            icon={faArrowLeft}
            onClick={this.props.history.goBack}
          />
        </Row>
        <Row className="FondoTier">
          <Col className="col-md-6">
            <div>
              {/*     
                  <th>Encabezado 1</th>

<th>Encabezado 2</th>

<th>Encabezado 3</th>*/}

              {detalles.map((personaje, index) => {
                if (personaje.FotoTier != null) {
                  comp = (
                    <tr>
                      <td className="colortexto tdTier">{index + 1}</td>
                      <td className="tdTierfoto">
                        <img
                          src={process.env.PUBLIC_URL + personaje.FotoTier}
                          alt=""
                          className="fototier"
                          height="110vw"
                        ></img>
                      </td>
                      <td className="tdTierNombre">
                        <h3 className="NombrePersTier">{personaje.Nombre}</h3>
                      </td>
                    </tr>
                  );
                } else {
                  comp = (
                    <tr>
                      <td className="colortexto tdTier">{index + 1}</td>
                      <td className="tdTierfoto">
                        <img
                          src={process.env.PUBLIC_URL + personaje.Foto}
                          alt=""
                          className="fototier"
                          height="110vw"
                        ></img>
                      </td>
                      <td className="tdTierNombre">
                        <h3 className="NombrePersTier">{personaje.Nombre}</h3>
                      </td>
                    </tr>
                  );
                }
                return (
                  <div key={index} className="fondotabla ">
                    <Table responsive size="sm" className="TablaTierNumero">
                      <tbody>{comp}</tbody>
                    </Table>
                  </div>
                );
              })}
            </div>
          </Col>
          <Col className="col-md-6">
            <div>
              <h1 className="TituloDesc">Descripcion</h1>
              <h6 className="  colortextoTier">
                {descripcionbiojuego.Descripcion}
              </h6>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default withRouter(TierList);