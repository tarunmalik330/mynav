import React from "react";
import Col from "react-bootstrap/Col";
import RackerAgent1 from "../assets/images/png/JessicaJui.png";
import RackerAgent2 from "../assets/images/png/JonathonDoe.png";
import RackerAgent3 from "../assets/images/png/MonalisaLui.png";
import { Container, Row } from "react-bootstrap";

const Product = () => {
  return (
    <div className="bg-green">
      <Container className="pt-5 pb-5">
        <Row className="justify-content-center">
          <Col
            lg={3}
            className="col-12 d-flex flex-column justify-content-center align-items-center"
          >
            <img
              src={RackerAgent2}
              alt="RackerAgent2"
              className="w-100 mw-366"
            />
            <h2 className="ff-poppins fw-bold fs-24 pt-4 mb-0">Jonathon Doe</h2>
            <p className="fs-16 ff-poppins fw-normal pt-2">Racker Agent</p>
          </Col>
          <Col
            lg={3}
            className="col-12 d-flex flex-column justify-content-center align-items-center"
          >
            <img
              src={RackerAgent1}
              alt="RackerAgent1"
              className="w-100 mw-366"
            />
            <h2 className="ff-poppins fw-bold fs-24 pt-4 mb-0">Jonathon Doe</h2>
            <p className="fs-16 ff-poppins fw-normal pt-2">Racker Agent</p>
          </Col>
          <Col
            lg={3}
            className="col-12 d-flex flex-column justify-content-center align-items-center"
          >
            <img
              src={RackerAgent3}
              alt="RackerAgent3"
              className="w-100 mw-366"
            />
            <h2 className="ff-poppins fw-bold fs-24 pt-4 mb-0">Jonathon Doe</h2>
            <p className="fs-16 ff-poppins fw-normal pt-2">Racker Agent</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Product;
