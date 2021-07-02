import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//local Components
import Main from "./components/Main";
import Home from "./components/Home";
import Account from "./components/Account";
import CreateTransaction from "./components/CreateTransaction";
import Accounts from './components/Accounts'
import HistoryTransactions from "./components/Transactions";
import NotFound from "./components/NotFound";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/home">
          {" "}
          <Home />
        </Route>

        <Route exact path="/my-account" component={Account}></Route>
        <Route
          exact
          path="/created-transaction"
          component={CreateTransaction}
        ></Route>
        <Route
          exact
          path="/history-transaction"
          component={HistoryTransactions}
        ></Route>
        <Route
          exact
          path="/convert-coin"
          component={Accounts}
        ></Route>

        <Route path="*" exact={true} component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
