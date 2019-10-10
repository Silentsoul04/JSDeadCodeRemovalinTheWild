import mapboxgl from 'mapbox-gl';
import {
    detect
} from 'detect-browser';
import bugsnagClient from 'bugsnag';

/* private constants */
const browser = detect();
const MAP_STYLES = {
    street: 'mapbox://styles/mapbox/streets-v10',
    satellite: 'mapbox://styles/mapbox/satellite-streets-v10'
};

/* private static functions */
const popupTemplateAd = pin => `
  <div class="location-label ad">
    ${pin.label}
  </div>
  <div class="info">
    ${pin.name ? `<h4 class="name title"> ${pin.name} </h4>` : ''}
    ${
      pin.city_state_zip
        ? `<p class="city-state-zip"><address> ${pin.city_state_zip} </address></p>`
        : ''
    }
    ${
      pin.description
        ? `<p class="description text-muted"> ${pin.description} </p>`
        : ''
    }
    ${
      pin.url
        ? `<p class="website"><a target="_blank" href="${pin.url}" class="right-pointing-angle"> Website </a></p>`
        : ''
    }
    ${
      pin.phone && pin.formatted_phone
        ? `<p class="phone">Call: <a href="tel:${pin.phone}"> ${pin.formatted_phone} </a></p>`
        : ''
    }
  </div>`;

const popupTemplateBusiness = pin => `
  <div class="location-label business">
    ${pin.label}
  </div>
  <div class="info">
    ${pin.name ? `<h4 class="name title"> ${pin.name} </h4>` : ''}
    ${
      pin.neighborhood
        ? `<p class="neighborhood"><address> ${pin.neighborhood} </address></p>`
        : ''
    }
    ${
      pin.url
        ? `<p class="details"><a href="${pin.url}" class="right-pointing-angle"> Details </a></p>`
        : ''
    }
  </div>`;

const popupTemplateNeighbor = pin => {
    var occupancyType = pin.is_people ? 'resident' : 'business';
    if (pin.count > 2) {
        occupancyType += pin.is_people ? 's' : 'es';
    }
    return `
    <div class="location-label neighbor">
      ${pin.label}
    </div>
    <div class="info">
      ${
        pin.address_line_1
          ? `<h4 class="title"><address> ${pin.address_line_1} </address></h4>`
          : ''
      }
      ${pin.name ? `<p class="name"> ${pin.name} </p>` : ''}
      ${pin.count > 1 ? `<p> + more ${occupancyType} </p>` : ''}
      ${
        pin.url
          ? `<p class="details"><a href="${pin.url}" class="right-pointing-angle"> Details </a></p>`
          : ''
      }
    </div>`;
};

/* private static variables */
var fullScreenMapId = undefined;

/* class Map */
export default class Map {
    constructor(selector) {
        /* private instance variables */
        this._$mapElement = $(selector);
        this._id = this._$mapElement.attr('id');
        this._initialized = false;
        this._pinDataNames = this._$mapElement.data('pin-layer-names') || [];
        this._validLnglats = []; // all valid lnglats
        this._pinDataNames
            .slice()
            .reverse()
            .forEach(pinDataName => {
                this._validLnglats.push.apply(
                    this._validLnglats,
                    this._getValidLnglats(this._$mapElement.data(pinDataName))
                );
            });
        this._geoSources = {};
        this._initZoom =
            this._$mapElement.data('zoom-level') ||
            (this._$mapElement.hasClass('fuzzy-address') ? 9 : 14);
        this._mapboxMap = undefined;
        this._initialized = false;
        this._initializing = false;
        this._popup = undefined;
        this._eventQueue = [];
        this._supported = undefined;

        /* public functions */
        this.isInitializing = () => this._initializing;
        this.isInitialized = () => this._initialized;
        this.initialize = () =>
            !this._initializing &&
            !this._initialized &&
            this._supported &&
            this._init();
        this.getId = () => this._id;
        this.getCenter = () =>
            this._initialized ? this._mapboxMap.getCenter() : undefined;
        this.resize = () => this._initialized && this._mapboxMap.resize();
        this.on = (...args) => {
            this._eventQueue.push({
                method: 'on',
                args: args
            });
            this._drainEventQueue();
        };
        this.one = (...args) => {
            this._eventQueue.push({
                method: 'once',
                args: args
            });
            this._drainEventQueue();
        };
        this.off = (...args) => {
            this._eventQueue.push({
                method: 'off',
                args: args
            });
            this._drainEventQueue();
        };
        this.updatePins = pinData => this._updatePins(this._mapboxMap, pinData);

        /* prepare data */
        this._supported = this._validLnglats.length && mapboxgl.supported();
        if (this._supported) {
            mapboxgl.accessToken = process.env.MAPBOX_API_TOKEN;
            var pinData = {};
            this._pinDataNames.forEach(pinDataName => {
                pinData[pinDataName] = this._$mapElement.data(pinDataName) || [];
            });
            this._geoSources = this._getGeoSources(pinData);
        } else {
            if (!this._validLnglats.length) {
                this._log(`No valid locations found for the map ${this._id}`, 'error');
            } else {
                this._log('Map is not supported.', 'warn');
            }
            this._$mapElement.hide();
            this._$mapElement
                .parent()
                .find('.map-render-error')
                .show();
        }
    }

    /* private functions */
    _drainEventQueue() {
        if (this._mapboxMap) {
            var eventHandler = undefined;
            while ((eventHandler = this._eventQueue.shift())) {
                this._mapboxMap[eventHandler['method']].apply(
                    this._mapboxMap,
                    eventHandler['args']
                );
            }
        }
    }

    _getValidLnglats(pins) {
        if (pins !== undefined && pins.length > 0) {
            return pins
                .map(this._getValidLnglat)
                .filter(lnglat => lnglat !== undefined);
        } else {
            return [];
        }
    }

    _getValidLnglat(pin) {
        if (pin !== undefined && pin.lat !== null && pin.lng !== null) {
            return [pin.lng, pin.lat];
        } else {
            return undefined;
        }
    }

    _getGeoSources(pinData) {
        var geoSources = {};
        this._pinDataNames.forEach(pinDataName => {
            var pins = pinData[pinDataName] || [];
            geoSources[pinDataName] = this._getGeoSource(pins, false);
            if (this._$mapElement.data('mark-label')) {
                geoSources[pinDataName + '-label'] = this._getGeoSource(pins, true);
            }
            if (this._$mapElement.data('mark-symbol')) {
                geoSources[pinDataName + '-symbol'] = this._getGeoSource(pins, false);
            }
        });
        return geoSources;
    }

    _updatePins(mapboxMap, pinData) {
        this._geoSources = this._getGeoSources(pinData);
        this._clearPopup();
        this._validLnglats = [];
        this._pinDataNames
            .slice()
            .reverse()
            .forEach(pinDataName => {
                this._validLnglats.push.apply(
                    this._validLnglats,
                    this._getValidLnglats(pinData[pinDataName])
                );
            });
        this._pinDataNames.forEach(pinDataName => {
            mapboxMap
                .getSource(pinDataName)
                .setData(this._geoSources[pinDataName].data);
            if (this._$mapElement.data('mark-label')) {
                var labelLayerName = pinDataName + '-label';
                mapboxMap
                    .getSource(labelLayerName)
                    .setData(this._geoSources[labelLayerName].data);
            }
        });
        this._fitMultiAddrBounds(mapboxMap);
    }

    _onFirstLoad(mapboxMap) {
        this._fitMultiAddrBounds(mapboxMap);
        this._onReload(mapboxMap);
        var thisObj = this;

        // Track fullscreen switch and fire events
        this._$mapElement.find('.mapboxgl-ctrl-icon').on('click', function() {
            if ($(this).hasClass('mapboxgl-ctrl-fullscreen')) {
                thisObj._$mapElement.trigger('mapFullscreenChange', ['enter']);
                fullScreenMapId = thisObj._id;
            }
        });

        $(document).on(
            'fullscreenchange webkitfullscreenchange mozfullscreenchange MSFullscreenChange',
            function() {
                if (fullScreenMapId == thisObj._id) {
                    if (!(
                            document.fullscreen ||
                            document.webkitIsFullScreen ||
                            document.mozFullScreen ||
                            document.msFullscreenElement
                        )) {
                        thisObj._$mapElement.trigger('mapFullscreenChange', ['exit']);
                        fullScreenMapId = undefined;
                    }
                }
            }
        );

        this._$mapElement.on('mapFullscreenChange', function(evt, action) {
            if (action == 'enter') {
                thisObj._$mapElement.addClass('fullscreen');
            } else if (action == 'exit') {
                thisObj._$mapElement.removeClass('fullscreen');
            }
            mapboxMap.resize();
        });

        // Register popup
        var popupLayers = this._$mapElement.data('popup-layers') || [];
        popupLayers.forEach(pinDataName => {
            this._addPopup(mapboxMap, pinDataName);
        });
    }

    _getLabel(pinTheme, index) {
        var label = '';
        if (index !== undefined) {
            switch (pinTheme) {
                case 'ad':
                    label = String.fromCharCode(65 + index);
                    break;
                case 'business':
                case 'neighbor':
                    label = index + 1;
                    break;
                case 'featured':
                    label = '●';
                    break;
            }
        }
        return label;
    }

    _init() {
        this._initializing = true;
        var mapObj = this;
        // get initial map style
        var styleName = this._$mapElement.data('style') || 'street';
        var style = MAP_STYLES[styleName];
        var $styleBtnGroup = this._$mapElement.find('.map-style-btn-group');
        if ($styleBtnGroup.find('.selected').attr('style') != styleName) {
            $styleBtnGroup.find('.map-style-btn').removeClass('selected');
            $styleBtnGroup
                .find('.map-style-btn[data-style="' + styleName + '"]')
                .addClass('selected');
        }

        // initialize mapbox
        var mapboxMap = new mapboxgl.Map({
            container: this._id,
            style: style,
            center: this._validLnglats[0],
            zoom: this._initZoom,
            dragRotate: false
        });
        this._mapboxMap = mapboxMap;

        var resetStyleTimer = undefined;
        mapboxMap.once('load', function() {
            if (resetStyleTimer) {
                clearTimeout(resetStyleTimer);
            }
            mapObj._onFirstLoad(mapboxMap);
            mapObj._log('loaded', 'log');
        });

        this._drainEventQueue();

        // bind style toggle events
        this._$mapElement.find('.map-style-btn').on('click', function() {
            var $this = $(this);
            if (!$this.hasClass('selected')) {
                $this
                    .closest('.map-style-btn-group')
                    .find('.map-style-btn')
                    .toggleClass('selected');
                mapboxMap.setStyle(MAP_STYLES[$this.data('style')]);
                mapboxMap.once('styledata', function() {
                    mapObj._onReload(mapboxMap);
                });
            }
        });

        /*
         * Reset style to make sure map is fully loaded in IE (and some other browsers, as reported).
         * See https://github.com/mapbox/mapbox-gl-js/issues/4821
         */
        mapboxMap.setStyle(style);
        resetStyleTimer = setTimeout(function() {
            mapboxMap.setStyle(style);
        }, 1000 * 10);

        // add controllers
        // Internet Explorer 6-11 behaves abnormally in mapbpx full screen mode.
        if (browser.name != 'ie') {
            mapboxMap.addControl(new mapboxgl.FullscreenControl());
        }
        if (this._$mapElement.data('navigation')) {
            mapboxMap.addControl(
                new mapboxgl.NavigationControl({
                    showCompass: false
                }),
                'bottom-right'
            );
        }
        this._$mapElement.find('.add-on').show();

        this._initialized = true;
        this._initializing = false;
        this._log('intialized', 'log');
        return mapboxMap;
    }

    _fitMultiAddrBounds(mapboxMap) {
        if (this._validLnglats.length > 1) {
            var bounds = new mapboxgl.LngLatBounds();
            this._validLnglats.forEach(function(lnglat) {
                bounds.extend(lnglat);
            });
            mapboxMap.fitBounds(
                bounds, {
                    padding: 30,
                    maxZoom: this._initZoom
                }, {
                    causedBy: 'fitBounds'
                }
            );
        }
    }

    _addLabelLayer(mapboxMap, sourceName) {
        mapboxMap.addLayer({
            id: 'labels-' + sourceName,
            type: 'symbol',
            source: sourceName,
            filter: ['==', 'has-lnglat', true],
            layout: {
                'text-field': '{label}',
                'text-size': 14
            },
            paint: {
                'text-color': '#ffffff'
            }
        });
    }

    _addSymbolLayer(mapboxMap, sourceName, img_url) {
        mapboxMap.loadImage(img_url, function(error, image) {
            mapboxMap.addImage('symbol-pin', image);
            mapboxMap.addLayer({
                id: 'symbol-' + sourceName,
                type: 'symbol',
                source: sourceName,
                layout: {
                    'icon-image': 'symbol-pin',
                    'icon-size': 0.5,
                    'icon-anchor': 'bottom'
                }
            });
        });
    }

    _addCircleLayer(mapboxMap, sourceName) {
        if (this._$mapElement.hasClass('fuzzy-address')) {
            var paint = {
                // Fix circle radius relative to map contents.
                // When zoom level is smaller than 7, keep radius as 12.5 .
                // When zoom level is greater than 22 (upper bound), keep radius as 409600 .
                // I.e. radius = max of [50 * Math.pow(2, zoomLevel - 9) , 12.5];
                'circle-radius': [
                    'interpolate', ['exponential', 2],
                    ['zoom'],
                    7,
                    12.5,
                    22,
                    409600
                ],
                'circle-color': '#91b623',
                'circle-opacity': 0.4
            };
        } else {
            var paint = {
                'circle-radius': 11,
                'circle-color': {
                    type: 'categorical',
                    property: 'theme',
                    stops: [
                        ['ad', '#3e9bbf'],
                        ['business', '#fbab1b'],
                        ['neighbor', '#fbab1b'],
                        ['location', '#fbab1b'],
                        ['featured', '#86c44d']
                    ],
                    default: '#ff0000'
                },
                'circle-stroke-width': 2,
                'circle-stroke-color': '#ffffff'
            };
        }

        var mapboxPin = {
            id: 'circles-' + sourceName,
            type: 'circle',
            source: sourceName,
            filter: ['==', 'has-lnglat', true],
            paint: paint
        };
        mapboxMap.addLayer(mapboxPin);
    }

    _getGeoSource(pins, isLabelLayer) {
        var geoPointFeatures = pins.map((pin, index) => {
            pin.label = pin.label || this._getLabel(pin.theme, index);
            pin['has-lnglat'] = this._getValidLnglat(pin) !== undefined;
            return {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [pin.lng, pin.lat]
                },
                properties: pin
            };
        });

        if (!isLabelLayer) {
            geoPointFeatures.reverse();
        }

        var source = {
            type: 'geojson',
            data: {
                type: 'FeatureCollection',
                features: geoPointFeatures
            }
        };
        return source;
    }

    _onReload(mapboxMap) {
        this._pinDataNames.forEach(pinDataName => {
            mapboxMap.addSource(pinDataName, this._geoSources[pinDataName]);
            if (this._$mapElement.data('mark-symbol')) {
                var symbolLayerName = pinDataName + '-symbol';
                mapboxMap.addSource(symbolLayerName, this._geoSources[symbolLayerName]);
                this._addSymbolLayer(
                    mapboxMap,
                    symbolLayerName,
                    this._$mapElement.data('mark-symbol')
                );
            } else {
                this._addCircleLayer(mapboxMap, pinDataName);
            }
            if (this._$mapElement.data('mark-label')) {
                var labelLayerName = pinDataName + '-label';
                mapboxMap.addSource(labelLayerName, this._geoSources[labelLayerName]);
                this._addLabelLayer(mapboxMap, labelLayerName);
            }
        });
    }

    _clearPopup() {
        if (this._popup !== undefined) {
            this._popup.remove();
            this._popup = undefined;
        }
    }

    _addPopup(mapboxMap, pinDataName) {
        var circleLayerName = 'circles-' + pinDataName;
        // Change the cursor to a pointer when the mouse is over the places layer.
        mapboxMap.on('mouseenter', circleLayerName, function() {
            $(mapboxMap.getCanvas()).addClass('cursor-pointer');
        });

        // Change it back to a pointer when it leaves.
        mapboxMap.on('mouseleave', circleLayerName, function() {
            $(mapboxMap.getCanvas()).removeClass('cursor-pointer');
        });

        mapboxMap.on('click', circleLayerName, e => {
            var coordinates = e.features[0].geometry.coordinates.slice();
            if (this._popup) {
                if (
                    this._popup
                    .getLngLat()
                    .toArray()
                    .filter((value, index) => value != coordinates[index]).length == 0
                ) {
                    this._clearPopup();
                    return;
                }
            }
            var description = this._generatePopupHtml(e.features[0].properties);
            if (description) {
                this._clearPopup();
            }
            if (!description) {
                $(mapboxMap.getCanvas()).removeClass('cursor-pointer');
                return;
            }
            // Ensure that if the map is zoomed out such that multiple
            // copies of the feature are visible, the popup appears
            // over the copy being pointed to.
            while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
                coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
            }
            this._popup = new mapboxgl.Popup();
            this._popup
                .setLngLat(coordinates)
                .setHTML(description)
                .addTo(mapboxMap);
        });
    }

    _generatePopupHtml(pin) {
        switch (pin.theme) {
            case 'ad':
                return popupTemplateAd(pin);
            case 'business':
                return popupTemplateBusiness(pin);
            case 'neighbor':
                return popupTemplateNeighbor(pin);
            default:
                return '';
        }
    }

    _log(msg, type) {
        if (['chrome', 'firefox'].includes(browser.name)) {
            const LOG_COLORS = {
                log: '#000000',
                info: '#000000',
                warn: '#cc9900',
                error: '#ff0000'
            };
            console[type](
                '%c Map %c %s',
                'background: #07c; color: #fff;',
                `background: transparent; color: ${LOG_COLORS[type]}`,
                msg
            );
        } else {
            console[type](`[Map] ${msg}`);
        }
        if (type == 'error') {
            bugsnagClient.notify(new Error(msg));
        }
    }
}