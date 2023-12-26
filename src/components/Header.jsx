import React from "react";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="bg-warning">
      <Container>
        <div className="d-flex justify-content-between align-items-center pt-3 pb-3">
          <h2 className="ff-poppins fw-bold">logo</h2>
          <ul className="gap-5 d-flex align-items-center m-0">
            <Link className="ff-poppins fw-normal text-black">Product</Link>
            <Link className="ff-poppins fw-normal text-black" to="/">
              Our Agent
            </Link>
            <Link className="ff-poppins fw-normal text-black" to="/Contact">
              Contact
            </Link>
          </ul>
        </div>
      </Container>
    </div>
  );
}

export default Header;
