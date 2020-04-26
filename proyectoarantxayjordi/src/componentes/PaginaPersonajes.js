import React , {Component} from 'react';
import * as ReactBootstrap from 'react-bootstrap';
import { PaginaPlataformas } from './PaginaPlataformas';
import { PaginaJuegos } from './PaginaJuegos';
import { DetallesPersonajes } from './DetallesPersonajes';
import './Personajes.css';
import {CargarDatos} from './CargarDatos'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


export class PaginaPersonajes extends Component{


    click(e){
        //const mother = new Mother();
        //mother.addMother(id);
  
        
        console.log();

      }

    render(){

      console.log('-> render')
        return (
         

            <Router>
            <ReactBootstrap.Card onClick={this.click}  href="http://escuela.it " style={{ width: '15rem'  }}>
            <ReactBootstrap.Nav.Link href="/DetallesPersonajes">Personajes</ReactBootstrap.Nav.Link>

                {/*Para coger la carpeta public */}
  <ReactBootstrap.Card.Img variant="top"  src={process.env.PUBLIC_URL +'imagenes/ryu.jpg'} />
  <ReactBootstrap.Card.Body>
    <ReactBootstrap.Card.Title>Card Title</ReactBootstrap.Card.Title>
    <ReactBootstrap.Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </ReactBootstrap.Card.Text>
    <a href="/DetallesPersonajes" className="btn btn-primary stretched-link">Go somewhere</a> 
    
     </ReactBootstrap.Card.Body>



<Switch>
              {/* Rutas de las paginas */}
            

              <Route path="/DetallesPersonajes">
                <DetallesPersonajes />
              </Route>
            </Switch>
            </ReactBootstrap.Card>
        </Router>
            
        )
      }
    
    
    
    }