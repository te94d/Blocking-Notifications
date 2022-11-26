var textUrl = '';
var result = 0;
// content_script.jsで取得したtitleタグとURLを取得して変数に代入
chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    textUrl = request.url;

		if (request.ragister == "register"){
			const blockedPath = "js/blocked.json";
			jsonUrl = chrome.runtime.getURL(blockedPath);

			fetch(jsonUrl)
  		.then((response) => response.json())
  		.then((data) => {
				console.log(data);
				for (let i = 0; i < data.url.length; i++) {
					if (textUrl.includes(data.url[i]) == true) {
						console.log("登録済み");
						result = 1;
						break;
					}
				}
				if (result == 0 ) {
					console.log("登録されていない");
					//ブラックリストに登録する処理


				} else {
					result = 0;
				}
			});
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

