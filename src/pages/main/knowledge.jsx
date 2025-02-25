import React, { useEffect, useState } from "react";
import $ from "jquery";
import Conocimiento_header from "../../interface/conocimiento_header";

const Knowledge = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    $.ajax({
      url: "/json/knowledge.json",
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

  document.documentElement.style.setProperty("--bs-primary", "#00b7ff");
  return (
    <>
      <Conocimiento_header />
    </>
  );
};

export default Knowledge;
