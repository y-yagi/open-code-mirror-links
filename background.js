function onClickHandler(info, tab) {
  chrome.tabs.sendMessage(tab.id, "openLinks");
}

chrome.contextMenus.onClicked.addListener(onClickHandler);
chrome.contextMenus.create({title: "Open Links inside CodeMirror"});
