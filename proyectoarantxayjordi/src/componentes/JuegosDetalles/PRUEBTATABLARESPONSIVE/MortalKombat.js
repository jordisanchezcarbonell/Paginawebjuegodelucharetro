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
import "./Juego.css";
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
    return (
      <div className="row rowGlobal ">
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
            <Container className="w-100 ">
              <Row className=" w-100 stage">
                <Col className="col-md-6 mt-2">
                  <h1 className="NombreKI">{personaje.Nombre}</h1>
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

                  <TableContainer component={Paper} className="T mb-3">
                    <Table size="small">
                      <TableBody>
                        {personaje.Ataques.map((Ataque, index) => (
                          <TableRow key={Ataque.nombreAtaque} className="mx-5">
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
                                    <Image
                                      className="imgAtaqueSSSS"
                                      src={
                                        process.env.PUBLIC_URL +
                                        animaciondelataque
                                      }
                                      fluid
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
          );
        })}
      </div>
    );
  }
}

export default withRouter(MortalKombat);
