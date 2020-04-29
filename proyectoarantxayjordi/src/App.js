import React from 'react';
import logo from './logo.svg';
import './App.css';
import {PaginaPrincipal} from './componentes/PaginaPrincipal'
import {Footer} from './componentes/PaginaPrincipal'
import {PaginaPersonajes} from './componentes/PaginaPersonajes'
import {Link} from 'react-router';


import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootstrap from 'react-bootstrap';

function App() {
  
  return (
    <div className="App">

          <PaginaPrincipal/>

<footer>

<Footer/>
</footer>




    </div>
  );
}





/**
 * Texto de preuba
 * arraypersonajes { 0= id ,nombre,img}
 * 
 */
export default App;
