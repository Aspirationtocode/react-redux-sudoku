import React from 'react';
import Area from '../Area/';

const coloured = (lineIndex) => {
  if ([0, 1, 2].includes(lineIndex) || [6, 7, 8].includes(lineIndex)) {
    return [3, 4, 5];
  }
  return [0, 1, 2, 6, 7, 8];
};

export const generateAreas = (mainField) => {
  const areas = [];
  let currentColouredAreas;
  const { completedHorizontalLines, completedVerticalLines } = mainField;
  mainField.data.forEach((line, lineIndex) => {
    currentColouredAreas = coloured(lineIndex);
    line.forEach((area, areaIndex) => {
      const areaId = `${lineIndex}/${areaIndex}`;
      areas.push(
        <Area
          key={areaId}
          areaId={areaId}
          area={area}
          coloured={currentColouredAreas.includes(areaIndex)}
        />,
      );
    });
  });
  return areas;
};
