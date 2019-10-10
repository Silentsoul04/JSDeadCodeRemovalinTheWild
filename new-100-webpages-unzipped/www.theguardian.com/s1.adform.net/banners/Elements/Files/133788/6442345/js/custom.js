(function(Adf) {
    'use strict';

    function Products(options) {

        var productsHolder = options.productsHolder || document.getElementById('adf-products-holder');
        var banner = options.banner || document.getElementById('adf-banner');
        var productsPerPage = options.productsPerPage || 1;
        var isVertical = options.isVertical || false;
        var productIndex = 0;
        var productCount = 0;
        var firstPointerPos = 0;
        var lastPointerPos = 0;
        var pointerDelta = 0;
        var isPointerDown = false;
        var isRotating = false;
        var firstPointerId;
        var utilityClass;
        var clientProp = isVertical ? 'clientY' : 'clientX';
        var swipeThreshold = 10;

        this.init = function() {
            Adform.DCO.loadMessages(2 * productsPerPage, function(data, total) {
                productCount = total;
                // console.log(data.messages[0].product_name); 

                bb.data = data;
                bb.checkLoaded('custom');


            });
        };
    }

    Adf.Products = Products;

}(Adf = window.Adf || {}));