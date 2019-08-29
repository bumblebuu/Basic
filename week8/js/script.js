// function chechXMLHttpRequestState(state) {
//     switch (state) {
//         case 0:
//             console.log("A kérelem nem inicializált");
//             break;
//         case 1:
//             console.log("A kapcsolat létrejött");
//             break;
//         case 2:
//             console.log("A kérelem fogadva");
//             break;
//         case 3:
//             console.log("A kérelem feldolgozása folyamatban");
//             break;
//         default:
//             console.log("A kérelem feldolgozva, válasz kész");
//     }
// }

// function getJSON(callback) {
//     var request = new XMLHttpRequest();
//     //chechXMLHttpRequestState(request.readyState);
//     request.onreadystatechange = function () {
//         checkXMLHttpRequestState(request.responseText);
//         }
//     };
//     request.open('GET', '/js/users.json');
//     request.send();
// }
// } hf: hogy oldom meg, hogy ez kapjon egy paramétert, ami a request readystate értéke legyen


var users;

function storeUserData(jsonContent) {
    this.users = JSON.parse(jsonContent);
    users = users.users;
    console.log(users);
    //buildTable(users);
    //showUserDataWithTemplateString(users);
    showUserDataWithRecursiveFunction(users);
}

function getJSON(callback) {
    var request = new XMLHttpRequest();
    //chechXMLHttpRequestState(request.readyState);
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
            callback(request.responseText);
        }
    };
    request.open('GET', '/js/users.json');
    request.send();
}

getJSON(storeUserData);

/*
window.addEventListener('load', window_LoadHandler);


function window_LoadHandler() {

    setTimeout(buildTable(), 10000);
}*/



function buildTable() {
    var nodeTbody = document.querySelector('.users__data');

    for (var i = 0; i < users.length; i++) {
        var user = users[i];
        var nodeTR = document.createElement('tr');
        for (var memberName in user) {
            var nodeTD = document.createElement('td');
            nodeTD.textContent = user[memberName];
            nodeTR.appendChild(nodeTD);
        }
        nodeTbody.appendChild(nodeTR);

    }
}


function showUserDataWithString() {
    var user = {
        firstName: 'Gergely',
        lastName: 'Gáll'
    };


    // var multilineText = '<p>\n' +
    //     '<span> Firstname: ' + user.firstName + '</span><br>\n' +
    //     '<span> Lastname: ' + user.lastName + '</span>\n' +
    //     '</p>';

    // var multilineText = '<p>\n \
    //     <span> Firstname: ' + user.firstName + '</span><br>\n \
    //     <span> Lastname: ' + user.lastName + '</span>\n \
    //     </p>';

    var multilineText = `<p>
                            <span>Firstname: ${user.firstName}</span><br>
                            <span>Lastname: ${user.lastName}</span>
                        </p>`;



    console.log(multilineText);
}

showUserDataWithString();

function showUserDataWithTemplateString(users) {
    var usersTemplate = '';

    for (var i = 0; i < users.length; i += 1) {
        usersTemplate += `<tr>`;
        for (var j in users[i]) {
            usersTemplate += `<td>${users[i][j]}</td>`;
        }
        usersTemplate += `<tr>`;
    }
    document.querySelector('.users__data').innerHTML = usersTemplate;
}

function showUserDataWithRecursiveFunction(users) {
    var usersTemplate = '';

    users.map(function (value) {
        usersTemplate += `<tr>`;
        Object.values(value).map(function (data) {
            usersTemplate += `<td>${data}</td>`;
        })
        usersTemplate += `</tr>`;
        return usersTemplate;
    });

    document.querySelector('.users__data').innerHTML = usersTemplate;
}