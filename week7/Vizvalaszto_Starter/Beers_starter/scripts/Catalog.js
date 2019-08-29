function Catalog(products) {
    var items = products || [];
    var searchInfo = null;


    this.indexOf = function (product) {
        var result = -1;
        for (var i = 0; i < items.length; i++) {
            if (items[i].id === product.id) {
                result = i;
            }
        }
        return result;
    }


    this.getProduct = function (productID) {
        var result = null;

        for (var i = 0; i < items.length; i++) {
            if (productID == items[i].id) {
                result = items[i];
            }
        }
        return result;
    }

    this.setSearch = function (mitKeres) {
        if (mitKeres === undefined) {
            searchInfo = null;
        } else if (mitKeres === null) {
            searchInfo = null;
        } else if (mitKeres === '') {
            searchInfo = null;
        } else {
            searchInfo = {
                what: mitKeres
            };
        }
        return searchInfo;
    }


    this.getItems = function (mitKeres) {

        var result;
        result = items.map(x => x);
        // Itt implement�ld a keres�st

        if (searchInfo != null) {
            //console.log(searchInfo);
            result = [];
            for (var i = 0; i < items.length; i++) {
                if (items[i].name.toLowerCase().indexOf(searchInfo.what.toLowerCase()) > -1) {
                    result.push(items[i]);
                }
            }
        }
        return result;
    }
}