var activeView;
var Application = {};
Application.executeCommand = function () {
    var nodeActionLink = event.target;
    var nodeItemVisualizer;
    var action = nodeActionLink.getAttribute('data-action');
    var command;
    var controller;
    var controllerActionFullName;
    var productID;

    command = nodeActionLink.getAttribute('href').split('/');
    controller = command[0];
    action = command[1];
    controllerActionFullName = controller + action;
    switch (activeView) {
        case 'ProductList':
            nodeItemVisualizer = Application.getItemVisualizer(nodeActionLink);
            productID = parseInt(nodeItemVisualizer.getAttribute('data-productid'));
            currentProductID = productID
            break;
        case 'ProductDetails':
            break;
        case 'OrderItemList':
            nodeItemVisualizer = Application.getItemVisualizer(nodeActionLink);
            productID = parseInt(nodeItemVisualizer.getAttribute('data-productid'));

            switch (controllerActionFullName) {
                case 'OrderItemDetails':
                    currentProductID = productID;
                    break;
                case 'OrderItemDelete':
                    order.removeItem(productID);
                    /* Change Action! */
                    controller = 'OrderItem';
                    action = 'List';
                    controllerActionFullName = controller + action;
                    break;
            }
            break;
        case 'OrderItemDetails':
            var nodeQuantityNUD = document.querySelector('#nudQuantity');
            var quantity = parseInt(nodeQuantityNUD.value);
            var product = catalog.getProduct(currentProductID);
            var orderItem = order.createOrderItem(product, quantity);

            switch (controllerActionFullName) {
                case 'ProductDetails':
                    break;
                case 'OrderItemList':
                    order.addItem(orderItem);
                    break;
            }
            break;
    }
    Application.changeView(controllerActionFullName);
}
Application.getSenderView = function (nodeActionLink) {
    var view;

    var tmp = nodeActionLink;
    while (tmp != null) {
        if (tmp.classList.contains('View') == true) {
            view = tmp;
            break;
        }
        tmp = tmp.parentNode;
    }
    return view;
}
Application.changeView = function (action) {
    event.preventDefault();
    if (action == undefined || action == null || action instanceof Event) {
        var nodeActionLink = event.target;
        action = nodeActionLink.getAttribute('data-action');
    }
    var nodeActiveView = document.querySelector('.ActiveView');
    var nodesView = document.querySelectorAll('.View');
    var node = document.querySelector(('#vw' + action));

    nodeActiveView.classList.remove('ActiveView');
    for (var i = 0; i < nodesView.length; i++) {
        nodesView[i].style.display = 'none';
    }
    node.style.display = 'block';
    node.classList.add('ActiveView');
    activeView = action;
    switch (action) {
        case 'ProductDetails':
            renderDetails(currentProductID);
            break;
        case 'OrderItemList':
            renderOrder(currentProductID);
            break;
        case 'OrderItemDetails':
            renderOrderItem(currentProductID);
            break;
        case 'ProductList':
            renderProductList(catalog.getItems());
            break;
    }
}
Application.buildActionLink = function (text, controller, action, clickHandler) {
    var nodeA = document.createElement('A');

    nodeA.addEventListener('click', clickHandler);
    nodeA.setAttribute('data-action', action);
    nodeA.classList.add('ActionLink');
    nodeA.setAttribute('href', controller + '/' + action);
    //nodeA.setAttribute('href', '#');
    nodeA.innerText = text;
    return nodeA;
}
Application.getItemVisualizer = function (nodeActionLink) {
    var itemVisualizer;

    var tmp = nodeActionLink;
    while (tmp != null) {
        if (tmp.classList.contains('ListItemVisualizer') == true) {
            itemVisualizer = tmp;
            break;
        }
        tmp = tmp.parentNode;
    }
    return itemVisualizer;
}
