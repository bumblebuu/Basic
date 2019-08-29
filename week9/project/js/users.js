/*
ADATOK LEKÉRÉSE: GET
ADATOK MÓDOSÍTÁSA: PUT/PATCH
      (melyik azonositójút, tehát URL-be kell majd megadni és az adatokat is el kell küldeni)
ADATOK TÖRLÉSE: DELETE
      (melyik azonosítójút, tehát URL-be kell majd megadni)
ÚJ ADAT BEVITELE: POST
      (az adatokat el kell küldeni)
*/


const User = {
  config: {
    baseUrl: 'http://localhost',
    portNumber: 3000,
    dataUrl: 'users',
    url() {
      return `${this.baseUrl}:${this.portNumber}/${this.dataUrl}`;
    },
  },
  elements: {
    userTableData: document.querySelector('.user-table__data'),
    errorMessage: document.querySelector('.error__message'),
    successMessage: document.querySelector('.success__message'),
    userForm: document.querySelector('.user-form'),
  },
  validator: {
    name: {
      rule: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
      // az angol abc kis vagy nagybetűivel kezdődjön, 1 vagy több, lehetnek benne még rész, és mivel folytatódjon
      message: 'A név mező formátuma nem megfelelő!',
    },
    emailAddress: {
      rule: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
      message: 'Az email mező formátuma nem megfelelő!',
    },
    address: {
      rule: /^\d+\s[A-z]+\s[A-z]+/,
      message: 'A cím mező formátuma nem megfelelő!',
    },
  },
  editIsEnabled: false,
  users: [],
  init() {
    this.findAll();
  },
  toggleClass(element, className) {
    if (element.classList.contains(className)) {
      element.classList.remove(className);
    } else {
      element.classList.add(className);
    }
  },
  getUserIndex(id) {
    for (let i = 0; i < this.users.length; i += 1) {
      if (this.users[i].id === id) {
        return i;
      }
    }
    return null;
  },
  showError(message) {
    this.elements.errorMessage.textContent = message;
    this.elements.errorMessage.classList.remove('d-none');
    setTimeout(() => {
      this.elements.errorMessage.textContent = '';
      this.elements.errorMessage.classList.add('d-none');
    }, 5000);
  },
  showSuccess(message) {
    this.elements.successMessage.textContent = message;
    this.elements.successMessage.classList.remove('d-none');
    setTimeout(() => {
      this.elements.successMessage.textContent = '';
      this.elements.successMessage.classList.add('d-none');
    }, 5000);
  },
  validate(user) {
    let message = '';
    const keys = Object.keys(this.validator);
    for (let i = 0; i < keys.length; i += 1) {
      if (!this.validator[keys[i]].rule.test(user[keys[i]])) {
        message += this.validator[keys[i]].message;
      }
    }
    if (message) {
      this.showError(message);
      return false;
    }
    return true;
  },
  showAll() {
    let rows = '';
    for (let i = 0; i < this.users.length; i += 1) {
      rows += this.createNewRow(this.users[i]);
    }
    this.elements.userTableData.innerHTML = rows;
  },
  findAllSuccess(response) {
    this.users = response;
    this.showAll();
  },
  findAll() {
    // ez olyan mint egy xmlhttprequest get metódussal
    fetch(`${this.config.url()}?_sort=name&_order=asc`)
      // response.json() ua. mint a JSON.parse(response.responseText)
      .then(response => response.json())
      // az előző then visszatérési értéke
      .then((response) => {
        this.findAllSuccess(response);
      })
      .catch((error) => {
        this.showError(error);
      });
  },
  removeSuccess(id) {
    for (let i = 0; i < this.users.length; i += 1) {
      if (this.users[i].id === id) {
        this.users.splice(i, 1);
        break;
      }
    }
    document.querySelector(`tr[data-user-id="${id}"]`).remove();
    this.showSuccess('A felhasználó sikeresen törölve!');
  },
  remove(id) {
    if (this.editIsEnabled) {
      this.showError('Először be kell fejezned az aktuális szekesztést!');
    } else {
      // az url tartalmazza, hogy melyik id-jú elemet törölje ki
      // http://localhost:3000/users/1
      fetch(`${this.config.url()}/${id}`, {
        method: 'DELETE',
      })
        .then(() => {
          this.removeSuccess(id);
        })
        .catch((error) => {
          this.showError(error);
        });
    }
    return this.users;
  },
  edit(id) {
    if (!this.editIsEnabled) {
      this.editIsEnabled = true;
      this.editOrSave(id);
    } else {
      this.showError('Először be kell fejezned az aktuális szekesztést!');
    }
  },
  getUpdatedUserDatas(id) {
    const rowSelector = `tr[data-user-id="${id}"]`;
    return {
      id,
      name: document.querySelector(`${rowSelector} .user-table__user-name`)
        .value,
      emailAddress: document.querySelector(
        `${rowSelector} .user-table__user-email-address`,
      ).value,
      address: document.querySelector(
        `${rowSelector} .user-table__user-address`,
      ).value,
    };
  },
  saveSuccess(id, user) {
    const index = this.getUserIndex(id);
    this.users[index] = user;
    this.editIsEnabled = false;
    this.editOrSave(id);
    this.showSuccess('A felhasználó adatai sikeresen mentve!');
  },
  save(id) {
    const user = this.getUpdatedUserDatas(id);
    if (this.validate(user)) {
      fetch(`${this.config.url()}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      })
        .then(() => {
          this.saveSuccess(id, user);
        })
        .catch((error) => {
          this.showError(error);
        });
    }
    return this.users;
  },
  editOrSave(id) {
    const rowSelector = `tr[data-user-id="${id}"]`;
    const editButton = document.querySelector(
      `${rowSelector} .user-table__edit-user`,
    );
    const saveButton = document.querySelector(
      `${rowSelector} .user-table__save-user`,
    );
    const userInputs = Array.from(
      document.querySelectorAll(`${rowSelector} input`),
    );
    this.toggleClass(editButton, 'd-none');
    this.toggleClass(saveButton, 'd-none');
    for (let i = 0; i < userInputs.length; i += 1) {
      userInputs[i].disabled = !this.editIsEnabled;
    }
  },
  getNewUserDatas(id) {
    return {
      id: id + 1,
      name: document.querySelector('.user-form__user-name').value,
      emailAddress: document.querySelector('.user-form__user-email-address')
        .value,
      address: document.querySelector('.user-form__user-address').value,
    };
  },
  getMaxIdNumber() {
    let id = 0;
    for (let i = 0; i < this.users.length; i += 1) {
      if (this.users[i].id > id) {
        id = this.users[i].id;
      }
    }
    return id;
  },
  storeSuccess(user) {
    this.users.push(user);
    this.elements.userTableData.innerHTML += this.createNewRow(user);
    this.elements.userForm.reset();
    this.showSuccess('Az új felhasználó elmentve!');
  },
  store() {
    const id = this.getMaxIdNumber();
    const user = this.getNewUserDatas(id);
    if (this.validate(user)) {
      fetch(this.config.url(), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      })
        .then(() => {
          this.storeSuccess(user);
        })
        .catch((error) => {
          this.showError(error);
        });
    }
    return this.users;
  },
  createNewRow(user) {
    return `
        <tr data-user-id="${user.id}">
            <td>
              <input class="form-control user-table__user-name"
                     disabled
                     name="userName" 
                     type="text" 
                     value="${user.name}"
              >
            </td>
            <td>
              <input class="form-control user-table__user-email-address" 
                     disabled
                     name="userEmailAddress"  
                     type="email" 
                     value="${user.emailAddress}"
              >
            </td>
            <td>
              <input class="form-control user-table__user-address" 
                     disabled
                     name="userAddress"  
                     type="text" 
                     value="${user.address}"
              >
            </td>
            <td>
                <button class="btn btn-primary user-table__edit-user" 
                        onclick="User.edit(${user.id})"
                >
                    Szerkesztés
                </button>
                <button class="btn btn-success d-none user-table__save-user" 
                        onclick="User.save(${user.id})"
                >
                    Mentés
                </button>
                <button class="btn btn-danger user-table__delete-user" 
                        onclick="User.remove(${user.id})"
                >
                    Törlés
                </button>
            </td>
        </tr>`;
  },
};

User.init();
