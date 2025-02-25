import React, { useEffect, useState } from "react";
import Nav_options from "./nav_options";

const Aside = () => {
  return (
    <>
      {/*<div className="p-3 d-none d-md-block scrollbar-space">
      </div>*/}
      <div
        className="p-2 d-none d-md-block scrollbar sticky-top bg-sidebar"
        data-bs-theme="dark"
        style={{ top: "3.5rem" }}
      >
        <Nav_options />
      </div>
    </>
  );
};

export default Aside;
