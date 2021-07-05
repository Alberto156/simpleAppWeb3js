import { Table, Pagination, Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Web3 from "web3";
import React, { useState, useEffect } from "react";

const Transaction = () => {
  const [Accounttransactions, setAccounttransactions] = useState([]);
 

  //hacer que esta funcion inicie al iniciar el componente
  const loadTransactions = async () => {
    let web3 = new Web3(window.ethereum);

    let account = await web3.eth.getAccounts();

    //get latest block
    let block = await web3.eth.getBlock("latest");
    let later_block = block.number;
    let block_temp = {};
    let transactions_temp = []

    for (let i = 0; i < later_block; i++) {
      block_temp = await web3.eth.getBlock(i);
      for (let txHash of block_temp.transactions) {
        let tx = await web3.eth.getTransaction(txHash);
        if (account[0] == tx.from) {
          transactions_temp.push({
            "from" : tx.from.toLowerCase(),
            "TxtHash" : tx.hash,
            "blockNumber" : tx.blockNumber,
            "to" : tx.to,
            "value" : tx.value
          })
        }
      }
      block_temp = {};
    }

    setAccounttransactions(transactions_temp)
    
  };

  useEffect(() => {
    loadTransactions();
  }, []);

  return (
    <Row>
      <Col md={12} className="p-5">
        <div className="d-flex justify-content-between">
          <h1>History Transactions</h1>
          <Link to="/home">
            <Button variant="outline-primary" size="lg">
              Return Home
            </Button>
          </Link>
        </div>
      </Col>

      <Col md={12} className="p-5">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Txn Hash</th>
              <th>Block</th>
              <th>From</th>
              <th>To</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            {Accounttransactions.length == 0 ? (
              <tr></tr>
            ) : (
              Accounttransactions.map((item, _i) => {
                return (
                  <tr>
                    <td>{_i}</td>
                    <td>{item.TxtHash}</td>
                    <td>{item.blockNumber}</td>
                    <td>{item.from}</td>
                    <td>{item.to}</td>
                    <td>{item.value > 100000000000000000 ? item.value /100000000000000000 : item.value}</td>
                  </tr>
                );
              })
            )}
          </tbody>
        </Table>
      </Col>

      <Col md={12} className="mt-4 d-flex justify-content-center">
        <Pagination>
          <Pagination.Prev />

          {Accounttransactions.map((e, _i) => {
            return <Pagination.Item>{_i + 1}</Pagination.Item>;
          })}

          <Pagination.Next />
        </Pagination>
      </Col>
    </Row>
  );
};

export default Transaction;
