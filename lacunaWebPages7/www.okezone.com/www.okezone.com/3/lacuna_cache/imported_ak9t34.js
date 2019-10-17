waShBtn = function() {
  this.isIos === !0 && this.cntLdd(window, this.crBtn)
}, waShBtn.prototype.isIos = navigator.userAgent.match(/Android|iPhone/i) && !navigator.userAgent.match(/iPod|iPad/i) ? !0 : !1, waShBtn.prototype.cntLdd = null, waShBtn.prototype.addStyling = null, waShBtn.prototype.crBtn = null;
var theWaShBtn = new waShBtn;