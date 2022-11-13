(function () {
  let supportsNotification = ("Notification" in window);

  function pushNotification() {
    const notify = new Notification("Hi there", {
      body: "通知のテストです。",
      icon: "assets/notifications.png"
    });

    notify.onclick = (e) => {
      //window.location.href = "https://github.com/"; //ページをリダイレクトさせる
      window.open('https://github.com/', '_blank');   //別タブで開く
    };
  }

  const notification = function () {
    if (!supportsNotification) { // 未サポート
      alert("Notifications API がサポートされていません。")
    }
    else if (Notification.permission === "granted") { // 許可
      pushNotification();
    }
    else if (Notification.permission !== "denied") { // 無視
      Notification.requestPermission(function (permission) { // 再確認
        if (permission === "granted") { // 許可
          pushNotification();
        }
      });
    }
  }

  document.addEventListener("click", function (e) {
    if (e.target.id == "notification") {
      notification(); //サイト内のボタンを押すことで通知を表示
    }
  });
  notification(); //サイトにログインした直後に通知を表示
})();