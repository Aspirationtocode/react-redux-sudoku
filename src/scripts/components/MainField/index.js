import React, { Component } from 'react';
import { connect } from 'react-redux';

import Modificator from '../Modificators/Modificator';
import Modificators from '../Modificators/';
import HistoryControls from '../HistoryControls/';
import Pencil from '../Pencil';
import { generateAreas } from './helpers';

class MainField extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { mainField } = this.props;
    return (
      <div className="main-field-wrapper">
        <div className="main-field">
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
