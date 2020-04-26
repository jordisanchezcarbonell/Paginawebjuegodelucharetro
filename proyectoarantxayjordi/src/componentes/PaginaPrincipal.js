import React , {Component} from 'react';
import * as ReactBootstrap from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
export class PaginaPrincipal extends Component{


    render(){

        return (
            <div>        
                  <Router>

                <div>

                <ReactBootstrap.Navbar bg="light" expand="lg" className="NavbarBoostrap">
  <ReactBootstrap.Navbar.Brand className="NavBarTitulo" href="#home"><Link to={"/PaginaPersonajes"}>Retro Games</Link></ReactBootstrap.Navbar.Brand>
  <ReactBootstrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
 
</ReactBootstrap.Navbar>


                </div>
    
                <div>
             
               <ReactBootstrap.Navbar bg="light" expand="lg" className="NavbarBoostrap">
  <ReactBootstrap.Navbar.Brand href="PaginaPersonajes.js">Juegos</ReactBootstrap.Navbar.Brand>
  <ReactBootstrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
  <ReactBootstrap.Navbar.Collapse id="basic-navbar-nav">
    <ReactBootstrap.Nav className="mr-auto">
      <ReactBootstrap.Nav.Link href="#home">Personajes</ReactBootstrap.Nav.Link>
      
      <ReactBootstrap.NavDropdown title="Plataformas" id="basic-nav-dropdown">
        <ReactBootstrap.NavDropdown.Item href="#action/3.1">Action</ReactBootstrap.NavDropdown.Item>
        <ReactBootstrap.NavDropdown.Item href="#action/3.2">Another action</ReactBootstrap.NavDropdown.Item>
        <ReactBootstrap.NavDropdown.Item href="#action/3.3">Something</ReactBootstrap.NavDropdown.Item>
        <ReactBootstrap.NavDropdown.Divider />
        <ReactBootstrap.NavDropdown.Item href="#action/3.4">Separated link</ReactBootstrap.NavDropdown.Item>
      </ReactBootstrap.NavDropdown>
    </ReactBootstrap.Nav>
    <ReactBootstrap.Form inline>
      <ReactBootstrap.FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <ReactBootstrap.Button variant="outline-success">Search</ReactBootstrap.Button>
    </ReactBootstrap.Form>
  </ReactBootstrap.Navbar.Collapse>
</ReactBootstrap.Navbar>


<Switch>
          <Route path="/PaginaPersonajes">
            <PaginaPersonajes />
          </Route>
        
         
        </Switch>
      </div>
    </Router>
 


            </div>
        )
    }

}

function PaginaPersonajes() {
  return <h2>Home</h2>;
}




 
export class Footer extends React.Component {
 
  render() {
 
    return (
 
        <footer className="container">
            <p className="float-right"><a href="#">Subir</a></p>
            <p>&copy; {(new Date().getFullYear())} Mi Proyecto, Inc. &middot; <a href="#">Política de Privacidad</a> &middot; <a href="#">Términos</a></p>
        </footer>
 
    )
    
  }
 
}
 

