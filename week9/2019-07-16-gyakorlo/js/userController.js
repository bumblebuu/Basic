const UserController = {
  data: [], // lehet itt is
  editIsActive: false,
  init() {
    //  this.data = []; // automatikusan létrehozza a data tulajdonságot üres tömbként
    this.findAll(); // egyből meghívja a findAllt,kiírja az adatokat
  },
  toggleClass(tr) {
    const nodeBtns = Array.from(tr.querySelectorAll('button'));
    for (let i = 0; i < nodeBtns.length - 1; i += 1) {
      nodeBtns[i].classList.toggle('button-display-none');
    }
  },
  edit() {
    if (!this.editIsActive) {
      const nodeTD = event.target;
      const nodeTR = nodeTD.parentElement.parentElement;
      this.editIsActive = !this.editIsActive; // true-ra állítom az editIsActiveot
      this.toggleClass(nodeTR);
      const objKeys = Object.keys(this.data[0]); // első user adatai
      for (let i = 0; i < objKeys.length; i += 1) {
        const nodeInput = nodeTR.children[i].children[0];
        nodeInput.disabled = false;

        // szerkesztés funkció
        // mentés mégse gomb megjelenítése
      }
    }
  },
  save() {
    this.editIsActive = !this.editIsActive;
    const nodeTD = event.target;
    const nodeTR = nodeTD.parentElement.parentElement;
    this.toggleClass(nodeTR);
    const objKeys = Object.keys(this.data[0]); // első user adatai
    for (let i = 0; i < objKeys.length; i += 1) {
      const nodeInput = nodeTR.children[i].children[0];
      nodeInput.disabled = true;
    }
    // szerkesztés gomb id onclick mentés(property value attribute=property)-mégse gomb(attribute valueproperty=attribute), minden más gomb inaktív kell legyen
    // input.value attribute.value között van különbség
    // ha sikeresen mentettünk: this.editIsActive = !this.editIsActive;//visszaállítom falsera
  },
  cancel() {
    this.editIsActive = !this.editIsActive;
    const nodeTD = event.target;
    const nodeTR = nodeTD.parentElement.parentElement;
    this.toggleClass(nodeTR);
    const objKeys = Object.keys(this.data[0]); // első user adatai
    for (let i = 0; i < objKeys.length; i += 1) {
      const nodeInput = nodeTR.children[i].children[0];
      nodeInput.disabled = true;
      nodeInput.value = nodeInput.getAttribute('value');
    }
  },
  setUserData(userData) {
    this.data = JSON.parse(userData); // átalakítja a JSON filet. Innentől van feltöltve adatokkal a data
    this.generateTableHead();
    this.showAll();
  },
  //   findAll() {
  //     const request = new XMLHttpRequest(); // új XMLHttpRequest objektum létrehozása (aszinkron), segítségével tuduk valamilyen távoli erőforrást elérni, vagy küldeni
  //     request.onreadystatechange = () => { // a request onreadystatechange eseményre írunk egy arrow functiont, minden kérés állapot változásánál lefut ez a function
  //       if (request.readyState === 4 && request.status === 200) { // ha  a request readyState értéke 4 és statusa 200, tehát kész van
  //         this.setUserData(request.responseText); // callback legyen mindig, fusson le egy függvény ha ready
  //       }
  //     };
  //     request.open('GET', '/data/users.json');
  //     request.send();
  //   },
  generateTableHead() { // dinamikus lista
    let thead = '<thead>';
    const thTexts = {
      id: 'Azonosító',
      first_name: 'Keresztnév',
      last_name: 'Vezetéknév',
      email: 'Email cím',
      gender: 'Neme',
      country: 'Ország',
      city: 'Város',
      address: 'Cím',
    };
    const objKeys = Object.keys(this.data[0]); // első user adatai
    for (let i = 0; i < objKeys.length; i += 1) {
      thead += `<th>${thTexts[objKeys[i]]}</th>`;
    }
    thead += '<th>&nbsp</th>';
    thead += '</thead>';
    document.querySelector('.users').innerHTML = thead;
  },
  generateOneRow(user) {
    let row = `<tr data-id="${user.id}">`;
    const keys = Object.keys(user);
    for (let i = 0; i < keys.length; i += 1) {
      row += `<td>
      <input type="text" class="input--disabled inputID" disabled value="${user[keys[i]]}">
      </input>
      </td>`;
    }

    row += `<td> 
    <button class="button button-edit" onclick="UserController.edit()">Szerkesztés</button>
    <button class="button button-save button-display-none" onclick="UserController.save()">Mentés</button>
    <button class="button button-cancel button-display-none" onclick="UserController.cancel()">Mégse</button>
    
    </td>
    <td>
              <button class="button button-delete" onclick="UserController.remove(${user.id})">
                Törlés
              </button>
            </td>
         </tr>`; // törlés gomb
    return row;
  },
  showAll() {
    let rows = '';
    for (let i = 0; i < this.data.length; i += 1) {
      rows += this.generateOneRow(this.data[i]);
    }
    document.querySelector('.users').innerHTML += `<tbody>${rows}</tbody>`;
  },

  findAll() {
    const request = new XMLHttpRequest();
    request.onload = () => { // onload eseményfigyelő
      this.setUserData(request.responseText);
    };
    request.onerror = () => { // ha nem tölt be, alertet dob-NEM HASZNÁLUNK ALERTET
      alert('Hiba a fájl betöltésekor');
    };
    request.open('GET', 'data/users.json');
    request.send();
  },
  // remove() {
  //   const nodeButtonDelete = event.target;
  //   const nodeTr = nodeButtonDelete.parentNode.parentNode;
  //   const nodeObjectId = nodeTr.firstElementChild;
  //   const id = parseInt(nodeObjectId.textContent);
  //   for (let i = 0; i < this.data.length; i += 1) {
  //     if (id === this.data[i].id) {
  //       this.data.splice(i, 1); // .splice(index, howmany)
  //       break;
  //     }
  //   }
  //   console.log(this.data);
  //   nodeTr.remove();
  // },
  remove(id) {
    if (this.editIsActive === false) {
      document.querySelector(`tr[data-id="${id}"]`).remove();
      // for (let i = 0; i < this.data.length; i += 1) {
      //   if (id === this.data[i].id) {
      //     this.data.splice(i, 1);
      //     return;
      //   }
      // }

      this.data.filter(user => user.id !== parseInt(id, 10));
    }
    // const td = event.target;//szétbontva sorokra
    // const tr = (td.parentElement).parentElement;
    // tr.remove();
    // event.target.parentElement.parentElement.remove()//egy sorban
  },

  getFormData() {
    const newUser = {};
    const formElements = Array.from(document.querySelector('.form').elements);
    // formElements.length -= 1; // ha a length-en módosítunk, kiszedi belőle az utolsót~ .pop
    formElements.pop();
    return formElements;
  },
  validateForm(formElements) {
    let errorMessage = '';
    for (let i = 0; i < formElements.length; i += 1) {
      if (!formElements[i].value) { // ha üres, akkor true
        errorMessage += `Hiba a ${formElements[i].id} mezőnél! \n`;
      }
    }
    if (errorMessage) {
      this.showMessage(errorMessage);
      return false;
    }
    return true;
  },
  showMessage(msg) {
    alert(msg);
  },
  generateNewId() {
    let newId = 0;
    for (let i = 0; i < this.data.length; i += 1) {
      if (newId < this.data[i].id) {
        newId = this.data[i].id;
      }
    }
    newId += 1;
    return newId;
  },
  store() {
    // 1. Meg kell szerezni az összes űrlapelemet--form.elements
    const formElements = this.getFormData();
    // 2.Űrlapelemek vizsgálata--value vizsgálata
    const isValid = this.validateForm(formElements);
    // 3.HA valid AKKOR
    if (isValid) {
      // 3.1 Mentés a tömbbe-id generálása--legnagyobb + 1
      const newId = this.generateNewId();
      const newUser = {
        id: newId,
      };
      for (let i = 0; i < formElements.length; i += 1) {
        newUser[formElements[i].id] = formElements[i].value;
      }
      this.data.push(newUser);
      // 3.2 Hozzáadás a táblázathoz--függvény kiszerezése
      document.querySelector('.users tbody').insertAdjacentHTML('afterbegin', this.generateOneRow(newUser));
      // newRow.innerHTML = this.generateOneRow(newUser);
      // 3.3 Reseteljük az űrlapot //form reset
      document.querySelector('.form').reset();
    }
    // HA nem valid
    // Hiba üzenet
  },
  /* AZ ÉN MEGOLDÁSOM
  maxID() {
     let max = this.data[0].id;
     for (let i = 0; i < this.data.length; i += 1) {
       if (max < this.data[i].id) {
         max = this.data[i].id;
       }
     }
     return max;
   },
   add() {
     const newUser = {};

     newUser.id = this.maxID() + 1;
     const newUserFn = document.querySelector('#firstName').value;
     newUser.first_name = newUserFn;
     const newUserLn = document.querySelector('#lastName').value;
     newUser.last_name = newUserLn;
     const newUserEmail = document.querySelector('#email').value;
     newUser.email = newUserEmail;
     const newUserGender = document.querySelector('#sex').value;
     newUser.gender = newUserGender;
     const newUserCountry = document.querySelector('#country').value;
     newUser.country = newUserCountry;
     const newUserCity = document.querySelector('#city').value;
     newUser.city = newUserCity;
     const newUserAddress = document.querySelector('#address').value;
     newUser.address = newUserAddress;
     if (newUser.first_name.length > 1 && newUser.last_name.length > 1 && newUser.email.length > 1 && newUser.gender.length > 1 && newUser.country.length > 1 && newUser.city.length > 1 && newUser.address.length > 1) {
       this.data.unshift(newUser);
       console.log(this.data);
       this.clear();
       this.generateTableHead();
       this.showAll();
     } else {
       const uzenet = document.querySelector('.message');
       uzenet.textContent = 'Kérlek mindenhova írj be valamit!';
       setTimeout(() => {
         uzenet.setAttribute('style', 'display:none');
       }, 3000);
       this.clear();
     }
   },
   clear() {
     document.querySelector('.form').reset();
     document.querySelector('.users').textContent = '';
   }, */
};
UserController.init();
