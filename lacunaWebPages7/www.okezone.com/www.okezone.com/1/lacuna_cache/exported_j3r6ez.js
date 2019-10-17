
        $(document).ready(function() {

            $.ajax({
                url: 'https://www.okezone.com/no-cache/beritaandawidget',
                type: 'GET',
                success: function(data) {
                    $('#rekomendasi').html(data);
                    swiperRecommendation();
                }
            });
        });
    