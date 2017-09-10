import React, { Component } from "react";
import { connect } from "react-redux";
import Modificator from "../Modificators/Modificator";
import Modificators from "../Modificators/";
import HistoryControls from "../HistoryControls/";
import Pencil from "../Pencil";
import Button from "../Button";
import { generateAreas } from "./helpers";
import { isInInitialState } from "../Area/helpers";
import {
	generateNewField,
	continuePlay,
	fillArea,
	changeChoosenNumber,
	changeChoosenArea
} from "../../actions";

class MainField extends Component {
	constructor(props) {
		super(props);
		this.generateNewField = this.generateNewField.bind(this);
		this.continuePlay = this.continuePlay.bind(this);
		this.handleKeyPress = this.handleKeyPress.bind(this);
	}
	handleKeyPress(e) {
		const { key } = e;
		const { choosenArea, mainField, dispatch } = this.props;
		if (
			choosenArea &&
			!isInInitialState(choosenArea) &&
			mainField.completed === null &&
			Number.isInteger(+key) &&
			+key > 0
		) {
			dispatch(fillArea(choosenArea, +key));
			dispatch(changeChoosenNumber(+key));
		} else if (key === "Enter") {
			if (mainField.completed === false) {
				this.continuePlay();
			} else {
				this.generateNewField();
			}
		} else if (choosenArea) {
			const directions = {
				ArrowUp: {
					row: -1,
					col: 0
				},
				ArrowRight: {
					row: 0,
					col: 1
				},
				ArrowDown: {
					row: 1,
					col: 0
				},
				ArrowLeft: {
					row: 0,
					col: -1
				}
			};
			const [newRowIndex, newColIndex] = [
				+choosenArea.split("/")[0] + directions[key].row,
				+choosenArea.split("/")[1] + directions[key].col
			];

			const checkMainFieldIndex = index => index >= 0 && index <= 8;
			const newAreaId = `${newRowIndex}/${newColIndex}`;
			if (
				checkMainFieldIndex(newRowIndex) &&
				checkMainFieldIndex(newColIndex) &&
				mainField.completed === null
			) {
				dispatch(changeChoosenArea(newAreaId));
				const choosenNumber = mainField.data[newRowIndex][newColIndex];
				dispatch(
					changeChoosenNumber(choosenNumber !== 0 ? choosenNumber : null)
				);
			}
		}
	}
	generateNewField() {
		const { props } = this;
		const { dispatch } = props;
		dispatch(generateNewField());
	}
	continuePlay() {
		const { props } = this;
		const { dispatch } = props;
		dispatch(continuePlay());
	}
	componentWillMount() {
		window.addEventListener("keydown", this.handleKeyPress);
	}
	componentWillUnmount() {
		window.removeEventListener("keydown", this.handleKeyPress);
	}
	render() {
		const { mainField } = this.props;
		const { completed } = mainField;
		return (
			<div className="main-field-wrapper">
				<div className="main-field">
					{completed &&
						<div className="main-field__completed">
							<div className="main-field__status">Завершено успешно!</div>
							<Button
								className="main-field__button"
								text="Генерировать еще"
								handleClick={this.generateNewField}
							/>
						</div>}
					{completed === false &&
						<div className="main-field__completed">
							<div className="main-field__status">Неверно!</div>
							<Button
								className="main-field__button"
								text="Исправить ошибки"
								handleClick={this.continuePlay}
							/>
						</div>}
					{generateAreas(mainField)}
				</div>
				<Modificators />
				<div className="controls">
					<HistoryControls />
					<Pencil />
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	mainField: state.mainField,
	choosenArea: state.choosenArea,
	history: state.history
});

export default connect(mapStateToProps)(MainField);
