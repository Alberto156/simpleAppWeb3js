import { Button, Card, Form, Image, Col, Row } from "react-bootstrap";
import TransacionLogo from "../assets/Transaction.png";
import Web3 from "web3";
import { Link } from "react-router-dom";

//no me gusta esto redundancia en codigo
import ConfigBabyCoin from '../contract/BabyCoin'
import ConfigCatCoin from '../contract/CatCoin'

const CreateTransaction = () => {
  const onTranferGas = async (e) => {
    e.preventDefault();
    let web3 = new Web3(window.ethereum);
    const networkId = await web3.eth.net.getId();
    let BabyContract = await new web3.eth.Contract(ConfigBabyCoin[0], ConfigBabyCoin[1][networkId].address);
    let CatContract = await new web3.eth.Contract(ConfigCatCoin[0], ConfigCatCoin[1][networkId].address);
    
    let account = await web3.eth.getAccounts()

    if (Number(e.target[2].value <= 0)) {
      alert('Valor no permitido');
      return;
    }

    if (!web3.utils.isAddress(e.target[0].value)) {
      alert('Dirección inválida');
      return;
    }


    if(e.target[1].value =="Etherium"){
      web3.eth.sendTransaction({
        from : account[0],
        to: e.target[0].value,
        value: e.target[2].value * 1000000000000000000,
      });

    }else if (e.target[1].value == "BabyCoin"){
      try {
         await BabyContract.methods.transfer(e.target[0].value, e.target[2].value).send({
        from : account[0]
      });

      } catch (error) {
        alert('Error bruja');
      }
     
    }else{
      await CatContract.methods.transfer(e.target[0].value, e.target[2].value).send({
        from : account[0]
      });
    }
    
  };






  return (
    
    <Row className="p-4" noGutters>{console.log("holas")}
      <Col md={6}>
        <Image src={TransacionLogo} fluid />
      </Col>
      <Col md={6} className="d-inline-flex align-items-center">
        <Form style={{ width: "90%" }} onSubmit={onTranferGas}>
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
