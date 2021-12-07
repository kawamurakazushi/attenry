let color = "#3aa757";

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log("Default background color set to %cgreen", `color: ${color}`);
});

// chrome.action.onClicked.addListener(function () {
//   chrome.tabs.create({ url: "index.html" });
// });
