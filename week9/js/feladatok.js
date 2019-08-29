class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  logFullName() {
    console.log(`${this.firstName} ${this.lastName}`);
  }
  changeProfile() {}
}

var sampleUser = new User('Gergő', 'Kovács');
var sampleUser2 = new User('Béla', 'Kis');

sampleUser.logFullName();
sampleUser2.logFullName();

class Admin extends User {
  constructor(firstName, lastName, age) {
    super(firstName, lastName);
    this.age = age;
  }

  changeEverything() {

  }
}

var sampleAdmin = new Admin('Gizi', 'Kiss', 20);
console.log(sampleAdmin);

// var numberArray = new Array();
// console.log(numberArray);   ennek a konstruktor fgvénye az Array


