// chrome operation
//
export const authorize = () => {
  console.log("Authorize");
  chrome.identity.getAuthToken({ interactive: true }, function(token) {
    console.log("set", token);
    chrome.storage.sync.set({ token });
  });
};

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const getUserList = async () => {
  return new Promise<string[]>(async (resolve) => {
    let queryOptions = { active: true, currentWindow: true };
    let [tab] = await chrome.tabs.query(queryOptions);
    if (tab.id) {
      chrome.tabs.sendMessage(
        tab.id,
        { type: "openUserList" },
        async (_response) => {
          if (!tab.id) return;

          await sleep(1000);

          chrome.tabs.sendMessage(
            tab.id,
            { type: "getUserList" },
            (response) => {
              const names: string[] = response.names;

              console.log(names);
              resolve(names);
            }
          );
        }
      );
    }
  });
};

export const getToken = async () => {
  return new Promise<string | null>((resolve) => {
    chrome.storage.sync.get(["token"], (obj) => {
      if ("token" in obj) {
        resolve(obj.token);
      }

      resolve(null);
    });
  });
};
