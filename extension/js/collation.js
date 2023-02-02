Notification = (function(Notification) {
  function MyNotification(...args) {
    console.log("title: ", args[0]);
    console.log("body: ", args[1].body);
    console.log(" blocked_json.keyword :", blocked_json.keyword);

    for (let i = 0; i < blocked_json.keyword.length; i++) {
      if (args[0].includes(blocked_json.keyword[i]) == true) {
        console.log("title - keyword blocked!");
        args[0] = "プッシュ通知をブロック";
        args[1].body = "悪質なキーワードを検出したので表示をブロックします。";
        args[1].icon = "";
        return new Notification(...args);
      } else if (args[1].body.includes(blocked_json.keyword[i]) == true) {
        console.log("body - keyword blocked!");
        args[0] = "プッシュ通知をブロック";
        args[1].body = "悪質なキーワードを検出したので表示をブロックします。";
        args[1].icon = "";
        return new Notification(...args);
      } else if(i+1 == blocked_json.keyword.length) {
        return new Notification(...args);
      }
    }
  };
  Object.assign(MyNotification, Notification);
  MyNotification.prototype = Notification.prototype;
  return MyNotification;
})(Notification);

window.open = function (open) {
  return function (url, name, features) {
    console.log("url: ", url);
    console.log(" blocked_json.url :", blocked_json.url);

    for (let j = 0; j < blocked_json.url.length; j++) {
      if (url.includes(blocked_json.url[j]) == true) {
        console.log("url blocked!");
        new Notification("プッシュ通知をブロック", {
          body: "悪質なURLを検出したので遷移をブロックします。",
        });
        return null;
      } else if(j+1 == blocked_json.url.length) {
        return open.call(window, url, name, features);
      }
    }

  };
}(window.open);