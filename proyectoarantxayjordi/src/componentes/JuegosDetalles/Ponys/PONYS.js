/* eslint-disable no-dupe-class-members */
import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Container, Row, Col } from "reactstrap";
import "./PONYS.css";
import { withRouter } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { animateScroll as scroll } from "react-scroll";

import ReactPlayer from "react-player";

//AVER SI FUNCIOONA

class Child extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef(); // Create a ref object
  }

  render() {
    const style = {
      backgroundPosition: "right right",
      backgroundSize: "cover",

      display: "block",
      backgroundImage:
        "linear-gradient(to left, rgba(255,255,255,0), rgba(0, 0, 0, 1)), url(" +
        this.props.elemento.Foto2 +
        ")",
      backgroundRepeat: "no-repeat",
    };
    return (
      <div
        id="section1"
        style={{ width: "100%" }}
        key={this.props.elemento.Nombre}
        className="DivPonysGlobal"
      >
        <div className="products">
          <h3>{this.props.elemento.Nombre}</h3>
        </div>
        <Row className="w-100  px-0 mx-0">
          <Col className="col-md-6 w-100 mb-5">
            <TableContainer
              component={Paper}
              className="fondoTablaGB  eliminarradius mt-5"
            >
              <h3 className="TituloAtaquesGB my-0">Basics</h3>

              <Table
                stickyHeader
                aria-label="sticky table"
                className="nomostrarscroll"
              >
                <TableBody className="nomostrarscroll">
                  {this.props.elemento.Basics.map((Ataque, index) => (
                    <TableRow key={Ataque.nombreAtaque} className="mx-5 ">
                      <TableCell
                        className="  py-2 colorFondoAtaquesGB "
                        scope="row"
                        component="td"
                        align="left"
                      >
                        {Ataque.nombreAtaque}
                      </TableCell>

                      {
                        <TableCell
                          className="  nombreAtaquesGB py-2"
                          component="td"
                          align="right"
                        >
                          {Ataque.Animacion.map((animaciondelataque, index) => (
                            <Image
                              key={index}
                              className="imgAtaqueGB"
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
            <Col className="col-md-6 ">
              <TableContainer className=" fondoTablaSF  mt-4">
                <h3 className="TituloAtaquesSF my-0 w-100">Unique Movement</h3>

                <Table className="nomostrarscrollBD">
                  <TableBody className="nomostrarscrollBD">
                    {this.props.elemento.Uniquemovement.map((Ataque, index) => (
                      <TableRow key={index} className="mx-5 rowSF5">
                        <TableCell
                          className="  py-2 colorFondoAtaquesSF  nomostrarscrollBD tablaborderabajo"
                          scope="row"
                          component="td"
                          align="left"
                        >
                          {Ataque.nombreAtaque}
                        </TableCell>

                        {
                          <TableCell
                            className="  nombreAtaquesSF   pr-2 py-2 tablaborderabajo"
                            align="right"
                            component="td"
                          >
                            {Ataque.Animacion.map(
                              (animaciondelataque, index) => (
                                <Image
                                  key={index}
                                  className="imgAtaqueSF"
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

              <TableContainer className=" fondoTablaSF  mt-2 mb-4">
                <h3 className="TituloAtaquesSF my-0">Magic Sytem</h3>

                <Table className="nomostrarscrollBD">
                  <TableBody>
                    {this.props.elemento.MAGICSYSTEM.map((Ataque, index) => (
                      <TableRow key={index} className="mx-5 rowSF5">
                        <TableCell
                          className="  py-2 colorFondoAtaquesSF tablaborderabajo "
                          component="td"
                          scope="row"
                          align="left"
                        >
                          {Ataque.nombreAtaque}
                        </TableCell>

                        {
                          <TableCell
                            component="td"
                            className="  nombreAtaquesSF   pr-2 py-2 tablaborderabajo"
                            align="right"
                          >
                            {Ataque.Animacion.map(
                              (animaciondelataque, index) => (
                                <Image
                                  key={index}
                                  className="imgAtaqueSF"
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

              <TableContainer className=" fondoTablaSF  mt-2 mb-4">
                <h3 className="TituloAtaquesSF my-0">Specials</h3>

                <Table className="nomostrarscrollBD">
                  <TableBody>
                    {this.props.elemento.Specials.map((Ataque, index) => (
                      <TableRow key={index} className="mx-5 rowSF5">
                        <TableCell
                          className="  py-2 colorFondoAtaquesSF tablaborderabajo "
                          component="td"
                          scope="row"
                          align="left"
                        >
                          {Ataque.nombreAtaque}
                        </TableCell>

                        {
                          <TableCell
                            component="td"
                            className="  nombreAtaquesSF   pr-2 py-2 tablaborderabajo"
                            align="right"
                          >
                            {Ataque.Animacion.map(
                              (animaciondelataque, index) => (
                                <Image
                                  key={index}
                                  className="imgAtaqueSF"
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

              <TableContainer className=" fondoTablaSF  mt-2 mb-4">
                <h3 className="TituloAtaquesSF my-0">Superattacks</h3>

                <Table className="nomostrarscrollBD">
                  <TableBody>
                    {this.props.elemento.SUPERATTACKS.map((Ataque, index) => (
                      <TableRow key={index} className="mx-5 rowSF5">
                        <TableCell
                          className="  py-2 colorFondoAtaquesSF tablaborderabajo "
                          component="td"
                          scope="row"
                          align="left"
                        >
                          {Ataque.nombreAtaque}
                        </TableCell>

                        {
                          <TableCell
                            component="td"
                            className="  nombreAtaquesSF   pr-2 py-2 tablaborderabajo"
                            align="right"
                          >
                            {Ataque.Animacion.map(
                              (animaciondelataque, index) => (
                                <Image
                                  key={index}
                                  className="imgAtaqueSF"
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
          </Col>
        </Row>
      </div>
    );
  }
}

class PONYS extends React.Component {
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
  renderContent(personaje) {
    const newLocal_1 = this.state;
    newLocal_1.isItemContentVisible = false;

    newLocal_1.objetoPersonaje = personaje;
  }
  onClickDown = () => {
    scroll.scrollToBottom();
  };
  scrollToTop = () => {
    scroll.scrollToBottom();
  };
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
        "linear-gradient(to left, rgba(255,255,255,0),#97033a), url(" +
        this.props.detalles.Rooter +
        ")",
      backgroundRepeat: "no-repeat",

      // #a61d4f
    };

    return (
      <div className="  w-100 ml-0">
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
            <Col md="8" className="fondo2Ponys px-0">
              <img
                src={process.env.PUBLIC_URL + this.props.detalles.Foto}
                alt=""
                className="fotoLogoPonys "
                height="110vw"
              ></img>
            </Col>
            <Col md="4 px-0" style={style}></Col>
          </Row>
        </div>

        <div className="row  rowGlobalPonys ">
          <div className="w-100 mt-4">
            <Container className="w-100 px-0 mx-auto ">
              <h3 className="LetraCharacterPonys">Character Select</h3>

              <Row className=" w-100  mx-auto">
                <div className=" w-100 nav " role="tablist">
                  {this.props.Juego.map((personaje, index) => {
                    return (
                      <div
                        key={personaje.Nombre}
                        className=" divImagenPonys mx-0 px-0  "
                        // data-toggle="tab"
                        //  role="tab"
                        //   aria-selected="false"
                      >
                        <Image
                          href="#una-id"
                          className="ImagenPonys  "
                          onClick={() => this.showContent(index)}
                          src={process.env.PUBLIC_URL + personaje.Foto}
                          fluid
                        ></Image>

                        <Image
                          href="#una-id"
                          className="ImagenPonysReponsive mt-3 mx-auto"
                          onClick={() => this.showContent(index)}
                          src={process.env.PUBLIC_URL + personaje.Foto2}
                          fluid
                        ></Image>

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

export default withRouter(PONYS);
