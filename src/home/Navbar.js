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
import { Route, Link, Switch, Redirect } from "react-router-dom";
import MacroCreate from "../MacroIndex/MacroCreate";
import RecipeIndex from "../RecipeAPI/RecipeIndex";
import WeightTable from "../WeightIndex/WeightTable";
import WeightIndex from "../WeightIndex/WeightIndex";
import AppIndex from "../AppIndex/AppIndex";
import "../../src/App.css";

const Sitebar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    let newIsOpen = !isOpen;
    setIsOpen(newIsOpen);
  };

  return (
    <Fragment>
      <div>
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
                <Link
                  className="links"
                  to="/macros"
                  // style={{text-decoration:"none"}}
                >
                  Macros
                </Link>

                <Link className="links" to="/recipes">
                  Recipes
                </Link>

                <Link className="links" to="/weights">
                  Weights
                </Link>

                {/* <NavLink href="/macros/">Macros</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="localhost:3000">Recipes</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="localhost:3000">Weights</NavLink> */}
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
      </div>

      <div>
        <Switch>
          <Route exact path="/macros">
            <MacroCreate token={props.token} />
          </Route>
          <Route exact path="/recipes">
            <RecipeIndex token={props.token} />
          </Route>
          <Route exact path="/weights">
            <WeightIndex token={props.token} />
          </Route>
        </Switch>
      </div>
    </Fragment>
  );
};

export default Sitebar;
