import React from "react";
import { NavLink, Link } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import HomeIcon from "@mui/icons-material/Home";
import RecentActorsOutlinedIcon from "@mui/icons-material/RecentActorsOutlined";
import RecentActorsIcon from "@mui/icons-material/RecentActors";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import PsychologyIcon from "@mui/icons-material/Psychology";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import DynamicFormOutlinedIcon from "@mui/icons-material/DynamicFormOutlined";
import DynamicFormIcon from "@mui/icons-material/DynamicForm";

const Header_options = () => {
  return (
    <>
      <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
        <li>
          <NavLink
            to={`/`}
            className={({ isActive }) =>
              `nav-link text-body-emphasis rounded-5 ${
                isActive ? "nav-link-custom-active" : "nav-link-custom"
              }`
            }
          >
            {({ isActive }) => (
              <>
                {isActive ? (
                  <HomeIcon className="d-block mx-auto" sx={{ fontSize: 40 }} />
                ) : (
                  <HomeOutlinedIcon
                    className="d-block mx-auto"
                    sx={{ fontSize: 40 }}
                  />
                )}
                Inicio
              </>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`/about`}
            className={({ isActive }) =>
              `nav-link text-body-emphasis rounded-5 ${
                isActive ? "nav-link-custom-active" : "nav-link-custom"
              }`
            }
          >
            {({ isActive }) => (
              <>
                {isActive ? (
                  <RecentActorsIcon
                    className="d-block mx-auto"
                    sx={{ fontSize: 40 }}
                  />
                ) : (
                  <RecentActorsOutlinedIcon
                    className="d-block mx-auto"
                    sx={{ fontSize: 40 }}
                  />
                )}
                Sobre mi
              </>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`/knowledge`}
            className={({ isActive }) =>
              `nav-link text-body-emphasis rounded-5 ${
                isActive ? "nav-link-custom-active" : "nav-link-custom"
              }`
            }
          >
            {({ isActive }) => (
              <>
                {isActive ? (
                  <PsychologyIcon
                    className="d-block mx-auto"
                    sx={{ fontSize: 40 }}
                  />
                ) : (
                  <PsychologyOutlinedIcon
                    className="d-block mx-auto"
                    sx={{ fontSize: 40 }}
                  />
                )}
                Conocimientos
              </>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`/experience`}
            className={({ isActive }) =>
              `nav-link text-body-emphasis rounded-5 ${
                isActive ? "nav-link-custom-active" : "nav-link-custom"
              }`
            }
          >
            {({ isActive }) => (
              <>
                {isActive ? (
                  <BusinessCenterIcon
                    className="d-block mx-auto"
                    sx={{ fontSize: 40 }}
                  />
                ) : (
                  <BusinessCenterOutlinedIcon
                    className="d-block mx-auto"
                    sx={{ fontSize: 40 }}
                  />
                )}
                Experiencia
              </>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`/projects`}
            className={({ isActive }) =>
              `nav-link text-body-emphasis rounded-5 ${
                isActive ? "nav-link-custom-active" : "nav-link-custom"
              }`
            }
          >
            {({ isActive }) => (
              <>
                {isActive ? (
                  <DynamicFormIcon
                    className="d-block mx-auto"
                    sx={{ fontSize: 40 }}
                  />
                ) : (
                  <DynamicFormOutlinedIcon
                    className="d-block mx-auto"
                    sx={{ fontSize: 40 }}
                  />
                )}
                Proyectos
              </>
            )}
          </NavLink>
        </li>
      </ul>
    </>
  );
};
export default Header_options;
