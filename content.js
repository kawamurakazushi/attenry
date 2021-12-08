chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "openUserList") {
    // TODO: Check whether it's open
    document.querySelector("button[data-tooltip-id=tt-c10]").click();
    sendResponse("OK");
  }

  if (message.type === "getUserList") {
    const items = window.document.querySelectorAll(
      "div[role=list] div[role=listitem]"
    );

    let names = [];

    items.forEach((item) => {
      const name = item.querySelector("span").textContent;
      names.push(name);
    });

    console.log(names);

    sendResponse({ names });
  }
});
