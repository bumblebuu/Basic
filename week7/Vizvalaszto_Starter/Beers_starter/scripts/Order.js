function Order() {
    var items = [];

    this.createOrderItem = function (product, quantity) {
        var orderItem;
        orderItem = {
            // a kosárba tett termék azonosítója
            productID: product.id
                // a kosárba tett termék megnevezése
                ,
            name: product.name
                // a kosárba tett termék "abv" értéke
                ,
            unitPrice: product.abv
                // a kosárba tett termék mennyisége
                ,
            quantity: quantity
                // a kosárba tett termék "abv" értékének és mennyiségének szorzata
                ,
            itemPrice: product.abv * quantity
        };
        return orderItem
    }


    this.addItem = function (orderItem) {
        var index = this.indexOf(orderItem.productID);

        if (index == -1) {
            items.push(orderItem);
        } else {
            items[index].quantity = orderItem.quantity;
            items[index].itemPrice = orderItem.itemPrice;
        }
    }

    this.getItem = function (productID) {
        var item = null;
        for (var i = 0; i < items.length; i++) {
            if (items[i].productID == productID) {
                item = items[i];
                break;
            }
        }
        return item;
    }

    this.removeItem = function (productID) {
        var result = items;
        for (var i = 0; i < result.length; i++) {
            if (result[i].productID == productID) {
                result.splice(i, 1);
                break;
            }
        }
        return result;
    }



    this.getTotalPrice = function () {
        var sum = 0;
        for (var i = 0; i < items.length; i++) {
            sum += items[i].itemPrice;
        }
        return sum;

    }


    this.indexOf = function (productID) {
        var index = -1;

        for (var i = 0; i < items.length; i++) {
            if (items[i].productID === productID) {
                index = i;
                break;
            }
        }
        return index;
    }


    this.getItems = function () {
        return items.map(x => x);
    }
}