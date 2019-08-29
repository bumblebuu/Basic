// $.getJSON('https://gist.githubusercontent.com/Minacava/ce68b82887cc68b59e67d42fdc6774a9/raw/3691e4c1e60f1b465b3c41771956fc9c23ea2c87/books.json', ghibliArray)

// function ghibliArray(data) {
//     var ghibliString = JSON.stringify(data);
//     var ghibli = JSON.parse(ghibliString);
//     console.log(ghibli[0]);

//     var keys = ghibli[0].map(item.key);
//     console.log(keys);
// }

window.addEventListener('load', windowOnLoad);

function windowOnLoad() {
    var nodeYoungstersButton = document.querySelector('#youngsters');
    nodeYoungstersButton.addEventListener('click', youngstersButtonClicked, false);

    var nodeClearFilterButton = document.querySelector('#clearFilter');
    nodeClearFilterButton.addEventListener('click', clearFilterButton);

    var nodeMostTalentedButton = document.querySelector('#mostTalented');
    nodeMostTalentedButton.addEventListener('click', mostTalentedButton);

    var nodeNamesComboBox = document.querySelector('#pointsByName');
    fillNamesComboBox();
    nodeNamesComboBox.addEventListener('change', namesComboBox_ChangeHandler);
}

function youngstersButtonClicked() {
    var youngsters = Gamers.filter(item => item.age <= 20);

    buildTable(youngsters);
}

function clearFilterButton() {
    buildTable(Gamers);
}

function mostTalentedButton() {
    var mostTalented = Gamers.filter(item => item.skills.length >= 3);

    buildTable(mostTalented);
}

function buildTable(tomb) {
    var nodeTBody = document.querySelector('#tableGamers>tbody');

    nodeTBody.innerText = '';
    for (var row = 0; row < tomb.length; row++) {
        var nodeTR = document.createElement('tr');
        var player = tomb[row];
        for (var column in tomb[row]) {
            var nodeTD = document.createElement('td');
            nodeTD.innerText = tomb[row][column];
            nodeTR.appendChild(nodeTD);
        }
        nodeTBody.appendChild(nodeTR);
    }
}

function getNamesAndPoints() {
    var namesAndPoints = [];

    namesAndPoints = Gamers.map(item => {
        return {
            name: item.name,
            point: item.point
        }
    })
    return namesAndPoints;
}

function fillNamesComboBox() {
    var nodeNamesComboBox = document.querySelector('#pointsByName');
    var namesAndPoints = getNamesAndPoints();

    for (var i = 0; i < namesAndPoints.length; i++) {
        var nodeOption = document.createElement('option');
        nodeOption.innerText = namesAndPoints[i].name;
        nodeOption.setAttribute('value', namesAndPoints[i].point);
        nodeNamesComboBox.appendChild(nodeOption);
    }
}

function namesComboBox_ChangeHandler() {
    var comboBox = event.target;

    alert(comboBox.value);
}