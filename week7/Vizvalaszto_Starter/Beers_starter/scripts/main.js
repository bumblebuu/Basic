var currentProductID;
var catalog;
var order;

window.addEventListener('load', window_LoadHandler);

function initializeComponents() {
    var nodesA = document.querySelectorAll('A[data-action]');

    for (var i = 0; i < nodesA.length; i++) {
        nodesA[i].addEventListener('click', Application.changeView);
    }
    catalog = new Catalog(beers);
    order = new Order();
}

function window_LoadHandler() {
    initializeComponents();
    Application.changeView('ProductList');
    var nodeBtnSearch = document.querySelector('#btnSearch');
    nodeBtnSearch.addEventListener('click', btnSearch_ClickHandler);
}

function btnSearch_ClickHandler() {
    var nodeInput = document.querySelector('#searchInput');
    var mitKeres = nodeInput.value;
    catalog.setSearch(mitKeres);
    //console.log(catalog.getItems(mitKeres));
    renderProductList(catalog.getItems(mitKeres));
}