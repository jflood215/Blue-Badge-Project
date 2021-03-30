import React, { useState, Fragment } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Nav,
  Collapse,
  NavItem,
  Button,
  NavLink,
} from "reactstrap";
import { Link } from "react-router-dom";
import "../../src/App.css";

const Sitebar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggle = () => {
    let newIsOpen = !isOpen;
    setIsOpen(newIsOpen);
  };

  return (
    <Fragment>
        <Navbar color="primary" light expand="md">
          <NavbarBrand
            style={{ color: "white", fontWeight: "500", marginRight: "2.2em" }}
            className="links"
            href="/macros"
          >
            Macros Made Easy
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem color="dark">    
              <NavLink> 
                <Link
                  className="links" to="/macros">
                  Macros
                </Link>
                <Link className="links" to="/recipes">
                  Recipes
                </Link>
                <Link className="links" to="/weights">
                  Weights
                </Link>
                </NavLink> 
              </NavItem>
            </Nav>
            <Nav className="ml-auto">
              <NavItem>
                <Link to="/">
                  <Button color="dark" onClick={props.clickLogout}>
                    Logout
                  </Button>
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
    </Fragment>
  );
};

export default Sitebar;
