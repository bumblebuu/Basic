var user = {
    firstName: 'Gergely',
    lastName: 'Gáll',
    job: 'mentor',
};

// lekérdezés
console.log(user.firstName);

// módosítás
user.firstName = 'Ádám';
console.log(user.firstName);

// törlés
delete user.job;
console.log(user);

// hozzáadás
user.job = 'mentor';
console.log(user);

// Tömb a tömbben
var matrix = [
    [1, 2, 3],
    [4, 5, ['a', 'b', 'c']],
    [7, 8, 9],
]; // ez egy háromdimenziós tömb

console.log(matrix[0]);
console.log(matrix[1][1]);
console.log(matrix[1][2][2]);

var people = [{
        firstName: 'Gizi',
        lastName: 'Kis',
        age: 20,
        hobbies: ['reading', 'playing on piano'],
    },
    {
        firstName: 'József',
        lastName: 'Nagy',
        age: 22,
        hobbies: ['pun'],
    }
];

console.log(people[1].age);
console.log(people[people.length - 1].age);
// var lastIndex = people.length - 1;
// console.log(people[lastIndex].age);

console.log(people[0].hobbies[0]);

var peopleObj = {
    first: {
        firstName: 'Gizi',
        lastName: 'Kis',
        age: 20,
        hobbies: ['reading', 'playing on piano'],
    },
    second: {
        firstName: 'József',
        lastName: 'Nagy',
        age: 22,
        hobbies: ['pun'],
    }
};

console.log(peopleObj.first.hobbies[0]);