import React, { useEffect, useState } from "react";
import $ from "jquery";

const Projects = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    $.ajax({
      url: "/json/principal.json",
      method: "GET",
      dataType: "json",
      success: function (data) {
        setItems(data);
        console.log(data);
      },
      error: function (error) {
        console.error("Error cargando los datos:", error);
      },
    });
  }, []);

  document.documentElement.style.setProperty("--bs-primary", "#8b0000");
  return (
    <>
      <h1>Proyectos</h1>
    </>
  );
};

export default Projects;
