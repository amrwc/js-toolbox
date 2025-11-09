JsToolbox = typeof JsToolbox === "undefined" ? {} : JsToolbox

// https://stackoverflow.com/questions/7703689/window-location-href-vs-window-location-replace-vs-window-location-assign-in-jav
JsToolbox.redirectTo = url => {
  log(`Redirecting to ${url}`)
  window.location.assign(url)
}
