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
import { ReactComponent as Logo } from './nombre.png';

import { BrowserRouter, Route, Link } from "react-router-dom";

class JuegosDetalles extends React.Component {
  constructor(props, context) {
    super(props);
  }
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
        "linear-gradient(to left, rgba(255,255,255,0), rgba(255,255,255,1)), url(" +
        detalles.Rooter +
        ")",
      backgroundRepeat: "no-repeat",
    };
    return (
      <div className="DivGeneral">
        {/* <Button variant="primary" onClick={this.handleShow}>
          Launch demo modal
        </Button> */}

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
            <Col md="4" className="fondo1">
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

          <Row>
            <h6 className="NombrePers">Descripcion </h6>
          </Row>
        </div>
        <div className="row rowGlobal ">
          {elementoporpasarparametro.map((personaje, index) => {
            return (
              <div key={personaje.Nombre} className="Personajes w-100">
                <Container className="w-100 ContainerSeparacion ">
                <img src={require('./nombre.png')} />
                        <h1>{personaje.Nombre}</h1>
                    
                    
                
                  



                  <Row className="prueba  py-3  mx-auto">
                    <Col md="8">
                      <TableContainer
                        component={Paper}
                        className="TablaGeneral"
                      >
                        <Table>
                          <TableHead>
                            <TableRow>
                              <TableCell align="center">Movimiento</TableCell>
                              <TableCell align="center">Comando</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {personaje.Ataques.map((Ataque) => (
                              <TableRow key={Ataque.nombreAtaque}>
                                <TableCell
                                  className=" py-2 nombreAtaques"
                                  component="th"
                                  scope="row"
                                >
                                  {Ataque.nombreAtaque}
                                </TableCell>
                                {/*
                                  <TableCell className=" py-2" align="right">
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
                                        */}
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </Col>

                    <Col md="4">
                      <img
                        key={index}
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
      return this.streetfighter(detalles, killerinstinct);
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
    } else {
      return this.streetfighter(detalles, MARVEL);
    }
    debugger;
  }
}

export default withRouter(JuegosDetalles);
