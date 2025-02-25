import React from "react";
import Box from "@mui/material/Box";
import Card from "react-bootstrap/Card";
import Masonry from "@mui/lab/Masonry";
import { styled } from "@mui/material/styles";
import Accordion from "@mui/material/Accordion";

const StyledAccordion = styled(Accordion)(() => ({
  color: "#fff",
}));

const Educacion_Masonry = ({ itemData = [] }) => {
  return (
    <>
      <div className="container py-3 pe-0">
        <Box sx={{ width: "100%", minHeight: 10 }} className="p-0">
          <Masonry
            columns={{
              xs: 1,
              sm: 2,
              md: 2,
              lg: 3,
            }}
            spacing={2}
          >
            {itemData.map((item, index) => (
              <Card
                key={index}
                className="bg-dark text-white hover-zoom overflow-hidden"
              >
                <Card.Img
                  srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
                  src={`${item.img}?w=162&auto=format`}
                  style={{ minHeight: "250px", transition: "transform 3s" }}
                  className="object-fit-cover card-img-scale"
                />
                <Card.ImgOverlay className="h-100 p-0">
                  <Card.Title className="bg-dark bg-opacity-75 fs-2 fw-bold m-0 p-3 pb-2">
                    {item.title}
                  </Card.Title>
                  <Card.Text
                    className="bg-dark bg-opacity-75 p-3 pt-0 overflow-hidden"
                    dangerouslySetInnerHTML={{ __html: item.descripcion }}
                  />
                </Card.ImgOverlay>
              </Card>
            ))}
          </Masonry>
        </Box>
      </div>
    </>
  );
};

export default Educacion_Masonry;
