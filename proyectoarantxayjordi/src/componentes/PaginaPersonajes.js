import React, { Component } from 'react';
import * as ReactBootstrap from 'react-bootstrap';
import { PaginaPlataformas } from './PaginaPlataformas';
import { PaginaJuegos } from './PaginaJuegos';
import { DetallesPersonajes } from './DetallesPersonajes';
import data from "../JSON/Personajes.json";


import './Personajes.css';
import { CargarDatos } from './CargarDatos'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


export class PaginaPersonajes extends Component {


    click(e) {
        //const mother = new Mother();
        //mother.addMother(id);


        console.log();

    }

    render() {


        console.log('-> render')
        return (
            <div className=" fondodepantalla">



                <Router>
                <h1 className="TextoIncial">Choose your character</h1>
                    <div className="row">

                        {data.map((perso, index) => {
                            return (

                                <div key={perso.Nombre} className="Personajes">

                                    <div  className="card" >

                                        {/*Para coger la carpeta public */}
                                        <a   target={data.Nombre} href={"/DetallesPersonajes/"+ perso.Nombre+perso.Descripcion} >
                                   
                                            <img variant="top" src={process.env.PUBLIC_URL + perso.Foto} alt="Error" />


                                            <span   className="Nombre"> {perso.Nombre}</span>


                                        </a>


                                        
                                    </div>
                                </div>


                            );
                        })}
                    </div>
                </Router>

            </div>
        )
    }



}