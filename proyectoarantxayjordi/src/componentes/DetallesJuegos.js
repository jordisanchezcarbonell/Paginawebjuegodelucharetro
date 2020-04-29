import React , {Component} from 'react';
import data from '../JSON/Personajes.json';


export class DetallesPersonajes extends Component{


    render() {
		return (
            <ul>
                {data.map(s => (<li>{s.Nombre}</li>))}
            </ul>
        );
    }
}
