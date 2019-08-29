const target = {
  data: 'Welcome, Mr. Doe',
};

const proxySample = new Proxy(target, {
  get(receiver, name) {
    return name in receiver ? receiver[name] : `Hello, ${name}`;
  },
  set(receiver, name, value) {
    receiver[name] = value;
  },
});

console.log(proxySample.data); // Welcome, Mr. Doe
console.log(proxySample.world); // Hello, world
proxySample.text = 'setted value';
console.log(proxySample.text); // setted value
