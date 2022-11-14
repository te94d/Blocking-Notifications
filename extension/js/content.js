const black_list = "rules.json";

Notification = (function(Notification) {
  function MyNotification(...args) {
    console.log("title: ", args[0]);
    console.log("body: ", args[1].body);
    console.log("icon: ", args[1].icon);

    
    const zod = "zodiac.json";    // 読み込むJSONファイル
    
    // 12星座情報を整形して表示する
    function formatJSON(json){
        console.log(json);
    
        // JSONファイルを整形して表示
        for(let zodiac of json){
            console.log("ja" + zodiac.ja)
            console.log("latin" + zodiac.latin)
        }
        document.getElementById("result").innerHTML = html;
    }
    
    // 起動時の処理
    window.addEventListener("load", ()=>{
    
        // 12星座情報を取得して表示
        fetch(zod)
            .then( response => response.json())
            .then( data => formatJSON(data));
    
    });

    if (args[0] === "ブラックリストのキーワード") {
      console.log("keyword blocked!");
      return null;
    } else {
      return new Notification(...args);
    }
  
  };
  Object.assign(MyNotification, Notification);
  MyNotification.prototype = Notification.prototype;
  return MyNotification;
})(Notification);

window.open = function (open) {
  return function (url, name, features) {
    console.log("url: ", url);

    if (url === "ブラックリストのURL") {
      console.log("url blocked!");
      return null;
    } else {
      return open.call(window, url, name, features);
    }

  };
}(window.open);