import Map from './Map';

const MD_WIDTH = 768;
$(() => {
    window.WP = window.WP || {};
    WP.maps = WP.maps || {};
    $('.dynamic-map').each(function() {
        const map = new Map(this);
        WP.maps[map.getId()] = map;
        if (!$(this).hasClass('lazy-load')) {
            map.initialize();
        }
    });

    /*
     * JavaScript for maps on specific pages.
     */

    // interactive_map
    const $dynamicMap = $('#location-map.dynamic-map');
    if ($dynamicMap.length) {
        const map = WP.maps['location-map'];
        let mapCenter;
        map.on('load', () => {
            mapCenter = map.getCenter();
        });
        map.on('dragend', evt => {
            $('.update').removeClass('hide');
        });

        map.on('zoomend', evt => {
            if (evt.causedBy != 'fitBounds') {
                const curCenter = map.getCenter();
                if (
                    mapCenter.lng.toFixed(5) != curCenter.lng.toFixed(5) ||
                    mapCenter.lat.toFixed(5) != curCenter.lat.toFixed(5)
                ) {
                    $('.update').removeClass('hide');
                }
            } else {
                mapCenter = map.getCenter();
            }
        });

        $('.update').on('click', function() {
            mapCenter = map.getCenter();
            $.ajax({
                method: 'GET',
                url: '/maps/update_map',
                data: {
                    lat: mapCenter.lat,
                    lng: mapCenter.lng,
                    num_pins: $(this).data('max-results')
                },
                success(data) {
                    map.updatePins({
                        'neighbor-pins': data.pin_data,
                        'featured-location-pins': []
                    });
                    $('#map-entries').html(data.html);
                    if ($('#location-map').hasClass('fullscreen')) {
                        updateFullscreenMapEntries();
                    }
                }
            });
            $('.update').addClass('hide');
        });

        $('#location-map').on('mapFullscreenChange', function(evt, action) {
            const $dynamicMap = $(this);
            if (action == 'enter') {
                updateFullscreenMapEntries();
                $dynamicMap
                    .find('#fullscreen-map-entries-container')
                    .removeClass('hide');
                $dynamicMap.find('.map-style-btn-group').addClass('yield-left-rail');
                $dynamicMap
                    .find('.update-btn-container')
                    .addClass('yield-left-rail-half');
            } else if (action == 'exit') {
                $dynamicMap.find('#fullscreen-map-entries-container').addClass('hide');
                $dynamicMap.find('.map-style-btn-group').removeClass('yield-left-rail');
                $dynamicMap
                    .find('.update-btn-container')
                    .removeClass('yield-left-rail-half');
            }
        });

        function updateFullscreenMapEntries() {
            $('#fullscreen-map-entries').html($('#map-entries').html());
        }
    }
});

// immediately load desktop view maps when applicable, even though they have `lazy-load` class.
['business-map', 'location-map'].forEach(mapId => {
    if ($(window).width() >= MD_WIDTH) {
        $(`#${mapId}`).removeClass('lazy-load');
    } else {
        $(window).bind('resize.init_desktop_map', () => {
            if ($(window).width() >= MD_WIDTH && $(`#${mapId}`).length) {
                WP.maps[mapId].initialize();
                $(window).unbind('resize.init_desktop_map');
            }
        });
    }
});