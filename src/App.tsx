import * as React from "react";
// import { useCallback } from "react";

const authorize = () => {
  console.log("hhhhhhhhhh");
  chrome.identity.getAuthToken({ interactive: true }, function(token) {
    console.log("set", token);
    chrome.storage.sync.set({ token });
  });
};

export const App = () => {
  return (
    <div>
      <button onClick={authorize}>AUTH</button>
    </div>
  );
};
