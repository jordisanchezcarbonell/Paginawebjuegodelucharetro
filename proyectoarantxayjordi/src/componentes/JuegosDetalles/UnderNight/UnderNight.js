/* eslint-disable array-callback-return */
import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import { Container, Row, Col } from "reactstrap";
import "./UnderNight.css";
import { withRouter } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { animateScroll as scroll } from "react-scroll";
import TituloPJ from "./TituloPJ.png";
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
        className=""
        key={this.props.elemento.Nombre}
      >
        <div className="NombrePersonajeUN my-4  ">
          <img className="w-100 fotoNombrePJUN" src={TituloPJ} alt="logo"></img>
          <h3 className="TextoPersonajeTituloUN">
            {this.props.elemento.Nombre}
          </h3>
        </div>
        <Container className="PruebadefondoAtaquesUN">
          <Row className="w-100  px-0 mx-0 ">
            <Col className="col-md-5 w-100 mb-5 mr-5 ">
              <TableContainer className="fondoTablaUN  eliminarradius nomostrarscrollBD mt-5 ">
                <h3 className="TituloAtaquesUN  py-2 my-0 mb-2 ">
                  Special Attack
                  {/* <hr className="pruebalinea" />   my-0 */}
                </h3>

                <Table
                  stickyHeader
                  aria-label="sticky table"
                  className="nomostrarscroll "
                >
                  <TableBody className="nomostrarscrollBD">
                    {this.props.elemento.SpecialAttack.map((Ataque, index) => (
                      <TableRow key={Ataque.nombreAtaque} className="mx-5  ">
                        <TableCell
                          className="  py-2 NombreAtaquesUN tablaborderabajo "
                          scope="row"
                          component="td"
                          align="left"
                        >
                          {Ataque.nombreAtaque}
                        </TableCell>

                        {
                          <TableCell
                            className="  celdaimgAtaqUN py-2 tablaborderabajo"
                            component="td"
                            align="right"
                          >
                            {Ataque.Animacion.map(
                              (animaciondelataque, index) => (
                                <Image
                                  key={index}
                                  className="imgAtaqueUN"
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

              <TableContainer className=" fondoTablaUN  mt-3 ">
                <h3 className="TituloAtaquesUN2 py-2 ">Infinite Worth</h3>

                <Table className="nomostrarscrollBD">
                  <TableBody>
                    {this.props.elemento.InfiniteWorth.map((Ataque, index) => (
                      <TableRow key={index} className="mx-5">
                        <TableCell
                          className="  py-2 NombreAtaquesUN2 tablaborderabajo "
                          component="td"
                          scope="row"
                          align="left"
                        >
                          {Ataque.nombreAtaque}
                        </TableCell>

                        {
                          <TableCell
                            component="td"
                            className="  celdaimgAtaqUN2 py-2 tablaborderabajo"
                            align="right"
                          >
                            {Ataque.Animacion.map(
                              (animaciondelataque, index) => (
                                <Image
                                  key={index}
                                  className="imgAtaqueUN"
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
                <h3 className="TituloAtaquesUN3  py-2 ">Special Attack</h3>

                <Table className="nomostrarscrollBD">
                  <TableBody className="nomostrarscrollBD">
                    {this.props.elemento.SpecialAttack.map((Ataque, index) => (
                      <TableRow key={index} className="mx-5">
                        <TableCell
                          className="  py-2 NombreAtaquesUN4  nomostrarscrollBD tablaborderabajo"
                          scope="row"
                          component="td"
                          align="left"
                        >
                          {Ataque.nombreAtaque}
                        </TableCell>

                        {
                          <TableCell
                            className="  celdaimgAtaqUN4 py-2 tablaborderabajo"
                            align="right"
                            component="td"
                          >
                            {Ataque.Animacion.map(
                              (animaciondelataque, index) => (
                                <Image
                                  key={index}
                                  className="imgAtaqueUN"
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

              <TableContainer className=" fondoTablaUN  mt-3 ">
                <h3 className="TituloAtaquesUN4  py-2">Infinite Worth EXS</h3>

                <Table className="nomostrarscroll">
                  <TableBody>
                    {this.props.elemento.InfiniteWorthEXS.map(
                      (Ataque, index) => (
                        <TableRow key={Ataque.nombreAtaque} className="mx-5">
                          <TableCell
                            className="  py-2 NombreAtaquesUN4 tablaborderabajo "
                            component="td"
                            scope="row"
                            align="left"
                          >
                            {Ataque.nombreAtaque}
                          </TableCell>

                          {
                            <TableCell
                              component="td"
                              className="  celdaimgAtaqUN4 py-2 tablaborderabajo"
                              align="right"
                            >
                              {Ataque.Animacion.map(
                                (animaciondelataque, index) => (
                                  <Image
                                    key={index}
                                    className="imgAtaqueUN"
                                    src={
                                      process.env.PUBLIC_URL +
                                      animaciondelataque
                                    }
                                    fluid
                                  />
                                )
                              )}
                            </TableCell>
                          }
                        </TableRow>
                      )
                    )}
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

class UnderNight extends React.Component {
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
      <div className="DivBDFONDOIMAGEN">
        <Modal show={this.state.show}>
          <Modal.Header>
            <Modal.Title>{this.state.elmento} </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img
              className=""
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
            <Col md="3" className="">
              <img
                src={process.env.PUBLIC_URL + this.props.detalles.Foto}
                alt=""
                className=""
                height="180vw"
              ></img>
            </Col>
            <Col md="4" className="fondo2">
              <img
                src={process.env.PUBLIC_URL + this.props.detalles.Logo2}
                alt=""
                className=""
                height="180vw"
              ></img>
            </Col>

            <Col md="5" style={style}></Col>
          </Row>
        </div>

        <div className="DivBDFONDOUN ">
          <div className="w-100 mt-4 ">
            <Container className="w-100  ">
              <h3 className="TextoTituloUN mx-auto">Character Select</h3>
              <Row className=" w-100 stage ">
                {/* <img
                  src={process.env.PUBLIC_URL + this.props.detalles.Logo2}
                  className="mx-auto mb-3"
                ></img> */}

                <div
                  className="nav  col-md-11  borderBotUN mb-4  mx-auto"
                  role="tablist"
                >
                  {this.props.Juego.map((personaje, index) => {
                    return (
                      <div
                        className="CentrodoUN "
                        align="center"
                        key={personaje.Nombre}
                      >
                        <div className="w-100 divFOTOUN">
                          <img
                            className="FotoUB Personaje"
                            onClick={() => this.showContent(index)}
                            src={process.env.PUBLIC_URL + personaje.Foto}
                            alt="imagen personaje"
                          ></img>

                          <h3 className="puebaNombre">{personaje.Nombre}</h3>
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
export default withRouter(UnderNight);
