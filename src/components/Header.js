import {
  Navbar,
  NavbarBrand,
  Collapse,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import NucampLogo from "../app/assests/img/logo.png";
import { useState } from "react";

const Header = () => {
  return (
    <Navbar dark color="primary" sticky="top" expand="md">
      <NavbarBrand href="/">
        <img src={NucampLogo} alt="nucamp logo" />
      </NavbarBrand>
      <Nav className="ms-auto" navbar>
        <NavItem>
          <NavLink className="nav-link" to="/"></NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="nav-link" to="/"></NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="nav-link" to="/"></NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="nav-link" to="/"></NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
};
export default Header;
