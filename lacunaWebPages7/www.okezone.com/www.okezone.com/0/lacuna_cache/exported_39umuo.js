
        /*SEARCH POST*/
        $('#search-top').on('click', function(e) {
            var text = $("[name=q]").val();
            window.location = 'http://search.okezone.com/search?q=' + text + '&highlight=1&sort=desc&start=0';
        });
        $('#textfield').on('keyup', function(e) {
            var text = $(this).val();
            if (e.keyCode == 13) {
                window.location = 'http://search.okezone.com/search?q=' + text + '&highlight=1&sort=desc&start=0';
            }
        });
    