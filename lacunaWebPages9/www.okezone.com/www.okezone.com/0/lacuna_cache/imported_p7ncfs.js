var random_angka = Math.floor(Math.random() * 11);
$(document).ready(function() {

  setTimeout(function() {
    $("#sindonewsiframe").append('<iframe src="https://index.sindonews.com/widget" scrolling="no" frameborder="0" style="border:none; overflow:hidden;"  width="100%" height="400"  allowTransparency="true" noresize frameborder="0"></iframe>');
    $("#inewsiframe").append('<iframe src="https://sindikasi.okezone.com/widget/inews" scrolling="no" frameborder="0" style="border:none; overflow:hidden;"  width="100%" height="400"  allowTransparency="true" noresize frameborder="0"></iframe>');
    $("#metubeiframe").append('<iframe src="https://sindikasi.okezone.com/widget/metube"scrolling="no" frameborder="0" style="border:none; overflow:hidden;"  width="100%" height="400"  allowTransparency="true" noresize frameborder="0"></iframe>');
    $("#mncnowiframe").append('<iframe src="https://okezone.mncnow.id/widget-dark.html" scrolling="no" frameborder="0" style="border:none; overflow:hidden;"  width="100%" height="625"  allowTransparency="true" noresize frameborder="0"></iframe>');
    console.log('loaded after 1s ==>' + random_angka);
  }, 1000);
});