// URLを取得してbackground.jsに送る
chrome.runtime.sendMessage({
  flag: "getJson",
  url: location.href,
},
function(response){
  if (response.res == 0) {
    console.log("anser 0");
  }else if(response.res == 1) {
    console.log("anser 1");
    console.log("anser json: ", response.json);
    let jsonString = JSON.stringify(response.json);

    console.log("-- load json --");
    const s = document.createElement("script");
    s.textContent = "const blocked_json = " + jsonString + ";";
    console.log("jsonなかみ: ",s.textContent);
    (document.head || document.documentElement).insertAdjacentElement("afterbegin", s);

    console.log("-- inject script --");
    const script = document.createElement("script");
    script.src = chrome.runtime.getURL("js/content.js");
    (document.head || document.documentElement).insertAdjacentElement("afterbegin", script);
  }else {
    console.log("error");
  }
});

// popup.htmlのinput要素に書いたテキストを取得
chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
alert(msg.send);//送られたテキストをアラートで表示
});