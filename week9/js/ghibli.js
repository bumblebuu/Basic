var ghibli;

function storeGhibliData(jsContent) {
  this.ghibli = JSON.parse(jsContent);
  ghibli = ghibli.ghibli;
  console.log(ghibli);
  // buildTable(ghibli);
}

function getJSON(callBack) {
  var request = new XMLHttpRequest();
  request.onreadystatechange = function () {
    if (request.readyState === 4 && request.status === 200) {
      callBack(request.responseText);
    }
  };
  request.open('GET', '/json/ghibli.json');
  request.send();
}

getJSON(storeGhibliData);

function buildTable() {
  var nodeTbody = document.querySelector('.table--ghibli>tbody');

  for (var i = 0; i < ghibli.length; i++) {
    var movie = ghibli[i];
    var nodeTR = document.createElement('tr');
    for (var memberName in movie) {
      var nodeTD = document.createElement('td');
      nodeTD.textContent = movie[memberName];
      nodeTR.appendChild(nodeTD);
    }
    nodeTbody.appendChild(nodeTR);
  }
}
