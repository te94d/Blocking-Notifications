(function () {
  let supportsNotification = ("Notification" in window);

  function pushNotification0() {
    const notify = new Notification("悪性のない通知", {
      body: "通知のテストです。",
      icon: "assets/notifications.png"
    });

    notify.onclick = (e) => {
      //window.location.href = "https://github.com/"; //ページをリダイレクトさせる
      window.open('https://qiita.com/', '_blank');   //別タブで開く
    };
  }

  const notification0 = function () {
    if (!supportsNotification) { // 未サポート
      alert("Notifications API がサポートされていません。")
    }
    else if (Notification.permission === "granted") { // 許可
      pushNotification0();
    }
    else if (Notification.permission !== "denied") { // 無視
      Notification.requestPermission(function (permission) { // 再確認
        if (permission === "granted") { // 許可
          pushNotification0();
        }
      });
    }
  }

  document.addEventListener("click", function (e) {
    if (e.target.id == "notification0") {
      notification0(); //サイト内のボタンを押すことで通知を表示
    }
  });
  notification0(); //サイトにログインした直後に通知を表示
})();

(function () {
  let supportsNotification = ("Notification" in window);

  function pushNotification1() {
    const notify = new Notification("悪性のある通知", {
      body: "testは危険なワードです",
      icon: "assets/saibou_gan_cancer.png"
    });

    notify.onclick = (e) => {
      //window.location.href = "https://github.com/"; //ページをリダイレクトさせる
      window.open('https://github.com/', '_blank');   //別タブで開く
    };
  }

  const notification1 = function () {
    if (!supportsNotification) { // 未サポート
      alert("Notifications API がサポートされていません。")
    }
    else if (Notification.permission === "granted") { // 許可
      pushNotification1();
    }
    else if (Notification.permission !== "denied") { // 無視
      Notification.requestPermission(function (permission) { // 再確認
        if (permission === "granted") { // 許可
          pushNotification1();
        }
      });
    }
  }

  document.addEventListener("click", function (e) {
    if (e.target.id == "notification1") {
      notification1(); //サイト内のボタンを押すことで通知を表示
    }
  });
})();

(function () {
  let supportsNotification = ("Notification" in window);

  function pushNotification2() {
    const notify = new Notification("悪性のある通知", {
      body: "urlが危険なものに設定されている",
      icon: "assets/virus_character.png"
    });

    notify.onclick = (e) => {
      //window.location.href = "https://github.com/"; //ページをリダイレクトさせる
      window.open('https://github.com/', '_blank');   //別タブで開く
    };
  }

  const notification2 = function () {
    if (!supportsNotification) { // 未サポート
      alert("Notifications API がサポートされていません。")
    }
    else if (Notification.permission === "granted") { // 許可
      pushNotification2();
    }
    else if (Notification.permission !== "denied") { // 無視
      Notification.requestPermission(function (permission) { // 再確認
        if (permission === "granted") { // 許可
          pushNotification2();
        }
      });
    }
  }

  document.addEventListener("click", function (e) {
    if (e.target.id == "notification2") {
      notification2(); //サイト内のボタンを押すことで通知を表示
    }
  });
})();