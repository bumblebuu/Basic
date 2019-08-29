// OSZTÁLY DEKLARÁCIO

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

const me = new Person('John', 'Doe', 31);
console.log(me);
console.log(me.fullname());


//   OSZTÁLY KIFEJEZÉS

const Man = class Men {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  fullname() {
    return `Fullname: ${this.firstName} ${this.lastName}`;
  }
};

class Women {
  constructor(firstName, lastName, age) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._age = age;
  }

  get firstName() {
    return this._firstName;
  }

  set firstName(firstName) {
    this._firstName = firstName;
  }
}

const woman = new Women('Jane', 'Doe', 31);
console.log(woman.firstName);
woman.firstName = 'Janet';
console.log(woman.firstName);

class Female {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get getFirstName() {
    return this.firstName;
  }

  set setFirstName(firstName) {
    this.firstName = firstName;
  }
}

const chick = new Female('Jane', 'Doe', 31);
console.log(chick.firstName);
chick.firstName = 'Janet';
console.log(chick.firstName);
