console.log("-- load json --");
const blockedPath = "js/blocked.json";
const s = document.createElement("script");
s.jsonUrl = chrome.runtime.getURL(blockedPath);

console.log("blockedPath: ", s.jsonUrl);

fetch(s.jsonUrl)
    .then(response => response.text())
    .then(text => {
      s.textContent = "const blocked_json = " + text + ";";
      console.log(s.textContent);
      (document.head || document.documentElement).insertAdjacentElement("afterbegin", s);
    });

console.log("-- inject script --");
const script = document.createElement("script");
script.src = chrome.runtime.getURL("js/content.js");
(document.head || document.documentElement).insertAdjacentElement("afterbegin", script);