import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
// import { HashLink as Link } from "react-router-hash-link";

function BuyBtc(props) {
  let [form, setForm, calc] = useState("");
  let transaction = null;
  const handleSubmit = (e) => {
    e.preventDefault();
    transaction = form;
    calc = form;
    console.log(transaction);
  };

  let btcForm = (
    <React.Fragment>
      <Form
        onSubmit={handleSubmit}
        className="bg-light rounded
      "
      >
        <Form.Group className="mb-3 " controlId="btcForm">
          <Form.Label className="text-dark">
            {props.btcPrice}
            <h2>Buy Bitcoin</h2>
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="USD"
            value={form}
            onChange={(e) => setForm(e.target.value)}
          />

          <div className="text-dark"> BTC</div>
        </Form.Group>

        <Button type="submit">Submit</Button>
      </Form>
      <div>Total BTC:{form}</div>
    </React.Fragment>
  );

  return (
    <section id="buybtc">
      <div className="bg-dark text-light">
        <Container fluid="sm w-50 bg-dark">{btcForm}</Container>
      </div>
    </section>
  );
}

export default BuyBtc;

// btcPrice / 100 000 000 * form
