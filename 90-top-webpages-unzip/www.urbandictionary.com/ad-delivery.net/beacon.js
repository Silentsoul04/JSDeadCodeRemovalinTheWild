(function (window) {
  // Add cookie so we can later cookie sync the user's data we have collected 
  // with our ad network, re-targeting, and sponsored content partners.
  window.btID = getCookie('__beaconTrackerID');
  if(typeof btID === 'undefined') {
    window.btID = generateID();
    setCookie('__beaconTrackerID', window.btID, 2592000);
  }
  
  // Math.random should be unique because of its seeding algorithm. Convert it 
  // to base 36 (numbers + letters), and grab the first 9 characters after the 
  // decimal.
  function generateID() {
    return Math.random().toString(36).substr(2, 9);
  };

  function setCookie(name, value, seconds) {
    var date = new Date();
    date.setTime(date.getTime() + (seconds * 1000));
    var expires = 'expires='+ date.toUTCString();
    var domain = location.hostname.split('.').slice(-2).join('.');
    document.cookie = name + '=' + value + '; ' 
      + expires + ';domain=.' + domain + ';path=/';
    return true;  
  }

  function getCookie(name) {
    var value = '; ' + document.cookie;
    var parts = value.split('; ' + name + '=');
    if (parts.length == 2) { 
      return parts.pop().split(';').shift();
    }
  }

})(window);
