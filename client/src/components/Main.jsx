import { Button, Card } from "react-bootstrap";
import logo from "../assets/Ethereum-Logo.png";

const Main = () => (
    <Card
      className="mt-5 border border-5 border-dark"
      style={{ width: "60vw", margin: "auto" }}
    >
      <Card.Img variant="top" src={logo} />
      <Card.Body className="row">
        <Card.Text className="mt-2 col-12 text-center">
          Simple application to perform transactions and queries over the
          etherium network using web3 js
        </Card.Text>
        <div className="mt-2 col text-center">
          <form>
            <Button variant="outline-dark" size="lg" type="submit">
              Access
            </Button>
          </form>
        </div>
      </Card.Body>
    </Card>
);

export default Main;
