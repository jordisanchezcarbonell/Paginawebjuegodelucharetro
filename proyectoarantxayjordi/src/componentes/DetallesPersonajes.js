import React , {Component} from 'react';
import data from '../JSON/Personajes.json';


export class DetallesPersonajes extends Component{

    filterArrayElementByEdit(array) {
        return array.filter((element) => {
          return element.isEdit === true;
        })
      }
    render() {
		return (
            <ul>
                {this.props.match.params.nombre}
            </ul>
        );
    }
}
