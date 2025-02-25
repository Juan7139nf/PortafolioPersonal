import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Container, Navbar, Nav, Dropdown } from "react-bootstrap";
import { Offcanvas, Button } from "react-bootstrap";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import DynamicFormIcon from "@mui/icons-material/DynamicForm";

import Nav_options from "./nav_options";
import Logo_white_100 from "../assets/logo_white_100.webp";
import Logo_black_100 from "../assets/logo_black_100.webp";
import Header_options from "./header_options";
import Btn_theme from "../custom/btn_theme";
import Me_img from "../assets/me.webp";

const Header = () => {
  const [show, setShow] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    setCollapsed(false);
  };

  useEffect(() => {
    const root = document.getElementById("body");
    if (collapsed) {
      root.classList.add("navbar-vertical-collapsed");
    } else {
      root.classList.remove("navbar-vertical-collapsed");
    }
  }, [collapsed]);

  return (
    <>
      <header>
        <div className="px-3 py-2">
          <div className="container-md">
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
              <NavLink
                to={`/`}
                className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none navbar-brand"
              >
                <img src={Logo_white_100} alt="" className="logo-dark" />
                <img src={Logo_black_100} alt="" className="logo-light" />
              </NavLink>
              <Header_options />
            </div>
          </div>
        </div>
      </header>
      <Navbar
        bg="dark bg-opacity-95"
        data-bs-theme="dark"
        sticky="top"
        style={{ height: "56px" }}
      >
        <Container fluid className="justify-content-between py-0">
          <Button
            variant="outline-toggle p-0"
            onClick={handleShow}
            className="d-md-none"
          >
            <MenuIcon fontSize="large" />
          </Button>
          <Button
            variant={`outline-toggle p-0 ${collapsed ? "" : "active"}`}
            onClick={() => setCollapsed(!collapsed)}
            className="d-none d-md-block"
          >
            {collapsed && true ? (
              <>
                <MenuIcon fontSize="large" />
              </>
            ) : (
              <>
                <MenuOpenIcon fontSize="large" />
              </>
            )}
          </Button>
          <Navbar.Brand className="p-0 ps-2">
            <NavLink to={`/`} className="nav-link d-flex">
              <img src={Logo_white_100} height={40} alt="" />
              <div className="d-none d-md-block">
                <h3 className="fst-italic fw-bold">Juan Flores</h3>
              </div>
            </NavLink>
          </Navbar.Brand>
          <Nav className="me-auto">
            <NavLink to={`/projects`} className="nav-link d-flex">
              <DynamicFormIcon />
              <div className="d-none d-md-block ms-1">Proyectos</div>
            </NavLink>
          </Nav>
          <Btn_theme />
          <Dropdown className="d-inline ms-2" drop="down-centered">
            <Dropdown.Toggle
              variant="dark py-0 ps-0 rounded-pill"
              id="dropdown-autoclose-inside"
            >
              <img
                src={Me_img}
                alt=""
                width={40}
                height={40}
                className="rounded-circle"
              />
              <b className="ms-2 d-none d-sm-inline">JF</b>
            </Dropdown.Toggle>
            <Dropdown.Menu className="dropdown-menu-end">
              <NavLink to={`/about`} className="dropdown-item">
                Perfil
              </NavLink>
              <NavLink to={`/knowledge`} className="dropdown-item">
                Conocimientos
              </NavLink>
              <Dropdown.Divider />
              <NavLink to={`/education`} className="dropdown-item">
                Educación
              </NavLink>
            </Dropdown.Menu>
          </Dropdown>
        </Container>
      </Navbar>

      {/* Offcanvas solo en dispositivos pequeños */}
      <Offcanvas show={show} onHide={handleClose} placement="start">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="text-primary fw-bold">
            Juan Nicolas Flores
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav_options />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Header;
