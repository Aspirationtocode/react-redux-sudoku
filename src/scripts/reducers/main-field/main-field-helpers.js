const fillArray = (length, item) => new Array(length).fill(item);

export const initialState = () => {
  const emptyArray = fillArray(9, false);
  return {
    data: [
      [4, 3, 0, 7, 0, 2, 0, 5, 6],
      [2, 0, 9, 0, 0, 0, 7, 0, 3],
      [0, 5, 0, 9, 0, 4, 0, 2, 0],
      [9, 0, 1, 0, 2, 0, 8, 0, 4],
      [0, 0, 0, 3, 4, 1, 0, 0, 0],
      [3, 0, 4, 0, 6, 0, 2, 0, 5],
      [0, 8, 0, 4, 0, 5, 0, 6, 0],
      [6, 0, 7, 0, 0, 0, 5, 0, 2],
      [5, 9, 0, 2, 0, 6, 0, 7, 1],
    ],
    // data: [
    //   [4, 3, 8, 7, 1, 2, 9, 5, 6],
    //   [2, 1, 9, 6, 5, 8, 7, 4, 3],
    //   [7, 5, 6, 9, 3, 4, 1, 2, 8],
    //   [9, 6, 1, 5, 2, 7, 8, 3, 4],
    //   [8, 2, 5, 3, 4, 1, 6, 9, 7],
    //   [3, 7, 4, 8, 6, 0, 2, 1, 5],
    //   [1, 8, 2, 4, 7, 5, 3, 6, 9],
    //   [6, 4, 7, 1, 9, 3, 5, 8, 2],
    //   [5, 9, 3, 2, 8, 6, 4, 7, 1],
    // ],
    completedHorizontalLines: emptyArray,
    completedVerticalLines: emptyArray,
    completedSquares: emptyArray,
    completed: null,
  };
};

export const fillMainFieldById = (mainField, id, value) => {
  const [index1, index2] = id.split('/');
  const newMainField = mainField.slice();
  const oldValue = newMainField[index1][index2];
  if (!oldValue || oldValue !== value) {
    newMainField[index1][index2] = value;
  } else {
    newMainField[index1][index2] = 0;
  }
  return newMainField;
};

const transpose = arr => arr[0].map((x, i) => arr.map(x => x[i]));

const isLineCompleted = line =>
  line.slice().sort((a, b) => a > b ? 1 : -1).every((area, index) => area === index + 1);

export const checkMainField = (field) => {
  const newCompletedHorizontalLines = [],
    newCompletedVerticalLines = [],
    newCompletedSquares = [];

  field.forEach((line, lineIndex) => {
    newCompletedHorizontalLines[lineIndex] = isLineCompleted(line);
  });

  transpose(field).forEach((line, lineIndex) => {
    newCompletedVerticalLines[lineIndex] = isLineCompleted(line);
  });

  return newCompletedHorizontalLines.every(area => area === true) &&
    newCompletedVerticalLines.every(area => area === true);
};
