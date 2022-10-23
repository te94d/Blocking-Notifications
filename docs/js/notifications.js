(function(){
  let supportsNotification = ("Notification" in window);

  const notify = function(){
      const title = "Hi there";
      const body = "通知のテストです。";
      const icon = "assets/notifications.png";
      new Notification(title, { body: body, icon: icon });
  };
  const notification = function() {
      if (!supportsNotification) { // 未サポート
          alert("Notifications API がサポートされていません。")
      }
      else if (Notification.permission === "granted") { // 許可
          notify();
      }
      else if (Notification.permission !== "denied") { // 拒否以外
          Notification.requestPermission(function(permission){ // 再確認
              if (permission === "granted") { // 許可
                  notify();
              }
          });
      }
  }

  document.addEventListener("click", function(e){
      if (e.target.id == "notification") {
          notification();
      }
  });
})();