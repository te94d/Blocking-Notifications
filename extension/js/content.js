Notification = (function(Notification) {
  function MyNotification(...args) {
    console.log("title: ", args[0]);
    console.log("body: ", args[1].body);
    console.log("icon: ", args[1].icon);

    if (args[0] === "Hi there!") {
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

    if (url === "https://github.com/") {
      return null;
    } else {
      return open.call(window, url, name, features);
    }

  };
}(window.open);
