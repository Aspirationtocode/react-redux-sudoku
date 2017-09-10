import React, { Component } from "react";
import { connect } from "react-redux";
import { fillArea, changeChoosenNumber, addToHistory } from "../../actions";
import { isInInitialState } from "../Area/helpers";

class Modificator extends Component {
	constructor() {
		super();
		this.handleModificatorClick = this.handleModificatorClick.bind(this);
	}
	handleModificatorClick(value) {
		const {
			dispatch,
			choosenArea,
			choosenNumber,
			mainField,
			history
		} = this.props;
		if (
			choosenArea &&
			!isInInitialState(choosenArea) &&
			mainField.completed === null
		) {
			dispatch(addToHistory(mainField));
			dispatch(fillArea(choosenArea, value));
			dispatch(changeChoosenNumber(value));
		}
	}
	render() {
		const { value } = this.props;
		return (
			<div
				className="modificator"
				onClick={() => this.handleModificatorClick(value)}>
				{value}
			</div>
		);
	}
}

const mapStateToProps = state => ({
	choosenArea: state.choosenArea,
	choosenNumber: state.choosenNumber,
	mainField: state.mainField,
	history: state.history
});

export default connect(mapStateToProps)(Modificator);
