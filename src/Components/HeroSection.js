import React from "react";
import "../index.css";
import { HashLink as Link } from "react-router-hash-link";
import { Button, Container } from "react-bootstrap";

// import buildings from "src/img/buildings.jpg";
function HeroSection() {
  const bitcoinPrice = (
    <div className="testprop text-light fs-2">THE CURRENT BITCOIN PRICE</div>
  );

  return (
    <React.Fragment>
      <div className="bg mt-5" id="hero">
        <Container className="fluid py-5">
          <div className="mt-5 text-light fst-italic fs-4 text">
            Bitcoin is a swarm of cyber hornets serving the goddess of wisdom ,
            feeding on the fire of truth , exponentially growing ever smarter,
            faster, and stronger behind a wall of encrypted energy.
          </div>
          <div className="mt-1 mb-5 text-light fs-5 text">Michael Saylor</div>
          <Link to="#buybtc">
            <Button className="btn-lg btn-light me-5">Change my life!</Button>
          </Link>
          <Link to="#whatisbtc">
            <Button
              variant="btn-warning"
              className="btn btn-lg btn-outline-warning"
            >
              Tell me more
            </Button>
          </Link>
        </Container>
      </div>
    </React.Fragment>
  );
}
export default HeroSection;
