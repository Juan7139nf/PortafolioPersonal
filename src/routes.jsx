import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./pages/home/inicio";
import About from "./pages/home/about";
import Header from "./components/header";
import Aside from "./components/aside";
import Education from "./pages/home/education";
import Knowledge from "./pages/main/knowledge";
import Experience from "./pages/main/experience";
import Projects from "./pages/admin/projects";
import InfinityFree from "./pages/other/infinityFree";
import Design from "./pages/other/design";

const Mis_rutas = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="d-flex">
          <Aside />
          <div className="w-100 pt-2">
            <Routes>
              <Route path="/" element={<Inicio />} />
              <Route path="/about" element={<About />} />
              <Route path="/education" element={<Education />} />
              <Route path="/knowledge" element={<Knowledge />} />

              <Route path="/experience" element={<Experience />} />
              
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/infinityfree" element={<InfinityFree />} />
              
              <Route path="/design" element={<Design />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
};

export default Mis_rutas;
