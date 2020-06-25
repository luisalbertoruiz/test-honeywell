import React from "react";
import { Provider } from "react-redux";
import { Switch, Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";

import { initializeStore } from "../../utils/initialize-store";
import { history } from "../../utils/history";
import { Nav } from "../navigation";
import { Add, Detail, Table } from "../pages";

const Root = () => (
  <Provider store={initializeStore()}>
    <ConnectedRouter history={history}>
      <Nav />
      <Switch>
        <Route path="/" exact component={Table} />
        <Route path="/new" exact component={Add} />
        <Route path="/detail" exact component={Detail} />
      </Switch>
    </ConnectedRouter>
  </Provider>
);

export { Root };
