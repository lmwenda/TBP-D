import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";

import './Header.css';

export const Header: React.FC<any> = (): JSX.Element => {
    
    const mql = window.matchMedia("(max-width: 600px)");
    let phoneView = mql.matches;

    if(!phoneView){
        return(
            <nav>
                <h1 style={{fontSize: '2rem'}}>Two Bro's Pizza</h1>
    
                <div className="links">
                    <Link id="first" to="/">
                        Home
                    </Link>
    
                    <Link id="nav-links" to="/menu">
                        Menu
                    </Link>
    
                    <Link id="nav-links" to="/register">
                        Register
                    </Link>
    
                    <Link id="nav-links" to="/contact">
                        Contact
                    </Link>
                </div>
            </nav>
        );
    }else{
        return(
            <Navbar id="nav" collapseOnSelect expand="lg" style={{ background: "rgb(167, 68, 11)" }}>

            <Navbar.Brand href="/" style={{color: '#fff'}}>Two Bro's Pizza</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{ borderColor: '#fff'}} />
            <Navbar.Collapse id="responsive-navbar-nav">

                <Nav className="mr-auto" style={{ background: "rgb(167, 68, 11)" }}>

                    <LinkContainer style={{color: '#fff'}} to="/">
                        <Nav.Link>Home</Nav.Link>
                    </LinkContainer>
    
                    <LinkContainer style={{color: '#fff'}} to="/menu">
                        <Nav.Link>Menu</Nav.Link>
                    </LinkContainer>
    
                    <LinkContainer style={{color: '#fff'}} to="/register">
                        <Nav.Link>Register</Nav.Link>
                    </LinkContainer>
    
                    <LinkContainer style={{color: '#fff'}} to="/contact">
                        <Nav.Link>Contact</Nav.Link>
                    </LinkContainer>

                </Nav>

            </Navbar.Collapse>

        </Navbar>
        );
    }
}