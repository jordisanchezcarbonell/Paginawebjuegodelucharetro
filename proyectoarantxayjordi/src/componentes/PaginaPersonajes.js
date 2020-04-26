import React , {Component} from 'react';
import * as ReactBootstrap from 'react-bootstrap';
export class PaginaPersonajes extends Component{


    render(){

        return (

            <ReactBootstrap.Card style={{ width: '18rem' }}>
                {/*Para coger la carpeta public */}
  <ReactBootstrap.Card.Img variant="top"  src={process.env.PUBLIC_URL +'imagenes/ryu.jpg'} />
  <ReactBootstrap.Card.Body>
    <ReactBootstrap.Card.Title>Card Title</ReactBootstrap.Card.Title>
    <ReactBootstrap.Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </ReactBootstrap.Card.Text>
    <ReactBootstrap.Button variant="primary">Go somewhere</ReactBootstrap.Button>
  </ReactBootstrap.Card.Body>
</ReactBootstrap.Card>
        )}
    
    
    
    
    }