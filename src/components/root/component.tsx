import React from "react";
import { Provider } from "react-redux";
import { Switch, Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";

import { initializeStore } from "../../utils/initialize-store";
import history from "../../utils/history";

const Root = () => (
  <Provider store={initializeStore()}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/" exact component={() => <h1>Hello World!</h1>} />
      </Switch>
    </ConnectedRouter>
  </Provider>
);

export { Root };
