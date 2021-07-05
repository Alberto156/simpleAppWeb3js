import { Table, Pagination, Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Web3 from "web3";
import React, { useState, useEffect } from "react";

//paginacion
import ReactPaginate from 'react-paginate';

//estilos de css para la paginacion
import '../css/paginacion.css'

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

    for (let i = 0; i < later_block; i++) {/* aqui se forma n siclo infinito  */
      
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
    console.log(Accounttransactions)

  };

  useEffect(() => {
    loadTransactions();
    console.log(Accounttransactions)
  }, []);

  const handlePageClick = (data) => {
    /* let selected = data.selected; */
    /* epa leonel aquie se hacer logia de paginacion */
    /* cuando undas cli en los numero se ejecuta esta fucion */
    /* el parametro data  para octener el numeor que toco de la paginacion es data.slected+1 */
    
    console.log(data.selected+1)

  };

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

      <div className="paginacion"><div className="paginacion_contenido">
        <Col md={12} className="mt-4 d-flex justify-content-center">
          <ReactPaginate
              previousLabel={'<'}
              nextLabel={'>'}
              breakLabel={'...'}
              breakClassName={'break-me'}
              pageCount={20} /* cuanta paginas vas a ponee esto puede ponerlos dinamico pero se nesecita cuantas trasacines hay */
              marginPagesDisplayed={1}
              pageRangeDisplayed={3}
              onPageChange={handlePageClick}/* llama la funcion cuando udes click a un numero de la paginacio */
              containerClassName={'pagination'}
              subContainerClassName={'pages pagination'}
              activeClassName={'active'}
            />
        </Col>
        </div>
      </div>
    </Row>
  );
};

export default Transaction;
