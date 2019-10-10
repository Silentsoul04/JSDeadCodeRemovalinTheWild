
                    (function() {
                        var $eleList = document.querySelectorAll('.j_init_price');
                        for (var i = 0, len = $eleList.length; i < len; i++) {
                            var price = parseFloat($eleList[i].getAttribute('price')) / 100;
                            $eleList[i].innerText = price;
                        }
                    })();
                