chrome.runtime.onInstalled.addListener(()=>{
  chrome.contextMenus.create({
    "id": "test",
    "title": "test"
  });
});

chrome.contextMenus.onClicked.addListener(()=>{
  window.alert("Hello world!");
})