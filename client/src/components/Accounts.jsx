import { Table, Pagination, Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import React, { useState } from "react";

const Accounts = () => {
  const [transactions, setTransactions] = useState([
    {
      address: "addressOne",
      eth: 1,
      catCoin: 1,
      babyCoin: 4,
    },
    {
      address: "addressTwo",
      eth: 4,
      catCoin: 2,
      babyCoin: 4,
    },
  ]);

  const [items, setItems] = useState([]);

  let branyer = [1, 2, 3, 4];

  return (
    <Row>
      <Col md={12} className="p-5">
        <div className="d-flex justify-content-between">
          <h1>Accounts</h1>
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
              <th>Address</th>
              <th>Eth</th>
              <th>CatCoin</th>
              <th>BabyCoin</th>
            </tr>
          </thead>
          <tbody>
            {transactions.length == 0 ? (
              <tr></tr>
            ) : (
              transactions.map((item, _i) => {
                return (
                  <tr>
                    <td>{_i}</td>
                    <td>{item.address}</td>
                    <td>{item.eth}</td>
                    <td>{item.catCoin}</td>
                    <td>{item.babyCoin}</td>
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

          {transactions.map((e, _i) => {
            return <Pagination.Item>{_i + 1}</Pagination.Item>;
          })}

          <Pagination.Next />
        </Pagination>
      </Col>
    </Row>
  );
};

export default Accounts;
