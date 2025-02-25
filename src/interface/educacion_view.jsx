import React from "react";
import DecryptedText from "../custom/decryptedText";

const Educacion_View = () => {
  return (
    <>
      <div className="container">
        <div className="fs-1 fw-bold text-center bg-secondary-subtle rounded-5 p-2">
          <div className="">
            <DecryptedText
              text="Todo lo que he aprendido! "
              animateOn="hover"
              speed={160}
              maxIterations={16}
              revealDirection="end"
              sequential={true}
              className="text-primary"
            />
          </div>
          <div className="">
            <DecryptedText
              text="MI EDUCACIÓN"
              animateOn="hover"
              speed={160}
              maxIterations={16}
              revealDirection="start"
              sequential={true}
              className="text-info"
            />
          </div>
          <div className="fs-2">
            <DecryptedText
              text="De muchos años de estudio he aprendido esto."
              animateOn="view"
              speed={160}
              maxIterations={16}
              revealDirection="center"
              sequential={true}
              className="text-body"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Educacion_View;
