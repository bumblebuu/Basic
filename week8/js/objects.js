var person = {
    firstName: 'Gergely',
    lastName: 'Gáll',
    job: 'mentor',
    age: 18,
    //     THE OLD WAY
    // logJobToTheConsol: function () {
    //     console.log(`Job: ${this.job}`);
    // },
    // deleteLastName: function () {
    //     delete this.lastName;
    //     console.log(this.lastName);
    // },
    // setAgeProperty: function () {
    //     this.age = 35;
    //     console.log(this.age);
    // },
    // setFirstName: function () {
    //     this.firstName = 'Gizi';
    //     console.log(this.firstName);
    // }
    logPropertyToTheConsole(prop) {
        console.log(`${prop}: ${this[prop]}`);
    },
    deleteProperty(prop) {
        delete this[prop];
    },
    set setAge(age) {
        this.age = age - 5;
    },
    get getAge() {
        return this.age + 5;
    },
    set setFirstName(firstName) {
        this.firstName = firstName.toUpperCase();
    },
    get getFirstName() {
        return this.transformNameToGetter(this.firstName);
    },
    set setLastName(firstName) {
        this.lastName = lastName.toUpperCase();
    },
    get getLastName() {
        return this.transformNameToGetter(this.lastName);
    },
    transformNameToGetter(name) {
        return `${name[0].toUpperCase()}${name.slice(1).toLowerCase()}`
    }
};



// mindig az lesz a this értéke, amire meghívod, ami a pont előtt van
person.logPropertyToTheConsole();
//person.deleteProperty('lastName');
person.setAge = 23;
person.setFirstName = 'liliána';
console.log('-------------------------------');
console.log(person);

// var job = 'js dev.';
// a globális objektumunk a window, és minden változó és függvény a globálban hozzá fog tartozni -> window.job
// var personLogFunction = person.logJobToTheConsol;
// personLogFunction();

// console.log(`Job: ${person['job']}`); // NO
// console.log(`Job: ${person.job}`); // YEAH : pont operátort használjuk objektumoknál

// delete person.lastName;
// console.log(person);

// person.age = 35;
// console.log(person);

// person.firstName = 'Gizi';
// console.log(person);