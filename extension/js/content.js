Notification = (function(Notification) {

  function MyNotification(...args) {
    console.log("title: ", args[0]);
    console.log("body: ", args[1].body);
    console.log("icon: ", args[1].icon);

    return new Notification(...args);

  };

  Object.assign(MyNotification, Notification);
  MyNotification.prototype = Notification.prototype;

  return MyNotification;
})(Notification);

window.open = function (open) {
  return function (url, name, features) {
      // set name if missing here
      //name = name || "default_window_name";
      console.log("window");
      console.log("url: ", url);
      console.log("url: ", name);
      console.log("url: ", features);
      return open.call(window, url, name, features);
  };
}(window.open);
