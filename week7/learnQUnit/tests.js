QUnit.test("Tests for Bankszamla", function (assert) {
    var actual;
    var expected;
    var sut = new Bankszamla();

    expected = 0;
    actual = sut.getEgyenleg();
    assert.strictEqual(actual, expected, "Jól nyitod a számlát?");
    /** */
    expected = 15;
    sut.befizetes(expected);
    actual = sut.getEgyenleg();
    assert.strictEqual(actual, expected, "Jól kezeled a befizetés tranzakciót?");
    /** */
    expected = -15;
    sut.kivet(30);
    actual = sut.getEgyenleg();
    assert.strictEqual(actual, expected, "Jól kezeled a kivét tranzakciót?");
    /** */
    function fx() {
        var sut = new Bankszamla();
        sut.befizetes(undefined);
    }
    assert.throws(
        fx, TypeError('Please write a Number.'), "Kezeled az argumentum tipusát undefined érték esetén?");
    /** */
    function fx2() {
        var sut = new Bankszamla();
        sut.befizetes(null);
    }
    assert.throws(
        fx2, TypeError('Please write a Number.'), "Kezeled az argumentum tipusát null érték esetén?");
    /** */
    function fx3_1() {
        var sut = new Bankszamla();
        sut.befizetes('alma');
    }
    assert.throws(
        fx3_1, TypeError('Please write a Number.'), "Kezeled az argumentum tipusát számmá nem konvertálható String esetén?");
    /** */
    function fx3_2() {
        var sut = new Bankszamla();
        sut.befizetes('12');
    }
    assert.throws(
        fx3_2, TypeError('Please write a Number.'), "Kezeled az argumentum tipusát számmá konvertálható String esetén?");
    /** */
    function fx4() {
        var sut = new Bankszamla();
        sut.befizetes(-89);
    }
    assert.throws(
        fx4, RangeError('Please write a positive Number.'), "Kezeled az argumentum negatív értékét?");
    /** */
    sut.befizetes(50);
    actual = sut.egyenleg;
    assert.strictEqual(actual, expected, "Elérhető kintről az egyenleg tag?");
    /** */
    sut.doTranzakcio(expected);
    actual = sut.egyenleg;
    assert.strictEqual(actual, expected, "Elérhető kintről az doTranzakcio() tag?");
});