
	( function() {___jdce_logger("lacuna_cache/exported_zkql9l.js", 4, 2215);
		'use strict';

		var html = document.documentElement;

		var extend = function() {___jdce_logger("lacuna_cache/exported_zkql9l.js", 89, 486);
			var args = [].slice.call( arguments );

			var obj0 = args.slice( 0, 1 )[0] || {};
			obj0 = 'object' === typeof obj0 ? obj0 : {};

			args.slice( 1 ).forEach( function( _obj ) {___jdce_logger("lacuna_cache/exported_zkql9l.js", 265, 462);
				_obj = 'object' === typeof _obj ? _obj : {};

				for( var _prop in _obj ) {
					if ( _obj.hasOwnProperty( _prop ) ) {
						obj0[ _prop ] = _obj[ _prop ];
					}
				}
			} );

			return obj0;
		};

		window.a8cGAOptimize = window.a8cGAOptimize || {
			config: extend( {
				id: '',
				enabled: true,
				asyncDimTime: 3000,
			}, window.a8cGAOptimizeConfig || {} ),
			refs: {
				tracked: {},
				asyncDimEnded: false,
				asyncDimTimeout: null,
				asyncDimInterval: null,
			},
			dataLayer: ( window.dataLayer = window.dataLayer || [] ),

			isEnabled: function() {___jdce_logger("lacuna_cache/exported_zkql9l.js", 849, 941);
				return !! ( a8cGAOptimize.config.id && a8cGAOptimize.config.enabled );
			},

			startAsyncDim: function() {___jdce_logger("lacuna_cache/exported_zkql9l.js", 962, 1625);
				html.className += ' async-dim';

				a8cGAOptimize.dataLayer.hide = {
					start: Date.now(),
					end: a8cGAOptimize.endAsyncDim,
					timeout: a8cGAOptimize.config.asyncDimTime,
				};
				a8cGAOptimize.dataLayer.hide[ a8cGAOptimize.config.id ] = true;

				a8cGAOptimize.refs.asyncDimTimeout  = setTimeout(
					a8cGAOptimize.endAsyncDim,
					a8cGAOptimize.config.asyncDimTime
				);
				a8cGAOptimize.refs.asyncDimInterval = setInterval( function() {___jdce_logger("lacuna_cache/exported_zkql9l.js", 1422, 1612);
					var cookieBanner = document.querySelector( '.a8c-cookie-banner' );
					if( cookieBanner && 'none' !== cookieBanner.style.display )
						a8cGAOptimize.endAsyncDim();
				}, 250 );
			},

			endAsyncDim: function() {___jdce_logger("lacuna_cache/exported_zkql9l.js", 1644, 2054);
				if ( a8cGAOptimize.refs.asyncDimEnded )
					return; // Done.

				a8cGAOptimize.refs.asyncDimEnded = true;
				clearTimeout( a8cGAOptimize.refs.asyncDimTimeout );
				clearInterval( a8cGAOptimize.refs.asyncDimInterval );

				html.className += ' async-trans'; // Transition fx.
				setTimeout( function() {___jdce_logger("lacuna_cache/exported_zkql9l.js", 1956, 2043);
					html.className = html.className.replace( /\s?async-dim/g, '' );
				}, 0 );
			},

			push: function() {___jdce_logger("lacuna_cache/exported_zkql9l.js", 2066, 2130);
				a8cGAOptimize.dataLayer.push( arguments );
			},
		};

		if ( a8cGAOptimize.isEnabled() ) {
			a8cGAOptimize.startAsyncDim();
		}
	} )();
