import React from "react";
import "./PaginaPrincipal.css";
import $ from "jquery";

import { Container, Row, Col } from "reactstrap";

class Probadeprincipal extends React.Component {
  state = {
    name: "",
    showResults: false,
  };
  componentDidMount() {
    setTimeout(function() {
      $(".slab .slab-wrapper").css("display", "none");
      $(".poster-text").addClass("show");
      $(".slab-wrapper").addClass("show");
    }, 8500);
  }
  onClick = (e) => {
    this.setState({
      showResults: true,
      name: e.currentTarget.attributes[0].value,
    });
  };
  render() {
    console.log(this.state.name);

    return (
      <div className="DivPrinc">
        <section class="landing">
          <div class="poster-wrapper">
            <div class="posters-container">
              <div class="poster-header">
                <div class="poster-heading">
                  <h1 class="reveal-text">State of the union</h1>
                </div>
                <div class="poster-sub-heading">
                  <h2 class="reveal-text"> 2020 </h2>
                </div>
              </div>
              <div class="poster-body">
                <div class="poster-text">
                  <h4>
                    <span>
                      I don't think the human mind can comprehend the past and
                      the future. They are both just illusions that can
                      manipulate you into thinking theres some kind of change.
                    </span>
                  </h4>
                  <span class="poster-author"> - Bob Dylan</span>
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
                  <a
                    href="#"
                    class="democracy-trumped active foot-link"
                    data-link="Democracy Trumped"
                  >
                    Democracy Trumped
                  </a>
                </li>
                <li class="foot-box" data-num="2">
                  <a
                    href="#"
                    class="no-planet-b foot-link"
                    data-link="No planet B"
                  >
                    No planet B{" "}
                  </a>
                </li>
                <li class="foot-box" data-num="3">
                  <a
                    href="#"
                    class="secure-insecure foot-link"
                    data-link="Secure / Insecure"
                  >
                    {" "}
                    Secure / Insecure{" "}
                  </a>
                </li>
                <li class="foot-box" data-num="4">
                  <a href="#" class="maga foot-link" data-link="maga">
                    {" "}
                    maga{" "}
                  </a>
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
