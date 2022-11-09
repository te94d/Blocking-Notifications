Notification = (function(Notification) {
  function MyNotification(...args) {
      console.log("title: ", args[0]);
      console.log("body: ", args[1].body);
      console.log("icon: ", args[1].icon);
  };

  Object.assign(MyNotification, Notification);
  MyNotification.prototype = Notification.prototype;

  return MyNotification;
})(Notification);
console.log("end");