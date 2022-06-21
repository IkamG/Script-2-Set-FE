import { connect } from "react-redux";
import { AnyAction, bindActionCreators, Dispatch } from "redux";
import * as ElementActions from "../actions";
import ElementsList from "../components/ElementsList";
import { getVisibleElements } from "../selectors";

const mapStateToProps = (state: { visibilityFilter: any; elements: any }) => ({
	filteredElements: getVisibleElements(state),
});
const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => ({
	actions: bindActionCreators(ElementActions, dispatch),
});
const VisibleElements = connect(mapStateToProps, mapDispatchToProps)(ElementsList);

export default VisibleElements
