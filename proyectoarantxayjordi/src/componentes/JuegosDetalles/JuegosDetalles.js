import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { StyleSheet, Text, View } from "react";
import { Container, Row, Col } from 'reactstrap';

import './juegosDetalles.css';



import { withRouter } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import ponys from "../../JSON/ponys.json";
import juegos from "../../JSON/juegos.json";

import { BrowserRouter, Route, Link } from "react-router-dom";




class JuegosDetalles extends React.Component {
  constructor(props, context) {
    super(props);

  }


  render() {
    let comp;


    return (
      <div className="DivGeneral">
        {/* <Button variant="primary" onClick={this.handleShow}>
          Launch demo modal
        </Button> */}


        {/* <button onClick={this.props.history.goBack}>Back</button> */}
<div >
        <Row >
        <Col md="3" className="fondo1">
        <h1 className="NombrePers">Foto</h1>

        </Col>
        <Col md="5" className="fondo1">
        <h1 className="NombrePers">Them`s fightin Herds </h1>

        </Col>

        <Col md="4" className="prug">
     

        </Col>

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
        <div className="row">
          {ponys.map((personaje, index) => {
            return (
              <div key={personaje.Nombre} className="Personajes">

                <Container>
                  <Row>
                    <Col md="8">

                      <TableContainer component={Paper} className="TablaGeneral" >
                      
                        <Table   >
                     
                          <TableHead >
                            <TableRow >
                              <TableCell  align="center" >Movimiento</TableCell>
                              <TableCell align="center">Comando</TableCell>

                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {personaje.Ataques.map((Ataque) => (
                              <TableRow key={Ataque.nombreAtaque} >
                                <TableCell className=" py-2 nombreAtaques" component="th" scope="row">
                                  {Ataque.nombreAtaque}
                                </TableCell>
                                <TableCell className=" py-2" align="right">{Ataque.Animacion.map((animaciondelataque, index) => (
                                  <img
                                    className="imgAtaque"
                                    key={index}
                                    variant="top"
                                    src={process.env.PUBLIC_URL + animaciondelataque}
                                    alt="Error"
                                  />
                                ))}</TableCell>

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
}

export default withRouter(JuegosDetalles);
