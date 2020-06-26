import { connect } from "react-redux";

import { State } from "../types";
import { handleIsLoadingAction } from "./actions";
import { Table as Component } from "../../components/pages";
import * as selectors from "./selectors";

const mapStateToDispatch = (state: State) => ({
  isLoading: selectors.isLoadingSelector(state),
  data: selectors.dataSelector(state),
  headers: selectors.headersSelector(state),
});

const mapDispatchToProps = {
  handleIsLoadingAction,
};

const Table = connect(mapStateToDispatch, mapDispatchToProps)(Component);

export { Table };
