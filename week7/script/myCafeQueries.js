function dataSource(baseData) {

    var autoIncrement = function (originalCoffees) {
        for (var i = 0; i < originalCoffees.length; i++) {
            originalCoffees[i].id = (i + 1);
        }
        return originalCoffees;
    }

    var items = autoIncrement(baseData);

    this.getAllItem = function () {
        items.map(x => x);
        items = items.sort((a, b) => {
            var result = 0;

            if (a.coffeeName < b.coffeeName) {
                result = -1;
            } else if (a.coffeeName > b.coffeeName) {
                result = 1;
            }
            return result;
        });
        return items;
    }

    this.getCoffeesByName = function (inputName) {
        var result = [];
        var van = false;

        for (var i = 0; i < items.length; i++) {
            if (items[i].coffeeName.toLowerCase().indexOf(inputName.toLowerCase()) > -1) {
                result.push(items[i]);
                van = true;
            }
        }
        if (van == false) {
            alert('Nincs találat!');
        }
        return result;
    }

    this.getOriginsList = function () {
        var originList = [];
        var origin;

        for (var i = 0; i < items.length; i++) {
            origin = items[i].origin;
            if (originList.indexOf(origin) == -1) {
                originList.push(origin);
            }
        }
        return originList;
    }

    this.getCoffeesByOrigin = function (origin) {
        var result = [];

        for (var i = 0; i < items.length; i++) {
            if (items[i].origin == origin) {
                result.push(items[i]);
            }
        }
        return result;
    }

    this.getCoffeesByIntensity = function (intensity) {
        var result = [];

        switch (intensity) {
            case 'light':
                for (var i = 0; i < items.length; i++) {
                    if (items[i].intensity <= 3) {
                        result.push(items[i]);
                    }
                }
                break;
            case 'mid':
                for (var i = 0; i < items.length; i++) {
                    if (items[i].intensity > 3 && items[i].intensity <= 7) {
                        result.push(items[i]);
                    }
                }
                break;
            case 'strong':
                for (var i = 0; i < items.length; i++) {
                    if (7 < items[i].intensity) {
                        result.push(items[i]);
                    }
                }
                break;
        }
        return result;
    }

    this.getCoffeeById = function (coffeeID) {
        var result = null;

        for (var i = 0; i < items.length; i++) {
            if (coffeeID == items[i].id) {
                result = items[i];
                result.inStock--;
                break;
            }
        }
        return result;
    }

    this.getMostCostyCoffee = function () {
        var result = items[0];

        for (var i = 0; i < items.length; i++) {
            if (result.pricePerCup < items[i].pricePerCup) {
                result = items[i];
            }
        }
        return result;
    }

    this.getLessCostyCoffee = function () {
        var result = items[0];

        for (var i = 0; i < items.length; i++) {
            if (result.pricePerCup > items[i].pricePerCup) {
                result = items[i];
            }
        }
        return result;
    }

    this.getStrongestCoffee = function () {
        var result = items[0];

        for (var i = 0; i < items.length; i++) {
            if (result.intensity < items[i].intensity) {
                result = items[i];
            }
        }
        return result;
    }

    this.getLightestCoffee = function () {
        var result = items[0];

        for (var i = 0; i < items.length; i++) {
            if (result.intensity > items[i].intensity) {
                result = items[i];
            }
        }
        return result;
    }

    this.getRandomBest = function () {
        var result = [];
        for (var i = 0; i < items.length; i++) {
            var x = Math.floor(Math.random() * items.length);
            result.push(items[x]);
            break;
        }
        return result;
    }

    this.getMostInStock = function () {
        var result = items[0];

        for (var i = 0; i < items.length; i++) {
            if (result.inStock < items[i].inStock) {
                result = items[i];
            }
        }
        return result;
    }

    this.getLessInStock = function () {
        var result = items[0];

        for (var i = 0; i < items.length; i++) {
            if (result.inStock > items[i].inStock) {
                result = items[i];
            }
        }
        return result;
    }
}