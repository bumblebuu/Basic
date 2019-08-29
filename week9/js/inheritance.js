class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  fullname() {
    return `Fullname: ${this.firstName} ${this.lastName}`;
  }
}

class Man extends Person {
  constructor(firstName, lastName, age, rationalism) {
    super(firstName, lastName, age);
    this.rationalismLevel = rationalism;
  }
}

class Woman extends Person {
  constructor(firstName, lastName, age, empathy) {
    super(firstName, lastName, age);
    this.empathyLevel = empathy;
  }

  fullname() {
    return `Hi! I'm ${this.firstName} ${this.lastName}.`;
  }
}

const sampleMan = new Man('John', 'Doe', 33, 'high');
console.log(sampleMan.fullname());
const sampleWoman = new Woman('Jane', 'Doe', 20, 'medium');
console.log(sampleWoman.fullname());
