import React, { useEffect, useState } from "react";
import $ from "jquery";

const InfinityFree = () => {
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

  document.documentElement.style.setProperty("--bs-primary", "#8a2be2");
  return (
    <>
      <h1>InfinityFree</h1>
    </>
  );
};

export default InfinityFree;
