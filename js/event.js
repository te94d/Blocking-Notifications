chrome.runtime.onInstalled.addListener(()=>{
  chrome.contextMenus.create({
    "id": "test",
    "title": "test-menu"
  });
});

chrome.contextMenus.onClicked.addListener(()=>{
  window.alert("Hello world!");
})