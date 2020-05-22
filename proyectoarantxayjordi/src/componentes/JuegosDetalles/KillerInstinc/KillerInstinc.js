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
import "./Juego.css";
import { withRouter } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
// get our fontawesome imports
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactComponent as Logo } from "../nombre.png";
import ReactPlayer from "react-player";
import iconSet from "./selection.json";
import IcomoonReact, { iconList } from "icomoon-react";
import { BrowserRouter, Route, Link } from "react-router-dom";

class KillerInstinc extends React.Component {
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
              <h6> {this.props.detalles[0]}</h6>
              <img
                src={process.env.PUBLIC_URL + this.props.detalles.Foto}
                alt=""
                className="fotoLogoPonys"
                height="110vw"
              ></img>
            </Col>
            <Col md="4" className="fondo2">
              <h1 className="TextoTitulo">{this.props.detalles.Nombre}</h1>
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
              <img src={require("../header.png")} className="imgDescripcion" />
            </div>
            <h6 className="NombreDesc">{detalles.Descripcion} </h6>
          </Container>
          {this.props.Juego.map((personaje) => {
            return (
              <div className="Personajes w-100" key={personaje.Nombre}>
                <Container className="w-100 ContainerSeparacion ">
                  <div className="contenedor">
                    <img
                      src={require("../descarga1.png")}
                      className="fotoNombre"
                    />
                    <div className="TextoTitulokILLER">{personaje.Nombre}</div>
                  </div>

                  <TableContainer
                    component={Paper}
                    className="TablaGeneral  mb-3"
                  >
                    <Table>
                      <TableBody>
                        {personaje.Ataques.map((Ataque, index) => (
                          <TableRow key={Ataque.nombreAtaque} className="mx-5">
                            <TableCell
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
                      src={require("../nombre.png")}
                      className="fotoNombre"
                    />

                    <div className="CentradoTituloAtaque w-100 ">
                      Team Movies
                    </div>
                  </div>
                  <TableContainer component={Paper} className="TablaGeneral  ">
                    <Table>
                      <TableBody>
                        {personaje.ShadowAttacks.map((Ataque, index) => (
                          <TableRow key={Ataque.nombreAtaque}>
                            <TableCell
                              className=" py-2 pro"
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
                      src={require("../nombre.png")}
                      className="fotoNombre "
                    />

                    <div className="CentradoTituloAtaque w-100 ">
                      Blockbusters
                    </div>
                  </div>

                  <TableContainer component={Paper} className="TablaGeneral  ">
                    <Table>
                      <TableBody>
                        {personaje.Finishers.map((Ataque, index) => (
                          <TableRow key={Ataque.nombreAtaque}>
                            <TableCell
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
                  <Row className="prueba pt-0 pb-3  mx-auto">
                    <Col md="8">
                      <div className="contenedor mb-3 mt-5">
                        <img
                          src={require("../nombre.png")}
                          className="fotoNombre"
                        />
                      </div>
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

export default withRouter(KillerInstinc);
