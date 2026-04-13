JsToolbox = typeof JsToolbox === "undefined" ? {} : JsToolbox

JsToolbox.doUntil = async ({
  initDelayMs = 100,
  maxRetries = 5,
  factor = 2,
  callback,
}) => {
  let delay = initDelayMs
  for (let i = 0; i < maxRetries; i++) {
    try {
      return await callback()
    } catch (err) {
      if (i === maxRetries - 1) {
        throw new Error(`Reached maximum retry count: ${maxRetries}`)
      }
      await new Promise(r => setTimeout(r, delay))
      delay *= factor
    }
  }
}
