define('orb/lib/_template', function () {
    'use strict';

	var cache = {};

    // Resig's micro templating http://ejohn.org/blog/javascript-micro-templating/
	function tmpl(str, data){
	    // Assume any CDATA wrapper is not intended to be part of the output
	    str = str.replace(/(^\s*<!\[CDATA\[|\]\]>\s*$)/g, '');
	    
		// Figure out if we're getting a template, or if we need to
		// load the template - and be sure to cache the result.
		var fn = str.charAt(0) === '#' ?
	        cache[str] = cache[str] ||
			tmpl(document.getElementById(str.slice(1)).innerHTML) :
		  
		  // Generate a reusable function that will serve as a template
		  // generator (and which will be cached).
		  new Function("obj",
			"var p=[],esc=function(v){return (''+v).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/\"/g, '&quot;');},print=function(){p.push.apply(p,arguments);};" +
			
			// Introduce the data as local variables using with(){}
		        "with(obj){p.push('" +
				
			// Convert the template into pure JavaScript
			str
	          .replace(/[\r\t\n]/g, " ")
	          .split("<%").join("\t")
	          .replace(/((^|%>)[^\t]*)'/g, "$1\r")
	          .replace(/\t=(.*?)%>/g, "',$1,'")
	          .split("\t").join("');")
	          .split("%>").join("p.push('")
	          .split("\r").join("\\'")
	      + "');}return p.join('');");
			
		// Provide some basic currying to the user
		return data ? fn( data ) : fn;
  	};

  return tmpl;
});