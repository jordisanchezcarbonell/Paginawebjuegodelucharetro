import React, { Component } from 'react';
import data from "../JSON/juegos.json";
import './Juegos.css';
import { CargarDatos } from './CargarDatos'



export class PaginaJuegos extends Component {


    click(e) {
        //const mother = new Mother();
        //mother.addMother(id);
        console.log();
    }

    render() {


        console.log('-> render')
        return (
            <div className=" fondodepantalla">

                <h1 className="TextoIncial">Choose your Game</h1>
                <div className="row">

                    {data.map((juego, index) => {
                        return (

                            <div key={juego.Nombre} className="Personajes">

                                <div className="card" >

                                    {/*Para coger la carpeta public */}
                                    <a href="/DetallesJuegos" >
                                        <img variant="top" src={process.env.PUBLIC_URL + juego.Foto} alt="Error" />
                                        <span className="Nombre">{juego.Nombre}</span>

                                    </a>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        )
    }



}