Notification = (function(Notification) {
  function MyNotification(...args) {
    console.log("title: ", args[0]);
    console.log("body: ", args[1].body);
    console.log(" blocked_json.keyword :", blocked_json.keyword);

    for (let i = 0; i < blocked_json.keyword.length; i++) {
      if (args[0] === blocked_json.keyword[i]) {
        console.log("title - keyword blocked!");
        return null;
      } else if (args[1].body === blocked_json.keyword[i]) {
        console.log("body - keyword blocked!");
        return null;
      } else {
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
      if (url === blocked_json.url[j]) {
        console.log("url blocked!");
        return null;
      } else {
        return open.call(window, url, name, features);
      }
    }

  };
}(window.open);