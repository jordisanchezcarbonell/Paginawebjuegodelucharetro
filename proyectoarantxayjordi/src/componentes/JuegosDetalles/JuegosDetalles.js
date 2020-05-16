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

import './juegosDetalles.css';



import { withRouter } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import ponys from "../../JSON/ponys.json";
import { BrowserRouter, Route, Link } from "react-router-dom";




class JuegosDetalles extends React.Component {
  constructor(props, context) {
    super(props);
   
  }


  render() {
    let comp;


    return (
      <div>
        <Button variant="primary" onClick={this.handleShow}>
          Launch demo modal
        </Button>
            <h1>hola</h1>
        
        <button onClick={this.props.history.goBack}>Back</button>
        
      <div className="row">
        {ponys.map((personaje, index) => {
          return (
            <div key={personaje.Nombre} className="Personajes">
            


            <table class="egt" >

<tr>

  <td>Celda 1</td>

  <td>Celda 2</td>

  <td>Celda 3</td>

</tr>

<tr >


{personaje.Ataques.map((Ataque) => (
            <tr key={Ataque.nombreAtaque}>
              <td component="th" scope="row">
                {Ataque.nombreAtaque}
              </td>
              <td    align="right">{ Ataque.Animacion.map((animaciondelataque, index) => (
                <img 
                  key={index}
                  variant="top"
                  src={process.env.PUBLIC_URL + animaciondelataque }  
                  alt="Error"
                />
              ))}</td>
        
            </tr>
          ))}

  <td>Celda 4</td>

  <td>Celda 5</td>

  <td>Celda 6</td>

</tr>

</table>










            <TableContainer component={Paper}>
      <Table className="imgAtaque" >
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
      
          </TableRow>
        </TableHead>
        <TableBody>
          {personaje.Ataques.map((Ataque) => (
            <TableRow key={Ataque.nombreAtaque}>
              <TableCell component="th" scope="row">
                {Ataque.nombreAtaque}
              </TableCell>
              <TableCell  align="right">{ Ataque.Animacion.map((animaciondelataque, index) => (
                <img  
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







          <h1>{personaje.Nombre}</h1>

          {personaje.Ataques.map((Ataque) => (
            <li key={Ataque.nombreAtaque}>
              {Ataque.nombreAtaque}
              {Ataque.Animacion.map((animaciondelataque, index) => (
                <img
                  key={index}
                  variant="top"
                  src={process.env.PUBLIC_URL + animaciondelataque}
                  alt="Error"
                />
              ))}
            </li>
          ))}
            </div>
          );
        })}
      </div>
    );
      </div>
    );
  }
} 

export default withRouter(JuegosDetalles);
