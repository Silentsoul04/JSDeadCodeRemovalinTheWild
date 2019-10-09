
module.exports = function deacronym(anyKey) {
  return anyKey.replace(/([A-Z]+)[A-Z]/g, function (match, cap, i, str) {
    var sub;
    if (i + match.length === str.length) {
      sub = match.slice(1);
    } else {
      sub = !i ? cap.slice(1) : match.slice(1, -1);
    }

    return match.replace(sub, sub.toLowerCase());
  });
}
