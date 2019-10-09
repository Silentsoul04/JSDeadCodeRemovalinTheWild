
if (window.INSTALL_RAVEN) {
  window.addEventListener('load', function(event) {
    var includeRaven = document.getElementById("RavenInstaller");
    var script = document.createElement("script");
    script.src = "/vi-assets/static-assets/raven.min-830a6d04a55c283934dd1893d6ddc66d.js";
    script.onload = function() {
      /* eslint-disable */
// Install Raven
window.Raven.config('https://7bc8bccf5c254286a99b11c68f6bf4ce@sentry.io/178860', {
  release: vi.env.RELEASE,
  environment: vi.env.ENVIRONMENT,
  ignoreErrors: [/SecurityError: Blocked a frame with origin.*/]
}).install(); // Stop using our error handler

window.nyt_errors.ravenInstalled = true;
var regex = /nyt-a=(.*?)(;|$)/;
var id = regex.exec(document.cookie);

if (id !== null) {
  id = id[1];
} else {
  id = '';
} // Setting nyt-a as user context


window.Raven.setUserContext({
  id: id
}); // Pass collected errors to Raven

window.nyt_errors.list.forEach(function (err) {
  // weird?
  if (!err) {
    return;
  } // also weird ... ?


  if (!err.err) {
    // maybe err itself is an Error?
    if (err instanceof Error) {
      window.Raven.captureException(err, err.data || {});
    } // else { silently ignore? }

  } // just making sure ...


  if (err.err instanceof Error) {
    window.Raven.captureException(err.err, err.data || {});
  } // else { silently ignore? }

}); // Pass collected Tags to Raven

window.nyt_errors.tags.forEach(function (tag) {
  window.Raven.setTagsContext(tag);
});
    };
    includeRaven.appendChild(script);
  });
}
