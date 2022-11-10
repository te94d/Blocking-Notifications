Notification = (function(Notification) {
  console.log("point-0")
  function MyNotification(...args) {
    console.log("point-1")
    console.log("title: ", args[0]);
    console.log("body: ", args[1].body);
    console.log("icon: ", args[1].icon);
  };
  console.log("point-2")
  Object.assign(MyNotification, Notification);
  MyNotification.prototype = Notification.prototype;
  return MyNotification;
})(Notification);