import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { StyleSheet, Text, View } from "react";
import { Container, Row, Col } from "reactstrap";
import "./Mortalkombat.css";
import { withRouter } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import Image from "react-bootstrap/Image";

// get our fontawesome imports
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactComponent as Logo } from "../nombre.png";
import ReactPlayer from "react-player";
import IcomoonReact, { iconList } from "icomoon-react";
import { BrowserRouter, Route, Link } from "react-router-dom";
var listOfImages = [];
function importAll(r) {
  return r.keys().map(r);
}
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
  console.log(props);
}
//AVER SI FUNCIOONA
class Child extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    return (
      <div style={{ width: "100%" }} key={this.props.elemento.Nombre}>

<div class="horiz-rule  mt-1">
              <div class="bar">
              </div>
              <img src="https://cdn-prod.mortalkombat.com/aftermath/global/vectors/horizontal-rule-node.svg" alt="" class="node" />

            </div>


            <div class="title-block enter"><h3>
            {this.props.elemento.Nombre}
        </h3> 
        <div class="rule "></div></div>
        <Container className="w-100">       
<Row className="w-100">
 <Col className="col-md-4 w-100">
        <TableContainer component={Paper} className="fondoTablaMK pruebadelelemento mt-5">
        <h3 className="TituloAtaquesMK">Kombo Attacks</h3>

          <Table  >
                


            <TableBody>
              {this.props.elemento.KomboAttacks.map((Ataque, index) => (
                <TableRow key={Ataque.nombreAtaque} className="mx-5 pruebaaa">
                  <TableCell
                    className="  py-2 colorFondoAtaquesMK "
                    scope="row"
                    align="left"
                  >
                    {Ataque.nombreAtaque}
                  </TableCell>

                  {
                    <TableCell
                      className="  nombreAtaquesMK py-2"
                      align="right"
                    >
                      {Ataque.Animacion.map((animaciondelataque, index) => (
                        <Image
                          key={index}
                          className="imgAtaqueMK"
                          src={process.env.PUBLIC_URL + animaciondelataque}
                          fluid
                        />
                      ))}
                    </TableCell>
                  }
                </TableRow>
              ))}
            </TableBody>
            </Table>
            </TableContainer>

</Col>
<Col className="col-md-4">
        <TableContainer component={Paper} className="fondoTablaMK  pruebadelelemento mt-5">
        <h3 className="TituloAtaquesMK">Special Moves</h3> 

          <Table>
            <TableBody>
              {this.props.elemento.KomboAttacks.map((Ataque, index) => (
                <TableRow key={Ataque.nombreAtaque} className="mx-5">
                  <TableCell
                    className="  py-2 colorFondoAtaquesMK "
                    scope="row"
                    align="left"
                  >
                    {Ataque.nombreAtaque}
                  </TableCell>

                  {
                    <TableCell
                      className="  nombreAtaquesMK py-2"
                      align="right"
                    >
                      {Ataque.Animacion.map((animaciondelataque, index) => (
                        <Image
                          key={index}
                          className="imgAtaqueMK"
                          src={process.env.PUBLIC_URL + animaciondelataque}
                          fluid
                        />
                      ))}
                    </TableCell>
                  }
                </TableRow>
              ))}
            </TableBody>
            </Table>
            </TableContainer>
            </Col>
            <Col className="col-md-4">
            <TableContainer className=" fondoTablaMK pruebadelelemento mt-5">
            <h3 className="TituloAtaquesMK">Finishers</h3>

              <Table>

            <TableBody>
              {this.props.elemento.Finishers.map((Ataque, index) => (
                <TableRow key={Ataque.nombreAtaque} className="mx-5">
                  <TableCell
                    className="  py-2 colorFondoAtaquesMK "
                   
                    scope="row"
                    align="left"
                  >
                    {Ataque.nombreAtaque}
                  </TableCell>

                  {
                    <TableCell
                      className="  nombreAtaquesMK py-2"
                      align="right"
                    >
                      {Ataque.Animacion.map((animaciondelataque, index) => (
                        <Image
                          key={index}
                          className="imgAtaqueMK"
                          src={process.env.PUBLIC_URL + animaciondelataque}
                          fluid
                        />
                      ))}
                    </TableCell>
                  }
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        </Col>
        </Row>
        </Container>
      </div>
    );
  }
}

class MortalKombat extends React.Component {
  constructor(props, context) {
    super(props);
    console.log(props);
    console.log(this.props.detalles.Foto);
    this.state = {
      isItemContentVisible: {},
      numChildren: 0,
    };
  }

  prueballamadadetodolosdatos() { }
  renderContent(personaje) {
    this.state.isItemContentVisible = false;
    /*console.log(personaje);
    return <div className="pruebadelelemento">prueba</div>;
    */
    // this.setState({ objetoPersonaje: personaje });
    this.state.objetoPersonaje = personaje;
    console.log(this.state.objetoPersonaje);
  }
  showContent(id) {
    // merge new value with existing visibility status into new object´
    console.log(id);
    this.setState({
      isItemContentVisible: {
        ...this.state.isItemContentVisible,
        [id]: true,
      },
    });
    this.setState({ mostrarsegundoelemnto: true });
  }
  state = {
    objetoPersonaje: "",
    mostrarsegundoelemnto: false,
    isItemContentVisible: false,
    show: false,
    elmento: "",
    imagen: "",
    isActive: false,
  };

  showModal = (e, imagenes) => {
    this.setState({
      show: true,
      elmento: e,
      imagen: imagenes,
    });

    console.log(this.state.elemento);
  };

  handleCloseModal = (e) => {
    this.setState({ show: false });
  };

  render() {
    const { isActive } = this.state;
    const detalles = this.props;
    const style = {
      backgroundPosition: "right right",
      backgroundSize: "cover",

      display: "block",
      backgroundImage:
        "linear-gradient(to left, rgba(255,255,255,0), rgba(0, 0, 0, 1)), url(" +
        this.props.detalles.Rooter +
        ")",
      backgroundRepeat: "no-repeat",
    };

    return (
      <div className="DivMortalkombat  w-100 ml-0">
        <Modal show={this.state.show}>
          <Modal.Header>
            <Modal.Title>{this.state.elmento} </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img
              className="imgAtaque"
              variant="top"
              src={process.env.PUBLIC_URL + this.state.imagen}
              alt="Error"
            />
            <ReactPlayer
              //Modificacion del tamaño del video.
              width="100px"
              height="100px"
              url="https://www.youtube.com/watch?v=3IHJokjMpf0"
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleCloseModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        <div>
          <Row>
            <Col md="7" className="photo">
              <h6> {this.props.detalles[0]}</h6>
              <img
                src={process.env.PUBLIC_URL + this.props.detalles.Logo2}
                alt=""
                className="photo-container"
                height="110vw"
              ></img>
              <img
                src={process.env.PUBLIC_URL + this.props.detalles.Logo}
                alt=""
                className="photo-banner"
                height="110vw"
              ></img>
            </Col>

            <Col md="5" style={style}></Col>
          </Row>
        </div>
        <h1 className="TituloElegirMK"> Elige a tu jugador</h1>
        <div className="row rowGlobalKI ">
          <div className="w-100 mt-4">
            <Container className="w-100 ">
              <Row className=" w-100 stage">
                <div className="characterMk nav nav-tabs" role="tablist">
                  {this.props.Juego.map((personaje, index) => {
                    return (
                      <a
                        key={index}
                        data-id="index"
                        className="character-thumb visible enabled  "
                      >
                        <div>
                          <div className="img-wrapper">
                            <img
                              onClick={() => this.showContent(index)}
                              data-src={process.env.PUBLIC_URL + personaje.Foto}
                              alt=""
                              className="img-fluid lazy-loaded h-100"
                              src={process.env.PUBLIC_URL + personaje.Foto2}
                            />
                          </div>


                          <div className="label">{personaje.Nombre}</div>
                        </div>
                        <div className="m-">
                          {this.state.isItemContentVisible[index] &&
                            this.renderContent(personaje)}

                          <div></div>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </Row>

            </Container>
            

            {this.state.mostrarsegundoelemnto && (
              <Child elemento={this.state.objetoPersonaje} />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(MortalKombat);
