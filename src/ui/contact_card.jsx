import React from "react";
import Card from "react-bootstrap/Card";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CardActionArea from "@mui/material/CardActionArea";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";

const Contact_card = ({ cards = [] }) => {
  console.log(cards);
  return (
    <>
      <section className="container pb-3">
        <div className="row g-2">
          {cards.map((item) => (
            <div key={item.id} className={`col-lg-${item.id === 3 ? "12" : "6"}`}>
              <Card className="bg-dark text-white overflow-hidden hover-zoom">
                {item.nombre !== "Correo personal" ? (
                  <CardActionArea>
                    <Card.Img
                      srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
                      src={`${item.img}?w=162&auto=format`}
                      style={{ height: "300px", transition: "transform 3s" }}
                      className="object-fit-cover card-img-scale"
                    />
                    <Card.ImgOverlay className="h-100 bg-dark bg-opacity-75 p-5">
                      <Card.Title className="fs-2 fw-bold">
                        {item.nombre === "WhatsApp" && (
                          <WhatsAppIcon fontSize="large" className="me-2" />
                        )}
                        <span className="align-middle">{item.nombre}</span>
                      </Card.Title>
                      <Card.Text className="text-white">
                        {item.descripcion}
                        <br />
                        <a
                          href={item.link}
                          target="_blank"
                          className={`text-center btn btn-${
                            item.nombre === "WhatsApp" ? "primary" : "secondary"
                          } btn-lg fw-bold mt-2`}
                        >
                          {item.btn}
                          <OpenInNewRoundedIcon className="ms-2" />
                        </a>
                      </Card.Text>
                    </Card.ImgOverlay>
                  </CardActionArea>
                ) : (
                  <>
                    <Card.Img
                      srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
                      src={`${item.img}?w=162&auto=format`}
                      style={{ height: "300px", transition: "transform 3s" }}
                      className="object-fit-cover card-img-scale"
                    />
                    <Card.ImgOverlay className="h-100 bg-dark bg-opacity-75 p-5">
                      <Card.Title className="fs-2 fw-bold">
                        {item.nombre === "WhatsApp" && (
                          <WhatsAppIcon fontSize="large" className="me-2" />
                        )}
                        <span className="align-middle">{item.nombre}</span>
                      </Card.Title>
                      <Card.Text className="text-white fs-5 lh-lg">
                        {item.descripcion}
                        <br/>
                        <span className="bg-secondary p-2 rounded-3">{item.link}</span>
                      </Card.Text>
                    </Card.ImgOverlay>
                  </>
                )}
              </Card>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Contact_card;
