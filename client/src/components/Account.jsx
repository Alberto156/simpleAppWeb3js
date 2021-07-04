import { Button, Card, Form, Image, Col, Row } from "react-bootstrap";
import AccountImg from "../assets/Account.png";
import { Link } from "react-router-dom";
import Web3 from "web3";
import React, { useState, useEffect } from "react";

const Account = () => {
  const [AccountAdress, setAccountAdress] = useState("");
  const [BalanceAccountEth, setBalanceAccountEth] = useState(0);

  //hacer que esta funcion inicie al iniciar el componente
  const loadAccount = async () => {
    let web3 = new Web3(window.ethereum);
    let address = await web3.eth.getAccounts()
    const balanceETH = await web3.eth.getBalance(address[0]);
    setAccountAdress(address)
    setBalanceAccountEth(balanceETH/1000000000000000000)
    console.log(BalanceAccountEth)
  }

  useEffect(() => {
    loadAccount()
    console.log("hola")
  }, [])

  return (
    <Row className="p-4" noGutters>
      <Col md={6}>
        <Image src={AccountImg} fluid />
      </Col>
      <Col md={6} className="d-inline-flex align-items-center">
        <Row>
          <Col md={12}>
            <h3>Adress</h3>
            <p>{AccountAdress}</p>
            <Button onClick={loadAccount} variant="outline-primary" size="lg">
               tocame
              </Button>
          </Col>

          <Col md={12}>
            <h3>Gas</h3>
            <ul>
              <li>Eth : {BalanceAccountEth}</li>
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
