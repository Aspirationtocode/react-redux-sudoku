export const initialField = () => [
  [4, 3, 0, 7, 0, 2, 0, 5, 6],
  [2, 0, 9, 0, 0, 0, 7, 0, 3],
  [0, 5, 0, 9, 0, 4, 0, 2, 0],
  [9, 0, 1, 0, 2, 0, 8, 0, 4],
  [0, 0, 0, 3, 4, 1, 0, 0, 0],
  [3, 0, 4, 0, 6, 0, 2, 0, 5],
  [0, 8, 0, 4, 0, 5, 0, 6, 0],
  [6, 0, 7, 0, 0, 0, 5, 0, 2],
  [5, 9, 0, 2, 0, 6, 0, 7, 1],
];

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
