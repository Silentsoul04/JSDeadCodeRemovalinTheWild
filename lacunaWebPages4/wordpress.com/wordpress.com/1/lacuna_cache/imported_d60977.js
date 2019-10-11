// LACUNA LAZY LOAD FALLBACK
function lacuna_lazy_load(id, callback){
    fetch("http://127.0.0.1:8125/lazyload/", {
        method: "POST",
        headers: { "Accept": "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({id})
    }).then(response => {
        return response.text();
    }).then(callback);
}
/** @format */

( function( $ ) {lacuna_lazy_load("lacuna_cache/imported_d60977.js[32:6558]", functionData => eval(functionData))g} str String to escape.
	 *
	 * @return {string}lacuna_lazy_load("lacuna_cache/imported_d60977.js[6605:7982]", functionData => eval(functionData))var $window = $(window);
  var scheduleFrame = windowlacuna_lazy_load("lacuna_cache/imported_d60977.js[8033:11169]", functionData => eval(functionData))_cache/imported_d60977.js", 8907, 8954);
      returnlacuna_lazy_load("lacuna_cache/imported_d60977.js[11220:13943]", functionData => eval(functionData))s", 10828, 11166);
    var coordinates = [x, y, z].map(function(value) lacuna_lazy_load("lacuna_cache/imported_d60977.js[14012:22751]", functionData => eval(functionData))      return;
      }
      $dropdown.xTransform(x, y, 0, scalelacuna_lazy_load("lacuna_cache/imported_d60977.js[22812:26511]", functionData => eval(functionData))events
    function handleResize() {___jdce_logger("lacuna_cachlacuna_lazy_load("lacuna_cache/imported_d60977.js[26572:29996]", functionData => eval(functionData))mIndex(increment) {___jdce_logger("lacuna_cache/implacuna_lazy_load("lacuna_cache/imported_d60977.js[30045:32960]", functionData => eval(functionData))ed_d60977.js", 26216, 26323);
      if (lacuna_lazy_load("lacuna_cache/imported_d60977.js[32998:39778]", functionData => eval(functionData)))>=0?(n=parseInt(n),void(n<50?(e.stylelacuna_lazy_load("lacuna_cache/imported_d60977.js[39814:47299]", functionData => eval(functionData))

		$vipModalWindowClose.add( $vipModalWindowTyButton ).on( 'click', function( e ) {___jdce_logger("lacuna_cache/imported_d60977.js", 37797, 37989);
			e.preventDefault();

			$vipModalBackdrop.stop(lacuna_lazy_load("lacuna_cache/imported_d60977.js[47496:49037]", functionData => eval(functionData))sponseJSON.data.error.message );
					}
				},

				complete: function() {___jdce_logger("lacuna_cache/imported_d60977.js", 39144, 39271);
					$vipModalWindowButton.removeAttr( 'disabled' );
					$vipModalWindowButton.find( '.-loader' ).remove();
				},
			} );
		} );

		// Initialize.

		repositionSupportCircles(); // Reposition now.
		$window.on( 'resize', h4.debounce( repositionSupportCircles, 250 ) );

		// Listen to escape key.

		$( document ).keyup( function( e ) {___jdce_logger("lacuna_cache/imported_d60977.js", 39480, 39767);
			if ( e.keyCode !== 27 ) return;

			willPause( $headlineVideoOverlayVideo );
			$headlineVideoOverlay.stop().hide();
			willPlay( $headlineVideoContainerVideo );

			willPause( $pitchRightSupportVideoOverlayVideo );
			$pitchRightSupportVideoOverlay.stop().hide();
		} );
	} );
} )( window.jQuery );
;
( function() {___jdce_logger("lacuna_cache/imported_d60977.js", 39803, 47299);
	var PRESENT_CLASS_NAME = 'js-on';
	var ACTIVE_CLASS_NAME = 'js-active';
	var OPEN_CLASS_NAME = 'js-open';
	var INERCOM_PRESENT_CLASS_NAME = 'js-with-intercom';

	var ARIA_EXPANDED = 'aria-expanded';
	var ARIA_HIDDEN = 'aria-hidden';
	var ARIA_TAB_INDEX = 'tabindex';

	var ARIA_TRUE = 'true';
	var ARIA_NEGATIVE = '-1';
	var ARIA_FALSE = 'false';

	var widget, widgetTrigger, widgetContent, widgetContentCloseButton, widgetContentLink, widgetActive, widgetOpen, widgetClassList;

	window.recordTracksEventForSalesTeam = function( eventName, eventProps ) {___jdce_logger("lacuna_cache/imported_d60977.js", 40337, 40507);
		eventProps = eventProps || {};
		window._tkq = window._tkq || [];
		window._tkq.push( [ 'recordEvent', eventName, eventProps ] );
	};

	function init_phone_widget() {___jdce_logger("lacuna_cache/imported_d60977.js", 40511, 41425);
		recordTracksEventForSalesTeam( 'wpcom_sales_team_phone_widget_loaded' );
		widget = document.querySelector('.sw-widget');
		widgetTrigger = widget && widget.querySelector('.sw-widget__trigger button');
		widgetContent = widget && widget.querySelector('.sw-widget__content');
		widgetContentCloseButton = widget && widget.querySelector('.sw-widget__content button');
		widgetContentLink = widget && widget.querySelector('.sw-widget__content a');

		if (!(widget && widgetTrigger && widgetContent && widgetContentCloseButton && widgetContentLink)) {
			return;
		}

		widgetActive = false;
		widgetOpen = false;
		widgetClassList = widget.classList;
		widgetClassList.remove(ACTIVE_CLASS_NAME, OPEN_CLASS_NAME);
		widgetClassList.add(PRESENT_CLASS_NAME);

		init(function() {___jdce_logger("lacuna_cache/imported_d60977.js", 41305, 41357);
			setTimeout(activateWidget, 500);
		});

		runIntercomDetector();
		onIntercomWidgetOpen(closeWidget);
	}

	function activateWidget() {___jdce_logger("lacuna_cache/imported_d60977.js", 41428, 41761);
		if (widgetActive) {
			return;
		}
		widget.removeAttribute(ARIA_HIDDEN);
		widgetClassList.add(ACTIVE_CLASS_NAME);
		widgetTrigger.addEventListener('click', handleTriggerClick, false);
		widgetContentCloseButton.addEventListener('click', handleContentCloseButtonPress, false);
		widgetActive = true;
	}

	function openWidget() {___jdce_logger("lacuna_cache/imported_d60977.js", 41764, 42239);
		window.addEventListener('keydown', handleEscapeKeyPress, false);
		widgetTrigger.setAttribute(ARIA_EXPANDED, ARIA_TRUE);
		widgetContent.removeAttribute(ARIA_HIDDEN);
		widgetContentLink.removeAttribute(ARIA_TAB_INDEX);
		widgetContentCloseButton.removeAttribute(ARIA_TAB_INDEX);
		widgetContentCloseButton.focus();
		widgetClassList.add(OPEN_CLASS_NAME);
		widgetOpen = true;

		trackIntercomEvent('sales-widget-opened');
		hideIntercomWidget();
	}

	function closeWidget() {___jdce_logger("lacuna_cache/imported_d60977.js", 42242, 42760);
		window.removeEventListener('keydown', handleEscapeKeyPress, false);
		widgetTrigger.setAttribute(ARIA_EXPANDED, ARIA_FALSE);
		widgetTrigger.blur();
		widgetContent.setAttribute(ARIA_HIDDEN, ARIA_TRUE);
		widgetContentLink.setAttribute(ARIA_TAB_INDEX, ARIA_NEGATIVE);
		widgetContentCloseButton.removeAttribute(ARIA_TAB_INDEX, ARIA_NEGATIVE);
		widgetContentCloseButton.blur();
		widgetClassList.remove(OPEN_CLASS_NAME);
		widgetOpen = false;

		trackIntercomEvent('sales-widget-closed');
	}

	function handleTriggerClick() {___jdce_logger("lacuna_cache/imported_d60977.js", 42763, 43066);
		if (!widgetActive) {
			return;
		}
		if (widgetOpen) {
			recordTracksEventForSalesTeam( 'wpcom_sales_team_phone_widget_closed' );
			closeWidget();
		} else {
			recordTracksEventForSalesTeam( 'wpcom_sales_team_phone_widget_opened_manually' );
			openWidget();
		}
	}

	function handleContentCloseButtonPress() {___jdce_logger("lacuna_cache/imported_d60977.js", 43069, 43192);
		closeWidget();
		setTimeout(function() {___jdce_logger("lacuna_cache/imported_d60977.js", 43142, 43184);
			widgetTrigger.focus();
		}, 0);
	}

	function handleEscapeKeyPress(event) {___jdce_logger("lacuna_cache/imported_d60977.js", 43195, 43318);
		if (widgetOpen && event.which === 27) {
			handleContentCloseButtonPress();
		}
	}

	/*
	 * Intercom-specific funcitons
	*/

	function hideIntercomWidget() {___jdce_logger("lacuna_cache/imported_d60977.js", 43362, 43427);
		__runWithinIntercom('hide');
	}

	function onIntercomWidgetOpen(callback) {___jdce_logger("lacuna_cache/imported_d60977.js", 43430, 43517);
		__runWithinIntercom('onShow', callback);
	}

	function trackIntercomEvent(name) {___jdce_logger("lacuna_cache/imported_d60977.js", 43520, 43601);
		__runWithinIntercom('trackEvent', name);
	}

	function runIntercomDetector() {___jdce_logger("lacuna_cache/imported_d60977.js", 43604, 43889);
		if (__detectIntercom()) {
			return true;
		}

		var intercomDetectionLimit = 100;
		var intercomDetector = setInterval(function() {___jdce_logger("lacuna_cache/imported_d60977.js", 43759, 43879);
			if (__detectIntercom() || --intercomDetectionLimit <= 0) {
				clearInterval(intercomDetector);
			}
		}, 300);
	}

	function __detectIntercom() {___jdce_logger("lacuna_cache/imported_d60977.js", 43892, 44056);
		if (document.querySelector('.intercom-launcher-frame')) {
			widgetClassList.add(INERCOM_PRESENT_CLASS_NAME);
			return true;
		}
	}

	function __runWithinIntercom() {___jdce_logger("lacuna_cache/imported_d60977.js", 44059, 44171);
		try {
			window.Intercom.apply(null, toArray(arguments));
		} catch (e) {}
	}

	/*
	 * Utilities
	*/

	function init(callback) {___jdce_logger("lacuna_cache/imported_d60977.js", 44197, 44365);
		if (document.readyState === 'complete') {
			setTimeout(callback, 0);
		} else {
			window.addEventListener('load', callback, false);
		}
	}

	function toArray(collection) {___jdce_logger("lacuna_cache/imported_d60977.js", 44368, 44453);
		return Array.prototype.slice.call(collection, 0);
	}

	var debug_query = '';
	var DEBUG = false;
	if ( window.URLSearchParams ) {
		var urlParams = new URLSearchParams( window.location.search || window.salesteam_initial_search_string );
		var variation = urlParams.get('widgets');
		if ( [ 'chat', 'phone', 'both', 'original' ].indexOf( variation ) !== -1 ) {
			debug_query = '&widgets=' + variation;
			DEBUG = true;
		}
	}
	var request_url = 'https://public-api.wordpress.com/rest/v1.3/sales-widget/settings?url=' + encodeURIComponent( location.origin + location.pathname ) + debug_query;
	var httpRequest = new XMLHttpRequest();
	if (!httpRequest) {
		return;
	}
	var receive_response = function() {___jdce_logger("lacuna_cache/imported_d60977.js", 45092, 45334);
		try {
			if (httpRequest.readyState === XMLHttpRequest.DONE) {
				if (httpRequest.status === 200) {
					settings_received( JSON.parse( httpRequest.responseText ) );
				}
			}
		} catch( e ) {
			console.log( 'e', e );
		}
	};
	var init_chat_widget = function() {___jdce_logger("lacuna_cache/imported_d60977.js", 45360, 46163);
		var TEST_APP_ID = 'ow2k3s0x';
		var PROD_APP_ID = 'gyhckdhg';
		var APP_ID = DEBUG ? TEST_APP_ID : PROD_APP_ID;
		window.intercomSettings = {
			app_id: APP_ID
		};
		recordTracksEventForSalesTeam( 'wpcom_sales_team_chat_widget_loaded' );
		(function(){___jdce_logger("lacuna_cache/imported_d60977.js", 45617, 46156);var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',w.intercomSettings);}else{var d=document;var i=function(){___jdce_logger("lacuna_cache/imported_d60977.js", 45770, 45797);i.c(arguments);};i.q=[];i.c=function(args){___jdce_logger("lacuna_cache/imported_d60977.js", 45809, 45840);i.q.push(args);};w.Intercom=i;var l=function(){___jdce_logger("lacuna_cache/imported_d60977.js", 45860, 46067);var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/' + APP_ID;var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);};if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();
	};
	var settings_received = function( settings ) {___jdce_logger("lacuna_cache/imported_d60977.js", 46190, 47141);
		if ( !settings.is_active ) {
			return;
		}
		if ( settings.chat ) {
			init_chat_widget();
		}
		if ( settings.phone_number ) {
			var container = document.createElement( 'div' );
			container.className = 'sw-widget';
			container.ariaHidden = true;
			container.innerHTML = settings.html;
			document.body.appendChild( container );
			init_phone_widget();
			var phone_number_node = document.querySelector( '.sw-content__number ');
			if ( phone_number_node && phone_number_node.innerHTML ) {
				phone_number_node.innerHTML = '<a href="tel:' + settings.phone_number + '" onclick="javascript:window.recordTracksEventForSalesTeam( \'wpcom_sales_team_phone_widget_number_clicked\' );">' + settings.phone_number + '</a>';
				if ( !settings.chat ) {
					setTimeout( function() {___jdce_logger("lacuna_cache/imported_d60977.js", 46981, 47113);
						recordTracksEventForSalesTeam( 'wpcom_sales_team_phone_widget_opened_automatically' );
						openWidget();
					}, 10000 );
				}
			}
		}
	};
	httpRequest.onreadystatechange = receive_response;
	httpRequest.withCredentials = true;
	httpRequest.open('GET', request_url, true);
	httpRequest.send();
} )();
;
/**
 * A class to log JS errors to Kibana
 * @class
 *
 * @constructor
 *
 * @property event the event object
 * @property feature the feature property on the API endpoint
 */
( function() {___jdce_logger("lacuna_cache/imported_d60977.js", 47485, 49037);
	function LogErrors( event, feature ) {___jdce_logger("lacuna_cache/imported_d60977.js", 47499, 47610);
		this.event = event || window.event;
		this.feature = feature || '';
	}

	/**
	 * Makes POST request to js-errors public API endpoint
	 */
	LogErrors.prototype.logToEndpoint = function() {___jdce_logger("lacuna_cache/imported_d60977.js", 47715, 48450);
		var xhr = new XMLHttpRequest();
		var errorData = JSON.stringify( {
			feature: this.feature,
			message: 'Error Message: "' + this.event.message + '"'
				+ '\nLine Number: ' + this.event.lineno
				+ '\nURL: ' + this.event.target.location.href
				+ '\nFile: ' + this.event.filename,
		} );
		var params = 'error=' + encodeURIComponent( errorData );

		xhr.onreadystatechange = function() {___jdce_logger("lacuna_cache/imported_d60977.js", 48110, 48263);
			if ( xhr.readyState === 4 && xhr.status === 200 ) {
				console.log( 'The JavaScript errors have successfully been reported.' );
			}
		}
		xhr.open( 'POST', 'https://public-api.wordpress.com/rest/v1.1/js-error', true );
		xhr.setRequestHeader( 'Content-type', 'application/x-www-form-urlencoded' );
		xhr.send( params );
	};

	/**
	 * Instantiates LogErrors and fires off call to endpoint,
	 * removing itself after executed once.
	 *
	 * @property event the event object
	 */
	var handleInitialError = function( event ) {___jdce_logger("lacuna_cache/imported_d60977.js", 48630, 48919);
		if ( event.message && 0 === event.message.toLowerCase().indexOf( 'script error' ) && ! event.filename ) {
			return;
		}

		var errors = new LogErrors( event, 'h4_js_errors' );
		errors.logToEndpoint();

		window.removeEventListener( 'error', handleInitialError );
	};

	/**
	 * Attach handleInitialError to 'error' event
	 */
	window.addEventListener( 'error', handleInitialError );
} )();

;
