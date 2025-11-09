;(function (global) {
  function doUntil({ intervalMs, maxRetries, callback }) {
    return new Promise((resolve, reject) => {
      let i = 0
      const intervalId = setInterval(() => {
        callback(res => {
          clearInterval(intervalId)
          resolve(res)
        }, reject)
        if (++i >= maxRetries) {
          clearInterval(intervalId)
          reject(new Error(`Reached maximum retry count: ${maxRetries}`))
        }
      }, intervalMs)
    })
  }
  if (!global.JsToolbox) {
    global.JsToolbox = {}
  }
  global.JsToolbox.doUntil = doUntil
})(typeof unsafeWindow !== "undefined" ? unsafeWindow : window)
