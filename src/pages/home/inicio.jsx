import React, { useEffect, useState } from "react";
import Foto_inicio from "../../layout/foto_inicio";
import $ from "jquery";

const Inicio = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    $.ajax({
      url: "/json/principal.json",
      method: "GET",
      dataType: "json",
      success: function (data) {
        setItems(data);
        console.log(data)
      },
      error: function (error) {
        console.error("Error cargando los datos:", error);
      },
    });
  }, []);

  document.documentElement.style.setProperty("--bs-primary", "#128c7e");
  return (
    <>
      <Foto_inicio name={items.name} last_name={items["last-name"]} soy={items.soy} imgs={items.imgs}/>
      
    </>
  );
};

export default Inicio;
