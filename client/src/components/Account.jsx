import { Button, Card, Form, Image, Col, Row } from "react-bootstrap";
import AccountImg from "../assets/Account.png";
import { Link } from "react-router-dom";

const Account = () => {
  return (
    <Row className="p-4" noGutters>
      <Col md={6}>
        <Image src={AccountImg} fluid />
      </Col>
      <Col md={6} className="d-inline-flex align-items-center">
        <Row>
          <Col md={12}>
            <h3>Address</h3>
            <p>0x89205A3A3b2A69De6Dbf7f01ED13B2108B2c43e7</p>
          </Col>

          <Col md={12}>
            <h3>Gas</h3>
            <ul>
              <li>Eth : 0</li>
              <li>CatCoin : 0</li>
              <li>BabyCoin : 0</li>
            </ul>
          </Col>

          <Col md={12} className="mt-4">
            <Link to="/home">
              <Button variant="outline-primary" size="lg">
                Home
              </Button>
            </Link>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Account;
