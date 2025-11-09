# Userscript Reusables

Import the given file using [the `@require` directive](https://www.tampermonkey.net/documentation.php?locale=en#meta:require):

```javascript
// ==UserScript==
// @require https://raw.githubusercontent.com/amrwc/js-toolbox/refs/heads/main/src/userscript/common/do-until.js
// ==/UserScript==
const callback = (resolve, reject) => {
  console.log("Hi from the callback")
}
JsToolbox.doUntil({ intervalMs: 100, maxRetries: 2, callback })
```

For extra security, [obtain a cryptographic hash of the file and use it inside the directive](https://www.tampermonkey.net/documentation.php?locale=en#api:Subresource_Integrity):

```javascript
// ==UserScript==
// @require https://raw.githubusercontent.com/amrwc/js-toolbox/refs/heads/main/src/userscript/common/redirect-to.js#md5=1bcc90aa60fda572450feaf2d06eb8ed
// ==/UserScript==
JsToolbox.redirectTo("https://example.com")
```
