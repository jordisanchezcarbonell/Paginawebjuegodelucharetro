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
      <div className="DivPrinc">
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
                        display: this.state.showResultsRanking
                          ? "block"
                          : "none",
                      }}
                    >
                      Hola sabes que se va hacer la EVO no¿? , en este sitio
                      podras obtenet toda la informacion de los juegos que se
                      van a jugar tanto su tierlist,sus moviminetos,sus
                      curiosidades.... En este apartado podras ir viendo los
                      resultados de los torneos. Para eso debereis clickear
                      sobre el juego que os guste
                    </p>
                    <span
                      style={{
                        display: this.state.showResultselemento
                          ? "block"
                          : "none",
                      }}
                    >
                      Somos dos personas que nuestro objetivo es dedicamos
                      ,creacion paginas, mantenimientto de paginas web cualquier
                      cliente nos llamamos Adinox. Para darnos a conocer , ya
                      que nuestra aficion son los juegos de lucha hemos creado
                      esta web con react para poder enseñar que podemos hacer,
                      si os interesa nuestro trabajo, podeis ver esta web : o
                      enviarnos un correo a :
                    </span>
                  </h4>
                  <div
                    nameClass="showName"
                    className="pruebadeljuego"
                    style={{
                      display: this.state.showResults ? "block" : "none",
                    }}
                  >
                    <img
                      className="FotoBracket"
                      variant="top"
                      src={process.env.PUBLIC_URL + this.state.name}
                      alt="Error"
                    />
                  </div>
                  <span class="poster-author"> - Adinox</span>
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
                  <div
                    class="democracy-trumped active foot-link"
                    data-link="Democracy Trumped"
                  >
                    <span onClick={this.Mostrarranking}>Ranking</span>
                  </div>
                </li>
                <li class="foot-box" data-num="2">
                  <div
                    href="#"
                    class="no-planet-b foot-link"
                    data-link="No planet B"
                  >
                    <span onClick={this.onClick}>Quienes Somos</span>
                  </div>
                </li>
                <li class="foot-box" data-num="3">
                  <Form.Group className="secure-insecure foot-link">
                    <Form.Label>Eligue tu juego</Form.Label>
                    <Form.Control
                      as="select"
                      onChange={this.filterProducts.bind(this)}
                    >
                      <option>Marvel vs Capcom</option>
                      <option
                        onChange={this.onClick}
                        value={process.env.PUBLIC_URL + "imagenes/elim2.jpg"}
                      >
                        Them's fightin herds
                      </option>
                      <option>Killer Instinct</option>
                      <option>Skullgirls</option>
                      <option>UnderNightIn-Birth</option>
                      <option>Dragon Ball Fighter Z</option>
                      <option>Tekken 7</option>
                      <option>Soulcalibur VI</option>
                      <option>Street Fighter V Champion Edition</option>
                      <option> Granblue Fantasy Versus</option>
                      <option> Mortal Kombat 11</option>
                    </Form.Control>
                  </Form.Group>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Probadeprincipal;
