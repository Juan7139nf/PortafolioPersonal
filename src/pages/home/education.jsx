import React, { useEffect, useState } from "react";
import $ from "jquery";
import Educacion_View from "../../interface/educacion_view";
import Educacion_Masonry from "../../layout/educacion_masonry";

const Education = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    $.ajax({
      url: "/json/education.json",
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

  document.documentElement.style.setProperty("--bs-primary", "#00aa97");
  return (
    <>
      <Educacion_View />
      <Educacion_Masonry itemData={items} />
    </>
  );
};
export default Education;
