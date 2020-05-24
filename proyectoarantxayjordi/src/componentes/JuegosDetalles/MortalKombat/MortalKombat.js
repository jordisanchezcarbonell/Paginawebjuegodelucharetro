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
import "./Mortalkombat.css";
import { withRouter } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
// get our fontawesome imports
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactComponent as Logo } from "../nombre.png";
import ReactPlayer from "react-player";
import IcomoonReact, { iconList } from "icomoon-react";
import { BrowserRouter, Route, Link } from "react-router-dom";
var listOfImages = [];
function importAll(r) {
  return r.keys().map(r);
}
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
  console.log(props);
}
//AVER SI FUNCIOONA
class Child extends React.Component {
  render() {
    return <div>I'm the child</div>;
  }
}

class MortalKombat extends React.Component {
  constructor(props, context) {
    super(props);
    console.log(props);
    console.log(this.props.detalles.Foto);
    this.state = {
      isItemContentVisible: {},
      numChildren: 0,
    };
  }
  renderContent() {
    this.state.isItemContentVisible = false;

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
    const { isActive } = this.state;
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
          <div className="w-100 mt-4">
            <Container className="w-100 ">
              <Row className=" w-100 stage">
                <div className="characterMk nav nav-tabs" role="tablist">
                  {this.props.Juego.map((personaje, index) => {
                    return (
                      <a
                        data-id="index"
                        class="character-thumb visible enabled  "
                      >
                        <div>
                          <div class="img-wrapper">
                            <img
                              data-src={process.env.PUBLIC_URL + personaje.Foto}
                              alt=""
                              class="img-fluid lazy-loaded h-100"
                              src={process.env.PUBLIC_URL + personaje.Foto}
                            />
                          </div>
                          <div class="label">{personaje.Nombre}</div>
                        </div>
                      </a>

                      /*  
                        <div>
                          {this.state.isItemContentVisible[index] &&
                            this.renderContent()}

                          <div></div>
                        </div>
                            */
                    );
                  })}
                </div>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(MortalKombat);
