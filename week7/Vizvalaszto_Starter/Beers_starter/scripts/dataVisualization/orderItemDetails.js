function renderOrderItem(productID) {
    var product = catalog.getProduct(productID);
    var orderItem = order.getItem(productID);
    var quantity = 1;
    if (orderItem != null) {
        quantity = orderItem.quantity;
    }
    var nodeOrderItemDetailsVisualizer = document.querySelector('#vwOrderItemDetails .OrderItemDetailsVisualizer');
    var nodeTR;
    var nodeTD;
    var nodeActionLink;
    var nodeTHmemberName;
    var nodeTDmemberValue;
    var nodeIMG

    nodeOrderItemDetailsVisualizer.innerText = '';
    for (var memberName in product) {
        nodeTR = document.createElement('TR');
        nodeTHmemberName = document.createElement('TH');
        nodeTDmemberValue = document.createElement('TD');
        switch (memberName) {
            case 'name':
            case 'tagline':
            case 'description':
                nodeTHmemberName.innerText = memberName;
                nodeTDmemberValue.innerText = product[memberName];
                break;
            case 'image_url':
                nodeTHmemberName.innerText = memberName;
                nodeIMG = document.createElement('IMG');
                nodeIMG.setAttribute('src', product[memberName]);
                nodeTDmemberValue.appendChild(nodeIMG);
                break;
        }
        if (0 < nodeTHmemberName.childNodes.length) {
            nodeTR.appendChild(nodeTHmemberName);
            nodeTR.appendChild(nodeTDmemberValue)
            nodeOrderItemDetailsVisualizer.appendChild(nodeTR);
        }
    }
    nodeTR = document.createElement('TR');
    nodeTHmemberName = document.createElement('TH');
    nodeTDmemberValue = document.createElement('TD');
    nodeTHmemberName.innerText = 'quantity';
    nodeTDmemberValue.innerHTML = '<input id="nudQuantity" type="number" min="0" value="' + quantity + '">'
    nodeTR.appendChild(nodeTHmemberName);
    nodeTR.appendChild(nodeTDmemberValue)
    nodeOrderItemDetailsVisualizer.appendChild(nodeTR);

    nodeTR = document.createElement('TR');
    nodeTD = document.createElement('TD');
    nodeTD.setAttribute('colspan', 2);
    nodeActionLink = Application.buildActionLink('Add to Order', 'OrderItem', 'List', OrderDetailsButton_ClickHandler);
    nodeTD.appendChild(nodeActionLink);
    nodeActionLink = Application.buildActionLink('Details', 'Product', 'Details', OrderDetailsButton_ClickHandler);
    nodeTD.appendChild(nodeActionLink);
    nodeTR.appendChild(nodeTD);
    nodeOrderItemDetailsVisualizer.appendChild(nodeTR);
}
function OrderDetailsButton_ClickHandler() {
    event.preventDefault();
    Application.executeCommand();
}
