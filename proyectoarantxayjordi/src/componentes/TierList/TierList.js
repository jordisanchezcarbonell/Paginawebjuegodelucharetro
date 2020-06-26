import React from "react";

import "./TierList.css";

import { withRouter } from "react-router-dom";
import { Row, Col } from "reactstrap";
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

    console.log(detalles);

    return (
      <div>
        <FontAwesomeIcon
          className="iconoBD"
          icon={faArrowLeft}
          onClick={this.props.history.goBack}
        />
        <div>
          <h1 className=" pruebadeltitlo colortexto">
            {descripcionbiojuego.Descripcion}
          </h1>
          {detalles.map((personaje, index) => {
            return (
              <div key={index} className="fondotabla">
                <Table responsive size="sm">
                  <tbody>
                    <tr>
                      <td className="colortexto">{index + 1}</td>
                      <td>
                        <img
                          src={process.env.PUBLIC_URL + personaje.Foto}
                          alt=""
                          className=""
                          height="110vw"
                        ></img>
                      </td>
                      <td>
                        <h3 className="colortexto">{personaje.Nombre}</h3>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default withRouter(TierList);
