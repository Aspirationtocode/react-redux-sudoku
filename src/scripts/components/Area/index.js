import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeChoosenArea, changeChoosenNumber } from '../../actions';
import { isInInitialState } from './helpers';

class Area extends Component {
  constructor(props) {
    super(props);
    this.changeChoosenArea = this.changeChoosenArea.bind(this);
  }
  changeChoosenArea(areaId, number) {
    const { dispatch } = this.props;
    dispatch(changeChoosenArea(areaId));
    if (number) {
      dispatch(changeChoosenNumber(number));
    }
  }

  render() {
    const {
      areaId,
      area,
      coloured,
      choosenArea,
      choosenNumber,
      dispatch,
      mainField,
      animated,
    } = this.props;
    const { completedSquares, completedVerticalLines, completedHorizontalLines } = mainField;

    let classes = ['area'];
    if (coloured) {
      classes.push('area--coloured');
    }

    if (isInInitialState(areaId) && choosenArea === areaId) {
      classes.push('area--choosen-initial');
    } else if (choosenArea === areaId) {
      classes.push('area--choosen');
    }

    if (area == choosenNumber && areaId !== choosenArea) {
      classes.push('area--choosen-number');
    }

    if (!isInInitialState(areaId)) {
      classes.push('area--not-initial');
    }
    return (
      <div
        className={classes.join(' ')}
        key={areaId}
        onClick={() => {
          this.changeChoosenArea(areaId, area);
        }}
      >
        {area || null}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  choosenArea: state.choosenArea,
  choosenNumber: state.choosenNumber,
  mainField: state.mainField,
});

export default connect(mapStateToProps)(Area);
