import React from 'react';
import logo from './logo.svg';
import './App.css';
import {PaginaPrincipal} from './componentes/PaginaPrincipal'
import {Footer} from './componentes/PaginaPrincipal'
import {PaginaPersonajes} from './componentes/PaginaPersonajes'


import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootstrap from 'react-bootstrap';

//CADA COMPONENTE ESTARA FORMADO POR PAGINA-
/*        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          
          
        </a>*/ 
function App() {
  return (
    <div className="App">
          <PaginaPrincipal/>
      <header className="App-header">

    
<PaginaPersonajes/>

      </header>

<Footer/>



    </div>
  );
}





/**
 * Texto de preuba
 * arraypersonajes { 0= id ,nombre,img}
 * 
 */
export default App;
