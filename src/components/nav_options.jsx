import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import WebIcon from "@mui/icons-material/Web";
import HomeIcon from "@mui/icons-material/Home";
import RecentActorsIcon from "@mui/icons-material/RecentActors";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PsychologyIcon from "@mui/icons-material/Psychology";

import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";

import DynamicFormIcon from "@mui/icons-material/DynamicForm";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import DesignServicesRoundedIcon from "@mui/icons-material/DesignServicesRounded";

import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Popover from "react-bootstrap/Popover";

const Nav_options = () => {
  const location = useLocation();

  // Verifica si la ruta está dentro de las secciones que deben estar abiertas
  const isHomeSectionOpen = ["/", "/about", "/education"].includes(
    location.pathname
  );
  const isKnowledgeSectionOpen = location.pathname.startsWith("/knowledge");
  const isExperienceSectionOpen = location.pathname.startsWith("/experience");
  const isProjectsSectionOpen = location.pathname.startsWith("/projects");
  const isDesignSectionOpen = location.pathname.startsWith("/design");

  return (
    <>
      <div className="" data-bs-scroll="true">
        <OverlayTrigger
          placement={"right"}
          overlay={<Tooltip>Contacto de WhatsApp</Tooltip>}
        >
          <a
            href="https://wa.link/p2eoeo"
            target="_blank"
            className="d-flex align-items-center pb-3 mb-3 link-body-emphasis text-decoration-none border-bottom border-light"
          >
            <div className="mx-auto">
              <WhatsAppIcon fontSize="large" id="icon-whatsapp-sidebar" />
              <span className="fs-5 fw-semibold collapsed-text-sidebar ms-1 align-middle">
                WhatsApp
              </span>
            </div>
          </a>
        </OverlayTrigger>
        <ul className="list-unstyled ps-0">
          <li className="mb-1">
            <OverlayTrigger
              placement={"right"}
              overlay={<Tooltip>Principal</Tooltip>}
            >
              <button
                className={`btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed ${
                  isHomeSectionOpen ? "active" : ""
                }`}
                data-bs-toggle="collapse"
                data-bs-target="#home-collapse"
                aria-expanded={isHomeSectionOpen}
              >
                <WebIcon />
                <div className="collapsed-text-sidebar ms-1">Principal</div>
              </button>
            </OverlayTrigger>
            <div
              className={`collapse ${isHomeSectionOpen ? "show" : ""}`}
              id="home-collapse"
            >
              <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li>
                  <OverlayTrigger
                    placement={"right"}
                    overlay={<Tooltip>Inicio</Tooltip>}
                  >
                    <NavLink
                      to={`/`}
                      end
                      className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                    >
                      <HomeIcon />
                      <div className="collapsed-text-sidebar ms-1">Inicio</div>
                    </NavLink>
                  </OverlayTrigger>
                </li>
                <li>
                  <OverlayTrigger
                    placement={"right"}
                    overlay={<Tooltip>Sobre mi</Tooltip>}
                  >
                    <NavLink
                      to={`/about`}
                      className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                    >
                      <RecentActorsIcon />
                      <div className="collapsed-text-sidebar ms-1">
                        Sobre mi
                      </div>
                    </NavLink>
                  </OverlayTrigger>
                </li>
                <li>
                  <OverlayTrigger
                    placement={"right"}
                    overlay={<Tooltip>Educación</Tooltip>}
                  >
                    <NavLink
                      to={`/education`}
                      className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                    >
                      <HistoryEduIcon />
                      <div className="collapsed-text-sidebar ms-1">
                        Educación
                      </div>
                    </NavLink>
                  </OverlayTrigger>
                </li>
              </ul>
            </div>
          </li>
          <li className="mb-1">
            <OverlayTrigger
              placement={"right"}
              overlay={<Tooltip>Conocimientos</Tooltip>}
            >
              <button
                className={`btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed ${
                  isKnowledgeSectionOpen ? "active" : ""
                }`}
                data-bs-toggle="collapse"
                data-bs-target="#knowledge-collapse"
                aria-expanded={isKnowledgeSectionOpen}
              >
                <PsychologyIcon />
                <div className="collapsed-text-sidebar ms-1">Conocimientos</div>
              </button>
            </OverlayTrigger>
            <div
              className={`collapse ${isKnowledgeSectionOpen ? "show" : ""}`}
              id="knowledge-collapse"
            >
              <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li>
                  <OverlayTrigger
                    placement={"right"}
                    overlay={<Tooltip>Todos los conocimientos</Tooltip>}
                  >
                    <NavLink
                      to={`/knowledge`}
                      end
                      className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                    >
                      <DashboardIcon />
                      <div className="collapsed-text-sidebar ms-1">Todos</div>
                    </NavLink>
                  </OverlayTrigger>
                </li>
              </ul>
            </div>
          </li>
          <li className="mb-1">
            <OverlayTrigger
              placement={"right"}
              overlay={<Tooltip>Experiencia</Tooltip>}
            >
              <button
                className={`btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed ${
                  isExperienceSectionOpen ? "active" : ""
                }`}
                data-bs-toggle="collapse"
                data-bs-target="#experience-collapse"
                aria-expanded={isExperienceSectionOpen}
              >
                <BusinessCenterIcon />
                <div className="collapsed-text-sidebar ms-1">Experiencia</div>
              </button>
            </OverlayTrigger>
            <div
              className={`collapse ${isExperienceSectionOpen ? "show" : ""}`}
              id="experience-collapse"
            >
              <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li>
                  <OverlayTrigger
                    placement={"right"}
                    overlay={<Tooltip>Todas las experiencia</Tooltip>}
                  >
                    <NavLink
                      to={`/experience`}
                      end
                      className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                    >
                      <DashboardIcon />
                      <div className="collapsed-text-sidebar ms-1">Todos</div>
                    </NavLink>
                  </OverlayTrigger>
                </li>
              </ul>
            </div>
          </li>
          <li className="border-top border-light my-3"></li>
          <li className="mb-1">
            <OverlayTrigger
              placement={"right"}
              overlay={<Tooltip>Proyectos</Tooltip>}
            >
              <button
                className={`btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed ${
                  isProjectsSectionOpen ? "active" : ""
                }`}
                data-bs-toggle="collapse"
                data-bs-target="#projects-collapse"
                aria-expanded={isProjectsSectionOpen}
              >
                <DynamicFormIcon />
                <div className="collapsed-text-sidebar ms-1">Proyectos</div>
              </button>
            </OverlayTrigger>
            <div
              className={`collapse ${isProjectsSectionOpen ? "show" : ""}`}
              id="projects-collapse"
            >
              <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li>
                  <OverlayTrigger
                    placement={"right"}
                    overlay={<Tooltip>Todos los proyectos</Tooltip>}
                  >
                    <NavLink
                      to={`/projects`}
                      end
                      className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                    >
                      <DashboardIcon />
                      <div className="collapsed-text-sidebar ms-1">Todos</div>
                    </NavLink>
                  </OverlayTrigger>
                </li>
                <li>
                  <OverlayTrigger
                    placement={"right"}
                    overlay={<Tooltip>Proyectos en InfinityFree</Tooltip>}
                  >
                    <NavLink
                      to={`/projects/infinityfree`}
                      className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                    >
                      <AllInclusiveIcon />
                      <div className="collapsed-text-sidebar ms-1">
                        InfinityFree
                      </div>
                    </NavLink>
                  </OverlayTrigger>
                </li>
              </ul>
            </div>
          </li>
          <li className="mb-1">
            <OverlayTrigger
              placement={"right"}
              overlay={<Tooltip>Diseños</Tooltip>}
            >
              <button
                className={`btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed ${
                  isDesignSectionOpen ? "active" : ""
                }`}
                data-bs-toggle="collapse"
                data-bs-target="#design-collapse"
                aria-expanded={isDesignSectionOpen}
              >
                <DesignServicesRoundedIcon />
                <div className="collapsed-text-sidebar ms-1">Diseños</div>
              </button>
            </OverlayTrigger>
            <div
              className={`collapse ${isDesignSectionOpen ? "show" : ""}`}
              id="design-collapse"
            >
              <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li>
                  <OverlayTrigger
                    placement={"right"}
                    overlay={<Tooltip>Todos los Diseños</Tooltip>}
                  >
                    <NavLink
                      to={`/design`}
                      end
                      className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                    >
                      <DashboardIcon />
                      <div className="collapsed-text-sidebar ms-1">Todos</div>
                    </NavLink>
                  </OverlayTrigger>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Nav_options;
