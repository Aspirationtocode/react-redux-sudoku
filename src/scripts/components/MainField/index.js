import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Modificator from '../Modificators/Modificator';
import Modificators from '../Modificators/';
import HistoryControls from '../HistoryControls/';
import Pencil from '../Pencil';
import Button from '../Button';
import { generateAreas } from './helpers';
import { generateNewField, continuePlay } from '../../actions';

class MainField extends Component {
  constructor(props) {
    super(props);
    this.generateNewField = this.generateNewField.bind(this);
    this.continuePlay = this.continuePlay.bind(this);
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

const mapStateToProps = state => ({ mainField: state.mainField });

export default connect(mapStateToProps)(MainField);
