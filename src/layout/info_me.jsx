import React from "react";
import ParticleCanvas from "../custom/particleCanvas";

const Info_me = ({ yo, content = [] }) => {
  return (
    <>
      <section className="container">
        <div className="float-md-start me-0 me-md-3 text-center">
          <ParticleCanvas
            imageSrc={content.foto}
            clases={"rounded-5 foto-about"}
            tWidth={250}
            tHeight={250}
            nParticlesCanvas={1500}
            speedFactor={0.4}
          />
        </div>
        <aside style={{ minHeight: "420px" }}>
          <h1 className="fw-bold text-center">{yo}</h1>
          <p
            className="fs-5"
            dangerouslySetInnerHTML={{ __html: content.descripcion?.greeting }}
          />
          <p
            className="fs-5"
            dangerouslySetInnerHTML={{ __html: content.descripcion?.focus }}
          />
          <p
            className="fs-5"
            dangerouslySetInnerHTML={{ __html: content.descripcion?.passion }}
          />
          <p
            className="fs-5"
            dangerouslySetInnerHTML={{ __html: content.descripcion?.effort }}
          />
        </aside>
      </section>
    </>
  );
};

export default Info_me;
