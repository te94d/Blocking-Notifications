(function () {
  let supportsNotification = ("Notification" in window);

  const notify = function () {
    const title = "Hi there";
    const body = "通知のテストです。";
    const icon = "assets/notifications.png";
    new Notification(title, { body: body, icon: icon });
  };
  const notification = function () {
    if (!supportsNotification) { // 未サポート
      alert("Notifications API がサポートされていません。")
    }
    else if (Notification.permission === "granted") { // 許可
      notify();
    }
    else if (Notification.permission !== "denied") { // 無視
      Notification.requestPermission(function (permission) { // 再確認
        if (permission === "granted") { // 許可
          notify();
        }
      });
    }
  }

  /*
  notification.onclick = (event) => {
    event.preventDefault(); // prevent the browser from focusing the Notification's tab
    window.open('https://github.com/te94d', '_blank');
  }
 
  //onclick = (event) => { };
  */

  document.addEventListener("click", function (e) {
    if (e.target.id == "notification") {
      notification(); //サイト内のボタンを押すことで通知を表示
    }
  });
  notification(); //サイトにログインした直後に通知を表示
})();