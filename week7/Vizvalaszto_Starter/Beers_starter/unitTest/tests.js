QUnit.test("Tests for Catalog", function (assert) {
    var expected;
    var actual;
    var sut;

    sut = new Catalog();
    expected = 0;
    actual = sut.getItems().length;
    assert.strictEqual(actual, expected, "Test for getItems() with empty catalog");

    sut = new Catalog(fakeBeers);
    expected = 3;
    actual = sut.getItems().length;
    assert.strictEqual(actual, expected, "Test for getItems() with non empty catalog");

    expected = fakeBeers[0];
    actual = sut.getProduct(1);
    assert.propEqual(actual, expected, "Test for getProduct(productID) with existing productID");

    expected = null;
    actual = sut.getProduct(-9);
    assert.propEqual(actual, expected, "Test for getProduct(productID) with not existing productID");

    expected = 1
    actual = sut.indexOf(fakeBeers[expected]);
    assert.equal(actual, expected, "Test for indexOf(product) with existing product");

    expected = -1
    actual = sut.indexOf({
        "id": 25,
        "name": "Bad Pixie",
        "tagline": "Spiced Wheat Beer.",
        "description": "2008 Prototype beer, a 4.7% wheat ale with crushed juniper berries and citrus peel.",
        "image_url": "https://images.punkapi.com/v2/25.png",
        "abv": 4.7
    }
    );
    assert.equal(actual, expected, "Test for indexOf(product) with not existing product");
});
QUnit.test("Tests for Order", function (assert) {
    var expected;
    var actual;
    var sut;
    var orderItem;

    sut = new Order();
    expected = fakeOrder[1];
    actual = sut.createOrderItem(fakeBeers[1], 12);
    assert.propEqual(actual, expected, 'Test for createOrdeItem(product, quantity)');
    // Test for addItem()
    orderItem = sut.createOrderItem(fakeBeers[1], 12);
    sut.addItem(orderItem);
    actual = sut.getItems();
    assert.strictEqual(actual.length, 1, 'Test for addItem() with getItems().length');
    assert.propEqual(actual[0], expected, 'Test for addItem() with getItems()[0]');
    // Test for addItem() with same product
    orderItem = sut.createOrderItem(fakeBeers[1], 2);
    sut.addItem(orderItem);
    expected = 1;
    actual = sut.getItems().length;
    assert.strictEqual(actual, expected, 'Test for addItem(). Item count with same product');
    expected = 2;
    actual = sut.getItems()[0].quantity;
    assert.strictEqual(actual, expected, 'Test for addItem(). Quantity with same product');
    expected = 8.2;
    actual = sut.getItems()[0].itemPrice;
    assert.strictEqual(actual, expected, 'Test for addItem(). ItemPrice with same product');
    //Test addItem() with another product
    orderItem = sut.createOrderItem(fakeBeers[0], 1);
    sut.addItem(orderItem);
    expected = 2;
    actual = sut.getItems().length;
    assert.strictEqual(actual, expected, 'Test for addItem(). Item count with another product');
    expected = fakeOrder[0];
    actual = sut.getItems()[1];
    assert.propEqual(actual, expected, 'Test for addItem() with getItems()[1]');
    //
    orderItem = sut.createOrderItem(fakeBeers[1], 12);
    sut.addItem(orderItem);
    expected = fakeOrder[1];
    actual = sut.getItem(2);
    assert.propEqual(actual, expected, 'Test for getItem() with existing productID');
    expected = null;
    actual = sut.getItem(-9);
    assert.strictEqual(actual, expected, 'Test for getItem() with not existing productID');

    expected = 53.699999999999996;
    actual = sut.getTotalPrice();
    assert.strictEqual(actual, expected, 'Test for getTotalPrice()');

    expected = 49.199999999999996;
    sut.removeItem(1);
    actual = sut.getTotalPrice();
    assert.strictEqual(actual, expected, 'Test for removeItem(productID) with existing productID');

    expected = 49.199999999999996;
    sut.removeItem(-9);
    actual = sut.getTotalPrice();
    assert.strictEqual(actual, expected, 'Test for removeItem(productID) with not existing productID');

    expected = 0;
    sut.removeItem(2);
    actual = sut.getTotalPrice();
    assert.strictEqual(actual, expected, 'Test for getTotalPrice() with empty order');
});

var fakeBeers = [
    {
        "id": 1,
        "name": "Buzz",
        "tagline": "A Real Bitter Experience.",
        "description": "A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once.",
        "image_url": "https://images.punkapi.com/v2/keg.png",
        "abv": 4.5
    },
    {
        "id": 2,
        "name": "Trashy Blonde",
        "tagline": "You Know You Shouldn't",
        "description": "A titillating, neurotic, peroxide punk of a Pale Ale. Combining attitude, style, substance, and a little bit of low self esteem for good measure; what would your mother say? The seductive lure of the sassy passion fruit hop proves too much to resist. All that is even before we get onto the fact that there are no additives, preservatives, pasteurization or strings attached. All wrapped up with the customary BrewDog bite and imaginative twist.",
        "image_url": "https://images.punkapi.com/v2/2.png",
        "abv": 4.1
    },
    {
        "id": 3,
        "name": "Berliner Weisse With Yuzu - B-Sides",
        "tagline": "Japanese Citrus Berliner Weisse.",
        "description": "Japanese citrus fruit intensifies the sour nature of this German classic.",
        "image_url": "https://images.punkapi.com/v2/keg.png",
        "abv": 4.2
    }
];
var fakeOrder = [
    {
        productID: 1
        , name: 'Buzz'
        , unitPrice: 4.5
        , quantity: 1
        , itemPrice: 4.5
    }
    , {
        productID: 2
        , name: 'Trashy Blonde'
        , unitPrice: 4.1
        , quantity: 12
        , itemPrice: 49.199999999999996
    }
];