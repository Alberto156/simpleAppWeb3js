import { Button, Card } from "react-bootstrap";
import logo from "../assets/Ethereum-Logo.png";
import Web3 from "web3";

const Main = () => {
  const connectProviderWeb3 = async (e) => {
    e.preventDefault();
    if (window.ethereum) {
      try {
        let web3 = new Web3(window.ethereum);
        const account = await window.ethereum.enable();
      } catch (err) {
        alert("Has rechazado la conexión");
      }
    } else {
      alert("Necesitas un proveedor de web3");
    }
  };

  return (
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
          <form onSubmit={connectProviderWeb3}>
            <Button variant="outline-dark" size="lg" type="submit">
              Connect
            </Button>
          </form>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Main;
