var BITLY = {};
(function($, BITLY) {
  var _xsrf = document.cookie.match("\\b\_xsrf=([^;]*)\\b"),
  _xsrf = (_xsrf ? _xsrf[1] : undefined);
  var cookieName = 'anon_shortlinks';
  var cookieValue = document.cookie.match('(^|[^;]+)\\s*' + cookieName + '\\s*=\\s*([^;]+)');
  var shortlinks = cookieValue ? cookieValue[2].split(',') : [];

  $.ajaxSetup({
    cache : false,
    timeout : 12000,
    type: 'POST',
    dataType: 'json',
    traditional: true
  });
  
  function shorten(longUrl, success, error) {
    var options = {
      url: '/data/shorten',
      data: { url: longUrl },
      beforeSend : function(XMLHttpRequest) {
        XMLHttpRequest.setRequestHeader('X-XSRFToken', _xsrf);
      },
      success: function(res) {
        if (res && res.data && res.status_code == 200) {
          handleShortenSuccess(res, success);
        } else {
          handleError(res, error);
        }
      },
      error: function(res) { handleError(res, error); }
    };
    
    $.ajax(options);
  }


  function handleShortenSuccess(res, cb) {
    var data = res.data.anon_shorten;
    var hash = getHash(data.link);
    shortlinks.push(data.link);

    document.cookie = cookieName + "=" + shortlinks.join(",") + ";max-age=31536000";

    var result = {
      data: {
        hash: hash,
        long_url: data.long_url,
        short_url: data.link
      },
      status_code: res.status_code,
      status_txt: res.status_txt
    };

    cb(result);
  }

  function getHistory(hashes, success, error) {
    var options = {
      url: '/data/info',
      data: {
        hash: hashes,
        _xsrf: _xsrf
      },
      beforeSend : function(XMLHttpRequest) {
        XMLHttpRequest.setRequestHeader('X-XSRFToken', _xsrf);
      },
      success: function(res) {
        if (res && res.data && res.status_code == 200) {
          handleHistorySuccess(res, hashes, success, error);
        } else {
          handleError(res, error);
        }
      },
      error: function(res) { handleError(res, error); }
    };

    $.ajax(options);
  }
  

  function handleHistorySuccess(res, hashes, success) {
    var result = {};
    result.data = {};
    result.status_code = res.status_code;
    result.status_txt = res.status_txt;
    for (var i = 0; i < res.data.info.length; i++) {
      var item = res.data.info[i];
      var data = {
        hash: item.hash,
        long_url: item.long_url,
        title: item.title,
        short_url: getShortLink(item.hash) || 'https//bit.ly/' + item.hash
      }
      result.data[item.hash] = data;
    }

    success(result);
  }

  function handleError(res, cb) {
    var results = res;
    if (res && res.status_txt) {
      results.message = getFriendlyError(res.status_txt);
    }
    cb(results);
  }
  
  function getHash(shortLink) {
    return shortLink.split("/").pop();
  }

  function getShortLink(hash) {
    var shortlink;
    for (var i = 0; i < shortlinks.length; i++) {
      if (getHash(shortlinks[i]) === hash) {
        shortlink = shortlinks[i];
      }
    }
    return shortlink;
  } 

  function getFriendlyError(code) {
    var errorCode = code || 'DEFAULT';
    var messages = {
      'RATE_LIMIT_EXCEEDED': 'Whoa - you\'ve exceeded your quota. Create a free account to keep shortening.',
      'INVALID_ARG_URL': 'Unable to shorten that link. It is not a valid url.',
      'INVALID_ARG_LONGURL': 'Unable to shorten that link. It is not a valid url.',
      'ALREADY_A_BITLY_LINK': 'That is already a Bitly link',
      'UNKNOWN_ERROR': 'Woops. Something went wrong. Please try again.',
      'DEFAULT': 'An error occurred'
    };

    return messages[errorCode];
  }

  BITLY.shorten = shorten;
  BITLY.getHistory = getHistory;
})(jQuery, BITLY);
