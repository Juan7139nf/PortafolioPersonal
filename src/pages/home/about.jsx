import React, { useEffect, useState } from "react";
import Contact_card from "../../ui/contact_card";
import $ from "jquery";
import Info_me from "../../layout/info_me";

const About = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    $.ajax({
      url: "/json/about.json",
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

  document.documentElement.style.setProperty("--bs-primary", "#0b7a6d");
  return (
    <>
      <Info_me yo={items.yo} content={items.content} />
      <Contact_card cards={items["cards-contact"]} />
    </>
  );
};
export default About;
