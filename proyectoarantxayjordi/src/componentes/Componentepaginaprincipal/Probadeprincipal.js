import React, { Component } from "react";
import "./PaginaPrincipal.css";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import { Link } from "react-router-dom";

class Probadeprincipal extends React.Component {
  render() {
    return (
      <CardDeck>
        <Card>
          <Link
            to={{
              pathname: "/PaginaJuegos",
            }}
          >
            <Card.Body>
              <Card.Title className="colortextoprincilal">Juegos</Card.Title>
              <Card.Text className="colortextoprincilal">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Link>
        </Card>

        <Card>
          <Card.Body>
            <Card.Title className="colortextoprincilal">Card title</Card.Title>
            <Card.Text className="colortextoprincilal">
              This card has supporting text below as a natural lead-in to
              additional content.{" "}
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title className="colortextoprincilal">Card title</Card.Title>
            <Card.Text className="colortextoprincilal">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardDeck>
    );
  }
}

export default Probadeprincipal;
