const person = {
  firstName,
  lastName,
};

const myObj = {
  create() {},
  read() {},
  update() {},
  delete() {},
};

const key = 'key';
const value = 'value';

const dinamicObj = {
  [key]: value,
  [`dinamic${key}`]: value,
};

const keys = ['key1', 'key2', 'key3'];
const values = ['value1', 'value2', 'value3'];

const dinamicObjFromArrays = {
  [keys.shift()]: values.shift(),
  [keys.shift()]: values.shift(),
  [keys.shift()]: values.shift(),
};
