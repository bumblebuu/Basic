function AllGoals() {
    var result = 0;

    for (var i = 0; i < players.length; i++) {
        result += parseInt(players[i].goals);
    }
    return result;
}

function DateFormatter(weirdForm) {
    var result = '';
    var arr = weirdForm.split('/');

    result = arr[2] + '-' + arr[1] + '-' + arr[0];
    return result;
}

function CalculateAge(birthdate) {
    var age;
    var today = new Date();
    var dateOfBirth = new Date(DateFormatter(birthdate));

    age = today.getFullYear() - dateOfBirth.getFullYear();
    return age;
}

function MinimumAge() {
    var minAge = CalculateAge(players[0].birthdate);

    for (var i = 0; i < players.length; i++) {
        if (CalculateAge(players[i].birthdate) < minAge) {
            dateOfBirth = new Date(players[i].birthdate);
            minAge = CalculateAge(players[i].birthdate);
        }
    }
    return minAge;
}

function MaximumAge() {
    var maxAge = CalculateAge(players[0].birthdate);

    for (var i = 0; i < players.length; i++) {
        if (CalculateAge(players[i].birthdate) > maxAge) {
            dateOfBirth = new Date(players[i].birthdate);
            maxAge = CalculateAge(players[i].birthdate);
        }
    }
    return maxAge;
}

function AverageAge() {
    var avgAge = 0;
    var sumAge = 0;
    var head = 0;


    for (var i = 0; i < players.length; i++) {
        head++;
        sumAge += CalculateAge(players[i].birthdate);
        avgAge = sumAge / head;
    }
    return avgAge;
}

function OldestPlayer() {
    var oldest;

    oldest = players[0];
    for (var i = 0; i < players.length; i++) {
        if (CalculateAge(players[i].birthdate) > CalculateAge(oldest.birthdate)) {
            oldest = players[i];
        }
    }
    return oldest;
}

function Goalkeepers() {
    var kapusok = [];

    for (var i = 0; i < players.length; i++) {
        if (players[i].position === 'Goalkeeper') {
            kapusok.push(players[i]);
        }
    }
    return kapusok;
}

function HasPlayerFromClub(pClubName) {
    var isThereOne = false;

    for (var i = 0; i < players.length; i++) {
        if (players[i].club.indexOf(pClubName) > -1) {
            isThereOne = true;
            break;
        }
    }
    return isThereOne;
}

function HasPlayerWithName(pPlayerName) {
    var isThereOneWith = false;


    for (var i = 0; i < players.length; i++) {
        if (players[i].name.indexOf(pPlayerName) > -1) {
            isThereOneWith = true;
            break;
        }
    }
    return isThereOneWith;
}

function FirstPlayerWithName(pPlayerName) {
    var firstPlayer = [];

    for (var i = 0; i < players.length; i++) {
        if (players[i].name.indexOf(pPlayerName) > -1) {
            firstPlayer = players[i];
            break;
        }
    }
    return firstPlayer;
}

function PlayersWithName(pPlayerName) {
    var allPlayer = [];

    for (var i = 0; i < players.length; i++) {
        if (players[i].name.indexOf(pPlayerName) > -1) {
            allPlayer = players[i];
            break;
        }
    }
    return allPlayer;
}

function ClubsRepresented() {
    var listOfClubs = [];

    for (var i = 0; i < players.length; i++) {
        if (listOfClubs.indexOf(players[i].club) == -1) {
            listOfClubs.push(players[i].club);
        }
    }

    return listOfClubs;
}

function PlayersByClub() {
    var byClub = [];
    var clubs = ClubsRepresented();
    var player;

    for (var i = 0; i < clubs.length; i++) {
        byClub.push({
            name: clubs[i],
            players: []
        });
    }
    for (var i = 0; i < players.length; i++) {
        player = players[i];
        for (var j = 0; j < byClub.length; j++) {
            if (byClub[j].name === player.club) {
                byClub[j].players.push(player);
                break;
            }
        }
    }
    return byClub;
}