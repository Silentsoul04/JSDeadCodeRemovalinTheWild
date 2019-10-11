(function(){

  function _sanitizeInput(input) {
    return jQuery('<div />').text(input).html();
  }

  Storage.prototype.setObj = function(key, value) {
    this.setItem(key, JSON.stringify(value));
  }

  Storage.prototype.getObj = function(key) {
      var value = this.getItem(key);
      return value && JSON.parse(value);
  }

  function shortenSuccess(res) {
    var hashArray=[],
        shortLink = res.data.short_url;

          jQuery('#shortened_url').val(shortLink);
          jQuery('#shortened_url').trigger('change');

          jQuery('#unAuthShortenForm').hide();
          jQuery('#ShortenedForm').show();

          if(localStorage.getObj('hashes')!==null){
              hashArray=localStorage.getObj('hashes');
              hashArray.unshift(res.data);
              localStorage.setObj('hashes', hashArray);
          } else {
              hashArray.push(res.data);  
              localStorage.setObj('hashes', hashArray);
          }

          if(jQuery('.error-list').length > 0 ) {
              jQuery('.error-list').fadeOut('slow', function() {
              jQuery('.error-list').remove()
             });
          }
          checkHistory();
      }


      jQuery('#ShortenedForm').on('change keyup', function() {
        bitlink = _sanitizeInput(jQuery('#shortened_url').val());
        jQuery('#ShortenedForm').hide();
        jQuery('shortened_url').val('').trigger('change');
        jQuery('#shorten_url').val(bitlink).trigger('change');
        jQuery('#unAuthShortenForm').show();
        jQuery('#shorten_url').focus();
      });



  function checkHistory(){

        var hashArray=[];
        jQuery('#most_recent_links').empty();
        if(localStorage.getObj('hashes')!==null){
        hashArray=localStorage.getObj('hashes');

        var arrayLength = hashArray.length;
        if (arrayLength >= 3){ arrayLength = 3 }
        for (var i = 0; i < arrayLength; i++) {
        raw = hashArray[i];
        longLink = hashArray[i].long_url;
        shortLink = hashArray[i].short_url;

        

        row='<li class="link"><span class="long-link">'+_sanitizeInput(longLink)+'</span><span><span class="short-link"><a href="'+_sanitizeInput(shortLink)+'" target="_blank">'+_sanitizeInput(shortLink)+'</a></span><span class="copy"><button class="button button-secondary">Copy</button></span></span></li>';
        jQuery('#most_recent_links').append(row);
        }

        jQuery('#shorten_actions').fadeIn();
        jQuery('.promo-customize').clone().insertAfter('#most_recent_links li:eq(0)').fadeIn();

    }

  }

    var senderroraway;
    function shortenError(res) {
    message = res.message;
    clearTimeout(senderroraway);
    
    if (message == undefined) {
      message = "Please check your link and try again.";
    }
    row='<ul class="error-list" style="display:none"><li class="error text-center align-center"><span>'+ _sanitizeInput(message) +'</span></li></ul>';

    if(jQuery('.error-list').length > 0 ) {
      jQuery('.error-list').removeClass('shorten-error').addClass('shorten-error');
    } else {
      jQuery('#shorten_actions').prepend(row);
      jQuery('.error-list').show();
      jQuery('#shorten_actions').fadeIn();
    }
    
      jQuery('.error-list').show();
      senderroraway = setTimeout(function(){
            jQuery('.error-list').fadeOut(300, function() {
            jQuery('.error-list').remove();
           });;
      }, 2500);


  }

    function historySuccess(res) {}
    function historyError(res) {}

    jQuery('#unAuthShortenForm').on('submit',function(e){
      e.preventDefault();
      longUrl = jQuery('#shorten_url').val();
      BITLY.shorten(_sanitizeInput(longUrl),shortenSuccess,shortenError);

    });

    jQuery('#ShortenedForm').on('submit',function(e){
      e.preventDefault();
      var buttontimer;
     
      jQuery(this).find('.button').addClass('copied');
      clearTimeout(buttontimer);
      buttontimer = setTimeout(function(){
         jQuery('#ShortenedForm').find('.button').removeClass('copied');
      }, 1000);

      var element = jQuery('#shortened_url');
      element.select();
      document.execCommand("copy");
      
    });

  jQuery(window).load(function() {
    checkHistory();
  });

    jQuery(document).on('click', '.copy .button', function(e){
      e.preventDefault();
      var buttontimer;
      jQuery(this).addClass('copied');
          clearTimeout(buttontimer);
          buttontimer = setTimeout(function(){
          jQuery('.copy .button').removeClass('copied');
      }, 1000);

      var element = jQuery(this).parents('li').find('.short-link a');
      var $temp = jQuery("<input class='temp-field'>");
      jQuery(this).after($temp);
      $temp.val(jQuery(element).text()).select();
      document.execCommand("copy");
      $temp.remove();
      jQuery(this).focus();

  });

})();
