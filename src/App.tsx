import * as React from "react";
import { authorize, getUserList } from "./chrome";

export const App = () => {
  return (
    <div>
      <button onClick={authorize}>AUTH</button>
      <button onClick={getUserList}>getText</button>
    </div>
  );
};
