import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fillArea, changeChoosenNumber } from '../../actions';
import { isInInitialState } from '../Area/helpers';

class Modificator extends Component {
  constructor() {
    super();
    this.handleModificatorClick = this.handleModificatorClick.bind(this);
  }
  handleModificatorClick(value) {
    const { dispatch, choosenArea, choosenNumber } = this.props;
    if (choosenArea && !isInInitialState(choosenArea)) {
      dispatch(fillArea(choosenArea, value));
      dispatch(changeChoosenNumber(choosenNumber === value ? null : value));
    }
  }
  render() {
    const { value } = this.props;
    return (
      <div className="modificator" onClick={() => this.handleModificatorClick(value)}>
        {value}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  choosenArea: state.choosenArea,
  choosenNumber: state.choosenNumber,
});

export default connect(mapStateToProps)(Modificator);
