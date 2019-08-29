const messagePromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const r = Math.floor(Math.random() * 2);
    if (r === 0) {
      reject('Some errors');
    } else {
      resolve('This promise has been done.');
    }
  }, 3000);
});

messagePromise.then(
  message => console.log(message), // function (message) {console.log(message)}
  err => console.error(err),
);


// GET FOOTBALLDATA

const footballURL = 'https://raw.githubusercontent.com/jokecamp/FootballData/master/EPL%202015%20-%202016/2015-10-15.epl-stats.json';
const xhr = new XMLHttpRequest();
xhr.open('GET', footballURL);
xhr.onload = (ev) => {
  const footballData = JSON.parse(ev.target.responseText);
  console.log(footballData);
};
xhr.send();

fetch(footballURL).then( // fetch(fetchSettings).then(  -- csak ezt nem érti a live server
  response => response.json(), // <= ha stringet kapsz, ha objektum, akkor.text()
  err => console.error(err),
).then(
  data => console.log(data),
);


let fetchInit = {
  method: 'GET',
  headers: new Headers(),
  mode: 'cors',
  cache: 'default'
};

fetch(footballURL, fetchInit).then(
  response => response.json(),
  err => console.error(err)
).then(
  data => console.log(data),
);

let firstPromise = fetch(footballURL).then(resp => resp.json());

let firstPromise = fetch('https://raw.githubusercontent.com/jokecamp/FootballData/master/EPL%202015%20-%202016/2015-10-15.epl-stats.json').then(resp => resp.json());

Promise.race[secondPromise, firstPromise]