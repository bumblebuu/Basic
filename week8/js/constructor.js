function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.logFullName = function () {
        console.log(`${this.firstName} ${this.lastName}`);
    };
}

var kissGizi = new Person('Gizi', 'Kiss');
console.log(kissGizi);
console.log(kissGizi.firstName);
console.log(kissGizi.lastName);
kissGizi.logFullName();

var kocsisGeza = new Person('Géza', 'Kocsis');
console.log(kocsisGeza);