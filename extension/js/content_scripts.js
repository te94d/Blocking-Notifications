// URLを取得してbackground.jsに送る
chrome.runtime.sendMessage({
  flag: "getJson",
  url: location.href,
},
function(response){
  if(response.res == 1) {
    console.log("jsonの中身: ", response.json);
    let jsonString = JSON.stringify(response.json);

    console.log("-- load json --");
    const s = document.createElement("script");
    s.textContent = "const blocked_json = " + jsonString + ";";
    (document.head || document.documentElement).insertAdjacentElement("afterbegin", s);

    console.log("-- inject script --");
    const script = document.createElement("script");
    script.src = chrome.runtime.getURL("js/collation.js");
    (document.head || document.documentElement).insertAdjacentElement("afterbegin", script);
  }else {
    console.log("res=0 or error");
  }
});

// popup.htmlのinput要素に書いたテキストを取得
chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
alert(msg.send);
});