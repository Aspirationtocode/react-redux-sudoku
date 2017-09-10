import React, { Component } from "react";
import { connect } from "react-redux";
import { undo, redo, loadFromHistory } from "../../actions";

class HistoryControls extends Component {
	historyUndo() {
		const { dispatch, history, mainField } = this.props;
		dispatch(undo());
		dispatch(loadFromHistory(history.present));
	}
	render() {
		return (
			<div className="history-controls">
				<div
					className="history-controls__element history-controls__element--back"
					onClick={() => {
						this.historyUndo();
					}}>
					<div />
				</div>
				<div className="history-controls__element history-controls__element--forward">
					<div />
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	history: state.history,
	mainField: state.mainField
});

export default connect(mapStateToProps)(HistoryControls);
