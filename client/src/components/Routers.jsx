import React from 'react';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//local Components
import Main from "./Main";
import Home from "./Home";
import Account from "./Account";
import CreateTransaction from "./CreateTransaction";
import Accounts from './Accounts'
import HistoryTransactions from "./Transactions";
import NotFound from "./NotFound";

const Routers = () => {
    return ( 
        <Router>
            <Switch>
                <Route 
                exact path="/" 
                component={Main}/>
                
                <Route 
                exact path="/home"
                component={Home}/>

                <Route 
                exact path="/my-account" 
                component={Account}/>
                
                <Route
                exact path="/created-transaction"
                component={CreateTransaction}/>
                
                <Route
                exact path="/history-transaction"
                component={HistoryTransactions}/>
                
                <Route
                exact path="/convert-coin"
                component={Accounts}/>

                <Route exact={true} 
                path="*"  
                component={NotFound} />
                
            </Switch>
        </Router> );
}
 
export default Routers;