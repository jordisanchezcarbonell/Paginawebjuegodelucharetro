import React , {Component} from 'react';
import * as ReactBootstrap from 'react-bootstrap';
import data from "../JSON/Personajes.json";
import { PaginaJuegos } from './PaginaJuegos';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";



export class DetallesPersonajes extends Component{

    componentWillMount(){
        console.log("Entrando")
    }

    render(){
        const perso = this.props.personajes;
        console.log('-> render')
        return (


            <div>



            <Router>


            {data.map((perso, index) => {
      return (
        <div key={perso.Nombre} className="MoviesList-item">
      
            <h1>{perso.Nombre}</h1>




            <Switch>
                            {/* Rutas de las paginas */}


                            <Route path="/PaginaJuegos">
                                <PaginaJuegos />
                            </Route>
                        </Switch>
             
                    </div>

);
})}
                </Router>
                
            </div>
        )
    }

}