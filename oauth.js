window.onload = function () {
  document.querySelector("button").addEventListener("click", function () {
    console.log("button clicked");
    chrome.identity.getAuthToken({ interactive: true }, function (token) {
      chrome.storage.sync.set({ token });
    });
  });
};
