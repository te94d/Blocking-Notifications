// background.jsからURLを取得
var textUrl = chrome.extension.getBackgroundPage().textUrl;
// 取得した値をpopup.htmlの該当箇所に挿入
var urlElm = document.getElementById('textUrl');
// 取得した値をpopup.htmlの該当箇所に挿入
urlElm.textContent = textUrl;


function submit() {

  chrome.runtime.sendMessage({
		flag: "register",
		url: textUrl,
	},
	function(response) {
		if (response.res == 0) {
			var submitText = textUrl + "\nをブラックリストに登録しました。";
			// 取得した値をcontent_script.jsで受けれるように送信
			chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
				chrome.tabs.sendMessage(tabs[0].id, {
					send: submitText
				});
			});
		} else {
			console.log("resが拾えてない");
		}
	});
}
document.getElementById("submit").addEventListener("click", submit);