import React, { useState } from "react";
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

const Sitebar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    let newIsOpen = !isOpen;
    setIsOpen(newIsOpen);
  };

  return (
    <Navbar color="primary" light expand="md">
      <NavbarBrand href="/">Blue Badge Project</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <NavItem color="dark">
            <NavLink href="/components/">Macros</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://github.com/reactstrap/reactstrap">
              Recipes
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://github.com/reactstrap/reactstrap">
              Weights
            </NavLink>
          </NavItem>
        </Nav>
        <Nav className="ml-auto">
          <NavItem>
            <Button color="dark" onClick={props.clickLogout}>
              Logout
            </Button>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Sitebar;
