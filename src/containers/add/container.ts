import { connect } from "react-redux";

import { State } from "../types";
import { Add as Component } from "../../components/pages";
import * as selectors from "./selectors";

const mapStateToDispatch = (state: State) => ({
  isLoading: selectors.isLoadingSelector(state),
  firstName: selectors.firstNameSelector(state),
  lastname: selectors.lastNameSelector(state),
  address: selectors.addressSelector(state),
  phNumber: selectors.phNumberSelector(state),
  gpa: selectors.gpaSelector(state),
});

const mapDispatchToProps = {};

const Add = connect(mapStateToDispatch, mapDispatchToProps)(Component);

export { Add };
