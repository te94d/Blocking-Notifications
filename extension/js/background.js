var textUrl = '';
// content_script.jsで取得したtitleタグとURLを取得して変数に代入
chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    textUrl = request.url;
		console.log("textUrl: " + textUrl);

		if (request.greeting == "hello"){
			console.log("22222");
      sendResponse({
        msg: "goodbye!"
      });
		}
  }
);

