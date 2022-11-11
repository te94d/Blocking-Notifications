console.log("-- inject script --");
const script = document.createElement("script");
script.src = chrome.runtime.getURL("js/content.js");
(document.head || document.documentElement).insertAdjacentElement("afterbegin", script);