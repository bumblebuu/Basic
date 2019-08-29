var User = {
    firstName: 'Gergely',
    lastName: 'Gáll',
    job: 'mentor',
    age: 35,
    fullName(a, b) {
        return `Teljes név: ${this.firstName} ${this.lastName}, a: ${a}, b: ${b}`;
    }
};

console.log(User.fullName(10, 20)); // this = User




var firstName = 'Ó';
var lastName = 'YEAH';
var logging = User.fullName;

// var logging = function fullName(a, b) {
//     return `Teljes név: ${this.firstName} ${this.lastName}, a: ${a}, b: ${b}`;
// };

console.log(logging(10, 20)); //  this = window
console.log(logging.call(User, 10, 20)); //  listát vár paraméterekként
console.log(logging.apply(User, [10, 20])); //  tömböt vár paraméterekként

// hf: mit csinál a bind?