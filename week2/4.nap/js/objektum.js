var User = {
    'name': 'István',
    'job': 'teacher',
    'age': 40,
    'address': 'Budapest',
    'isActive': true
}
User.name = 'Balázs';
User.age = 22;
User.youngFromCapital = User.age < 30 && User.address == 'Budapest';