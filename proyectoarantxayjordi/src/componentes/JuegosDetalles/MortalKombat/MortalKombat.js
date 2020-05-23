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
import IcomoonReact, { iconList } from "icomoon-react";
import { BrowserRouter, Route, Link } from "react-router-dom";


//AVER SI FUNCIOONA
class MortalKombat extends React.Component {
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
      <div className="DivKillintinct w-100 ml-0">
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
                src={process.env.PUBLIC_URL + this.props.detalles.Logo}
                alt=""
                className="fotoLogoKI"
                height="110vw"
              ></img>
            </Col>
            <Col md="4" className="fondo2"></Col>

            <Col md="5" style={style}></Col>

            
          </Row>
        </div>

        <div className="row rowGlobalKI ">
        
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
                  <div class="characters nav nav-tabs" role="tablist">
		<div class="unskew" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="false" ><div class="skew"><div class="character"><p>Welcome</p><img src="img/dragon-white.png" /></div></div></div>
		<div class="unskew" id="baraka-tab" data-toggle="tab" href="#baraka" role="tab" aria-controls="baraka" aria-selected="false"><div class="skew"><div class="character"><p>Baraka</p><img src={process.env.PUBLIC_URL+"/imagenes/PersonajesMortalKombat11/baraka.jpg"} /></div></div></div>
    
		<div class="unskew" id="baraka-tab" data-toggle="tab" href="#baraka" role="tab" aria-controls="baraka" aria-selected="false"><div class="skew"><div class="character"><p>Baraka</p><img src={process.env.PUBLIC_URL+"/imagenes/PersonajesMortalKombat11/baraka.jpg"} /></div></div></div>
	</div>
                   
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

export default withRouter(MortalKombat);
