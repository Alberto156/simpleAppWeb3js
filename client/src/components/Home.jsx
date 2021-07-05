import { Button, Card, Row, Col, Container } from "react-bootstrap";
import TransacionLogo from "../assets/Transaction.png";
import HistoryTransacion from "../assets/HistoryTransacion.png";
import ConvertCoin from "../assets/ConvertCoin.png"
import Account from "../assets/Account.png";

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Container
      fluid
      className="px-4 d-flex align-items-center"
      style={{
        height: "100vh",
      }}
    >
      <Row className="justify-content-center my-2">
        <Col md={3}>
          <Card className="mx-3">
            <Card.Img variant="top" src={Account} />
            <Card.Body className="row">
              <div className="mt-2 col text-center">
                <Link to="/my-account">
                  <Button variant="outline-secondary" size="lg" type="submit">
                    MyAccount
                  </Button>
                </Link>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3}>
          <Card className="mx-3">
            <Card.Img variant="top" src={TransacionLogo} />
            <Card.Body className="row">
              <div className="mt-2 col text-center">
                <Link to="/created-transaction">
                  <Button variant="outline-secondary" size="lg" type="submit">
                    Create Transaction
                  </Button>
                </Link>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3}>
          <Card className="mx-3">
            <Card.Img variant="top" src={HistoryTransacion} />
            <Card.Body className="row">
              <div className="mt-2 col text-center">
                <Link to="/history-transaction">
                  <Button variant="outline-secondary" size="lg" type="submit">
                    History Transactions
                  </Button>
                </Link>
              </div>
            </Card.Body>
          </Card>
        </Col>

        {/* <Col md={3}>
          <Card className="mx-3">
            <Card.Img variant="top" src={ConvertCoin} />
            <Card.Body className="row">
              <div className="mt-2 col text-center">
                <Link to="/convert-coin">
                  <Button variant="outline-secondary" size="lg" type="submit">
                    Accounts
                  </Button>
                </Link>
              </div>
            </Card.Body>
          </Card>
        </Col> */}
      </Row>
    </Container>
  );
};

export default Home;
