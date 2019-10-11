(function() {___jdce_logger("lacuna_cache/imported_3zje35.js", 1, 525);
  var js_path = "https://s.yimg.jp/images/listing/tool/yads/impl/yads-stream-lib.js";
  var yyyymmdd = (function() {___jdce_logger("lacuna_cache/imported_3zje35.js", 118, 343);
    var date = new Date();
    var m = date.getMonth() + 1;
    m = m < 10 ? "0" + m : m.toString();
    var d = date.getDate();
    d = d < 10 ? "0" + d : d.toString();
    return date.getFullYear() + m + d;
  })();
  var release = "01"; // 緊急リリース時にここを変更
  document.write('<script type="text/javascript" language="JavaScript" src="'
    + js_path + "?" + yyyymmdd + release + '"></script>');
})();
