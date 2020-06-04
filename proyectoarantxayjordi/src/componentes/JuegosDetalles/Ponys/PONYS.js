/* eslint-disable no-dupe-class-members */
import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
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
    const fondopersonaje = {
      backgroundImage:
        "url(" + process.env.PUBLIC_URL + this.props.elemento.fondo + ")",
      WebkitBackgroundSize: "cover",
      MozBackgroundSize: "cover",
      OBackgroundSize: "cover",
      backgroundSize: "cover",
      color: "black",
      backgroundPosition: "center center",
      backgroundAttachment: "fixed",
    };
    return (
      <div
        id="section1"
        style={({ width: "100%" }, fondopersonaje)}
        key={this.props.elemento.Nombre}
        className="mx-auto"
      >
        <div className="fondonombrePnys">
          <h3 className="TextoPersonajeTituloPonys">
            {this.props.elemento.Nombre}
          </h3>
        </div>
        <Row className="w-100   justify-content-center">
          <Col className="col-md-5  w-100  ">
            <TableContainer className=" fondoTablaPonys margenesresponsive  mt-4   mb-2">
              <h3 className="TituloAtaquesPonys my-0 w-100">Unique Movement</h3>

              <Table className="nomostrarscrollBD ">
                <TableBody className="nomostrarscrollBD">
                  {this.props.elemento.Uniquemovement.map((Ataque, index) => (
                    <TableRow key={index} className="mx-5 rowPonys">
                      <TableCell
                        className="  py-2 colorFondoAtaquesPonys  nomostrarscrollBD tablaborderabajo"
                        scope="row"
                        component="td"
                        align="left"
                      >
                        {Ataque.nombreAtaque}
                      </TableCell>

                      {
                        <TableCell
                          className="  nombreAtaquesSF   padinponys tablaborderabajo"
                          align="right"
                          component="td"
                        >
                          {Ataque.Animacion.map((animaciondelataque, index) => (
                            <Image
                              key={index}
                              className="imgAtaquePN"
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

            <TableContainer className=" fondoTablaPonys margenesresponsive ">
              <h3 className="TituloAtaquesPonys my-0">Superattacks</h3>

              <Table className="nomostrarscrollBD">
                <TableBody>
                  {this.props.elemento.SUPERATTACKS.map((Ataque, index) => (
                    <TableRow key={index} className="mx-5 rowPonys">
                      <TableCell
                        className="  py-2 colorFondoAtaquesPonys tablaborderabajo "
                        component="td"
                        scope="row"
                        align="left"
                      >
                        {Ataque.nombreAtaque}
                      </TableCell>

                      {
                        <TableCell
                          component="td"
                          className="  nombreAtaquesSF   padinponys tablaborderabajo"
                          align="right"
                        >
                          {Ataque.Animacion.map((animaciondelataque, index) => (
                            <Image
                              key={index}
                              className="imgAtaquePN"
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

          <Col className="col-md-5  mb-4   ">
            <TableContainer className=" fondoTablaPonys margenesresponsive mt-4   mb-2">
              <h3 className="TituloAtaquesPonys my-0">Magic Sytem</h3>

              <Table className="nomostrarscrollBD">
                <TableBody>
                  {this.props.elemento.MAGICSYSTEM.map((Ataque, index) => (
                    <TableRow key={index} className="mx-5 rowPonys">
                      <TableCell
                        className="  py-2 colorFondoAtaquesPonys tablaborderabajo "
                        component="td"
                        scope="row"
                        align="left"
                      >
                        {Ataque.nombreAtaque}
                      </TableCell>

                      {
                        <TableCell
                          component="td"
                          className="  nombreAtaquesSF   padinponys tablaborderabajo"
                          align="right"
                        >
                          {Ataque.Animacion.map((animaciondelataque, index) => (
                            <Image
                              key={index}
                              className="imgAtaquePN"
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

            <TableContainer className=" fondoTablaPonys margenesresponsive mb-4">
              <h3 className="TituloAtaquesPonys my-0">Specials</h3>

              <Table className="nomostrarscrollBD">
                <TableBody>
                  {this.props.elemento.Specials.map((Ataque, index) => (
                    <TableRow key={index} className="mx-5 rowPonys">
                      <TableCell
                        className="  py-2 colorFondoAtaquesPonys tablaborderabajo "
                        component="td"
                        scope="row"
                        align="left"
                      >
                        {Ataque.nombreAtaque}
                      </TableCell>

                      {
                        <TableCell
                          component="td"
                          className="  nombreAtaquesSF   padinponys tablaborderabajo"
                          align="right"
                        >
                          {Ataque.Animacion.map((animaciondelataque, index) => (
                            <Image
                              key={index}
                              className="imgAtaquePN"
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
            <Container className=" containerPonys">
              <h3 className="LetraCharacterPonys">Character Select</h3>

              <Row className=" w-100  ">
                <div
                  className=" w-100 nav  justify-content-center margenesresponsive  "
                  role="tablist"
                >
                  {this.props.Juego.map((personaje, index) => {
                    return (
                      <div
                        key={personaje.Nombre}
                        className="   "
                        // data-toggle="tab"
                        //  role="tab"
                        //   aria-selected="false"
                      >
                        <Image
                          href="#una-id"
                          className="ImagenPonys mx-auto "
                          onClick={() => this.showContent(index)}
                          src={process.env.PUBLIC_URL + personaje.Foto}
                          fluid
                        ></Image>

                        <Image
                          href="#una-id"
                          className="ImagenPonysReponsive mt-3  mx-auto"
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
