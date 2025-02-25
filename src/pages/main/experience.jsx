import React, { useEffect, useState } from "react";
import $ from "jquery";

const Experience = () => {
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

  document.documentElement.style.setProperty("--bs-primary", "#003bff");
  return (
    <>
      <h1>Experiencia</h1>
    </>
  );
};

export default Experience;
