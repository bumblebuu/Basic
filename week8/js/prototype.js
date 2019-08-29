function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
};


Person.prototype.logFullName = function () {
    console.log(`${this.firstName} ${this.lastName}`);
};

var kissGizi = new Person('Gizi', 'Kiss');
console.log(kissGizi);
console.log(kissGizi.firstName);
console.log(kissGizi.lastName);
kissGizi.logFullName();

var kocsisGeza = new Person('Géza', 'Kocsis');
console.log(kocsisGeza);

console.log('---------FOR IN----------');
for (var key in kissGizi) {
    if (kissGizi.hasOwnProperty(key)) {
        console.log(key);
    };
};