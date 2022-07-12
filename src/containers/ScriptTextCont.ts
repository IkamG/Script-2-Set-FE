import { connect } from "react-redux";
import { AnyAction, bindActionCreators, Dispatch } from "redux";
import * as ElementActions from "../actions";
import ScriptText from "../components/ScriptText";
import { getVisibleElements } from "../selectors";

const mapStateToProps = (state: { visibilityFilter: any; elements: any }) => ({
	elements: state.elements,
});

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => ({
	actions: bindActionCreators(ElementActions, dispatch),
});
const ScriptTextCont = connect(mapStateToProps, mapDispatchToProps)(ScriptText);

export default ScriptTextCont