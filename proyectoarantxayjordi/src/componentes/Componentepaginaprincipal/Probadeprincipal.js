import React from "react";
import "./PaginaPrincipal.css";
import $ from "jquery";
import Form from "react-bootstrap/Form";
import { Container, Row, Col } from "reactstrap";

class Probadeprincipal extends React.Component {
  state = {
    name: "",
    showResults: false,
    showResultselemento: true,
    showResultsRanking: false,
  };
  componentDidMount() {
    setTimeout(function() {
      $(".slab .slab-wrapper").css("display", "none");
      $(".poster-text").addClass("show");
      $(".slab-wrapper").addClass("show");
    }, 5550);
  }
  onClick = (e) => {
    this.setState({
      showResults: false,
      showResultselemento: true,
      showResultsRanking: false,
      name: "",
    });
  };
  Mostrarranking = (e) => {
    this.setState({
      showResults: false,
      showResultselemento: false,
      showResultsRanking: true,
      name: "",
    });
  };
  filterProducts = (e) => {
    this.setState({
      showResults: true,
      showResultselemento: false,
      name: e.target.value,
    });
  };

  render() {
    return (
      <section class="landing">
        <div class="poster-wrapper">
          <div class="posters-container">
            <div class="poster-header">
              <div class="poster-heading">
                <h1 class="reveal-text">EVO</h1>
              </div>
              <div class="poster-sub-heading">
                <h2 class="reveal-text"> 2020 </h2>
              </div>
            </div>
            <div class="poster-body">
              <div class="poster-text">
                <h4>
                  <p
                    style={{
                      display: this.state.showResultsRanking ? "block" : "none",
                    }}
                    className="colortextoprincilal"
                  >
                    Hola sabes que se va hacer la EVO no¿? , en este sitio
                    podras obtenet toda la informacion de los juegos que se van
                    a jugar tanto su tierlist,sus moviminetos,sus
                    curiosidades.... En este apartado podras ir viendo los
                    resultados de los torneos. Para eso debereis clickear sobre
                    el juego que os guste
                  </p>
                  <div
                    style={{
                      display: this.state.showResultselemento
                        ? "inline"
                        : "none",
                    }}
                  >
                    <h1 className="colortextoprincilal"> QUIENES SOMOS</h1>
                    <span className="colortextoprincilal">
                      Somos un equipo que nuestro objetivo es dedicamos
                      ,creacion paginas, mantenimientto de paginas web cualquier
                      cliente nos llamamos Adijnor. Para darnos a conocer , ya
                      que nuestra aficion son los juegos de lucha hemos creado
                      esta web con react para poder enseñar que podemos hacer,
                      si os interesa nuestro trabajo, podeis ver esta web : o
                      enviarnos un correo a :Adijnor@gmail.com HEEEELP
                    </span>
                  </div>
                  <div
                    nameClass="showName"
                    className="colortextoprincilal"
                    style={{
                      display: this.state.showResults ? "block" : "none",
                    }}
                  >
                    {/*
                    <img
                      className="FotoBracket"
                      variant="top"
                      src={process.env.PUBLIC_URL + this.state.name}
                      alt="Error"
                    />
                    */}
                    <h1>{this.state.name}</h1>
                  </div>
                </h4>
                <span class="poster-author colortextoprincilal">- Adijnor</span>
              </div>

              <div class="slab-wrapper">
                <div class="slab"></div>
                <div class="slab"></div>
                <div class="slab"></div>
                <div class="slab"></div>
                <div class="slab"></div>
                <div class="slab"></div>
                <div class="slab"></div>
                <div class="slab"></div>
                <div class="slab"></div>
                <div class="slab"></div>
              </div>
            </div>
            <ul class="poster-footer">
              <li class="foot-box" data-num="1">
                <div class=" foot-link" onClick={this.Mostrarranking}>
                  <span onClick={this.Mostrarranking}>Ranking</span>
                </div>
              </li>
              <li class="foot-box" data-num="2">
                <div href="#" class="foot-link" onClick={this.onClick}>
                  <span
                    className="no-planet-b foot-link "
                    onClick={this.onClick}
                  >
                    About Us
                  </span>
                </div>
              </li>
              <li class="foot-box" data-num="3">
                <Form.Group className="foot-link">
                  <Form.Label>Choose your game</Form.Label>
                  <Form.Control
                    as="select"
                    onChange={this.filterProducts.bind(this)}
                    className="cursopointerForm"
                  >
                    <option disabled selected>
                      --Selected Game--
                    </option>
                    <option value="Inprogress">Marvel vs Capcom</option>
                    <option onChange={this.onClick} value="Inprogress">
                      Them's fightin herds
                    </option>
                    <option value="Inprogress">Killer Instinct</option>
                    <option value="Inprogress">Skullgirls</option>
                    <option value="Inprogress">UnderNightIn-Birth</option>
                    <option value="Inprogress">Dragon Ball Fighter Z</option>
                    <option value="Inprogress">Tekken 7</option>
                    <option value="Inprogress">Soulcalibur VI</option>
                    <option value="Inprogress">
                      Street Fighter V Champion Edition
                    </option>
                    <option value="Inprogress">Granblue Fantasy Versus</option>
                    <option value="Inprogress">Mortal Kombat 11</option>
                  </Form.Control>
                </Form.Group>
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

export default Probadeprincipal;
