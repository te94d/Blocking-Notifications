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

// URLを取得してbackground.jsに送る
chrome.runtime.sendMessage({
  url: location.href
});

// popup.htmlのinput要素に書いたテキストを取得
chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
alert(msg.send);//送られたテキストをアラートで表示
});