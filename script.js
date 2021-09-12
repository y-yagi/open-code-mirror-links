chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
  if (request == "openLinks") {
    openLinks();
  }
});

function openLinks() {
  const urls = detectURLs(document.querySelectorAll(".CodeMirror-code")[1].innerText);
  urls.forEach(url => window.open(url));
}

function detectURLs(str) {
  var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
  return str.match(urlRegex)
}
