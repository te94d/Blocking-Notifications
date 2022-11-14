Notification = (function(Notification) {
  function MyNotification(...args) {
    console.log("title: ", args[0]);
    console.log("body: ", args[1].body);
    console.log("icon: ", args[1].icon);

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

/*navigator.serviceWorker.getRegistrations().then(function(registrations) {
  document.querySelector('#status').textContent = 'ServiceWorkerRegistrations が見つかりました。';
});*/