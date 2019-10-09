
	( function( $ ) {___jdce_logger("lacuna_cache/exported_s7hlxd.js", 4, 14729);
		'use strict';
		if ( ! $ ) return; // No jQuery.

		var $document = $( window.document );

		function getWPCOMAnalyticsDefaultConfig() {___jdce_logger("lacuna_cache/exported_s7hlxd.js", 115, 440);
			return {
				lpName: window.location.pathname.replace(/^\/|\/$/g, ''),
				lpVariation: '',
				lpPersonalVariation: '',
				isHomepage: true,
				currentUserIdHash: "",
				currentUserIdHashShort: "",
				currentUserEmailHash: "",
				affiliateJSVersion: "1557961113",
			}
		}

		$document.on( 'a8c-analytics:loaded', function() {___jdce_logger("lacuna_cache/exported_s7hlxd.js", 482, 14723);
			var kit = window.a8cAnalytics.kit;

			var gao = kit.getQueryVar( 'gao' ) || '';
			var _gaexp = String( kit.docCookies.getItem( '_gaexp' ) || '' );

			var gaOptimize = window.a8cGAOptimize || null;
			gaOptimize = gaOptimize && gaOptimize.isEnabled() ? gaOptimize : null;

			var config = getWPCOMAnalyticsDefaultConfig();
			$.extend( config, window.a8cAnalyticsConfig.fireAnalyticsOptions );

			var useGtm = null !== kit.getQueryVar( 'use-gtm' );

			if ( useGtm ) {
				kit.loadGoogleTagManager( 'GTM-TSZXSX' );
				window.dataLayer.push( { 'event':'a8c-analytics:loaded' } );
			}

			function fireTracks() {___jdce_logger("lacuna_cache/exported_s7hlxd.js", 1090, 1394);
				var props = $.extend( {}, kit.getQueryVars( '', kit.QUERY_PARAMS ), {
					lp_name: config.lpName,
					lp_variation: config.lpVariation,
					lp_personal_variation: config.lpPersonalVariation,
				} );
				window._tkq.push( [ 'recordEvent', 'wpcom_page_view', props ] );
			}

			function fireAffiliateReferrals() {___jdce_logger("lacuna_cache/exported_s7hlxd.js", 1399, 1587);
				kit.attachScriptElement( 'https://s1.wp.com/wp-content/themes/h4/landing/marketing/js/affiliate-referrals.js?v=' + config.affiliateJSVersion );
			}

			function loadGoogleAdsGtag() {___jdce_logger("lacuna_cache/exported_s7hlxd.js", 1592, 1663);
				kit.loadGtag( 'AW-946162814' );
			}

			function fireGoogleAnalytics() {___jdce_logger("lacuna_cache/exported_s7hlxd.js", 1668, 2545);
				kit.loadGoogleAnalytics();
				ga( 'create', 'UA-10673494-10', 'auto' );

				ga( 'set', 'transport', 'function' === typeof navigator.sendBeacon ? 'beacon' : 'xhr' );
				ga( 'set', 'anonymizeIp', true );
				ga( 'set', 'useAmpClientId', true );

				
				ga( 'set', 'dimension1', config.lpName );
				ga( 'set', 'dimension2', config.lpVariation );

				ga( function( tracker ) {___jdce_logger("lacuna_cache/exported_s7hlxd.js", 2063, 2177);
					var clientId = tracker.get('clientId');
					ga( 'set', 'dimension3', clientId );
				} );

				if ( gaOptimize ) {
					ga( 'require', gaOptimize.config.id );
				}

				ga( 'send', 'pageview' );

				if ( gaOptimize ) {
					if ( gao ) {
						resetGAOptimizeExperiment( gao );
					}
					gaOptimize.push( 'event', 'optimize.callback', { callback: fireGAOptimizeCallback } );
					gaOptimize.dataLayer.push( { event: 'optimize.activate' } );
				}
			}

			function resetGAOptimizeExperiment( experimentDotVar ) {___jdce_logger("lacuna_cache/exported_s7hlxd.js", 2550, 3523);
				experimentDotVar = String( experimentDotVar || '' );

				var gaexps = [];
				var shouldUpdate = false;

				var experimentId = experimentDotVar.split( '.' )[0];
				var variationId = experimentDotVar.split( '.' )[1] || '';

				var experiments = _gaexp.split( '.' ).slice( 2 ).join( '.' ).split( /\!/ );
				var prefix = _gaexp.split( '.' ).slice( 0, 2 ).join( '.' ) || '';

								experiments.forEach( function( experiment ) {___jdce_logger("lacuna_cache/exported_s7hlxd.js", 3017, 3334);
					if ( 0 === experiment.indexOf( experimentId + '.' ) 							&& ! ( new RegExp( '(?:^|\\.)' + kit.escRegex( experimentId ) + '\\.[0-9]+\\.' + kit.escRegex( variationId ) + '$' ) ).test( experiment ) ) {
						shouldUpdate = true; 					} else {
						gaexps.push( experiment );
					}
				} );

				if ( shouldUpdate ) {
					_gaexp = ( prefix ? prefix + '.' : '' ) + gaexps.join( '!' );
					kit.docCookies.setItem( '_gaexp', _gaexp, 86400 * 90, '/', '.rootDomain' );
				}
			}

			function fireGAOptimizeCallback( variationId, experimentId ) {___jdce_logger("lacuna_cache/exported_s7hlxd.js", 3528, 4189);
				if ( ! experimentId || ! variationId ) {
					return; 				}

								if ( gaOptimize.refs.tracked[ experimentId ] || -1 !== _gaexp.indexOf( '.' + experimentId + '.' ) || -1 !== _gaexp.indexOf( '!' + experimentId + '.' ) ) {
					return;  				}

				var props = {
					lp_name: config.lpName,
					lp_variation: config.lpVariation,
					lp_personal_variation: config.lpPersonalVariation,
					experiment_id: experimentId,
					variation_id: variationId,
				};
				gaOptimize.refs.tracked[ experimentId ] = variationId;
				window._tkq.push( [ 'recordEvent', 'wpcom_gaexp_start', props ] );
			}

			function fireFacebook() {___jdce_logger("lacuna_cache/exported_s7hlxd.js", 4194, 4318);
				kit.loadFacebook();
				fbq( 'init', '823166884443641' );
				fbq( 'track', 'PageView' );
			}

			function fireQuantcast() {___jdce_logger("lacuna_cache/exported_s7hlxd.js", 4323, 4880);
				// P-Code: p-3Ma3jHaQMB_bS
				// Label: _fp.event.Default
				window._qevents = window._qevents || [];
				(function() {___jdce_logger("lacuna_cache/exported_s7hlxd.js", 4463, 4820);
					var elem = document.createElement('script');
					elem.src = (document.location.protocol == "https:" ? "https://secure" : "http://edge") + ".quantserve.com/quant.js";
					elem.async = true;
					elem.type = "text/javascript";
					var scpt = document.getElementsByTagName('script')[0];
					scpt.parentNode.insertBefore(elem, scpt);
				})();
				_qevents.push( { qacct: "p-3Ma3jHaQMB_bS" } );
			}

			function fireOutbrain() {___jdce_logger("lacuna_cache/exported_s7hlxd.js", 4885, 5649);
				!function( _window, _document ) {___jdce_logger("lacuna_cache/exported_s7hlxd.js", 4916, 5588);
					var OB_ADV_ID = '00f0f5287433c2851cc0cb917c7ff0465e';
					if ( _window.obApi ) {
						return;
					}
					var api = _window.obApi = function() {___jdce_logger("lacuna_cache/exported_s7hlxd.js", 5088, 5196);
						api.dispatch ? api.dispatch.apply( api, arguments ) : api.queue.push( arguments );
					};
					api.version = '1.0';
					api.loaded = true;
					api.marketerId = OB_ADV_ID;
					api.queue = [];
					var tag = _document.createElement( 'script' );
					tag.async = true;
					tag.src = '//amplify.outbrain.com/cp/obtp.js';
					tag.type = 'text/javascript';
					var script = _document.getElementsByTagName( 'script' )[ 0 ];
					script.parentNode.insertBefore( tag, script );
				}( window, document );
				obApi( 'track', 'PAGE_VIEW' );
			}

			function fireYahooGeminiOath() {___jdce_logger("lacuna_cache/exported_s7hlxd.js", 5654, 5839);
				kit.loadYahooGeminiOath();
				window.dotq.push( {
					'projectId': '10000',
					'properties': {
						'pixelId': '10014088',
					}
				} );
			}

			function fireBing() {___jdce_logger("lacuna_cache/exported_s7hlxd.js", 5844, 6512);
				(function( w, d, t, r, u ) {___jdce_logger("lacuna_cache/exported_s7hlxd.js", 5871, 6382);
					var f, n, i;
					w[ u ] = w[ u ] || [], f = function() {___jdce_logger("lacuna_cache/exported_s7hlxd.js", 5949, 6070);
						var o = { ti: "4074038" };
						o.q = w[ u ], w[ u ] = new UET( o ), w[ u ].push( "pageLoad" )
					}, n = d.createElement( t ), n.src = r, n.async = 1, n.onload = n.onreadystatechange = function() {___jdce_logger("lacuna_cache/exported_s7hlxd.js", 6156, 6303);
						var s = this.readyState;
						s && s !== "loaded" && s !== "complete" || ( f(), n.onload = n.onreadystatechange = null )
					}, i = d.getElementsByTagName( t )[ 0 ], i.parentNode.insertBefore( n, i )
				} )( window, document, "script", "//s1.wp.com/wp-content/mu-plugins/a8c-analytics/3rd-party/bing/bat.js?v=20190826", "uetq" );
			}

			function fireAdRoll() {___jdce_logger("lacuna_cache/exported_s7hlxd.js", 6517, 6817);
				window.adroll_adv_id = 'PEJHFPIHPJC2PD3IMTCWTT';
				window.adroll_pix_id = 'WV6A5O5PBJBIBDYGZHVBM5';

				if ( kit.isLastFireTimeStale( 'adRoll' ) || 'yelp' === kit.getQueryVar( 'utm_source' ) ) {
					kit.loadAdRoll();
					kit.updateLastFireTime( 'adRoll' );
				}
			}

			function fireTwitter() {___jdce_logger("lacuna_cache/exported_s7hlxd.js", 6822, 6934);
				kit.loadTwitter();
				twq( 'init', 'nvzbs' );
				twq( 'track', 'PageView' );
			}

			function fireLinkedIn() {___jdce_logger("lacuna_cache/exported_s7hlxd.js", 6939, 7321);
				window._linkedin_data_partner_id = "195308";
				(function() {___jdce_logger("lacuna_cache/exported_s7hlxd.js", 7019, 7312);
					var s = document.getElementsByTagName( "script" )[ 0 ];
					var b = document.createElement( "script" );
					b.type = "text/javascript";
					b.async = true;
					b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
					s.parentNode.insertBefore( b, s );
				})();
			}

			function fireDCMFloodlight() {___jdce_logger("lacuna_cache/exported_s7hlxd.js", 7326, 7541);
				kit.loadGtag( 'DC-6355556' );

				if ( config.currentUserIdHash ) {
					fireDCMFloodlightEvents( null );
				} else {
					kit.tracksAnonId( fireDCMFloodlightEvents );
				}
			}

			function fireDCMFloodlightEvents( tracksAnonId ) {___jdce_logger("lacuna_cache/exported_s7hlxd.js", 7546, 8322);
				// Refresh session cookie.
				var dcmsid = kit.docCookies.getItem( 'dcmsid' );
				dcmsid = dcmsid || kit.uniqueId();
				kit.docCookies.setItem( 'dcmsid', dcmsid, 1800, '/', '.rootDomain' );

				let dcm_config = {
					'allow_custom_scripts': true,
					'u4': config.currentUserIdHash,
					'u6': document.location.pathname,
					'u7': dcmsid,
				};

				if ( tracksAnonId ) {
					dcm_config.u5 = tracksAnonId;
				}

				// `wppv` event trigger.
				gtag( 'event', 'conversion', $.extend( {}, dcm_config, { 'send_to': 'DC-6355556/wordp0/wppv+standard' } ) );

				// `wpvisit` event trigger.
				gtag( 'event', 'conversion', $.extend( {}, dcm_config, { 'send_to': 'DC-6355556/wordp0/wpvisit+per_session' } ) );
			}

			function fireDCMFloodlightEventsGTM( tracksAnonId ) {___jdce_logger("lacuna_cache/exported_s7hlxd.js", 8327, 8519);
				window.dataLayer.push( {
					'event': 'a8c-analytics:fire-sensitive-pixels:tk_ai',
					'Tracks Anon Id': tracksAnonId,
				} );
			}

						function fireExperianAddressableTV() {___jdce_logger("lacuna_cache/exported_s7hlxd.js", 8527, 8831);
				(function() {___jdce_logger("lacuna_cache/exported_s7hlxd.js", 8571, 8822);
					var s = document.createElement( 'script' );
					s.src = 'https://d.turn.com/r/dd/id/L21rdC84MTYvY2lkLzE3NDc0MzIzNDkvdC8w/kv/Pagename=' + document.location.host + document.location.pathname;
					document.body.appendChild( s );
				})();
			}

			function fireIconMedia() {___jdce_logger("lacuna_cache/exported_s7hlxd.js", 8836, 9109);
				kit.loadPixelImage( 'https://tags.w55c.net/rs?id=cab35a3a79dc4173b8ce2c47adad2cea&t=marketing' );

				if ( config.isHomepage ) {
					kit.loadPixelImage( 'https://tags.w55c.net/rs?id=9e55736bc0fc4288805e871619d2fa42&t=homepage' );
				}
			}

			function firePinterest() {___jdce_logger("lacuna_cache/exported_s7hlxd.js", 9114, 9249);
				kit.loadPinterest();
				window.pintrk( 'load', '2613194105266', {} );
				window.pintrk( 'page' );
			}

			function fireClickCease() {___jdce_logger("lacuna_cache/exported_s7hlxd.js", 9254, 9922);
				var utm_source = kit.getQueryVar( 'utm_source' ) || '';
				var utm_medium = kit.getQueryVar( 'utm_medium' ) || '';
				// Only fire ClickCease when a user lands on our pages after clicking on an ad if:
				// `utm_source=google` or `utm_source=bing` and `utm_medium=paid_search`.
				if ( "paid_search" === utm_medium && -1 !== [ "google", "bing" ].indexOf( utm_source ) ) {
					var target = 'https://www.clickcease.com/monitor/stat.js';
					var script = document.createElement( 'script' );
					script.async = true;
					script.type = 'text/javascript';
					script.src = target;
					document.head.appendChild( script );
				}
			}

			function setupTracksClickTracking() {___jdce_logger("lacuna_cache/exported_s7hlxd.js", 9927, 12259);
				$( 'body' ).on( 'click', 'a, .click-tracking-enable', function( event ) {___jdce_logger("lacuna_cache/exported_s7hlxd.js", 10023, 12251);
					var $this = jQuery(this);
					var props = {};

										var sections = '.wpcom-masterbar.wpcom-header, .lpc, .lp-module, section, .post, article';
					var containers = '.wpcom-masterbar.wpcom-header, .lpc, .lp-module, section, .post, article';

										var $section = $this.parents( containers ).last();
					props.section_id = $section.attr( 'id' ) || '';
					props.section_class = $section.attr( 'class' ) || '';
					props.section = props.section_id || props.section_class || '';

										var $container = $this.closest( containers );
					props.container_id = $container.attr( 'id' ) || '';
					props.container_class = $container.attr( 'class' ) || '';
					props.container = props.container_id || props.container_class || '';

										props.id = $this.attr( 'id' ) || '';
					props.class = $this.attr( 'class' ) || '';

										props.href = $this.attr( 'href' ) || '';
					props.target = $this.attr( 'target' ) || '';
					props.text = $this.text().trim();

										props.lp_name = config.lpName;
					props.lp_variation = config.lpVariation;
					props.lp_personal_variation = config.lpPersonalVariation;

										$.extend( props, kit.getQueryVars( '', [ 'utm_source', 'utm_campaign' ] ) );

										props.is_cta = $this.hasClass( 'is-cta' );
					props.is_button = $this.hasClass( 'lpc-button' ) || $this.hasClass( 'button' );
					props.is_in_header_nav = $this.hasClass( 'x-nav-link' ) || $this.hasClass( 'x-dropdown-link' ) || $this.hasClass( 'x-menu-link' )
						|| $section.is( '.lpc-header-nav' ) || $section.is( '.wpcom-masterbar.wpcom-header' );

										window._tkq.push( [ 'recordEvent', 'wpcom_link_click', props ] );
					if ( window.ga ) {
						window.ga( 'send', 'event', 'Clicks', 'wpcom_link_click', ( props.id ? '#' + props.id + ':' : '' ) + props.href );
					}

															if ( props.is_in_header_nav || props.is_cta || props.is_button ) {
						if ( props.href && 0 !== props.href.indexOf( '#' ) && -1 !== [ '', '_top', '_self' ].indexOf( props.target ) ) {
							event.preventDefault(); // Allow time for trackers to record the click.

							setTimeout( function() {___jdce_logger("lacuna_cache/exported_s7hlxd.js", 12161, 12222);
								document.location = props.href;
							}, 300 );
						}
					}
				} );
			}

			function applyLinkers() {___jdce_logger("lacuna_cache/exported_s7hlxd.js", 12264, 12779);
				kit.linkQueryVars( [
					{
						includeRegExps: [
							/^(?:[^\/]+\.)?(?:wordpress|jetpack|woocommerce|crowdsignal|wpjobmanager)\.com(?:\/|$)/i,
						],
						linkQueryVars: [
							'aff',
							'affiliate',
							'cid', // Aff campaign ID.
							'sid', // Aff sub ID.
							'irclickid',
						],
					},
					{
						includeRegExps: [
							/^(?:[^\/]+\.)?(?:wordpress|jetpack)\.com(?:\/|$)/i,
						],
						linkQueryVars: [
							'coupon',
						],
					},
				] );
			}

			// ------- Apply Linkers -------

			applyLinkers();

			// ------- Fire Normal Pixels -------

			if ( kit.doNotTrack() ) {
				if ( gaOptimize ) {
					gaOptimize.endAsyncDim();
				}
				return;
			}

			fireTracks();
			fireAffiliateReferrals();
			setupTracksClickTracking();

			// ------- Fire "Sensitive" Pixels -------

			$document.on( 'a8c-analytics:fire-sensitive-pixels', function() {___jdce_logger("lacuna_cache/exported_s7hlxd.js", 13169, 14717);
				kit.loadImpactRadius();
				kit.fireImpactRadius( config.currentUserIdHashShort, config.currentUserEmailHash );
				
				if ( useGtm ) {
					if ( gaOptimize ) {
						gaOptimize.push( 'event', 'optimize.callback', { callback: fireGAOptimizeCallback } );
						gaOptimize.dataLayer.push( { event: 'optimize.activate' } );
					}

					var dcmsid = kit.docCookies.getItem( 'dcmsid' );
					dcmsid = dcmsid || kit.uniqueId();
					kit.docCookies.setItem( 'dcmsid', dcmsid, 1800, '/', '.rootDomain' );

					window.dataLayer.push( {
						'event': 'a8c-analytics:fire-sensitive-pixels',
						'sensitive_pixel_option': a8cAnalytics.kit.docCookies.getItem( 'sensitive_pixel_option' ),
						'isHomepage': config.isHomepage,
						'WP User Id Hash': config.currentUserIdHash,
						'WP User Email Hash': config.currentUserEmailHash,
						'Landing Page Name': config.lpName,
						'Landing Page Variation': config.lpVariation,
						'DCM Session Id': dcmsid,
					} );

					if ( config.currentUserIdHash ) {
						fireDCMFloodlightEventsGTM( null );
					} else {
						kit.tracksAnonId( fireDCMFloodlightEventsGTM );
					}
				} else {
					fireGoogleAnalytics();
					loadGoogleAdsGtag();
					fireDCMFloodlight();
					fireFacebook();
					fireQuantcast();
					fireOutbrain();
					firePinterest();
					fireYahooGeminiOath();
					fireBing();
					fireAdRoll();
					// fireTwitter();
					// fireLinkedIn();
					fireIconMedia();
					fireExperianAddressableTV();
					fireClickCease();
					kit.fireHotjar( 227769 );
				}
			} )
		} );
	} )( window.jQuery );
	