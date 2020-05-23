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

import "./juegosDetalles.css";
import killerinstinct from "../../JSON/KillerInstinct.json";
import Skullgirls from "../../JSON/SkullGirls.json";
import Juegos from "../../JSON/juegos.json";
import { withRouter } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import ponys from "../../JSON/ponys.json";
import juegos from "../../JSON/juegos.json";
import data from "../../JSON/Personajes.json";
import MARVEL from "../../JSON/Marvel.json";
import Dragonball from "../../JSON/DragonBall.json";
import UnderNight from "../../JSON/UnderNight.json";
import TEKKEN from "../../JSON/Tekken.json";
import SSBU from "../../JSON/SSBU.json";
import SoulCalibur from "../../JSON/SoulCalibur.json";
import Granblue from "../../JSON/GranBlue.json";
import { ReactComponent as Logo } from "./nombre.png";
import ReactPlayer from "react-player";
import KillerInstinct from "./KillerInstinc/KillerInstinc";
import MortalKombat from "./MortalKombat/MortalKombat";

import { BrowserRouter, Route, Link } from "react-router-dom";

class JuegosDetalles extends React.Component {
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

    console.log(this.state.elemento);
  };

  handleCloseModal = (e) => {
    this.setState({ show: false });
  };
  streetfighter(detalles, elementoporpasarparametro) {
    /**
     * .imagenTitulo{
height: 10vw;
    background-position: right right;
    background-size: 100% 200%!important;
    display: block;
    background: linear-gradient(to left, rgba(255,255,255,0), rgba(255,255,255,1)), url(https://steamcdn-a.akamaihd.net/steam/apps/574980/extras/steam_header.png?t=1589582752);
    background-repeat: no-repeat;


}
     */
    const style = {
      backgroundPosition: "right right",
      backgroundSize: "cover",

      display: "block",
      backgroundImage:
        "linear-gradient(to left, rgba(255,255,255,0), rgba(0, 0, 0, 1)), url(" +
        detalles.Rooter +
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
                src={process.env.PUBLIC_URL + detalles.Foto}
                alt=""
                className="fotoLogoPonys"
                height="110vw"
              ></img>
            </Col>
            <Col md="4" className="fondo2">
              <h1 className="TextoTitulo">{detalles.Nombre} </h1>
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
              <img src={require("./header.png")} className="imgDescripcion" />
            </div>
            <h6 className="NombreDesc">{detalles.Descripcion} </h6>
          </Container>
          {elementoporpasarparametro.map((personaje) => {
            return (
              <div className="Personajes w-100" key={personaje.Nombre}>
                <Container className="w-100 ContainerSeparacion ">
                  <div className="contenedor">
                    <img
                      src={require("./descarga1.png")}
                      className="fotoNombre"
                    />

                    <div className="centrado">{personaje.Nombre}</div>
                  </div>

                  <Row className="prueba pt-0 pb-3  mx-auto">
                    <Col md="8">
                      <div className="contenedor mb-3 mt-5">
                        <img
                          src={require("./nombre.png")}
                          className="fotoNombre"
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
                          <TableBody>
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
                          <TableBody>
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
                          <TableBody>
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

  render() {
    let comp;
    const detalles = this.props.location.state.prueba;
    console.log(detalles);
    let prueba = Juegos;
    console.log(prueba[0].Nombre);
    let mostrarvalor = this.props.location.state.visible;
    if (detalles.Nombre === prueba[0].Nombre) {
      return this.streetfighter(detalles, data);
    } else if (detalles.Nombre === prueba[2].Nombre) {
      return this.streetfighter(detalles, ponys);
    } else if (detalles.Nombre === prueba[3].Nombre) {
      return <KillerInstinct detalles={detalles} Juego={killerinstinct} />;
    } else if (detalles.Nombre === prueba[4].Nombre) {
      return this.streetfighter(detalles, Skullgirls);
    } else if (detalles.Nombre === prueba[5].Nombre) {
      return this.streetfighter(detalles, UnderNight);
    } else if (detalles.Nombre === prueba[6].Nombre) {
      return this.streetfighter(detalles, Dragonball);
    } else if (detalles.Nombre === prueba[7].Nombre) {
      return this.streetfighter(detalles, TEKKEN);
    } else if (detalles.Nombre === prueba[8].Nombre) {
      return this.streetfighter(detalles, SSBU);
    } else if (detalles.Nombre === prueba[9].Nombre) {
      return this.streetfighter(detalles, SoulCalibur);
    } else if (detalles.Nombre === prueba[11].Nombre) {
      return this.streetfighter(detalles, Granblue);
    } else if (detalles.Nombre === prueba[12].Nombre) {
      return <MortalKombat detalles={detalles} Juego={killerinstinct} />;
    } else {
      return this.streetfighter(detalles, MARVEL);
    }
    debugger;
  }
}

export default withRouter(JuegosDetalles);
