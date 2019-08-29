function renderOrder() {
    // Értelmezd a változókat
    var orderItems = order.getItems();
    var orderItem;
    var nodeOrderItemListContainer;
    var nodeTotalPriceVisualizer;
    var nodeItemVisualizer;
    var nodeActionLink;
    var nodeTD;
    // Adj értéket a nodeOrderItemListContainer változónak, általa
    // hivatkozzuk meg a megrendeléstételeket megjelenítő TBODY elemet
    nodeOrderItemListContainer = document.querySelector('#OrderItemListContainer');
    // Adj értéket a nodeTotalPriceVisualizer változónak, általa
    // hivatkozzuk meg a megrendelés összértékét megjelenítő TD elemet
    nodeTotalPriceVisualizer = document.querySelector('#TotalPriceVisualizer');
    // Jelenítsd meg a megrendelés összértékét
    nodeTotalPriceVisualizer.innerText = order.getTotalPrice();
    // Gondoskodj róla, hogy a nodeOrderItemListContainer korábbi tartalma tűnjön el
    nodeOrderItemListContainer.innerText = '';
    // Ciklussal járd be a megrendelés összes tételét (ezeket kell megjeleníteni)
    for (var i = 0; i < orderItems.length; i++) {
        // Adj értéket az orderItem változónak (megrendelés tétel)
        orderItem = orderItems[i];

        // Hozz létre egy új megjelenítő DOM node-ot az éppen feldolgozott tételhez (nodeItemVisualizer)
        nodeItemVisualizer = document.createElement('tr');

        // Állítsd be a nodeItemVisualizer class attributumát ListItemVisualizer értékre
        nodeItemVisualizer.setAttribute('class', 'ListItemVisualizer');
        // Állítsd be a nodeItemVisualizer data-productid attributumát a tétel productID értékére
        nodeItemVisualizer.setAttribute('data-productid', orderItem.productID);

        // Ciklussal járd be a megrendelés tétel összes tulajdonságát
        for (var memberName in orderItem) {
            // Hozz létre egy új megjelenítő DOM node-ot (cellát) az éppen feldolgozott tulajdonsághoz
            nodeTD = document.createElement('td');
            // A cellában jelenjen meg a tulajdonság értéke
            // Légy tekintettel a számoktól elvárt megjelenítésre!
            nodeTD.innerText = orderItem[memberName];
            // A cellát "pattintsd" fel a szülőjére
            nodeItemVisualizer.appendChild(nodeTD);
        }
        //Innen már kész
        nodeTD = document.createElement('TD');
        nodeActionLink = Application.buildActionLink('Edit', 'OrderItem', 'Details', OrderItemListButton_Clickhandler);
        nodeTD.appendChild(nodeActionLink);
        nodeActionLink = Application.buildActionLink('Delete', 'OrderItem', 'Delete', OrderItemListButton_Clickhandler);
        nodeTD.appendChild(nodeActionLink);
        nodeItemVisualizer.appendChild(nodeTD);
        nodeOrderItemListContainer.appendChild(nodeItemVisualizer);
    }
}

function OrderItemListButton_Clickhandler() {
    event.preventDefault();
    Application.executeCommand();
}