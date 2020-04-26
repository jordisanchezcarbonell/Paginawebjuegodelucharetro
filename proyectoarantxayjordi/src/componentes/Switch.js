
import React , {Component} from 'react';
import * as ReactBootstrap from 'react-bootstrap';
import {PaginaPersonajes} from './PaginaPersonajes';
import {PaginaPlataformas} from './PaginaPlataformas';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
export class RUTASPROYECTO extends Component{
    constructor(props){
        console.log(props)
    }
    render(){
        return(
        <Switch>
            {/* Rutas de las paginas */}
                    <Route id="personaje" path="/PaginaPersonajes">
                      <PaginaPersonajes />
                    </Route>
                  
                    <Route path="/PaginaPlataformas">
                      <PaginaPlataformas />
                    </Route>
                  
                   
                  </Switch>
          )
    }

}