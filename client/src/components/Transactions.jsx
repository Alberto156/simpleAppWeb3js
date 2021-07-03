import { Table, Pagination, Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import React, { useState } from "react";

const Transaction = () => {
  const [transactions, setTransactions] = useState([
    {
      txnHash: "example",
      block: 1,
      From: "carlos",
      To: "juan",
      value : 0
    },
    {
      txnHash: "example1",
      block: 1,
      From: "carlos1",
      To: "juan1",
      value : 10
    },
  ]);

  const [items, setItems] = useState([]);

  const branyer = [1, 2, 3, 4];

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
            {transactions.length == 0 ? (
              <tr></tr>
            ) : (
              transactions.map((item , _i) => {
                return (
                  <tr>
                    <td>{_i}</td>
                    <td>{item.txnHash}</td>
                    <td>{item.block}</td>
                    <td>{item.From}</td>
                    <td>{item.To}</td>
                    <td>{item.value}</td>
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

          {transactions.map((e , _i) => {
            return <Pagination.Item>{_i + 1}</Pagination.Item>;
          })}

          <Pagination.Next />
        </Pagination>
      </Col>
    </Row>
  );
};

export default Transaction;
