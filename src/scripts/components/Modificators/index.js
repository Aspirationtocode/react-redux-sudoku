import React, { Component } from 'react';
import Modificator from './Modificator';

const modificatorsData = new Array(9).fill(1);

class Modificators extends Component {
  render() {
    return (
      <div className="modificators">
        {modificatorsData.map((modificator, index) => {
          const value = index + 1;
          return <Modificator key={value} value={value} />;
        })}
      </div>
    );
  }
}

export default Modificators;
