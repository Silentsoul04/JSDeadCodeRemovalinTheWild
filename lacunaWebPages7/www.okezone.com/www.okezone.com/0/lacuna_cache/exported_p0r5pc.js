
        $(".hitshare").click(function(event) {
            var rootattr = event.target.id;
            if (rootattr != "") {
                $.ajax({
                    url: 'https://www.okezone.com/hitlog/hitshare',
                    type: "POST",
                    data: {
                        content_id: '',
                        source: rootattr
                    },
                    success: function(data) {
                        console.log(data);
                    }
                });
            }

        });
    