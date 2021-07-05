import { Button, Card, Form, Image, Col, Row } from "react-bootstrap";
import AccountImg from "../assets/Account.png";
import { Link } from "react-router-dom";
import Web3 from "web3";
import React, { useState , useEffect } from "react";
//Contract Config
import ConfigBabyCoin from '../contract/BabyCoin'
import ConfigCatCoin from '../contract/CatCoin'


const Account = () => {
  const [AccountAdress, setAccountAdress] = useState("");
  const [BalanceAccountEth, setBalanceAccountEth] = useState(0);
  const [BalanceAccountBaby, setBalanceAccountBaby] = useState(0);
  const [BalanceAccountCat, setBalanceAccountCat] = useState(0);


  //hacer que esta funcion inicie al iniciar el componente
  const loadAccount = async () => {
    let web3 = new Web3(window.ethereum);

    const networkId = await web3.eth.net.getId();

    let BabyCoinJSONContract = new web3.eth.Contract(ConfigBabyCoin[0], ConfigBabyCoin[1][networkId].address);
    let CatCoinJSONContract = new web3.eth.Contract(ConfigCatCoin[0], ConfigCatCoin[1][networkId].address);
    
    let address = await web3.eth.getAccounts()

    const balanceBaby = await BabyCoinJSONContract.methods.balanceOf(address[0]).call();
    const balanceCat = await CatCoinJSONContract.methods.balanceOf(address[0]).call();
   

   
    const balanceETH = await web3.eth.getBalance(address[0]);
    setAccountAdress(address)
    setBalanceAccountEth(balanceETH/1000000000000000000)
    setBalanceAccountBaby(balanceBaby)
    setBalanceAccountCat(balanceCat)
  }

  useEffect(() => {
    loadAccount()
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
          </Col>

          <Col md={12}>
            <h3>Gas</h3>
            <ul>
              <li>Eth : {BalanceAccountEth}</li>
              <li>Ct(catCoin): {BalanceAccountCat}</li>
              <li>Baby(babyCoin) : {BalanceAccountBaby}</li>
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
