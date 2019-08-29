{
  function summarize(a, b) {
    return a + b;
  }
  console.log(summarize(1, 2)); {
    function summarize(a, b) {
      return a * b;
    }
    console.log(summarize(2, 3));
  }
  console.log(summarize(2, 3));
}

{
  function summarize2(c, d) {
    return c + d;
  }
  console.log(summarize2(1, 2)); {
    function summarize2(c, d) {
      return c * d;
    }
    console.log(summarize2(2, 3));
  }
  console.log(summarize2(2, 3));
}

console.log(summarize2(1, 2));

(function () {
  function summarize3(e, f) {
    return e + f;
  }
  console.log(summarize3(1, 2)); {
    function summarize3(e, f) {
      return e * f;
    }
    console.log(summarize3(2, 3));
  }
  console.log(summarize3(2, 3)); //  itt 6 , strict-ben 5
}());

const numbers = [10, 20, 30, 40, 50];

for (const i of numbers) {
  console.log(i); // 10, 20, 30, 40, 50
}

const iterable = new Set([1, 1, 2, 2, 3, 3]);

for (const value of iterable) {
  console.log(value);
}

// MAP

const myMap = new Map();
myMap.set('foo', 123);
myMap.set('boo', 456);
myMap.set('moo', 789);

for (const [key, value] of myMap) {
  console.log(key, value);
}

for (const key of myMap.keys()) {
  console.log(key);
}

for (const value of myMap.values()) {
  console.log(value);
}

// OBJEKTUM

const myObj = {
  a: 10,
  b: 20,
  c: 30,
  calc() {},
};

for (const i of Object.keys(myObj)) {
  console.log(i); // a, b, c, calc
}


//  STRING

const iterableString = 'boo';

for (const value of iterableString) {
  console.log(value); // b, o, o
}

