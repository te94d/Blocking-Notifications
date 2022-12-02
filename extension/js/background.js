var textUrl = '';
var result = 0;

const blockedPath = "js/blocked.json";
jsonUrl = chrome.runtime.getURL(blockedPath);
fetch(jsonUrl)
.then((response) => response.json())
.then((JsonData) => {
  console.log("setup: ", JsonData);
  let jsonString = JSON.stringify(JsonData);
  localStorage.setItem('JsonData', jsonString);
});
// content_script.jsで取得したtitleタグとURLを取得して変数に代入
chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    textUrl = request.url;
    let blocked_Json = JSON.parse(localStorage.getItem('JsonData'));
    if (request.flag == "getJson"){
      sendResponse({
				res: "1",
        json: blocked_Json,
			});
    }

		if (request.flag == "register"){

      let blocked_Json = JSON.parse(localStorage.getItem('JsonData'));
      console.log("JSON: ", blocked_Json);
      for (let i = 0; i < blocked_Json.url.length; i++) {
        if (textUrl.includes(blocked_Json.url[i]) == true) {
          console.log("登録済み");
          result = 1;
          break;
        }
      }
      if (result == 0 ) {
        console.log("登録されていないので追加");
        //ブラックリストに登録する処理
        blocked_Json.url.push(textUrl);
        console.log("JSON: ", blocked_Json);
        let jsonString = JSON.stringify(blocked_Json);
        localStorage.setItem('JsonData', jsonString);
      } else {
        result = 0;
      }

			sendResponse({
				res: "0"
			});
      
			/*if (result == 1) {
				console.log("登録済み: ", result);
				sendResponse({
					res: "1"
				});
			} else {
				console.log("登録する: ", result);
				sendResponse({
					res: "2"
				});
			}*/
		}
  }
);

