function Bankszamla() {
    var egyenleg = 0;

    this.getEgyenleg = function () {
        return egyenleg;
    }

    this.befizetes = function (amount) {
        validate(amount);
        doTranzakcio(amount);
    }

    this.kivet = function (amount) {
        validate(amount);
        doTranzakcio(-1 * amount);
    }

    var validate = function (amount) {
        if (isNaN(parseFloat(amount))) {
            throw new TypeError('Please write a Number.');
        }
        if (parseFloat(amount + 0) != parseFloat(amount)) {
            throw new TypeError('Please write a Number.');
        }
        if (amount < 0) {
            throw new RangeError('Please write a positive Number.')
        }
    }

    var doTranzakcio = function (amount) {
        egyenleg += amount;
    }


}