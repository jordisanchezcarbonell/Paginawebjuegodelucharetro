import React from "react";

import "./TierList.css";

import { Row, Col } from "reactstrap";

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

      <div className="DivPrincTier ">
                <Row className="FondoTier">
        <h1 className="TierNombre">TierList</h1>
        </Row>
        <Row className="FondoTier">

          <FontAwesomeIcon
            className="iconoTier margenesiconos"
            icon={faArrowLeft}
            onClick={this.props.history.goBack}
          />
        </Row>
        <Row className="FondoTier">
          <Col className="col-md-4">
            <div className="margenestablas">
      

              {detalles.map((personaje, index) => {
                if (personaje.FotoTier != null) {
                  comp = (
                    <tr>
                      <td className=" tdTierNombre elominarborders tdTier">
                        <h3 className="NombrePersTier">{index + 1}</h3>
                      </td>
                      <td className="tdTierfoto elominarborders">
                        <img
                          src={process.env.PUBLIC_URL + personaje.FotoTier}
                          alt=""
                          className="fototier"
                          height="110vw"
                        ></img>
                      </td>
                      <td className="tdTierNombre elominarborders">
                        <h3 className="NombrePersTier">{personaje.Nombre}</h3>
                      </td>
                    </tr>
                  );
                } else {
                  comp = (
                    <tr>
                      <td className=" elominarborders tdTier">
                        {index + 1}
                      </td>
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
                  <div key={index} className=" elominarborders">
                    <Table
                      responsive
                      size="sm"
                      className="elominarborders TablaTierNumero"
                    >
                      <tbody>{comp}</tbody>
                    </Table>
                  </div>
                );
              })}
            </div>
          </Col>
          <Col className="col-md-8">
            <div>
              <h1 className="TituloDesc">Descripcion</h1>
              <h6 className="DescripcionTier  ">
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
