function renderDetails(productID) {
    var product = catalog.getProduct(productID);
    var nodeProductDetailsVisualizer = document.querySelector('#vwProductDetails .ProductDetailsVisualizer');
    var nodeTR;
    var nodeTHmemberName;
    var nodeTDmemberValue
    var nodeTD;
    var nodeActionLink;

    nodeProductDetailsVisualizer.innerText = '';
    for (var memberName in product) {
        nodeTR = document.createElement('TR');
        nodeTHmemberName = document.createElement('TH');
        nodeTDmemberValue = document.createElement('TD');
        nodeTHmemberName.innerText = memberName;
        nodeTDmemberValue.innerText = product[memberName];
        nodeTR.appendChild(nodeTHmemberName);
        nodeTR.appendChild(nodeTDmemberValue)
        nodeProductDetailsVisualizer.appendChild(nodeTR);
    }
    nodeTR = document.createElement('TR');
    nodeTD = document.createElement('TD');
    nodeActionLink = Application.buildActionLink('Add to Order', 'OrderItem', 'Details', DetailsButton_ClickHandler);
    nodeTD.setAttribute('colspan', 2);
    nodeTD.appendChild(nodeActionLink);
    nodeTR.appendChild(nodeTD);
    nodeProductDetailsVisualizer.appendChild(nodeTR);
}
function DetailsButton_ClickHandler() {
    event.preventDefault();
    Application.executeCommand();
}
