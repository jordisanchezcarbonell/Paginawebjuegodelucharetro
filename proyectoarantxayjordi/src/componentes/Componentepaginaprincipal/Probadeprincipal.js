import React from "react";
import "./PaginaPrincipal.css";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

class Probadeprincipal extends React.Component {
  render() {
    return (


      <div className="DivPrinc">


<div>

<Container>

  <Row>
    <Col className="col-md-8 RankingGeneral">
    <div >
  <div className="header">
  <h1>Ranking</h1>

  </div>

<p>
Somos un equipo blafjsadfklasdjflsadf


  
</p>


</div>
    
    
    </Col>
    <Col className="col-md-4 QuienesSomos">
    
    <h1>Quienes Somos</h1>
    
<p>
Somos un equipo blafjsadfklasdjflsadf


  
</p>




<div >
  <div className="header">
  <h1>Ranking</h1>

  </div>

<p>
Somos un equipo blafjsadfklasdjflsadf


  
</p>


</div>
    </Col>
  </Row>
</Container>




</div>


{/* 
     
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

   
       
      </CardDeck> */}
      </div>
    );
  }
}

export default Probadeprincipal;
