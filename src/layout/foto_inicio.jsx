import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import FuzzyText from "../custom/fuzzyText";
import SplitText from "../custom/splitText";

const Foto_inicio = ({ name, last_name, soy = [], imgs = [] }) => {
  const [fontSize, setFontSize] = useState(getFontSize(window.innerWidth));

  function getFontSize(width) {
    return width >= 1200 ? 80 : Math.max(25, (width / 1200) * 80);
  }

  useEffect(() => {
    const handleResize = () => {
      setFontSize(getFontSize(window.innerWidth));
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <section className="container">
        <div className="card overflow-hidden h-400 text-center hover-zoom">
          <div
            className="card-bg-scale h-400 position-relative"
            style={{
              backgroundImage: `url(${imgs.foto_bg})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              transition: "transform 3s ease",
            }}
          ></div>
          <div className="position-absolute bg-black bg-opacity-50 w-100 h-100">
            <div className="align-content-center h-100">
              <div className="d-block">
                <FuzzyText
                  baseIntensity={0.7}
                  hoverIntensity={0}
                  enableHover={true}
                  fontSize={fontSize}
                >
                  {name}
                </FuzzyText>
                <FuzzyText
                  baseIntensity={0.7}
                  hoverIntensity={0}
                  enableHover={true}
                  fontSize={fontSize}
                >
                  {last_name}
                </FuzzyText>
              </div>
              <NavLink
                to={`/about`}
                className="btn btn-primary fs-4 rounded-pill fw-bold"
              >
                Ver Perfil
              </NavLink>
            </div>
          </div>
        </div>
        <div className="position-relative text-center text-md-start">
          <div className="ps-md-6">
            {soy.map((e, index) => (
              <h3 key={index}>
                <SplitText
                  text={e.profesion}
                  className="fw-bold fst-italic"
                  delay={150}
                  animationFrom={{
                    opacity: 0,
                    transform: "translate3d(0,50px,0)",
                  }}
                  animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
                  easing="easeOutCubic"
                  threshold={0.5}
                  rootMargin="-50px"
                />
              </h3>
            ))}
          </div>
          <img
            src={imgs.foto}
            className="position-absolute object-fit-cover rounded-circle start-40-foto text-md-start"
            width={200}
            height={200}
            style={{ top: -100 }}
          />
        </div>
      </section>
    </>
  );
};

export default Foto_inicio;
