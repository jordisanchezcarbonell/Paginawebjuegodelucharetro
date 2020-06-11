/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import * as ReactBootstrap from "react-bootstrap";
import { PaginaPlataformas } from "./PaginaPlataformas";
import { PaginaJuegos } from "./JuegosGlobales/PaginaJuegos";
import JuegosDetalles from "./JuegosDetalles/Detalles/JuegosDetalles";
import Personaje from "./PersonajeDetalles/Personaje";
import Todo from "./PersonajesGlobales/PersonajesGlobales";
import "./Principal.css";
import "./Personajes.css";
import BiografiaKiller from "./Biografias/KillerInstinct/BiografiaKiller";
import SkullGirl from "./Biografias/SkullGirl/SkullGirl";
import BiografiaMarvelvsCapcom from "./Biografias/BiografiaMarvelvsCapcom/BiografiaMarvelvsCapcom";
import BiografiaPnys from "./Biografias/BiografiaPnys/BiografiaPnys";
import BiografiaUndernight from "./Biografias/BiografiaUndernight/BiografiaUndernight";
import BiografiaDragonBall from "./Biografias/BiografiaDragonBall/BiografiaDragonBall";

import BiografiaTekken from "./Biografias/BiografiaTekken/BiografiaTekken";
import BiografiaSoul from "./Biografias/BiografiaSoul/BiografiaSoul";

import BiografiaStreetfighter from "./Biografias/BiografiaStreetfighter/BiografiaStreetfighter";
import BiografiaGranBlue from "./Biografias/BiografiaGranBlue/BiografiaGranBlue";
import BiografiaMK from "./Biografias/BiografiaMK/BiografiaMK";



import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
export class PaginaPrincipal extends Component {
  render() {
    return (
      <div className=" fondo">
        <Router>
          <div>
            <ReactBootstrap.Navbar
              bg="light"
              expand="lg"
              className="NavbarBoostrap px-0 py-0 navGlobal"
            >
              <ReactBootstrap.Navbar.Brand
                className="NavBarTitulo"
                href="/PaginaPrincipal"
              >
                <img
                  src="../../imagenes/Nav/logo2.png"
                  alt=""
                  className="fotoNav"
                  height="110vw"
                ></img>
              </ReactBootstrap.Navbar.Brand>

              <ReactBootstrap.Navbar.Brand
                href="/PaginaJuegos"
                className="textonaV w-100"
              >
                Juegos
              </ReactBootstrap.Navbar.Brand>
              <ReactBootstrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
              <ReactBootstrap.Navbar.Collapse id="basic-navbar-nav">
                <ReactBootstrap.Nav className="ml-auto textonaV">
                  <ReactBootstrap.NavDropdown
                    title="Plataformas"
                    id="basic-nav-dropdown"
                  >
                    <ReactBootstrap.NavDropdown.Item href="#action/3.1">
                      Action
                    </ReactBootstrap.NavDropdown.Item>
                    <ReactBootstrap.NavDropdown.Item href="#action/3.2">
                      Another action
                    </ReactBootstrap.NavDropdown.Item>
                    <ReactBootstrap.NavDropdown.Item href="#action/3.3">
                      Something
                    </ReactBootstrap.NavDropdown.Item>
                    <ReactBootstrap.NavDropdown.Divider />
                    <ReactBootstrap.NavDropdown.Item href="#action/3.4">
                      Separated link
                    </ReactBootstrap.NavDropdown.Item>
                  </ReactBootstrap.NavDropdown>
                </ReactBootstrap.Nav>
              </ReactBootstrap.Navbar.Collapse>
            </ReactBootstrap.Navbar>

            <Switch>
              {/* Rutas de las paginas */}
              <Route path="/PaginaPlataformas">
                <PaginaPlataformas />
              </Route>
              <Route path="/PaginaPersonajes" component={Todo}></Route>
              <Route path="/PaginaJuegos">
                <PaginaJuegos />
              </Route>
              <Route path="/Detalles" component={Personaje} />
              <Route path="/JuegosDetalles" component={JuegosDetalles} />
              <Route path="/BiografiaKiller" component={BiografiaKiller} />
              <Route path="/BiografiaSkullGirl" component={SkullGirl} />
              <Route
                path="/BiografiaMarvelvsCapcom"
                component={BiografiaMarvelvsCapcom}
              />
              <Route path="/BiografiaPonys" component={BiografiaPnys} />
              <Route
                path="/BiografiaUndernight"
                component={BiografiaUndernight}
              />
              <Route
                path="/BiografiaDragonBall"
                component={BiografiaDragonBall}
              />
              <Route path="/BiografiaTekken" component={BiografiaTekken} />
              <Route path="/BiografiaSoul" component={BiografiaSoul} />

              <Route
                path="/BiografiaStreetfighter"
                component={BiografiaStreetfighter}
              />
              <Route path="/BiografiaGranBlue" component={BiografiaGranBlue} />
              <Route path="/BiografiaMK" component={BiografiaMK} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export class Footer extends React.Component {
  render() {
    return (
      <footer className="container">
        <p className="float-right">
          <a href="#">Subir</a>
        </p>
        <p>
          &copy; {new Date().getFullYear()} Mi Proyecto, Inc. &middot;{" "}
          <a href="#">Política de Privacidad</a> &middot;{" "}
          <a href="#">Términos</a>
        </p>
      </footer>
    );
  }
}
