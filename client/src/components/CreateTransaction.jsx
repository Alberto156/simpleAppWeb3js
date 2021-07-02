import { Button, Card, Form, Image, Col, Row } from "react-bootstrap";
import TransacionLogo from "../assets/Transaction.png";

import { Link } from "react-router-dom";

const CreateTransaction = () => {
  return (
    <Row className="p-4" noGutters>
      <Col md={6}>
        <Image src={TransacionLogo} fluid />
      </Col>
      <Col md={6} className="d-inline-flex align-items-center">
        <Form style={{ width: "90%" }}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Address Destiny</Form.Label>
            <Form.Control
              type="text"
              placeholder="0x89205A3A3b2A69De6Dbf7f01ED13B2108B2c43e7"
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Select coin to Tranfer</Form.Label>
            <Form.Control controlId="formBasicPassword" as="select" size="lg">
              <option>Etherium</option>
              <option>BabyCoin</option>
              <option>CatCoin</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Cant</Form.Label>
            <Form.Control type="text" placeholder="1" />
          </Form.Group>

          <div className="row">
            <Link className="col-4 offset-1" to="/home">
              <Button variant="outline-primary" size="lg">
                Return Home
              </Button>
            </Link>

            <Button
              className="col-4 offset-1"
              variant="outline-success"
              size="lg"
              type="submit"
            >
              Submit
            </Button>
          </div>
        </Form>
      </Col>
    </Row>
  );
};

export default CreateTransaction;
