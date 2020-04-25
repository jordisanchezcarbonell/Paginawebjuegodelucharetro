import React from 'react';
import logo from './logo.svg';
import './App.css';
import {PaginaPrincipal} from './componentes/PaginaPrincipal'
import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootstrap from 'react-bootstrap';

//CADA COMPONENTE ESTARA FORMADO POR PAGINA-

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
          
          
        </a>
        <PaginaPrincipal/>
        <ReactBootstrap.Button variant="primary">Primary</ReactBootstrap.Button>{' '}
        <ReactBootstrap.Navbar></ReactBootstrap.Navbar>

      </header>
    </div>
  );
}





/**
 * Texto de preuba
 * arraypersonajes { 0= id ,nombre,img}
 * 
 */
export default App;
