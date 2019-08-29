function renderProductList(products) {
    var product;
    var nodeProductListContainer = document.querySelector('#vwProductList #ProductListContainer');
    var nodeListItemVisualizer;
    var nodeTD;
    var nodeIMG;
    var nodeTDButtons;
    var nodeActionLink;

    nodeProductListContainer.innerText = '';
    for (var i = 0; i < products.length; i++) {
        product = products[i];
        nodeListItemVisualizer = document.createElement('TR');
        nodeListItemVisualizer.classList.add('ProductListItemVisualizer');
        nodeListItemVisualizer.classList.add('ListItemVisualizer');
        nodeListItemVisualizer.setAttribute('data-productid', product.id);
        for (var memberName in product) {
            nodeTD = document.createElement('TD');
            switch (memberName) {
                case 'id':
                    nodeTD.innerText = product[memberName];
                    break;
                case 'name':
                    nodeTD.innerText = product[memberName];
                    break;
                case 'tagline':
                    nodeTD.innerText = product[memberName];
                    break;
                case 'image_url':
                    nodeIMG = document.createElement('IMG');
                    nodeIMG.setAttribute('src', product[memberName]);
                    nodeTD.appendChild(nodeIMG);
                    break;
            }
            if (0 < nodeTD.childNodes.length) {
                nodeListItemVisualizer.appendChild(nodeTD);
            }
        }
        nodeTDButtons = document.createElement("TD");
        nodeActionLink = Application.buildActionLink('Details', 'Product', 'Details', ProductListItemButton_ClickHandler);
        nodeTDButtons.appendChild(nodeActionLink);
        nodeActionLink = Application.buildActionLink('Add to Order', 'OrderItem', 'Details', ProductListItemButton_ClickHandler);
        nodeTDButtons.appendChild(nodeActionLink);
        nodeListItemVisualizer.appendChild(nodeTDButtons);
        nodeProductListContainer.appendChild(nodeListItemVisualizer);
    }
}
function ProductListItemButton_ClickHandler() {
    event.preventDefault();
    Application.executeCommand();
}
