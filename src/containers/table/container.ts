import { connect } from "react-redux";

import { State } from "../types";
import { handleIsLoadingAction } from "./actions";
import { Table as Component } from "../../components/pages";

const mapStateToDispatch = (state: State) => ({
  isLoading: state.table.isLoading,
});

const mapDispatchToProps = {
  handleIsLoadingAction,
};

const Table = connect(mapStateToDispatch, mapDispatchToProps)(Component);

export { Table };
