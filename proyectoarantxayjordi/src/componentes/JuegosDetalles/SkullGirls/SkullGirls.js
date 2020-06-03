import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import Table2 from "react-bootstrap/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { StyleSheet, Text, View } from "react";
import { Container, Row, Col } from "reactstrap";
import "./SkullGirls.css";
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
//AVER SI FUNCIOONA
class SkullGirls extends React.Component {
  constructor(props, context) {
    super(props);
    console.log(props);
    console.log(this.props.detalles.Foto);
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

    console.log(this.state.elemento);
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
      <div className="DivGeneral">
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
              <img
                src={process.env.PUBLIC_URL + this.props.detalles.Foto}
                alt=""
                className="fotoLogoPonys"
                height="110vw"
              ></img>
            </Col>
            <Col md="4" className="fondo2">
              <h1 className="TextoTitulo">{this.props.detalles.Nombre} </h1>
            </Col>

            <Col md="5" style={style}></Col>

            {/* {juegos.map((juego, index) => {
            return (
              <div key={juego.Nombre} className="prueba">



              </div>
              
              
            );
          })} */}
          </Row>
        </div>
        <div className="row rowGlobal ">
          <Container className="w-100 ContainerSeparacion mt-4 ">
            <div className=" contenedor ">
              <h1 className="txtDescripcion">Descripcion</h1>
              <img
                src={require("./header.png")}
                className="imgDescripcion"
                alt="Descripcion Juego"
              />
            </div>
            <h6 className="NombreDesc">{this.props.detalles.Descripcion} </h6>
          </Container>
          {this.props.Juego.map((personaje) => {
            return (
              <div className="Personajes w-100" key={personaje.Nombre}>
                <Container className="w-100 ContainerSeparacion ">
                  <div className="contenedor">
                    <img
                      src={require("./descarga1.png")}
                      className="fotoNombre"
                      alt="Descripcion Juego"
                    />

                    <div className="centrado">{personaje.Nombre}</div>
                  </div>

                  <Row className="prueba pt-0 pb-3  mx-auto">
                    <Col md="8">
                      <div className="contenedor mb-3 mt-5">
                        <img
                          src={require("./nombre.png")}
                          className="fotoNombre"
                          alt="Descripcion Juego"
                        />

                        <div className="CentradoTituloAtaque w-100">
                          Specials
                        </div>
                      </div>
                      <TableContainer
                        component={Paper}
                        className="TablaGeneral  mb-3"
                      >
                        <Table>
                          <TableBody className="bodySKULL">
                            {personaje.Ataques.map((Ataque, index) => (
                              <TableRow
                                key={Ataque.nombreAtaque}
                                className="mx-5"
                              >
                                <TableCell
                                  onClick={() =>
                                    this.showModal(
                                      Ataque.nombreAtaque,
                                      Ataque.Animacion[0]
                                    )
                                  }
                                  className=" py-2 pro "
                                  component="th"
                                  scope="row"
                                >
                                  {Ataque.nombreAtaque}
                                </TableCell>

                                {
                                  <TableCell
                                    component="th"
                                    className="  nombreAtaques py-2"
                                    align="right"
                                  >
                                    {Ataque.Animacion.map(
                                      (animaciondelataque, index) => (
                                        <img
                                          className="imgAtaque"
                                          key={index}
                                          variant="top"
                                          src={
                                            process.env.PUBLIC_URL +
                                            animaciondelataque
                                          }
                                          alt="Error"
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

                      <div className="contenedor  mb-4 mt-5">
                        <img
                          src={require("./nombre.png")}
                          className="fotoNombre"
                          alt="Descripcion Juego"
                        />

                        <div className="CentradoTituloAtaque w-100 ">
                          Team Movies
                        </div>
                      </div>
                      <TableContainer
                        component={Paper}
                        className="TablaGeneral  "
                      >
                        <Table>
                          <TableBody className="bodySKULL">
                            {personaje.TeamMoves.map((Ataque, index) => (
                              <TableRow key={Ataque.nombreAtaque}>
                                <TableCell
                                  className=" py-2 pro"
                                  component="th"
                                  scope="row"
                                  onClick={() =>
                                    this.showModal(Ataque.nombreAtaque)
                                  }
                                >
                                  {Ataque.nombreAtaque}
                                </TableCell>
                                {
                                  <TableCell
                                    className=" py-2 nombreAtaques"
                                    component="th"
                                    align="right"
                                  >
                                    {Ataque.Animacion.map(
                                      (animaciondelataque, index) => (
                                        <span key={index}>
                                          <img
                                            className="imgAtaque"
                                            variant="top"
                                            src={
                                              process.env.PUBLIC_URL +
                                              animaciondelataque
                                            }
                                            alt="Error"
                                          />
                                        </span>
                                      )
                                    )}
                                  </TableCell>
                                }
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </TableContainer>

                      <div className="contenedor mb-4 mt-5">
                        <img
                          src={require("./nombre.png")}
                          className="fotoNombre "
                          alt="Descripcion Juego"
                        />

                        <div className="CentradoTituloAtaque w-100 ">
                          Blockbusters
                        </div>
                      </div>

                      <TableContainer
                        component={Paper}
                        className="TablaGeneral  "
                      >
                        <Table>
                          <TableBody className="bodySKULL">
                            {personaje.Blockbusters.map((Ataque, index) => (
                              <TableRow key={Ataque.nombreAtaque}>
                                <TableCell
                                  onClick={() =>
                                    this.showModal(Ataque.nombreAtaque)
                                  }
                                  className=" py-2 pro margenesdetablas"
                                  component="th"
                                  scope="row"
                                >
                                  {Ataque.nombreAtaque}
                                </TableCell>
                                {
                                  <TableCell
                                    className=" py-2 nombreAtaques"
                                    component="th"
                                    align="right"
                                  >
                                    {Ataque.Animacion.map(
                                      (animaciondelataque, index) => (
                                        <img
                                          className="imgAtaque"
                                          key={index}
                                          variant="top"
                                          src={
                                            process.env.PUBLIC_URL +
                                            animaciondelataque
                                          }
                                          alt="Error"
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
                    <Col md="4">
                      <img
                        className="imagenpaddin"
                        variant="top"
                        src={process.env.PUBLIC_URL + personaje.Foto}
                        alt="Error"
                      />
                    </Col>
                  </Row>
                </Container>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default withRouter(SkullGirls);
