//<![CDATA[
;(function(p,l,o,w,i,n,g){if(!p[i]){p.GlobalSnowplowNamespace=p.GlobalSnowplowNamespace||[];
p.GlobalSnowplowNamespace.push(i);p[i]=function(){(p[i].q=p[i].q||[]).push(arguments)
};p[i].q=p[i].q||[];n=l.createElement(o);g=l.getElementsByTagName(o)[0];n.async=1;
n.src=w;g.parentNode.insertBefore(n,g)}}(window,document,"script","https://cdn.jsdelivr.net/snowplow/2.6.2/sp.js","snowplow"));

function linksFilter(element) {
  var currentLocation = location.protocol + "//" + location.host;

  if ((element.href.indexOf(currentLocation) === -1) &&
      (element.href.indexOf("/") !== 0) &&
      (element.href.indexOf("javascript:") !== 0)) {
      return true;
  }

  return false;
}

function crossDomainLinker(element) {
  return element.href.indexOf("urbandictionary.store") >= 0;
}

snowplow('newTracker', 'cf', 'click.udimg.com', {
    forceSecureTracker: true,
    crossDomainLinker: crossDomainLinker
});
snowplow('setUserIdFromCookie', 'user_id');
snowplow('enableFormTracking', {forms: {blacklist: ['snowplow-ignore']}, fields: {blacklist: ['authenticity_token']}});
snowplow('enableLinkClickTracking', {filter: linksFilter}, true, null);
snowplow('trackPageView', null, [{"stack": "spark"}]);
//]]>