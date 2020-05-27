/* eslint-disable array-callback-return */
import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Container, Row, Col } from "reactstrap";
import "./Dragonball.css";
import { withRouter } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { animateScroll as scroll } from "react-scroll";
import BolaDeDrac from "./bolaDragon.png";
// get our fontawesome imports

import ReactPlayer from "react-player";

//AVER SI FUNCIOONA
class Child extends React.Component {
  constructor(props) {
    super(props);

    this.myRef = React.createRef(); // Create a ref object
  }

  render() {
    return (
      <div
        style={{ width: "100%" }}
        className="PruebadefondoAtaques"
        key={this.props.elemento.Nombre}
      >
        {/* <img  className="FotoFondoBD" src={fondoFotoNombre}>
          </img> */}

        <div className="fondoproba enter">
          <div className="pro ">
            <img className="bolaDeDrac" src={BolaDeDrac} alt="Logo"></img>
          </div>

          <h3 className="TextoPersonajeTituloBD">
            {this.props.elemento.Nombre}
          </h3>

          <div className="rule "></div>
        </div>
        <Container className=" ">
          <Row className="w-100  px-0 mx-0 ">
            <Col className="col-md-5 w-100 mb-5 mr-5 ">
              <TableContainer
                component={Paper}
                className="fondoTablaBD  eliminarradius nomostrarscrollBD mt-5 "
              >
                <h3 className="TituloAtaquesBD my-0">
                  Unique Action
                  <hr className="pruebalinea" />
                </h3>

                <Table
                  stickyHeader
                  aria-label="sticky table"
                  className="nomostrarscroll "
                >
                  <TableBody className="nomostrarscrollBD">
                    {this.props.elemento.NormalAttacks.map((Ataque, index) => (
                      <TableRow key={Ataque.nombreAtaque} className="mx-5  ">
                        <TableCell
                          className="  py-2 colorFondoAtaquesBD tablaborderabajo "
                          scope="row"
                          component="td"
                          align="left"
                        >
                          {Ataque.nombreAtaque}
                        </TableCell>

                        {
                          <TableCell
                            className="  nombreAtaquesBD py-2 tablaborderabajo"
                            component="td"
                            align="right"
                          >
                            {Ataque.Animacion.map(
                              (animaciondelataque, index) => (
                                <Image
                                  key={index}
                                  className="imgAtaqueBD"
                                  src={
                                    process.env.PUBLIC_URL + animaciondelataque
                                  }
                                  fluid
                                />
                              )
                            )}
                          </TableCell>
                        }
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Col>
            <Col className="col-md-6 ">
              <TableContainer className=" fondoTablaBD  mt-5">
                <h3 className="TituloAtaquesBD my-0 w-100">
                  Special Moves
                  <hr className="pruebalinea" />
                </h3>

                <Table className="nomostrarscrollBD">
                  <TableBody className="nomostrarscrollBD">
                    {this.props.elemento.SpecialMoves.map((Ataque, index) => (
                      <TableRow key={index} className="mx-5">
                        <TableCell
                          className="  py-2 colorFondoAtaquesBD  nomostrarscrollBD tablaborderabajo"
                          scope="row"
                          component="td"
                          align="left"
                        >
                          {Ataque.nombreAtaque}
                        </TableCell>

                        {
                          <TableCell
                            className="  nombreAtaquesBD py-2 tablaborderabajo"
                            align="right"
                            component="td"
                          >
                            {Ataque.Animacion.map(
                              (animaciondelataque, index) => (
                                <Image
                                  key={index}
                                  className="imgAtaqueBD"
                                  src={
                                    process.env.PUBLIC_URL + animaciondelataque
                                  }
                                  fluid
                                />
                              )
                            )}
                          </TableCell>
                        }
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>

              <TableContainer className=" fondoTablaBD  mt-3 ">
                <h3 className="TituloAtaquesBD my-0">
                  Sky bound Art
                  <hr className="pruebalinea" />
                </h3>

                <Table className="nomostrarscrollBD">
                  <TableBody>
                    {this.props.elemento.SuperAttacks.map((Ataque, index) => (
                      <TableRow key={index} className="mx-5">
                        <TableCell
                          className="  py-2 colorFondoAtaquesBD tablaborderabajo "
                          component="td"
                          scope="row"
                          align="left"
                        >
                          {Ataque.nombreAtaque}
                        </TableCell>

                        {
                          <TableCell
                            component="td"
                            className="  nombreAtaquesBD py-2 tablaborderabajo"
                            align="right"
                          >
                            {Ataque.Animacion.map(
                              (animaciondelataque, index) => (
                                <Image
                                  key={index}
                                  className="imgAtaqueBD"
                                  src={
                                    process.env.PUBLIC_URL + animaciondelataque
                                  }
                                  fluid
                                />
                              )
                            )}
                          </TableCell>
                        }
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>

              <TableContainer className=" fondoTablaBD  mt-3 ">
                <h3 className="TituloAtaquesBD my-0">
                  Super Sky boundArt
                  <hr className="pruebalinea" />
                </h3>

                <Table className="nomostrarscroll">
                  <TableBody>
                    {this.props.elemento.MeteorAttack.map((Ataque, index) => (
                      <TableRow key={Ataque.nombreAtaque} className="mx-5">
                        <TableCell
                          className="  py-2 colorFondoAtaquesBD tablaborderabajo "
                          component="td"
                          scope="row"
                          align="left"
                        >
                          {Ataque.nombreAtaque}
                        </TableCell>

                        {
                          <TableCell
                            component="td"
                            className="  nombreAtaquesBD py-2 tablaborderabajo"
                            align="right"
                          >
                            {Ataque.Animacion.map(
                              (animaciondelataque, index) => (
                                <Image
                                  key={index}
                                  className="imgAtaqueBD"
                                  src={
                                    process.env.PUBLIC_URL + animaciondelataque
                                  }
                                  fluid
                                />
                              )
                            )}
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

class Dragonball extends React.Component {
  constructor(props, context) {
    super(props);
    this.state = {
      isItemContentVisible: {},
      numChildren: 0,
    };
  }
  renderContent() {
    const newLocal = this.state;
    newLocal.isItemContentVisible = false;

    return <div>I'm the child</div>;
  }
  showContent(id) {
    // merge new value with existing visibility status into new object
    this.setState({
      isItemContentVisible: {
        ...this.state.isItemContentVisible,
        [id]: true,
      },
    });
  }
  state = {
    show: false,
    elmento: "",
    imagen: "",
    isActive: false,
  };
  // eslint-disable-next-line no-dupe-class-members
  renderContent(personaje) {
    const newLocal_1 = this.state;
    newLocal_1.isItemContentVisible = false;
    /*
    return <div className="pruebadelelemento">prueba</div>;
    */
    // this.setState({ objetoPersonaje: personaje });
    newLocal_1.objetoPersonaje = personaje;
  }
  onClickDown = () => {
    scroll.scrollToBottom();
  };
  scrollToTop = () => {
    scroll.scrollToBottom();
  };
  // eslint-disable-next-line no-dupe-class-members
  showContent(id) {
    // merge new value with existing visibility status into new object´
    this.setState({
      isItemContentVisible: {
        ...this.state.isItemContentVisible,
        [id]: true,
      },
    });
    this.setState({ mostrarsegundoelemnto: true });
    this.onClickDown();
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
  };

  handleCloseModal = (e) => {
    this.setState({ show: false });
  };

  render() {
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
      <div className="DivBDFONDO degrafado w-100 ml-0">
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
            <Col md="3" className="fondo1">
              <h6> {this.props.detalles[0]}</h6>
              <img
                src={process.env.PUBLIC_URL + this.props.detalles.Foto}
                alt=""
                className="fotoLogoBD"
                height="110vw"
              ></img>
            </Col>
            <Col md="4" className="fondo2">
              <h1 className="TextoTituloDB">{this.props.detalles.Nombre} </h1>
            </Col>

            <Col md="5" style={style}></Col>
          </Row>
        </div>

        <div className="row">
          <div className="w-100 mt-4">
            <Container className="w-100  ">
              <h3 className="LetraTituloBD">Character Select</h3>
              <Row className=" w-100 stage ">
                {/* <img
                  src={process.env.PUBLIC_URL + this.props.detalles.Logo2}
                  className="mx-auto mb-3"
                ></img> */}

                <div
                  className="nav nav-tabs col-md-6  borderBotBD "
                  role="tablist"
                >
                  {this.props.Juego.map((personaje, index) => {
                    if (index <= 19) {
                      return (
                        <div
                          className="CentrodoBD "
                          align="center"
                          key={personaje.Nombre}
                        >
                          <div className="DIVFOTO w-100">
                            <img
                              className="FotoBD"
                              onClick={() => this.showContent(index)}
                              src={process.env.PUBLIC_URL + personaje.Foto}
                              alt="imagen personaje"
                            ></img>
                          </div>
                          <div>
                            <div>
                              {this.state.isItemContentVisible[index] &&
                                this.renderContent(personaje)}

                              <div></div>
                            </div>
                          </div>
                        </div>
                      );
                    }
                  })}
                </div>

                <div
                  className="nav nav-tabs col-md-6  borderBotBD"
                  role="tablist"
                >
                  {this.props.Juego.map((personaje, index) => {
                    if (index > 19) {
                      return (
                        <div
                          key={personaje.Nombre}
                          className="CentrodoBD "
                          align="center"
                        >
                          <div className="DIVFOTO w-100" align="center">
                            <img
                              className="FotoBD2 "
                              onClick={() => this.showContent(index)}
                              src={process.env.PUBLIC_URL + personaje.Foto}
                              alt="imagen logo2"
                            ></img>
                          </div>
                          <div>
                            <div>
                              {this.state.isItemContentVisible[index] &&
                                this.renderContent(personaje)}

                              <div></div>
                            </div>
                          </div>
                        </div>
                      );
                    }
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
export default withRouter(Dragonball);
