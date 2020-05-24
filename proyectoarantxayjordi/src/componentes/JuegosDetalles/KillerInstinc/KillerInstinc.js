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
import Image from "./b-Aria.jpg"; // Import using relative path
import logo from "./logo-ki.png";
//AVER SI FUNCIOONA
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
      <div className="DivKillintinct">
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
                className="fotoLogoKI"
                height="110vw"
              ></img>
            </Col>
            <Col md="4" className="fondo2">
              <img src={logo} className="TextoTitulokI" />
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
          <div className="FondoDescripcionKI w-100 h-100 mt-4 ">
            <Row>
              <h1 className="TituloDescripcionKI mx-auto mt-3">Descripcion</h1>
              <p className="mx-5 ">{this.props.detalles.Descripcion}</p>
            </Row>
          </div>
          {this.props.Juego.map((personaje) => {
            const fondopersonaje = {
              backgroundImage: "url(" + personaje.Fondo + ")",
              WebkitBackgroundSize: "cover",
              MozBackgroundSize: "cover",
              OBackgroundSize: "cover",
              backgroundSize: "cover",
              color: "black",
              backgroundPosition: "center center",
              backgroundAttachment: "fixed",
              height: "42vw",
            };
            return (
              <div
                className="w-100 mt-4"
                style={fondopersonaje}
                key={personaje.Nombre}
              >
                <Container className="w-100 ">
                  <Row className=" w-100 stage">
                    <Col className="pra  w-100 col-md-6">
                      <img
                        src={process.env.PUBLIC_URL + personaje.Runa}
                        className="rune"
                      />

                      <img
                        src={process.env.PUBLIC_URL + personaje.Foto}
                        className="character"
                      />

                      <a
                        href="https://www.ultra-combo.com/characters/hisako/"
                        alt="Character Name"
                      ></a>
                    </Col>
                    <Col className="col-md-6 mt-2">
                      <h1 className="NombreKI">{personaje.Nombre}</h1>

                      <TableContainer component={Paper} className="T mb-3">
                        <Table size="small">
                          <TableBody>
                            {personaje.Ataques.map((Ataque, index) => (
                              <TableRow
                                key={Ataque.nombreAtaque}
                                className="mx-5"
                              >
                                <TableCell
                                  className="  py-2 colorFondoAtaquesKI "
                                  component="th"
                                  scope="row"
                                  align="left"
                                >
                                  {Ataque.nombreAtaque}
                                </TableCell>

                                {
                                  <TableCell
                                    component="th"
                                    className="  nombreAtaquesKI py-2"
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

                      <a
                        class="btn-ki large ghostpulse "
                        align="right"
                        href="https://www.ultra-combo.com/characters/rash/"
                      >
                        <span>
                          <span>Biography &amp; Videos</span>
                        </span>
                      </a>
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
