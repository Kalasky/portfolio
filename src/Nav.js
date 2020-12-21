import React from "react";
import { Navbar } from "react-bootstrap";
import logo from "./images/hk-logo.png";

const Header = () => {
  return (
    <Navbar bg="light" expand="md" style={{ fontSize: "18px" }}>
      <Navbar.Brand>
        <img
          src={logo}
          width="64"
          height="100%"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />
      </Navbar.Brand>
      {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto" style={{ fontFamily: "Nunito" }}>
          <Nav.Link href="/docs">Documentation</Nav.Link>
          <Nav.Link href="/vote">About</Nav.Link>
          <Nav.Link
            target="_blank"
            rel="noopener noreferrer"
            href="http://kalatiko.buycraft.net/"
          >
            Blog
          </Nav.Link>
          <Nav.Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://discordapp.com"
          >
            Discord
          </Nav.Link>
        </Nav>
      </Navbar.Collapse> */}
    </Navbar>
  );
};

export default Header;
